const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const { applyMiddleware, pathErrorHandler, globalErrorHandler } = require('./src/middlewares');
const tasksRoute = require('./src/routes/task');
const healthRoute = require('./src/routes/health');
const dbConnect = require('./src/database/database');
// apply all additional middlewares
applyMiddleware(app);

// Use Tasks Route
app.use(healthRoute);
app.use(tasksRoute);



// Error Handler Middlewares
app.use(pathErrorHandler);
app.use(globalErrorHandler);

const main = async () => {
    await dbConnect();
    app.listen(port, () => {
        console.log('Server Running.');
    })
}
main();
