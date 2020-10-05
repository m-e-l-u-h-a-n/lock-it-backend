import { Schema as _Schema, model } from 'mongoose';
var Schema = _Schema;
import passportLocalMongoose from 'passport-local-mongoose';
import EntrySchema from './schemas/entry.js';
var User = new Schema({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  uid: {
    type: String,
    unique: true,
    immutable: true,
    required: true,
  },
  entries: [EntrySchema]
},{timestamps: true});

export default model('User', User);