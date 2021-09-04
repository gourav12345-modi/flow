require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const taskRouter = require('./router/task');
const commentRouter = require('./router/comment');
const userRouter = require('./router/user');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const DBURL = 'mongodb://localhost:27017/flow';
const PORT = process.env.PORT || 1300;

// simulate delay
// app.use((req, res, next) => {
//   setTimeout(() => next(), 10000);
// });
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3001',
}));
app.use(express.json());
app.use(helmet());

app.use(morgan('combined'));
app.use('/uploads', express.static('uploads'));

mongoose.connect(DBURL, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const { connection } = mongoose;

connection.once('open', () => {
  console.log('connected to database');
}).catch((err) => {
  console.log(err);
});

app.get('/', (req, res) => {
  res.json({ message: 'ok' });
});

app.use('/api/task', taskRouter);
app.use('/api/comment', commentRouter);
app.use('/api/user', userRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`listing on http://localhost:${PORT}`);
});
