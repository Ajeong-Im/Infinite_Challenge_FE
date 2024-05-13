"use client";
import React, { useState } from "react";
import GrayGlass from "@/../public/svgs/reading-glass-gray.svg";
import SearchBtn from "../atoms/SearchBtn";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e: any) => setInputValue(e.target.value);
  const clearInput = () => setInputValue("");

  return (
    <div className="flex justify-center items-center bg-white rounded-full h-[70px] w-[486px]">
      <div className="relative w-full h-full flex items-center">
        {!isFocused && (
          <GrayGlass
            className="absolute left-5 top-1/2 transform -translate-y-1/2"
            width={16}
            height={16}
          />
        )}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={isFocused ? "" : "질환명을 입력해 주세요."}
          className={`border border-none p-2 ${
            isFocused ? "pl-6" : "pl-12"
          } w-full h-full rounded-full`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {inputValue && (
          <div
            className="absolute mr-32 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={clearInput}
          >
            &#x2715; {/* 'X' 아이콘 (유니코드 문자 사용), 위치 수정 */}
          </div>
        )}
        <SearchBtn />
      </div>
    </div>
  );
}
