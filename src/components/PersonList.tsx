import React from 'react'

type PersonListProps = {
  names: {
    firstName : string,
    lastName : string
  }[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map(name => {
        return (
          <h2>
            <span className="text-red-500 text-4xl hover:text-amber-800 m-5">
              {" "}
              This is {name.lastName},
            </span>
            <span className="text-green-500 text-4xl hover:text-blue-900 m-5">
              {name.firstName}
              {name.lastName}
            </span>{" "}
          </h2>
        );
      })}
    </div>
  );
};