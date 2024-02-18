import React, { useContext } from "react";
import { CalendarContext } from "../../context";

export const Header = () => {
  const { isFetchingHolidays, setSelectedDate } = useContext(CalendarContext);

  return (
    <div className="flex flex-row justify-between b-full mb-5 max-w-7xl">
      <span
        className="font-mono text-5xl transition ease-in-out cursor-pointer text-slate-400 hover:text-slate-600"
        onClick={() => setSelectedDate(new Date())}
      >
        Merkle Assignment
      </span>
      {isFetchingHolidays && (
        <div className="flex flex-row items-center mx-4 space">
          <svg
            className="w-6 h-6 -ml-1 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-5"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      )}
    </div>
  );
};
