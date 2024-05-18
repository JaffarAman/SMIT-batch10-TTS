import { cloudinaryUploader } from "../config/cloudinaryConfig.js"
import fs from "fs"

export const imageUpload = async (request, response) => {
    try {
        console.log("request", request.file)

        // Upload an image
        const uploadResult = await cloudinaryUploader.upload(request.file.path,
            //      {
            //     transformation: [
            //         { width: 300, height: 300, crop: "crop" }, // Crop to a square shape
            //         { radius: "max" }, // Apply maximum border radius (50%)
            //         // Other transformations...
            //     ],
            //     // Other upload options...
            // }
        )
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