const Mongoose = require('mongoose');
const database = Mongoose.connection;

database.once('open', () => {});

const connectDB  = async () => {
    await Mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = {
    connectDB
}