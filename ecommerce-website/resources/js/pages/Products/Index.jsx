import { Link } from '@inertiajs/react';
import './Index.css';

export default function Index({ categories }) {
    return (
        <div className="products-page">
            <h1>Products</h1>

            {categories.map((category) => (
                <section key={category.id} className="category-section">

                    <h2>{category.name}</h2>

                    <div className="products">
                        {category.products.map((product) => (
                            <Link
                                href={`/products/${product.id}`}
                                className="product-card"
                                key={product.id}
                            >
                                <img
                                    src={`/storage/${product.image}`}
                                    alt={product.product_name}
                                />

                                <div className="product-info">
                                    <h3>{product.product_name}</h3>

                                    <strong>
                                        R{product.product_price}
                                    </strong>

                                    <button>Add to Cart</button>
                                </div>
                            </Link>
                        ))}
                    </div>

                </section>
            ))}
        </div>
    );
}
