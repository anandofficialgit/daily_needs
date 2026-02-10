import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import type { Product } from "@/data/products";
import ProductCard from "./ProductCard";

interface ProductRowProps {
  title: string;
  platform: "amazon" | "flipkart";
  products: Product[];
}

const ProductRow = ({ title, platform, products }: ProductRowProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 240;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-4">
      {/* Section Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className={`h-8 w-1 rounded-full ${
                platform === "amazon" ? "bg-amazon" : "bg-flipkart"
              }`}
            />
            <div>
              <h2 className="text-lg font-heading font-semibold text-foreground">
                {title}
              </h2>
              <p className="text-xs text-muted-foreground">
                {platform === "amazon" ? "Amazon.in" : "Flipkart.com"} • Top rated picks
              </p>
            </div>
          </div>

          {/* Scroll arrows */}
          <div className="flex gap-1.5">
            <button
              onClick={() => scroll("left")}
              className="rounded-full border border-border bg-card p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="rounded-full border border-border bg-card p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Row */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-4 sm:px-6 pb-2 scrollbar-hide snap-x snap-mandatory mx-auto max-w-7xl"
      >
        {products.map((product, index) => (
          <div key={product.id} className="snap-start">
            <ProductCard product={product} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductRow;
