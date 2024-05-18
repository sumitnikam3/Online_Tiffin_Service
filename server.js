import express from "express";
import cors from "cors";
import { connectDB } from "./configuration/Database.js";
import foodRouter from "./routes/foodRoute.js";
import adminRouter from "./routes/adminROute.js";
import userRouter from "./routes/userRoute.js";
import dotenv from 'dotenv';
import { loginUser, registerUser } from "./controllers/userContoller.js";

dotenv.config();

//Configuration
const app = express();
const PORT = 7400 || process.env.PORT;
//MW
app.use(express.json());
app.use(cors());

//api endpoints
app.use('/api/user', userRouter);

// app.user("/api/user", userRouter);
//DB connection

connectDB();

//api endpoints
app.use("/api/login/admin", adminRouter);
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));
app.post("/register", registerUser);
app.post("/login", loginUser);



app.get("/", (req, res) => {
    res.send("API STRATED");
});

app.listen(PORT, () => {
    console.log(`Server Stated ${PORT}`);
});

