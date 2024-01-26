import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dxkwlww11",
  api_key: "853839988117747",
  api_secret: "Tli-SQL46xTPpns-MSHD_dFytmc",
});

export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "mis_imagenes",
  });
};

export const deleteImage = async (id) => {
  return await cloudinary.uploader.destroy(id);
};
