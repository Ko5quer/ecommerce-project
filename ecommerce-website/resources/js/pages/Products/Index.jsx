export default function Index({ products }) {
    return (
        <div>
            <h1>Products</h1>

            <div className="products">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>

                        <img
                            src={product.image}
                            alt={product.product_name}
                        />

                        <div>
                            <h2>{product.product_name}</h2>

                            <p>{product.category?.category_name}</p>

                            <strong>R{product.product_price}</strong>

                            <button>Add to Cart</button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}