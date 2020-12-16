const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/dnd', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = {
    Classes: require('./Classes')
}