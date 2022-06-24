/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FunctionComponent } from "react";
import { Trip } from "../contracts";
import { Rate } from "./Rate";

const TripCard: FunctionComponent<Trip> = ({
  imageSrc,
  imageDescription,
  destinationsNumber,
  daysNumber,
  tripTitle,
  rate,
  price,
  specialPriceOffer,
  currency,
}) => (
  <div
    css={css`
      border: 1px solid #eee;
      border-radius: 4px;
      overflow: hidden;
      height: 100%;
    `}
  >
    <img
      css={css`
        width: 100%;
        height: 200px;
        object-fit: cover;
        display: block;
      `}
      src={imageSrc}
      alt={imageDescription}
    />
    <div
      css={css`
        padding: 16px;
        height: 126px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `}
    >
      <div>
        <div
          css={css`
            color: #888;
            font-weight: 900;
            font-size: 12px;
            margin-bottom: 2px;
          `}
        >
          {destinationsNumber} Numberr{destinationsNumber > 1 ? "ies" : "y"}{" "}
          {daysNumber} Day
          {daysNumber > 1 && "s"}
        </div>
        <div
          css={css`
            font-weight: 900;
            font-size: 20px;
            color: #000;
            line-height: 1;
          `}
        >
          {tripTitle}
        </div>
      </div>
      <div>
        <Rate rate={rate} />
        <div
          css={css`
            color: #888;
            font-weight: 900;
            font-size: 12px;
            margin-top: 8px;
          `}
        >
          <span
            css={css`
              color: #000;
            `}
          >
            From {currency}
            {specialPriceOffer}
          </span>{" "}
          &bull;
          <span
            css={css`
              text-decoration: line-through;
            `}
          >
            Price {currency}
            {price}
          </span>
        </div>
      </div>
    </div>
  </div>
);

export { TripCard };
