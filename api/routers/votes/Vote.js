const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
    topicId: { type: String },
    candidateName: { type: String },
    login: { type: String }
}, {
    collection: 'Votes'
});

module.exports = mongoose.model('Vote', voteSchema);
