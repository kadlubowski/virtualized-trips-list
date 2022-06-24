/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Overlay } from "./Overlay";

const OverlayLoader = () => (
  <Overlay>
    <div
      css={css`
        width: 48px;
        height: 48px;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        border: 3px solid;
        border-color: #d9cab3 #d9cab3 transparent transparent;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;

        ::after,
        ::before {
          content: "";
          box-sizing: border-box;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          border: 3px solid;
          border-color: transparent transparent #8c7a6b #8c7a6b;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-sizing: border-box;
          animation: rotationBack 0.5s linear infinite;
          transform-origin: center center;
        }
        ::before {
          width: 32px;
          height: 32px;
          border-color: #bc8034 #bc8034 transparent transparent;
          animation: rotation 1.5s linear infinite;
        }

        @keyframes rotation {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes rotationBack {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }
      `}
    />
  </Overlay>
);

export { OverlayLoader };
