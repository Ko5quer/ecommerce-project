<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array{
        return [
            'product_name' => fake()->words(3, true),
            'description' => fake()->sentence(),
            'product_price' => fake()->randomFloat(2, 50, 2000),
            'current_stock' => fake()->numberBetween(0, 50),
            'image' => fake()->randomElement([
                'products/boot.jpeg',
                'products/laptop.jpeg',
                'products/mogodu.jpeg',
                'products/watch.jpeg',
            ]),
            'category_id' => Category::inRandomOrder()->first()->id,
        ];
    }
}
