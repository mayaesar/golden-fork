import { openai } from "$lib/services/openai";

type GeneratedRecipe = {
    title: string
    description: string
    preparation_time_min: number
    cooking_time_min: number
    servings: number
    instructions: Array<{
        step: number
        text: string
    }>
    ingredients: Array<{
        name: string
        quantity: number
        unit: string
    }>
    nutrition: {
        calories: number
        protein: number
        fat: number
        carbohydrates: number
    },
    tags: string[]
}

export const generateRecipe = async (prompt: string) => {
    const thread = await openai.beta.threads.create();

    await openai.beta.threads.messages.create(
        thread.id,
        {
            role: "user",
            content: prompt,
        },
    );

    let run = await openai.beta.threads.runs.createAndPoll(thread.id, {
        assistant_id: "asst_MY6YiONSfdDaOnfqxjqC9NuM",
    });

    while (run.status !== "completed") {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        run = await openai.beta.threads.runs.retrieve(thread.id, run.id);

        if (!["in_progress", "queued", "completed"].includes(run.status)) {
            throw new Error(`Run failed with status: ${run.status}`);
        }
    }

    const messages = await openai.beta.threads.messages.list(run.thread_id);
    const content = messages.data[0].content[0];

    if (content.type === "text") {
        const output = JSON.parse(content.text.value) as GeneratedRecipe;

        return {
            title: output.title,
            description: output.description,
            preparation_time_min: output.preparation_time_min,
            cooking_time_min: output.cooking_time_min,
            servings: output.servings,
            instructions: output.instructions.map((instruction) => instruction.text),
            ingredients: output.ingredients,
            nutrition: output.nutrition,
            tags: output.tags.map((tag) => tag.toLowerCase()),
        };
    }

    return null;
};
