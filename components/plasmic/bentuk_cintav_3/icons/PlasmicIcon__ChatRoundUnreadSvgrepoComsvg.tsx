// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChatRoundUnreadSvgrepoComsvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function ChatRoundUnreadSvgrepoComsvgIcon(
  props: ChatRoundUnreadSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12 22c5.523 0 10-4.477 10-10 0-.906-.12-1.784-.346-2.618-.086-.316-.455-.441-.751-.303a4.5 4.5 0 01-5.982-5.982c.138-.296.013-.665-.303-.75A10.012 10.012 0 0012 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 001.591 1.591l2.226-.595a1.634 1.634 0 011.149.133A9.958 9.958 0 0012 22z"
        }
        fill={"currentColor"}
      ></path>

      <circle cx={"19"} cy={"5"} r={"3"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default ChatRoundUnreadSvgrepoComsvgIcon;
/* prettier-ignore-end */
