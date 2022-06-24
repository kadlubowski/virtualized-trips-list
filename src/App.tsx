/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { CSSProperties, useCallback, useState } from "react";
import { Trip } from "./contracts";
import { useDebouncedEffect } from "./hooks/useDebounceEffect";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { useNumberOfItemsInRow } from "./hooks/useNumberOfItemsInRow";
import { OverlayLoader } from "./components/OverlayLoader";
import { ErrorMessage } from "./components/ErrorMessage";
import { TripsRow } from "./components/TripsRow";
import { SettingsBar } from "./components/SettingsBar";
import { NoDataMessage } from "./components/NoDataMessage";

const App = () => {
  const [trips, setTrips] = useState<Array<Trip>>([]);
  const [tripsNumber, setTripsNumber] = useState("3");
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [isError, setIsError] = useState(false);
  const itemsInRow = useNumberOfItemsInRow();

  useDebouncedEffect(
    () => {
      setIsFetchingData(true);
      setIsError(false);
      fetch(`/trips?tripsNumber=${tripsNumber}`)
        .then((response) => response.json().then(setTrips))
        .catch(() => setIsError(true))
        .finally(() => setIsFetchingData(false));
    },
    300,
    [tripsNumber]
  );

  const Row = useCallback(
    ({ index, style }: { index: number; style: CSSProperties }) => {
      const tripsForRow = trips.slice(
        index * itemsInRow,
        index * itemsInRow + itemsInRow
      );

      return (
        <TripsRow
          style={style}
          tripsForRow={tripsForRow}
          itemsInRow={itemsInRow}
        />
      );
    },
    [itemsInRow, trips]
  );

  return (
    <div
      css={css`
        height: 100vh;
      `}
    >
      {isFetchingData && <OverlayLoader />}
      <SettingsBar tripsNumber={tripsNumber} setTripsNumber={setTripsNumber} />
      <div
        css={css`
          height: calc(100vh - 69px);
          overflow: hidden;
          position: relative;
        `}
      >
        {isError ? (
          <ErrorMessage />
        ) : trips.length === 0 ? (
          <NoDataMessage />
        ) : (
          <AutoSizer>
            {({ height, width }: { height: number; width: number }) => {
              return (
                <List
                  height={height}
                  itemCount={Math.ceil(trips.length / itemsInRow)}
                  itemSize={344}
                  width={width}
                >
                  {Row}
                </List>
              );
            }}
          </AutoSizer>
        )}
      </div>
    </div>
  );
};

export default App;
