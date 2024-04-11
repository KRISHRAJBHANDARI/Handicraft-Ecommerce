import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "./../../components/layout/layout.js";
import "../../styles/ProductDetailsStyles.css";
import { useCart } from "../../context/cart.js";
import toast from "react-hot-toast";
import ReactPlayer from "react-player";

//video
const ProductDetails = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [selectedCustomization, setSelectedCustomization] = useState("");
    const [cart, setCart] = useCart();

    // Inital details
    useEffect(() => {
        if (params?.slug) getProduct();
    }, [params?.slug]);

    // Get product details
    const getProduct = async () => {
        try {
            const { data } = await axios.get(
                `/api/v1/product/get-product/${params.slug}`
            );
            setProduct(data?.product);
            console.log(data?.product);
            getSimilarProduct(data?.product._id, data?.product.category._id);
        } catch (error) {
            console.log(error);
        }
    };

    // Get similar products
    const getSimilarProduct = async (pid, cid) => {
        try {
            const { data } = await axios.get(
                `/api/v1/product/related-product/${pid}/${cid}`
            );
            setRelatedProducts(data?.products);
        } catch (error) {
            console.log(error);
        }
    };

    // "Add to Cart" click handler
    const handleAddToCart = () => {
        // Add the selected product to the cart with customization
        const productToAdd = { ...product, customization: selectedCustomization };
        setCart((prevCart) => [...prevCart, productToAdd]);

        // Update localStorage
        localStorage.setItem("cart", JSON.stringify([...cart, productToAdd]));

        // Show a success toast
        toast.success("Item Added to cart");
    };

    return (
        <Layout>
            <div className="row container mt-2">
                <div className="col-md-6">
                    {/* Display Image */}
                    {product && (
                        <>
                            <img
                                src={`/api/v1/product/product-photo/${product._id}`}
                                className="card-img-top"
                                alt={product.name}
                                height="492.469px"
                                width={"490px"}
                            />
                            {/* Display Video if available */}
                            {/* Display Video if available */}

                            <div className="video-container">
                                <ProductVideo
                                    videoUrl={`/api/v1/product/product-video/${product._id}`}
                                />
                            </div>
                        </>
                    )}
                </div>
                <div className="col-md-6 ">
                    <h1 className="text-center">Product Details</h1>
                    <h6>Name : {product.name}</h6>
                    <h6>Description : {product.description}</h6>
                    <h6>
                        Price :
                        {product?.price?.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                        })}
                    </h6>
                    <h6>Category : {product?.category?.name}</h6>
                    <div className="mb-3">
                        <label htmlFor="customizationDropdown" className="form-label">
                            Customization:
                        </label>
                        <select
                            className="form-select"
                            id="customizationDropdown"
                            value={selectedCustomization}
                            onChange={(e) => setSelectedCustomization(e.target.value)}
                        >
                            <option value="">Select Types Of Woods</option>
                            <option value="Fir">Fir</option>
                            <option value="Cedar">Cedar</option>
                            <option value="Pine">Pine</option>
                        </select>
                    </div>
                    <button className="btn btn-secondary ms-1" onClick={handleAddToCart}>
                        ADD TO CART
                    </button>
                </div>
            </div>
            <hr />
            <div className="row container">
                <h6>Similar Products</h6>
                {relatedProducts.length < 1 && (
                    <p className="text-center">No Similar Products found</p>
                )}
                <div className="d-flex flex-wrap">
                    {relatedProducts?.map((p) => (
                        <div className="card m-2" style={{ width: "18rem" }}>
                            <img
                                src={`/api/v1/product/product-photo/${p?._id}`}
                                className="card-img-top"
                                alt={p.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{p.name}</h5>
                                <p className="card-text">{p.description.substring(0, 30)}...</p>
                                <p className="card-text"> $ {p.price}</p>
                                <button
                                    className="btn btn-primary ms-1"
                                    onClick={() => navigate(`/product/${p.slug}`)}
                                >
                                    More Details
                                </button>
                                <button
                                    className="btn btn-secondary ms-1"
                                    onClick={handleAddToCart}
                                >
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

const ProductVideo = ({ videoUrl }) => {
    return (
        <div className="video-container p-4 text-center ">
            <ReactPlayer url={videoUrl} controls={true} className="card-img-top" />
        </div>
    );
};

export default ProductDetails;
