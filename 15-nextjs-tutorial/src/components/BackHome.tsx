import Link from "next/link";

export const BackHome = () => {
  return (
    <>
      <Link
        className="underline text-xl text-blue-500 inline-block mt-8"
        href="/"
      >
        Regresar
      </Link>
    </>
  );
};
