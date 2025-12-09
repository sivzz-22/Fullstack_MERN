const mongoose = require('mongoose')

const uri = 'mongodb+srv://sujith:9345793342S@cluster0.dquerwy.mongodb.net/'
mongoose.connect(uri)
const connection = mongoose.connection

connection.once('open', () => {
console.log("MongoDB connected successfully!");
});