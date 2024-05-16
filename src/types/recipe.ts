export type Ingredient = {
    name: string;
    quantity: number;
    unit: string;
};

export type Nutrition = {
    calories: number;
    protein: number;
    fat: number;
    carbohydrates: number;
};

export type Recipe = {
    id: string;
    title: string;
    image_url: string;
    categories: string[];
    estimated_time: string;
};

export type RecipeDetails = Recipe & {
    ingredients: Ingredient[];
    instructions: string[];
};
