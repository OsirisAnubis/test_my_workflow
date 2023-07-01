import express, { Request, Response } from 'express';

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hi');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
