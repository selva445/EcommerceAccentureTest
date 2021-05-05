import React from "react";

export default function FallBackErrorComponent() {
    // Call this when an Error Occurs
  return (
    <div role="alert">
      <p>Something went wrong</p>
      <p >Try again</p>
    </div>
  );
}
