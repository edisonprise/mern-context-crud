import dotenv from "dotenv";
dotenv.config();

export const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://edisonprise:ifnNR8ViTaMWNKqq@crud.b5ymota.mongodb.net/admin";
export const PORT = process.env.PORT || 3000;
