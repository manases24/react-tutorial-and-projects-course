import { Input } from "../ui/input";

export const NavSearch = () => {
  return (
    <Input
      className="max-w-xs dark:bg-muted"
      type="search"
      placeholder="search product..."
      value=""
    />
  );
};
