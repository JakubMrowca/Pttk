import express from 'express';
import { addUser, getUsers } from './src/controllers/usersControllers';
import 'reflect-metadata';
import db from './src/db/index'; // Import the Sequelize type

const app = express();
const port = 3000;

app.use(express.json());

db.sequelize.sync().then(() => {
  console.log('Database connected and models synced.');
  // Start your server here
});


app.get('/user', getUsers);
app.post('/user', addUser);
// Define a GET route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});