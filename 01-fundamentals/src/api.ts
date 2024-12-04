import img1 from "/assets/images/book-1.jpg";
import img2 from "/assets/images/book-2.jpg";
import img3 from "/assets/images/book-3.jpg";

export interface BookType {
  author: string;
  title: string;
  img: string;
  id: number;
}

export const books: BookType[] = [
  {
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    img: img1,
    id: 1,
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: img2,
    id: 2,
  },
  {
    author: "Stephen King",
    title: "Fairy Tale",
    img: img3,
    id: 3,
  },
];
