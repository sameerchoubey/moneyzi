import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://sameerchoubey:GwOXx8qb2NYUGTHP@cluster0.gcamc.mongodb.net/moneyzi");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        require: true,
        minLength: 6
    },
    firstName: {
        type: String,
        require: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        require: true,
        trim: true,
        maxLength: 50
    }
});

const User = mongoose.model("User", userSchema);

// export default User;
module.exports = {
    User
}