import Link from "next/link";

const navLinks = [
  { href: "/", name: "Home" },
  { href: "/counter", name: "Counter" },
  { href: "/tours", name: "Tours" },
  { href: "/users", name: "Users" },
  { href: "/actions", name: "Actions" },
];

export const Navbar = () => {
  return (
    <nav className="max-w-3xl mx-auto py-4 flex gap-x-4 ">
      {navLinks.map((link, index) => (
        <Link key={index} href={link.href}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
};
