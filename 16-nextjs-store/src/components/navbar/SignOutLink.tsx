"use client";

import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";
import { useToast } from "@/hooks/use-toast";

export const SignOutLink = () => {
  const { toast } = useToast();

  const handleLogout = () => {
    toast({ description: <Message /> });
  };

  return (
    <SignOutButton>
      <Link href="/" className="w-full text-left" onClick={handleLogout}>
        Logout
      </Link>
    </SignOutButton>
  );
};

export const Message = () => {
  return (
    <div className="bg-green-500 text-white p-3 rounded-lg shadow-md">
      Logout Successful
    </div>
  );
};
