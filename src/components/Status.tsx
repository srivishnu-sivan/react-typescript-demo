import React from "react";
import { Spinner} from "./../components/Spinner"

type StatusProps = {
  status: 'loading' | 'success' | 'error';
};

export const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "loading...";
  } else if (props.status === "success") {
    message = "Data fetched successfully";
  } else if (props.status === "error") {
    message = "Error fetching data";
  }
  return (
    <div className="flex justify-center gap-4 items-center">
      <section>Status : </section>
      <section>
        {message && message === "loading..." ? <Spinner /> : null}
      </section>
    </div>
  );
};
