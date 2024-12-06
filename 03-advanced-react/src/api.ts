import { v4 as uuidv4 } from "uuid";

export interface DataType {
  id: string;
  name: string;
}

export interface ImageType {
  small: {
    url: string;
  };
}

export interface PersonType {
  id: string;
  name: string;
  nickName?: string;
  images?: ImageType[];
}

export const data: DataType[] = [
  { id: uuidv4(), name: "john" },
  { id: uuidv4(), name: "peter" },
  { id: uuidv4(), name: "susan" },
  { id: uuidv4(), name: "anna" },
];

export const people: PersonType[] = [
  { id: uuidv4(), name: "bob", nickName: "Stud Muffin" },
  { id: uuidv4(), name: "peter" },
  {
    id: uuidv4(),
    name: "oliver",
    images: [
      {
        small: {
          url: "https://res.cloudinary.com/diqqf3eq2/image/upload/ar_1:1,bo_5px_solid_rgb:ff0000,c_fill,g_auto,r_max,w_1000/v1595959121/person-1_aufeoq.jpg",
        },
      },
    ],
  },
  { id: uuidv4(), name: "david" },
];
