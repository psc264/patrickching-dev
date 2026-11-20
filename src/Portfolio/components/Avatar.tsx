import { useState } from "react";
import { ME } from "../content";

export default function Avatar() {
  const [failed, setFailed] = useState(false);
  const initials = ME.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="avatar">
      {failed ? (
        <span role="img" aria-label={"Initials for " + ME.name}>
          {initials}
        </span>
      ) : (
        <img src={ME.photo} alt={"Photo of " + ME.name} onError={() => setFailed(true)} />
      )}
    </div>
  );
}