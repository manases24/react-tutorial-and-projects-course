import { PageLinkType } from "../api";

interface Props {
  link: PageLinkType;
  itemClass: string;
}

export const PageLink = ({ link, itemClass }: Props) => {
  return (
    <li key={link.id}>
      <a href={link.href} className={itemClass}>
        {link.text}
      </a>
    </li>
  );
};
