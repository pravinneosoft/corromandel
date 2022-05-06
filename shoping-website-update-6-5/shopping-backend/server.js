import mongoose from 'mongoose';
import express from 'express';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
import dotenv from 'dotenv';
import orderRouter from './routes/orderRoutes.js'
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/seed',seedRouter);
app.use('/api/products',productRouter);
app.use('api/users',userRouter);
app.use('/api/orders', orderRouter);



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});






const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
