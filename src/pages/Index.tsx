import { useMemo, useState } from "react";
import Header from "@/components/Header";
import ProductRow from "@/components/ProductRow";
import { amazonBeautyProducts, flipkartBeautyProducts } from "@/data/products";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAmazon = useMemo(() => {
    if (!searchQuery.trim()) return amazonBeautyProducts;
    const q = searchQuery.toLowerCase();
    return amazonBeautyProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const filteredFlipkart = useMemo(() => {
    if (!searchQuery.trim()) return flipkartBeautyProducts;
    const q = searchQuery.toLowerCase();
    return flipkartBeautyProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main className="py-6 space-y-2">
        {filteredAmazon.length > 0 && (
          <ProductRow
            title="Best Sellers in Beauty"
            platform="amazon"
            products={filteredAmazon}
          />
        )}

        {filteredFlipkart.length > 0 && (
          <ProductRow
            title="Best Sellers in Beauty"
            platform="flipkart"
            products={filteredFlipkart}
          />
        )}

        {filteredAmazon.length === 0 && filteredFlipkart.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-lg font-heading font-semibold text-foreground">
              No products found
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Try a different search term
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 text-center">
        <p className="text-xs text-muted-foreground">
          Product showcase — prices and ratings are indicative
        </p>
      </footer>
    </div>
  );
};

export default Index;
