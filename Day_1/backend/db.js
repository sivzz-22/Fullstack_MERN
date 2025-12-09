const mongoose = require('mongoose')

const uri = 'mongodb+srv://sivafullstack:siva2239@cluster0.j4mtaw4.mongodb.net/'
mongoose.connect(uri)
const connection = mongoose.connection

connection.once('open', () => {
console.log("MongoDB connected successfully!");
});