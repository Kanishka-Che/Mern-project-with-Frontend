//meadia uplode function

import { createClient } from "@supabase/supabase-js"


    const url="https://acqkjhucvmtoppzmtnns.supabase.co"
    const key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjcWtqaHVjdm10b3Bwem10bm5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY5Mzg1OTksImV4cCI6MjA2MjUxNDU5OX0.cI1PurCfwyjef0X4wDsvWVyCkCuMTQtz73oAEMo7EoQ"

    const supabase = createClient(url,key)//connect superbase

export default function mediaUpload(file){

    const mediaUploadPromise = new Promise(
        (resolve,reject)=>{

                if(file==null){
                    reject("No file selected")
                    return
                }
                const timestamp = new Date().getTime()//uniq value genarate depending on time
                const newName = timestamp+file.name

                  supabase.storage.from("images").upload(newName ,file, {
                upsert:false,
                cacheControl:"3600"
                }).then(()=>{
                    const publicUrl=supabase.storage.from("image").getPublicUrl(newName).data.publicUrl//supabase eke image bucket eke imageURL eka
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