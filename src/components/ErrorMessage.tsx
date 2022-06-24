/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Overlay } from "./Overlay";

const ErrorMessage = () => (
  <Overlay color="#90323DAA">
    <div
      css={css`
        color: #5e0b15;
        text-align: center;
        padding: 16px;
      `}
    >
      Something went wrong. Please try again with smaller trip number.
    </div>
  </Overlay>
);

export { ErrorMessage };
