import { Schema as _Schema } from 'mongoose';
var Schema = _Schema;
const Entry = new Schema({
  for: {
    type: String,
    max: 200,
    required: true,
    trim: true
  },
  entryPassword: {
    type: String,
    required: true,
    trim: true
  }
});

export default Entry;
