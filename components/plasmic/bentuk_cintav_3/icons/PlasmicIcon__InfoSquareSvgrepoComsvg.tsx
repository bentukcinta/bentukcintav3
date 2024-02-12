// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InfoSquareSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InfoSquareSvgrepoComsvgIcon(
  props: InfoSquareSvgrepoComsvgIconProps
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22zm0-4.25a.75.75 0 00.75-.75v-6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75zM12 7a1 1 0 110 2 1 1 0 010-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default InfoSquareSvgrepoComsvgIcon;
/* prettier-ignore-end */
