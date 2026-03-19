import { Request, Response } from "express";
import { cloudinaryUpload } from "../../utils/cloudinary";
import catchAsync from "../../utils/catchAsync";

const uploadImage = catchAsync(async (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "No file uploaded",
    });
  }

  // upload to cloudinary
  const result = await new Promise((resolve, reject) => {
    const uploadStream = cloudinaryUpload.uploader.upload_stream(
      {
        folder: "narua-bazar",
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
    uploadStream.end(req.file!.buffer);
  });

  res.status(200).json({
    success: true,
    message: "Image uploaded successfully",
    data: result,
  });
});

export const uploadController = {
  uploadImage,
};
