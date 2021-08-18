import express from "express";
import './db';
import taskRoutes from './routes/task.routes';
import authRoutes from './routes/auth.routes';
import cors from "cors";
import schedule from 'node-schedule'
import Task from "./models/Task";
const app = express();
app.use(cors());
app.use(express.json());
app.use('/tasks',taskRoutes);
app.use('/auth',authRoutes);
app.set("port", 3001);

app.listen(app.get("port"));

console.log("Servidor Encendido, en el puerto:", app.get("port"));

const job = schedule.scheduleJob('59 * * * * *',async ()=>{
    await Task.updateMany({},{$set:{done:false}});
    console.log("work")
})