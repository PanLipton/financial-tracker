const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    source: {
        type: String,
        require: true,
        trim: true
    },
    amount: {
        type: Number,
        require: true,
    },
    date: {
        type: Date,
        require: true,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},
{
    timestamps: true
})

const Expenses = mongoose.model('expenses', expenseSchema);

module.exports = Expenses;