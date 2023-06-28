import React from "react";
import { FilmDetails } from "../../components/FilmDetails";
import { Reviews } from "../../components/Reviews";

export interface Revs {
    author: string;
    text: string;
    rating: string;
}

type RevsProps = { reviews: Revs[]};

export interface Props {
  title: string;
  genre: "comedy" | "horror";
  seasonCount: number;
  reviews?: {
    author: string;
    text: string;
    rating: string;
  }[];
  similar?: Array<Object>;
}

export default function Home() {
  const filmDetails: Props = {
    title: "Simpsons",
    genre: "comedy",
    seasonCount: 33,
    reviews: [
      { author: "John", text: "bla-bla", rating: "5.0" },
      { author: "Sam", text: "bla-bla-bla", rating: "5.0" },
    ],
  };

  console.log(filmDetails.reviews?.length);
  return (
    <div>
      <header />
      <FilmDetails
        title={filmDetails.title}
        genre={filmDetails.genre}
        seasonCount={filmDetails.seasonCount}
      />
      <Reviews reviews={filmDetails.reviews} />
      {/* <Recomendations /> */}
      <footer />
    </div>
  );
}
