import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/db';
import './models';
import wholesalerRoutes from './routes/wholesaler.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Sales-Admin Panel API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

sequelize.sync({ alter: true }).then(() => {
  console.log('Database synced');
});


app.use('/wholesalers', wholesalerRoutes);
