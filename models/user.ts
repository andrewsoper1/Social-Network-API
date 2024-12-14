import { Schema, Types, model, type Document} from 'mongoose';

interface IUser extends Document {
    username: string,
    email: string,
    thoughts: Types.ObjectId[],
    friends: Types.ObjectId[]
}

const UserSchema = new Schema<IUser>({
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
});

const User = model('User', UserSchema);

export default User