/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  ChangeEvent,
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useCallback,
} from "react";

type SettingsBarProps = {
  tripsNumber: string;
  setTripsNumber: Dispatch<SetStateAction<string>>;
};

const SettingsBar: FunctionComponent<SettingsBarProps> = ({
  tripsNumber,
  setTripsNumber,
}) => {
  const handleTripsNumberChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.match(/^\d*$/)) {
        const value = Number(e.target.value);
        setTripsNumber(
          value < 100000 ? (value < 0 ? "0" : e.target.value) : "100000"
        );
      }
    },
    [setTripsNumber]
  );

  return (
    <div
      css={css`
        padding: 8px;
      `}
    >
      <label htmlFor="tripsNumber">Trips number to display</label>
      <input
        id="tripsNumber"
        inputMode="numeric"
        css={css`
          width: 100%;
          border: 1px solid #eee;
          border-radius: 4px;
          height: 34px;
          padding: 8px 16px;
        `}
        value={tripsNumber}
        onChange={handleTripsNumberChange}
      />
    </div>
  );
};

export { SettingsBar };
