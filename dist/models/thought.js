import { Schema, Types, model } from 'mongoose';
import { format } from 'date-fns';
;
const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Schema.Types.Date,
        default: Date.now,
        get: (timestamp) => format(timestamp, 'yyyy-MM-dd HH:mm:ss')
    }
}, {
    toJSON: {
        getters: true
    },
    id: false
});
const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => format(timestamp, 'yyy-MM-dd HH:mm:ss')
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]
}, {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false,
    versionKey: false
});
ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});
const Thought = model('Thought', ThoughtSchema);
export default Thought;
