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
    img: "./assets/images/book-1.jpg",
    id: 1,
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "./assets/images/book-2.jpg",
    id: 2,
  },
  {
    author: "Stephen King",
    title: "Fairy Tale",
    img: "./assets/images/book-3.jpg",
    id: 3,
  },
];
