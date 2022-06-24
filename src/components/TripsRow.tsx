/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { CSSProperties, FunctionComponent } from "react";
import { Trip } from "../contracts";
import { TripCard } from "./TripCard";

type TripsRowProps = {
  style: CSSProperties;
  itemsInRow: number;
  tripsForRow: Array<Trip>;
};

const TripsRow: FunctionComponent<TripsRowProps> = ({
  style,
  itemsInRow,
  tripsForRow,
}) => (
  <div
    css={css`
      margin-bottom: 16px;
      display: flex;
      align-items: stretch;
    `}
    style={style}
  >
    {tripsForRow.map((trip) => (
      <div
        key={trip.id}
        css={css`
          width: ${100 / itemsInRow}%;
          padding: 8px;
        `}
      >
        <TripCard {...trip} />
      </div>
    ))}
  </div>
);

export { TripsRow };
