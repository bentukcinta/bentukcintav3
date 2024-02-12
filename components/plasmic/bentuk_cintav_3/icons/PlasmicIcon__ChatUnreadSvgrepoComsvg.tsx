// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChatUnreadSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChatUnreadSvgrepoComsvgIcon(
  props: ChatUnreadSvgrepoComsvgIconProps
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
          "M13.087 21.388l.542-.916c.42-.71.63-1.066.968-1.262.338-.197.763-.204 1.613-.219 1.256-.021 2.043-.098 2.703-.372a5 5 0 002.706-2.706C22 14.995 22 13.83 22 11.5v-1l-.001-1.048c-.001-.427-.524-.669-.902-.47a4.5 4.5 0 01-6.08-6.08c.2-.377-.041-.9-.469-.9C14.218 2 13.87 2 13.5 2h-3c-3.273 0-4.91 0-6.112.737a5 5 0 00-1.651 1.65C2 5.59 2 7.228 2 10.5v1c0 2.33 0 3.495.38 4.413a5 5 0 002.707 2.706c.66.274 1.447.35 2.703.372.85.015 1.275.022 1.613.219.337.196.548.551.968 1.262l.542.916c.483.816 1.69.816 2.174 0z"
        }
        fill={"currentColor"}
      ></path>

      <circle cx={"19"} cy={"5"} r={"3"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default ChatUnreadSvgrepoComsvgIcon;
/* prettier-ignore-end */
