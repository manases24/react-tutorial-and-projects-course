import { removeUser } from "@/utils/actions";

interface Props {
  id: string;
}

export const DeleteButton = ({ id }: Props) => {
  const removeUserWithId = removeUser.bind(null, id);
  return (
    <form action={removeUserWithId}>
      <input type="hidden" name="name" value="shakeAndBake" />
      <button
        type="submit"
        className="bg-red-500 text-white text-xs rounded p-2"
      >
        delete
      </button>
    </form>
  );
};
