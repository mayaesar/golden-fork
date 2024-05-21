import { json, type RequestHandler } from "@sveltejs/kit";

import { supabaseAdmin } from "$lib/services/supabase-admin";

export const DELETE: RequestHandler = async ({ params }) => {
    const recipeId = params.id as string;

    await supabaseAdmin
        .from("recipes")
        .delete()
        .eq("id", recipeId);

    await supabaseAdmin
        .storage
        .from("recipes")
        .remove([`${recipeId}/output.jpg`]);

    return json({ message: "Success" });
};
