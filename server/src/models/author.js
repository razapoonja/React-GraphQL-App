import mongoose from 'mongoose';

export const Author = mongoose.model('Author', {
    name: String,
    age: Number
});