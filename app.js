const express = require('express');
const appRouter = require('./routes/index');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/games', appRouter)

const errorHandler = (error, req, res, next) => {
  res.status(400).json({
    error: {
      status: error.status,
      message: error.message || 'Internal Server Error.',
    },
  })
};
app.use(errorHandler);

app.listen(3001, function () {
  console.log('Buscaminas app listening on port 3001!');
});
module.exports = app