"use client";
import React, { useState } from "react";

export default function header() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <nav className="bg-blue-800 py-4 rounded-bl-full">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <h4 className="text-white text-xl font-bold">Dev Jobs</h4>
            </div>

            <div className="flex ml-6 space-x-4"></div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <span className="text-white font-medium mr-2">Light</span>
            <label
              htmlFor="toggle"
              className="flex items-center cursor-pointer"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  id="toggle"
                  className="sr-only toggle-checkbox"
                  checked={isChecked}
                  onChange={handleToggle}
                />
                <div className="block bg-gray-300 w-11 h-6 rounded-full"></div>
                <div
                  className={`toggle-thumb absolute left-1 top-1 w-4 h-4 rounded-full transition-transform ${
                    isChecked
                      ? "bg-green-500 transform translate-x-full"
                      : "bg-white"
                  }`}
                ></div>
              </div>
              <div className="ml-3 text-white font-medium">Dark</div>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
