"use client";

import { FunctionComponent } from "react";
import { Props } from "./FilmDetails";

// export interface Props {
//   title: string;
//   genre: "comedy" | "horror";
//   seasonCount: number;
// }

export const FilmInfo: FunctionComponent<Props> = ({
  title,
  genre,
  seasonCount,
}) => {
  return (
    <>
      <p>{title || "Unknown Film"}</p>
      {Boolean(genre) && <p>{genre}</p>}
      <p>{seasonCount > 0 ? `Кол-во: ${seasonCount}` : "Нет"}</p>
    </>
  );
};
