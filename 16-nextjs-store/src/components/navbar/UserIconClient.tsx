"use client";

import { LuUser } from "react-icons/lu";

interface Props {
  profileImage?: string;
}

export const UserIconClient = ({ profileImage }: Props) => {
  if (profileImage) {
    return (
      <img
        src={profileImage}
        alt="User profile"
        className="w-6 h-6 rounded-full object-cover"
      />
    );
  }

  return <LuUser className="w-6 h-6 bg-primary rounded-full text-white" />;
};
