import {
  CartButton,
  Container,
  DarkMode,
  LinksDropdwon,
  Logo,
  NavSearch,
} from "@/components";

export const Navbar = () => {
  return (
    <nav className="border-b">
      <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8">
        <Logo />
        <NavSearch />
        <div className="flex gap-4 items-center">
          <CartButton />
          <DarkMode />
          <LinksDropdwon />
        </div>
      </Container>
    </nav>
  );
};
