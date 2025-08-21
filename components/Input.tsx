import React from "react";
import { ChangeEvent } from "react";
import { SignNumberDropDown } from "./SignNumberDropDown";
interface InputProps {
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeSignnumber: (event: ChangeEvent<HTMLInputElement>) => void;
}
export default function Input({
  onChangeName,
  onChangeEmail,
  onChangeSignnumber,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2 ">
      <input
        type="text"
        placeholder="Name"
        aria-label="Name"
        className="border text-black border-gray-300 bg-white rounded-md p-2 focus:outline-none focus:border-rose-500 w-full"
        onChange={onChangeName}
      />

      <input
        type="email"
        placeholder="E-mail"
        aria-label="Email"
        className="border text-black border-gray-300 bg-white rounded-md p-2 focus:outline-none focus:border-rose-500 w-full"
        onChange={onChangeEmail}
      />
      <input
        type="text"
        placeholder="SignNumber"
        aria-label="Sign number"
        className="border text-black border-gray-300 bg-white rounded-md p-2 focus:outline-none focus:border-rose-500 w-full"
        onChange={onChangeEmail}
      />
    </div>
  );
}
