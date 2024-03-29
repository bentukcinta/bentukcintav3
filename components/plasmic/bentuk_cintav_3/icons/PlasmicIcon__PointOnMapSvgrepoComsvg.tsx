// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PointOnMapSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PointOnMapSvgrepoComsvgIcon(
  props: PointOnMapSvgrepoComsvgIconProps
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
          "M21 16.83v-5.667c0-1.044 0-1.566-.283-1.959-.229-.317-.596-.486-1.25-.713-.134 1.606-.666 3.247-1.502 4.682-.972 1.672-2.417 3.167-4.268 3.974a4.255 4.255 0 01-3.394 0c-1.851-.807-3.296-2.302-4.269-3.974A11.533 11.533 0 014.7 9.658c-.383-.057-.676-.028-.93.113a1.5 1.5 0 00-.28.203C3 10.42 3 11.249 3 12.908v4.93c0 1.043 0 1.565.283 1.958s.778.558 1.768.888l.384.128c1.577.525 2.365.788 3.172.79.243 0 .485-.017.726-.052.798-.115 1.548-.49 3.048-1.24 1.149-.575 1.724-.862 2.334-.995.214-.047.431-.08.65-.098.623-.052 1.25.053 2.507.262 1.273.212 1.91.318 2.375.051.158-.09.298-.209.413-.35.34-.415.34-1.06.34-2.35z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M12 2C8.686 2 6 4.552 6 7.7c0 3.124 1.915 6.769 4.903 8.072a2.755 2.755 0 002.194 0C16.085 14.47 18 10.824 18 7.7 18 4.552 15.314 2 12 2zm0 8a2 2 0 100-4 2 2 0 000 4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PointOnMapSvgrepoComsvgIcon;
/* prettier-ignore-end */
