import mongoose from "mongoose";

const phoneSchema = mongoose.Schema({
    phone_number:{
        type:String,
        required: true
    }
});
export default mongoose.model("phone_number", phoneSchema);