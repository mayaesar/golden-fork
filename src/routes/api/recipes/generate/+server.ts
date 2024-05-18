import { error, json, type RequestHandler } from "@sveltejs/kit";

import { generateRecipe } from "$lib/services/recipes/generate";
import { generateImage } from "$lib/services/recipes/image";
import { supabaseAdmin } from "$lib/services/supabase-admin";

export const POST: RequestHandler = async ({ request }) => {
    const { prompt } = await request.json();

    if (!prompt) {
        throw error(400, "Missing prompt");
    }

    const generatedRecipe = await generateRecipe(prompt);

    if (!generatedRecipe) {
        throw error(500, "Failed to generate recipe");
    }

    const { error: insertError, data } = await supabaseAdmin
        .from("recipes")
        .insert(generatedRecipe)
        .select()
        .single();

    if (insertError) {
        throw error(500, insertError.message);
    }

    const imageUrl = await generateImage(data);

    const { error: updateError, data: recipe } = await supabaseAdmin
        .from("recipes")
        .update({ image_url: imageUrl })
        .eq("id", data.id)
        .select()
        .single();

    if (updateError) {
        throw error(500, updateError.message);
    }

    return json(recipe);
};
