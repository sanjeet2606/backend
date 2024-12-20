import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config({});

const app = express();
// const __dirname = path.resolve();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// app.use((req, res, next) => {
//   const origin = 'https://frontend-eight-pi-98.vercel.app/';
//   if (process.env.allowedOrigins.includes(origin)) {
//     res.setHeader("Access-Control-Allow-Origin", origin);
//   }
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin,X-Requested-With,Content-Type,Accept"
//   );
//   next();
// });
// middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// const corsOptions = {
//     origin: [
//         // 'http://localhost:5173', // Local development
//         'https://frontend-eight-pi-98.vercel.app' // Deployed frontend
//     ],// specify the frontend's URL
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials: true
// };

// app.use((req, res, next) => {
//   const origin = req.headers.origin;
//   if (process.env.allowedOrigins.includes(origin)) {
//     res.setHeader("Access-Control-Allow-Origin", origin);
//   }
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin,X-Requested-With,Content-Type,Accept"
//   );
//   next();
// });
// const app = express();

// // middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
    origin: 'https://frontend-eight-pi-98.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}

app.use(cors(corsOptions));


const PORT = process.env.PORT || 8000;


// api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);



app.listen(PORT, () => {
    connectDB();
    console.log(`Server running at port ${PORT}`);
})