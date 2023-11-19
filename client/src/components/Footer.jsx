import React from "react";

export function Footer() {
  return (
    <div className="flex justify-center p-1 sticky bottom-0 z-50">
      <div className="bg-gray-700/30 inline-block rounded-md backdrop-blur-md p-3 align-middle">
        <h1 className="font-semibold inline-block">
          made with <span role="img" aria-label="heart" style={{ fontSize: '1.2em' }}>❤️</span>
        </h1>
      </div>
    </div>
  );
}
