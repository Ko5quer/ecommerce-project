<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CategoryFactory extends Factory
{
    public function definition(): array{
            return [
                'name' => fake()->unique()->randomElement([
                    'Electronics',
                    'Computers',
                    'Accessories',
                    'Gaming',
                    'Clothing',
                    'Books',
                    'Home & Office',
                    'Mobile Devices',
                    'Audio',
                    'Software',
                ]),
            ];
        }
}