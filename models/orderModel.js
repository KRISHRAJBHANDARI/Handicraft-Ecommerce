import mongoose from "mongoose";


const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        category: {
            type: mongoose.ObjectId,
            ref: "Category",
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        photo: {
            data: Buffer,
            contentType: String,
        },

        customization: {
            type: String,
            enum: ["Fir", "Cedar", "Pine"],
        },
    },
    { timestamps: true }
);


const orderSchema = new mongoose.Schema(
    {
        products: [
            {
                type: mongoose.ObjectId,
                ref: "Products",
            },
        ],
        payment: {},
        buyer: {
            type: mongoose.ObjectId,
            ref: "users",
        },
        status: {
            type: String,
            default: "Not Process",
            enum: ["Not Process", "Processing", "Shipped", "deliverd", "cancel"],
        },
    },
    { timestamps: true }
);

export default mongoose.model("Order", orderSchema);