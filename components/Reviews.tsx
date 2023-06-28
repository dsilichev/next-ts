import { FunctionComponent, JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal } from "react";
import { Props, Revs } from "@/app/page";


export const Reviews = (reviews: any[]) => {
  console.log(reviews);
  return (
    <>
      {
        reviews.map((review: { author: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; text: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; rating: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }) => {
          <div>
            <span>Bla</span>
            <span>{review.author}</span>
            <span>{review.text}</span>
            <span>{review.rating}</span>
          </div>
        })
      }
    </>
  );
};
