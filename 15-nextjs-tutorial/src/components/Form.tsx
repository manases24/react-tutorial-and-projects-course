"use client"

import { createUser } from "@/utils/actions";

export const Form = () => {
  return (
    <form className="max-w-lg flex flex-col gap-y-4  shadow rounded p-8" action={createUser}>
      <h2 className="text-2xl capitalize mb-4">create user</h2>
      <input
        className="w-full max-w-md p-2 border border-blue-500 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        type="text"
        name="firstName"
        defaultValue="jonas"
      />
      <input
        className="w-full max-w-md p-2 border border-blue-500 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        type="text"
        name="lastName"
        defaultValue="schmedtmann"
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize">
        submit
      </button>
    </form>
  );
};
