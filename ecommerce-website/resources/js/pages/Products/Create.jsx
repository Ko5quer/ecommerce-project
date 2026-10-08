import { Head, Link, useForm } from '@inertiajs/react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        category_id: '',
        product_name: '',
        description: '',
        product_price: '',
        current_stock: 0,
        image: '',
    });

    function submit(e) {
        e.preventDefault();

        post('/products');
    }

    return (
        <>
            <Head title="Create Product - TAC Arms" />

            <div className="min-h-screen">

                {/* Navbar */}
                <nav className="flex items-center justify-between px-8 py-4 border-b">
                    <h1 className="text-2xl font-bold">
                        TAC Arms
                    </h1>

                    <div className="flex gap-6">
                        <Link href="/">
                            Home
                        </Link>

                        <Link href="/products">
                            Products
                        </Link>
                    </div>
                </nav>

                {/* Form */}
                <main className="px-8 py-12 max-w-2xl mx-auto">

                    <h2 className="text-3xl font-bold">
                        Create Product
                    </h2>

                    <form
                        onSubmit={submit}
                        className="mt-8 space-y-6"
                    >

                        {/* Product Name */}
                        <div>
                            <label className="block font-semibold">
                                Product Name
                            </label>

                            <input
                                type="text"
                                value={data.product_name}
                                onChange={(e) =>
                                    setData('product_name', e.target.value)
                                }
                                className="w-full mt-2 border rounded-lg p-3"
                            />

                            {errors.product_name && (
                                <p className="text-red-500 mt-1">
                                    {errors.product_name}
                                </p>
                            )}
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block font-semibold">
                                Category ID
                            </label>

                            <input
                                type="number"
                                value={data.category_id}
                                onChange={(e) =>
                                    setData('category_id', e.target.value)
                                }
                                className="w-full mt-2 border rounded-lg p-3"
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block font-semibold">
                                Description
                            </label>

                            <textarea
                                value={data.description}
                                onChange={(e) =>
                                    setData('description', e.target.value)
                                }
                                className="w-full mt-2 border rounded-lg p-3"
                                rows="5"
                            />

                            {errors.description && (
                                <p className="text-red-500 mt-1">
                                    {errors.description}
                                </p>
                            )}
                        </div>

                        {/* Price */}
                        <div>
                            <label className="block font-semibold">
                                Price
                            </label>

                            <input
                                type="number"
                                step="0.01"
                                value={data.product_price}
                                onChange={(e) =>
                                    setData('product_price', e.target.value)
                                }
                                className="w-full mt-2 border rounded-lg p-3"
                            />
                        </div>

                        {/* Stock */}
                        <div>
                            <label className="block font-semibold">
                                Stock
                            </label>

                            <input
                                type="number"
                                value={data.current_stock}
                                onChange={(e) =>
                                    setData('current_stock', e.target.value)
                                }
                                className="w-full mt-2 border rounded-lg p-3"
                            />
                        </div>

                        {/* Image */}
                        <div>
                            <label className="block font-semibold">
                                Image
                            </label>

                            <input
                                type="text"
                                value={data.image}
                                onChange={(e) =>
                                    setData('image', e.target.value)
                                }
                                className="w-full mt-2 border rounded-lg p-3"
                                placeholder="products/example.jpg"
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4">

                            <button
                                type="submit"
                                disabled={processing}
                                className="px-6 py-3 bg-black text-white rounded-lg"
                            >
                                {processing
                                    ? 'Creating...'
                                    : 'Create Product'}
                            </button>

                            <Link
                                href="/products"
                                className="px-6 py-3 border rounded-lg"
                            >
                                Cancel
                            </Link>

                        </div>

                    </form>
                </main>
            </div>
        </>
    );
}