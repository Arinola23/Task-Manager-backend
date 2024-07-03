const express = require('express');
const router = express.Router()
const {getAlltask,createTask, deleteTask,updateTask,getOneTask} = require('../controllers/taskControllers');

router.route('/').get(getAlltask).post(createTask)
router.route('/:id').get(getOneTask).patch(updateTask).delete(deleteTask)
// router.get('/',getAlltask)
// router.post('/',createTask)
// router.get('/:id',getOneTask)
// router.patch('/:id',updateTask)
// router.get('/:id',deleteTask)


module.exports = router