import { books } from "../api";
import { Book } from "./Book";

export const BookList = () => {
  return (
    <section className="booklist">
      {books.map((item) => {
        return <Book key={item.id} item={item} />;
      })}
    </section>
  );
};
