import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        image: { type: String, required: true },
        species: { type: String, required: true },
        category: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true, unique: true },
        countInStock: { type: Number, required: true, unique: true },
        rating: { type: Number, required: true, unique: true },
        numReviews: { type: Number, required: true, unique: true },
    }, 
    {
        timestamps: true
    }
);

const Product = mongoose.model('Product', productSchema);

export default Product;