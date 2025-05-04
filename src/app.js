import express from 'express';
import path from 'path';
import indexRouter from './routes/index.js';
const app = express();
const PORT = 3000;
// Set up views and view engine
app.set('views', path.join(process.cwd(), 'src/views'));
app.set('view engine', 'pug');
// Define routes
app.use('/', indexRouter);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});