import { Search, ShoppingBag, Sparkles } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const Header = ({ searchQuery, onSearchChange }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        {/* Logo / Deal of the Day */}
        <div className="flex items-center gap-2 shrink-0">
          <ShoppingBag className="h-5 w-5 text-primary" />
          <div className="hidden sm:flex items-center gap-1.5 rounded-full bg-deal px-3 py-1">
            <Sparkles className="h-3.5 w-3.5 text-deal-foreground" />
            <span className="text-xs font-semibold text-deal-foreground whitespace-nowrap">
              Deal of the Day
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search products — shoes, watches, skincare..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-full border border-border bg-background py-2.5 pl-10 pr-4 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
        </div>

        {/* Right side placeholder */}
        <div className="hidden sm:flex items-center gap-2 shrink-0">
          <span className="text-xs font-medium text-muted-foreground">Best Deals</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
