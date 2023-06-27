"use client";

import { FunctionComponent } from "react";
import { useCount } from "../hooks/useCount";
import { FilmInfo } from './FilmInfo';

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

  return (
    <div>
      <FilmInfo title={title} genre={genre} seasonCount={seasonCount} />
      <div>
        <button onClick={() => decrement()}>-</button>
        {count}
        <button onClick={() => increment()}>+</button>
      </div>
    </div>
  );
};
