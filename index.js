const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const { applyMiddleware, pathErrorHandler, globalErrorHandler } = require('./src/middlewares');
const tasksRoute = require('./src/routes/task');
const healthRoute = require('./src/routes/health')
// apply all additional middlewares
applyMiddleware(app);

// Use Tasks Route
app.use(healthRoute);
app.use(tasksRoute);



// Error Handler Middlewares
app.use(pathErrorHandler);
app.use(globalErrorHandler);


app.listen(port, () => {
    console.log('App Running on Port: ', port);
})