import mongoose from "mongoose";
const Products = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    desc: {
        type: String,
        require: true
    }
})
export default mongoose.model("Product", Products)