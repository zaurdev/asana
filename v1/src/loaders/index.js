const { connectDB } = require('../loaders/db');

module.exports = () => {
    connectDB();
}