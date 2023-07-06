import React from "react";
import { FilmDetails } from "../../components/FilmDetails";
import { Reviews } from "../../components/Reviews";
import { NewReviewForm } from "../../components/NewReviewForm";

export interface Rev {
  id: number;
  author: string;
  text: string;
  rating: string;
}

export interface Props {
  title: string;
  genre: "comedy" | "horror";
  seasonCount: number;
  reviews: Array<Rev>;
  similar: Array<Object>;
}

export default function Home() {
  const filmDetails: Props = {
    title: "Simpsons",
    genre: "comedy",
    seasonCount: 33,
    reviews: [
      { id: 1, author: "John", text: "bla-bla", rating: "5.0" },
      { id: 2, author: "Sam", text: "bla-bla-bla", rating: "5.0" },
    ],
    similar: [{}],
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
      <NewReviewForm />
      <footer />
    </div>
  );
}
