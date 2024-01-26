const router = require('express').Router();
const Task = require('../../models/task');

router.get('/tasks', async (req, res, next) => {
    try {
        const result = await Task.find();
        res.send(result);
    } catch (error) {
        next(error);
    }
})

router.get('/tasks/:id', async (req, res, next) => {
    try {
        const taskId = req.params.id;
        const result = await Task.findOne({_id: taskId});
        res.send(result);
    } catch (error) {
        next(error);
    }
})

router.post('/tasks', async (req, res, next) => {
    try {
        const data = new Task(req.body);
        const result = await data.save();
        res.send(result);
    } catch (error) {
        next(error);
    }
})

router.put('/tasks/:id', async (req, res, next) => {
    try {
        const taskId = req.params.id;
        const data = req.body;
        const result = await Task.updateOne({_id: taskId}, {$set: {...data}});
        res.send(result);
    } catch (error) {
        next(error);
    }
})

router.delete('/tasks/:id', async (req, res, next) => {
    try {
        const taskId = req.params.id;
        const result = await Task.deleteOne({_id: taskId});
        res.send(result);
    } catch (error) {
        next(error);
    }
})

module.exports = router;