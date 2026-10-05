<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    /** @use HasFactory<\Database\Factories\ProductFactory> */
    use HasFactory;
    protected $fillable = [
        'category_id',
        'product_name',
        'description',
        'product_price',
        'current_stock',
        'image',
    ];

    public function category(): BelongsTo{
        return $this -> belongsTo(Category::class);
    }
}
