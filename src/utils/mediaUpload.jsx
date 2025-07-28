import { createClient } from "@supabase/supabase-js"

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(url, key); // Connect Supabase

export default function mediaUpload(file) {
    return new Promise((resolve, reject) => {
        if (!file) {
            reject("No file selected");
            return;
        }

        const timestamp = new Date().getTime();
        const newName = timestamp + file.name;

        supabase.storage.from("images").upload(newName, file, {
            upsert: false,
            cacheControl: "3600"
        }).then(() => {
            const publicUrl = supabase.storage.from("images").getPublicUrl(newName).data.publicUrl;
            resolve(publicUrl);
        }).catch(() => {
            reject("Error occurred in Supabase connection");
        });
    });
}
