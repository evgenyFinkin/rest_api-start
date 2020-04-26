require('dotenv').config()
const mongoose = require('mongoose');

const connectToMongo = async () => {
    try {
        await mongoose.connect(
            process.env.MONGO_URL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false
            });
        console.log('Connected to mongodb atlas');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};


module.exports = connectToMongo();