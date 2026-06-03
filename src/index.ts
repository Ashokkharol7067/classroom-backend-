import express from "express";
import subjectsRouter from "./routes/subjects.js";
import cors from 'cors'

const app = express();
const PORT = 8000;

app.use(cors({
	origin: process.env.FRONREND_URL,
	methods: ['GET', 'POST', 'PUT', 'DELETE'],
	credentials: true
}))

app.use(express.json());

app.use('/api/subjects', subjectsRouter)


app.get("/", (req, res) => {
	res.json({ message: "Classroom backend is running" });
});

app.listen(PORT, () => {
	console.log(`Server listening at http://localhost:${PORT}/`);
});
