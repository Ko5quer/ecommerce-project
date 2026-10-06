export default function Show({ product }) {
    return (
        <div className="product-page">

            <div className="product-image">
                {product.image ? (
                    <img
                        src={product.image}
                        alt={product.product_name}
                    />
                ) : (
                    <div>No Image</div>
                )}
            </div>

            <div className="product-details">

                <p className="category">
                    {product.category?.category_name}
                </p>

                <h1>{product.product_name}</h1>

                <p className="description">
                    {product.description}
                </p>

                <h2>
                    R{product.product_price}
                </h2>

                <p>
                    {product.current_stock > 0
                        ? `${product.current_stock} available`
                        : "Out of stock"}
                </p>

                <div className="quantity">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                </div>

                <button
                    disabled={product.current_stock === 0}
                >
                    Add to Cart
                </button>

            </div>

        </div>
    );
}
