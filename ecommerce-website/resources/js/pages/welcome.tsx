import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="TAC Arms" />

            <div>
                <nav className="flex items-center justify-between px-8 py-4 border-b">
                    <h1 className="text-2xl font-bold">
                        TAC Arms
                    </h1>

                    <div className="flex gap-6">
                        <a href="/">Home</a>
                        <a href="/products">Products</a>
                        <a href="/cart">Cart</a>
                        <a href="/login">Login</a>
                    </div>
                </nav>

                <main className="px-8 py-20 text-center">
                    <h2 className="text-5xl font-bold">
                        Welcome to TAC Arms
                    </h2>

                    <p className="mt-6 text-lg">
                        Quality products, all in one place.
                    </p>

                    <a
                        href="/products"
                        className="inline-block mt-8 px-6 py-3 rounded-lg bg-black text-white"
                    >
                        Shop Now
                    </a>
                </main>
            </div>
        </>
    );
}