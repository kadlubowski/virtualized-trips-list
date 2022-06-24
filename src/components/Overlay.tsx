/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FunctionComponent, ReactNode } from "react";

type OverlayProps = { children: ReactNode; color?: string };

const Overlay: FunctionComponent<OverlayProps> = ({ children, color }) => (
  <div
    css={css`
      position: fixed;
      width: 100vw;
      height: inherit;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${color || "#fffa"};
    `}
  >
    {children}
  </div>
);

export { Overlay };
