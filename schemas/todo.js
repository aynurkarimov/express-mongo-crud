const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    validate: (v) => typeof v === 'string',
  },
  checked: {
    type: Boolean,
    default: false,
  }
});

module.exports  = mongoose.model('Todo', todoSchema);