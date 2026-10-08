<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Category;
use App\Models\Product;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::with('products')->get();
        return inertia('Products/Index',[
            'categories'=>$categories,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return inertia('Products/Create');

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        //
        $product = Product::create([
            'product_name' => $request->product_name,
            'description' => $request->description,
            'product_price' => $request->product_price,
            'current_stock' => $request->current_stock,
            'category_id' => $request->category_id,
        ]);
        return redirect() -> route('products.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
        $product ->load('category');

        return inertia('Products/Show',[
            'product' => $product,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
        return inertia('Products/Edit',[
            'product' => $product,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        //
         $product->update([
            'product_name' => $request->product_name,
            'description' => $request->description,
            'product_price' => $request->product_price,
            'current_stock' => $request->current_stock,
            'category_id' => $request->category_id,
        ]);
        return redirect() -> route('products.index');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
        $product -> delete();
        return redirect() -> route('products.index');
    }
}
