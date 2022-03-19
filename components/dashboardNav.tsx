import { Avatar } from "@mui/material";
import React from "react";

interface Props {
  name: string | null | undefined;
  text?: string;
  className?: string
}

const DashboardNav = ({ name, text, className }: Props) => {
  return (
    <div className="flex items-center justify-between w-full p-5 px-8 overflow-hidden">
      {text ? (
        <p className="text-gray-700 font-bold text-3xl">Time for <span className={className}>{text}</span></p>
      ) : (
        <p className="text-gray-700 font-bold text-3xl">
          Hey there <span className="text-orange-400 font-black">{name}!</span>{" "}
          👋{" "}
        </p>
      )}
      <button className="flex items-center justify-between rounded-xl bg-lighter-purp px-2 pr-3">
        <Avatar className="scale-75 mr-1 bg-orange-400" />
        <p className="font-bold text-purp">{name}</p>
      </button>
    </div>
  );
};

export default DashboardNav;
