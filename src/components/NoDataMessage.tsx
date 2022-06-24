/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Overlay } from "./Overlay";

const NoDataMessage = () => (
  <Overlay>
    <div
      css={css`
        text-align: center;
        padding: 16px;
      `}
    >
      Please set the number of trips you want to display in an input above.
      Valid range is from 1 to 100000.
    </div>
  </Overlay>
);

export { NoDataMessage };
