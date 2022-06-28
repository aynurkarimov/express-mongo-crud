const todoSchema = require('../schemas/todo');

const getAllTodos = (req, res) => {
  return res.status(200).json({
    msg: 'inside controller todos'
  })
}

const addTodo = async (req, res) => {
  const {name} = req.body;
  const task = await todoSchema.create({ name });
  return res.status(201).json({ task });
}

module.exports = {
  getAllTodos,
  addTodo
}