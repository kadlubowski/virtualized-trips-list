/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FunctionComponent } from "react";
import halfFilledStar from "../assets/half-filled-star.svg";
import filledStar from "../assets/filled-star.svg";
import emptyStar from "../assets/empty-star.svg";

type RateProps = {
  rate: number;
};

enum StarType {
  FILLED = "FILLED",
  HALF_FILLED = "HALF_FILLED",
  EMPTY = "EMPTY",
}

const generateStarsArray = (rate: number) => {
  const output = [];
  for (let i = 0; i < 5; i++) {
    if (rate > i && rate <= i + 0.5) {
      output.push(StarType.HALF_FILLED);
    } else if (rate > i) {
      output.push(StarType.FILLED);
    } else {
      output.push(StarType.EMPTY);
    }
  }
  return output;
};

const Rate: FunctionComponent<RateProps> = ({ rate }) => (
  <div
    css={css`
      font-size: 12px;
      display: flex;
      align-items: center;
    `}
  >
    {generateStarsArray(rate).map((starType, index) => (
      <img
        key={index}
        css={css`
          width: 16px;
          height: 16px;
          margin-right: 2px;
          filter: invert(78%) sepia(86%) saturate(343%) hue-rotate(356deg)
            brightness(104%) contrast(98%);
        `}
        src={
          starType === StarType.HALF_FILLED
            ? halfFilledStar
            : starType === StarType.FILLED
            ? filledStar
            : emptyStar
        }
        alt={`${starType}_STAR`}
      />
    ))}
    <div
      css={css`
        margin-left: 8px;
      `}
    >
      {rate.toFixed(1)}
    </div>
  </div>
);

export { Rate };
