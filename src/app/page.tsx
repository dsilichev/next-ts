import React from "react";
import { FilmDetails } from "../../components/FilmDetails";
import { Films } from "../../components/Films";
import { Props } from "../../components/FilmDetails";

export default function Home() {

  type Genre = 'comedy' | 'horror';

  const filmDetails: Props = {
    title: "Simpsons",
    genre: "comedy",
    seasonCount: 33,
  };

  return (
    <div>
      <header />
      <FilmDetails
        title={filmDetails.title}
        genre={filmDetails.genre}
        seasonCount={filmDetails.seasonCount}
      />
      {/* <Reviews />
      <Recomendations /> */}
      <footer />
    </div>
  );
}
