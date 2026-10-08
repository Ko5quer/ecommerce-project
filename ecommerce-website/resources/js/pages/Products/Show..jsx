import { Link } from '@inertiajs/react';

export default function Show({ product }) {
    return (
        <div>
            <Link href="/products">
                ← Back to Products
            </Link>

            <div>
                <img
                    src={`/storage/${product.image}`}
                    alt={product.product_name}
                    width="400"
                />

                <h1>{product.product_name}</h1>

                <p>{product.description}</p>

                <p>
                    Category: {product.category?.name}
                </p>

                <h2>
                    R{product.product_price}
                </h2>

                <p>
                    Stock: {product.current_stock}
                </p>

                <Link href={`/products/${product.id}/edit`}>
                    Edit Product
                </Link>
            </div>
        </div>
    );
}
