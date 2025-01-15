"use client";

import { useFormState, useFormStatus } from "react-dom";
import { createUser } from "@/utils/actions";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize"
      type="submit"
      disabled={pending}
    >
      {pending ? "submitting..." : "submit"}
    </button>
  );
};

export const Form = () => {
  const [message, formAction] = useFormState(createUser, null);

  return (
    <form
      action={formAction}
      className="max-w-lg flex flex-col gap-y-4  shadow rounded p-8"
    >
      {message && <p>{message}</p>}
      <h2 className="text-2xl capitalize mb-4">create user</h2>
      <input
        type="text"
        name="firstName"
        defaultValue="peter"
        required
        className="border shadow rounded py-2 px-3 text-gray-700"
      />
      <input
        type="text"
        name="lastName"
        defaultValue="smith"
        required
        className="border shadow rounded py-2 px-3 text-gray-700"
      />
      <SubmitButton />
    </form>
  );
};
