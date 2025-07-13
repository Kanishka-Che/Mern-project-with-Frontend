//meadia uplode function

import { createClient } from "@supabase/supabase-js"


    const url="URL"
    const key="KEY"

    const supabase = createClient(url,key)//connect superbase

export default function mediaUpload(file){

    const mediaUploadPromise = new Promise(
        (resolve,reject)=>{

                if(file==null){
                    reject("No file selected")
                    return
                }
                const timestamp = new Date().getTime()//uniq value genarate depending on time
                const newName = timestamp + file.name;

                  supabase.storage.from("images").upload(newName ,file, {
                upsert:false,
                cacheControl:"3600"
                }).then(()=>{
                    const publicUrl=supabase.storage.from("images").getPublicUrl(newName).data.publicUrl//supabase eke image bucket eke imageURL eka
                    resolve(publicUrl)

                }).catch(
                    (e)=>{
                        reject("Error occured in supabase connection")
                    }
                )

        }
    )

    return mediaUploadPromise



}