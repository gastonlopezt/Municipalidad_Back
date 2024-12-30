import express from 'express';
import appRouter from './routes/index.js';
import { config } from 'dotenv'
import cors from 'cors'
const app = express();

config();
app.use(express.json());
app.use(cors())
const PORT = process.env.BASE_PORT || 5000


app.use("/api/v1/users", appRouter)
app.listen(PORT, () => {
    console.log(`Server Running on Port: ${PORT}`)
})
