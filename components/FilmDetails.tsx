"use client";

import { FunctionComponent, useEffect } from "react";
import { useState } from "react";
import { useCount } from "../hooks/useCount";

export interface Props {
  title: string;
  genre: "comedy" | "horror";
  seasonCount: number;
}

export const FilmDetails: FunctionComponent<Props> = ({
  title,
  genre,
  seasonCount,
}) => {
  let {count, decrement, increment} = useCount(0);

  // useEffect(() => {
  //   console.log(count);
  //   return () => {};
  // }, [count]);

  return (
    <div>
      <p>{title || "Unknown Film"}</p>
      {Boolean(genre) && <p>{genre}</p>}
      <p>{seasonCount > 0 ? `Кол-во: ${seasonCount}` : "Нет"}</p>
      {/* <p>{`Кол-во билетов ${count}`}</p> */}
      <div>
        <button onClick={() => decrement()}>-</button>
        {count}
        <button onClick={() => increment()}>+</button>
      </div>
    </div>
  );
};
