import cors from 'cors';
import express from 'express';

const app = express();
const PORT = 6000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/test', (req, res)=>{
  res.json({message: "Server is working."});
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;