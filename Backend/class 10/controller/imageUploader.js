import { cloudinaryUploader } from "../config/cloudinaryConfig.js"
import fs from "fs"

export const imageUpload = async (request, response) => {
    try {
        console.log("request", request.file)
        // Upload an image
        const uploadResult = await cloudinaryUploader.upload(request.file.path)
        console.log("uploadResult", uploadResult)
        fs.unlinkSync(request.file.path)
        response.json({
            data:
            {
                url: uploadResult.secure_url,
                name: uploadResult.original_filename,
            }
            ,
            status: true,
            message: "Image upload successfully!"
        })
    } catch (error) {
        response.json({
            data:
                []
            ,
            status: false,
            message: error.message
        })
    }


}