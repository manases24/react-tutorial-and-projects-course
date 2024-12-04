import { SocialLinkType } from "../api";

interface Props {
  item: SocialLinkType;
  itemClass: string;
}

export const SocialLink = ({ itemClass, item }: Props) => {
  return (
    <li>
      <a
        className={itemClass}
        href={item.href}
        target="_blank"
        rel="noreferrer"
      >
        <i className={item.icon}></i>
      </a>
    </li>
  );
};
