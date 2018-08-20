import mongoose from 'mongoose';

var studentSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    address: {
      type: String
    }
  });
  
  export default mongoose.model('Student', studentSchema);