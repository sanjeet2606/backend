import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
    cloud_name:"daxbgptpg",
    api_key:839987399135296,
    api_secret:"Q3viWbsUQVYw5v4FmTjM2VdPRFc"
});
export default cloudinary;