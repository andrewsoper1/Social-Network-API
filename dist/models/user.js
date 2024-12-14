import { Schema, model } from 'mongoose';
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address']
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
}, {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false,
    versionKey: false
});
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});
const User = model('User', UserSchema);
export default User;
