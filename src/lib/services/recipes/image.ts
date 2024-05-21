import Jimp from "jimp";

import { openai } from "$lib/services/openai";
import { supabaseAdmin } from "$lib/services/supabase-admin";
import type { Tables } from "$types/supabase";

const compressImage = async (buffer: ArrayBuffer) => {
    const image = await Jimp.read(Buffer.from(buffer));
    image.quality(50);

    return image.getBufferAsync(Jimp.MIME_JPEG);
};

export const generateImage = async (recipe: Tables<"recipes">) => {
    const prompt = `${recipe.description}. Captured with lens MM 30 mm.`;

    const response = await openai.images.generate({
        model: "dall-e-3",
        prompt,
        n: 1,
        size: "1024x1024",
        response_format: "url",
    });

    const image = response.data[0];

    const res = await fetch(image.url as string);
    const buffer = await res.arrayBuffer();

    const compressedBuffer = await compressImage(buffer);

    await supabaseAdmin
        .storage
        .from("recipes")
        .upload(`${recipe.id}/output.jpg`, compressedBuffer, { contentType: "image/jpeg" });

    const { data } = supabaseAdmin
        .storage
        .from("recipes")
        .getPublicUrl(`${recipe.id}/output.jpg`);

    return data.publicUrl;
};
