import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fdefault-user&psig=AOvVaw0gmXalFth1qBgv0Bwl4GLz&ust=1705315168050000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNCYqJzY3IMDFQAAAAAdAAAAABAD"
    }
}, { timestamps: true })

const User = mongoose.model("User", userSchema)

export default User