const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    selected_plan: {
        type: String,
        enum: ['basic', 'standard', 'premium'],
        required: true
    }
});

const Plan = mongoose.model('Plan', planSchema);

module.exports = Plan;
