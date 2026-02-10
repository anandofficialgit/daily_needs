import beautyProduct1 from "@/assets/beauty-product-1.jpg";
import beautyProduct2 from "@/assets/beauty-product-2.jpg";
import beautyProduct3 from "@/assets/beauty-product-3.jpg";
import beautyProduct4 from "@/assets/beauty-product-4.jpg";
import beautyProduct5 from "@/assets/beauty-product-5.jpg";
import beautyProduct6 from "@/assets/beauty-product-6.jpg";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: string;
  platform: "amazon" | "flipkart";
}

export const amazonBeautyProducts: Product[] = [
  {
    id: "a1",
    name: "Luxury Gold Serum",
    description: "24K Gold anti-aging face serum with hyaluronic acid",
    price: 1299,
    originalPrice: 2499,
    rating: 4.5,
    reviewCount: 12430,
    image: beautyProduct1,
    badge: "#1 Best Seller",
    platform: "amazon",
  },
  {
    id: "a2",
    name: "Velvet Matte Lipstick",
    description: "Long-lasting rose gold matte lipstick, 12hr wear",
    price: 599,
    originalPrice: 999,
    rating: 4.3,
    reviewCount: 8920,
    image: beautyProduct2,
    badge: "Best Seller",
    platform: "amazon",
  },
  {
    id: "a3",
    name: "Hydra Glow Moisturizer",
    description: "Deep hydration cream with vitamin E & shea butter",
    price: 849,
    originalPrice: 1499,
    rating: 4.6,
    reviewCount: 15200,
    image: beautyProduct3,
    badge: "Best Seller",
    platform: "amazon",
  },
  {
    id: "a4",
    name: "Éclat Eau de Parfum",
    description: "Premium floral fragrance, 100ml luxury bottle",
    price: 2199,
    originalPrice: 3999,
    rating: 4.7,
    reviewCount: 6340,
    image: beautyProduct4,
    platform: "amazon",
  },
  {
    id: "a5",
    name: "Silk Repair Shampoo",
    description: "Keratin-infused shampoo for damaged & dry hair",
    price: 449,
    originalPrice: 799,
    rating: 4.4,
    reviewCount: 22100,
    image: beautyProduct5,
    badge: "Best Seller",
    platform: "amazon",
  },
  {
    id: "a6",
    name: "Rose Shimmer Palette",
    description: "9-shade eyeshadow palette with matte & shimmer",
    price: 1099,
    originalPrice: 1999,
    rating: 4.5,
    reviewCount: 9870,
    image: beautyProduct6,
    platform: "amazon",
  },
  {
    id: "a7",
    name: "Vita-C Bright Serum",
    description: "Vitamin C brightening serum with niacinamide",
    price: 699,
    originalPrice: 1299,
    rating: 4.2,
    reviewCount: 11500,
    image: beautyProduct1,
    platform: "amazon",
  },
  {
    id: "a8",
    name: "Berry Blush Tint",
    description: "Natural berry lip & cheek tint, buildable color",
    price: 399,
    originalPrice: 699,
    rating: 4.1,
    reviewCount: 7650,
    image: beautyProduct2,
    platform: "amazon",
  },
];

export const flipkartBeautyProducts: Product[] = [
  {
    id: "f1",
    name: "Radiance Night Cream",
    description: "Overnight repair cream with retinol & peptides",
    price: 999,
    originalPrice: 1899,
    rating: 4.4,
    reviewCount: 18700,
    image: beautyProduct3,
    badge: "#1 Best Seller",
    platform: "flipkart",
  },
  {
    id: "f2",
    name: "Oud Mystique Perfume",
    description: "Arabian oud-inspired unisex fragrance, 50ml",
    price: 1799,
    originalPrice: 2999,
    rating: 4.6,
    reviewCount: 5430,
    image: beautyProduct4,
    badge: "Best Seller",
    platform: "flipkart",
  },
  {
    id: "f3",
    name: "Argan Oil Shampoo",
    description: "Sulfate-free argan oil shampoo for smooth hair",
    price: 549,
    originalPrice: 899,
    rating: 4.3,
    reviewCount: 25600,
    image: beautyProduct5,
    badge: "Best Seller",
    platform: "flipkart",
  },
  {
    id: "f4",
    name: "Sunset Glow Palette",
    description: "12-shade warm-toned eyeshadow palette",
    price: 1299,
    originalPrice: 2199,
    rating: 4.5,
    reviewCount: 8200,
    image: beautyProduct6,
    platform: "flipkart",
  },
  {
    id: "f5",
    name: "Collagen Boost Drops",
    description: "Marine collagen face drops for firm, youthful skin",
    price: 1499,
    originalPrice: 2799,
    rating: 4.7,
    reviewCount: 4300,
    image: beautyProduct1,
    badge: "Best Seller",
    platform: "flipkart",
  },
  {
    id: "f6",
    name: "Coral Kiss Lipstick",
    description: "Creamy satin finish lipstick in coral shade",
    price: 499,
    originalPrice: 899,
    rating: 4.2,
    reviewCount: 13400,
    image: beautyProduct2,
    platform: "flipkart",
  },
  {
    id: "f7",
    name: "Aloe Hydra Gel",
    description: "100% pure aloe vera soothing gel moisturizer",
    price: 349,
    originalPrice: 599,
    rating: 4.4,
    reviewCount: 31200,
    image: beautyProduct3,
    platform: "flipkart",
  },
  {
    id: "f8",
    name: "Floral Dream Mist",
    description: "Refreshing body mist with jasmine & rose notes",
    price: 699,
    originalPrice: 1199,
    rating: 4.3,
    reviewCount: 9800,
    image: beautyProduct4,
    platform: "flipkart",
  },
];
