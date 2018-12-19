const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
let UserSchema = new Schema({
    email: {type: String, lowercase: true, unique: true, required: [true, 'can not be blank'], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true },
    username: {type: String, lowercase: true, unique: true, required: [true, 'can not be blank'], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
    bio: String,
    image: String,
    following: [{type: ObjectId, ref: 'User'}],
    favorited: [{type: ObjectId, ref: 'Article'}],
    hash: String,
}, {timestamps: true})