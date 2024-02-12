// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VolumeLoudSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VolumeLoudSvgrepoComsvgIcon(
  props: VolumeLoudSvgrepoComsvgIconProps
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
          "M2.003 11.716c.037-1.843.056-2.764.668-3.552a3.18 3.18 0 01.413-.431c.752-.636 1.746-.636 3.733-.636.71 0 1.065 0 1.403-.092.07-.02.14-.042.209-.067.33-.121.627-.33 1.22-.746 2.338-1.645 3.508-2.467 4.489-2.11.188.069.37.168.533.29.848.635.913 2.115 1.042 5.073a70.58 70.58 0 01.08 2.555c0 .521-.032 1.46-.08 2.555-.13 2.958-.194 4.438-1.042 5.073a2.109 2.109 0 01-.533.29c-.982.357-2.15-.465-4.49-2.11-.592-.416-.889-.625-1.22-.746a2.61 2.61 0 00-.208-.067c-.338-.092-.693-.092-1.403-.092-1.987 0-2.98 0-3.733-.636a3.145 3.145 0 01-.413-.43c-.612-.79-.63-1.71-.668-3.553a14.06 14.06 0 010-.569z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M19.49 5.552a.66.66 0 01.97.094l-.529.471.53-.47.002.002.003.004.007.009a2.572 2.572 0 01.079.112c.047.071.111.173.186.305.149.264.339.652.526 1.171C21.64 8.291 22 9.851 22 12c0 2.15-.36 3.71-.736 4.75-.187.52-.377.907-.526 1.172a4.655 4.655 0 01-.265.417l-.007.009-.003.003-.001.002s-.001.001-.531-.47l.53.471a.66.66 0 01-.971.094.77.77 0 01-.09-1.035l.03-.041c.026-.04.07-.11.125-.207a6.28 6.28 0 00.422-.943c.314-.871.644-2.253.644-4.222 0-1.97-.33-3.35-.644-4.222a6.28 6.28 0 00-.422-.942 3.152 3.152 0 00-.157-.253m-1.641 1.833c.333-.197.753-.07.938.286l-.603.357.603-.357.001.002.002.003.003.007.01.018.024.053c.018.042.042.099.07.17.053.145.12.35.185.62.13.54.252 1.337.252 2.425 0 1.089-.122 1.886-.252 2.426-.065.27-.132.475-.186.619a3.04 3.04 0 01-.094.223l-.009.018-.003.007-.002.003v.002s-.001.001-.604-.356l.603.357c-.185.355-.605.483-.938.286-.33-.196-.45-.638-.272-.991l.004-.01.035-.085c.032-.086.08-.23.13-.438.1-.416.208-1.09.208-2.06 0-.971-.108-1.645-.208-2.06a3.757 3.757 0 00-.165-.524l-.004-.01a.76.76 0 01.272-.991z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VolumeLoudSvgrepoComsvgIcon;
/* prettier-ignore-end */
