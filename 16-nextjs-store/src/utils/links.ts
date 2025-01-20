interface NavLink {
  href: string;
  label: string;
}

export const links: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/favorites", label: "Favorites" },
  { href: "/reviews", label: "reviews" },
  { href: "/cart", label: "Cart" },
  { href: "/orders", label: "Orders" },
  { href: "/admin/sales", label: "Dashboard" },
];

export const adminLinks: NavLink[] = [
  { href: "/admin/sales", label: "Sales" },
  { href: "/admin/products", label: "My products" },
  { href: "/admin/products/create", label: "Create product" },
];
