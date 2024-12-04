import { BookType } from "../api";

interface Props {
  item: BookType;
}

export const Book = ({ item }: Props) => {
  return (
    <article className="book">
      <img src={item.img} alt={item.title} />
      <h2>{item.title}</h2>
      <h4>{item.author}</h4>
    </article>
  );
};
