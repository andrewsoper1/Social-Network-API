import { Schema, Types, model, type Document} from 'mongoose';
import { format } from 'date-fns';

interface IReaction {
    reactionId: Types.ObjectId,
    reactionBody: string,
    username: string,
    createdAt: Date | string
}

interface IThought extends Document {
    thoughtText: string,
    createdAt: Date | string,
    username: string,
    reactions: Types.ObjectId[]
    reactionCount: number
};


const reactionSchema= new Schema<IReaction>({
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
        get: (timestamp: Date) => format(timestamp, 'yyyy-MM-dd HH:mm:ss')
    }
}, {
    toJSON: {
        getters: true
    },
    id: false
});

const ThoughtSchema = new Schema<IThought>({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp: Date) => format(timestamp, 'yyy-MM-dd HH:mm:ss')
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
    id: false
});

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});




const Thought = model('Thought', ThoughtSchema);


export default Thought