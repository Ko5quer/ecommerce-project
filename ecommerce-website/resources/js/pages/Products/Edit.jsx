import { useForm } from '@inertiajs/react';

export default function Edit({ product }) {
    const { data, setData, put, processing, errors } = useForm({
        product_name: product.product_name,
        description: product.description,
        product_price: product.product_price,
        current_stock: product.current_stock,
        category_id: product.category_id,
    });

    function submit(e) {
        e.preventDefault();

        put(`/products/${product.id}`);
    }

    return (
        <div>
            <h1>Edit Product</h1>

            <form onSubmit={submit}>
                <div>
                    <label>Product Name</label>

                    <input
                        type="text"
                        value={data.product_name}
                        onChange={e =>
                            setData('product_name', e.target.value)
                        }
                    />

                    {errors.product_name && (
                        <p>{errors.product_name}</p>
                    )}
                </div>

                <div>
                    <label>Description</label>

                    <textarea
                        value={data.description}
                        onChange={e =>
                            setData('description', e.target.value)
                        }
                    />
                </div>

                <div>
                    <label>Price</label>

                    <input
                        type="number"
                        step="0.01"
                        value={data.product_price}
                        onChange={e =>
                            setData('product_price', e.target.value)
                        }
                    />
                </div>

                <div>
                    <label>Stock</label>

                    <input
                        type="number"
                        value={data.current_stock}
                        onChange={e =>
                            setData('current_stock', e.target.value)
                        }
                    />
                </div>

                <button type="submit" disabled={processing}>
                    Update Product
                </button>
            </form>
        </div>
    );
}
