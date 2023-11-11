import React from "react";

type Props = {};

export const Spinner = (props: Props) => {
  return (
    <div>
      <div className="flex flex-row space-x-16">
        <div className="flex">
          <div className="relative">
            <div
              className="w-12 h-12 rounded-full absolute
                            border-8 border-solid border-gray-200"
            ></div>

            <div
              className="w-12 h-12 rounded-full animate-spin absolute
                            border-8 border-solid border-purple-500 border-t-transparent"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
