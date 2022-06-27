const getAllTodos = (req, res) => {
  return res.status(200).json({
    msg: 'inside controller todos'
  })
}

module.exports = {
  getAllTodos
}