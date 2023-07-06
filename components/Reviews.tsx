import { FunctionComponent } from "react";

type Rev = { id: number, author: string; text: string; rating: string };

interface RevsProps {
  reviews: Array<Rev>;
}

export const Reviews: FunctionComponent<RevsProps> = ({ reviews }) => {
  console.log(reviews);
  return (
    <div>
      {
        !!reviews.length && reviews.map(review => (
          <div key={review.id}>
            <span>{review.author}</span>
            <span>{review.text}</span>
            <span>{review.rating}</span>
          </div>
        ))
      }
    </div>
  )
};
