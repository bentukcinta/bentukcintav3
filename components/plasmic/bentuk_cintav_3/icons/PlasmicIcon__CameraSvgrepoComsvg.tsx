// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CameraSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CameraSvgrepoComsvgIcon(props: CameraSvgrepoComsvgIconProps) {
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
          "M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.408 4.408 0 001.226-1.204c.749-1.1.749-2.633.749-5.697 0-3.065 0-4.597-.749-5.697a4.407 4.407 0 00-1.226-1.204c-.72-.473-1.622-.642-3.003-.702-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0013.634 3h-3.268c-.988 0-1.839.685-2.033 1.636-.129.635-.696 1.125-1.355 1.125-1.38.06-2.282.23-3.003.702A4.405 4.405 0 002.75 7.667C2 8.767 2 10.299 2 13.364c0 3.064 0 4.596.749 5.697.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21zM12 9.273c-2.301 0-4.167 1.831-4.167 4.09 0 2.26 1.866 4.091 4.167 4.091 2.301 0 4.167-1.831 4.167-4.09 0-2.26-1.866-4.091-4.167-4.091zm0 1.636c-1.38 0-2.5 1.099-2.5 2.455 0 1.355 1.12 2.454 2.5 2.454s2.5-1.099 2.5-2.454c0-1.356-1.12-2.455-2.5-2.455zm4.722-.818c0-.452.373-.818.834-.818h1.11c.46 0 .834.366.834.818a.826.826 0 01-.833.818h-1.111a.826.826 0 01-.834-.818z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CameraSvgrepoComsvgIcon;
/* prettier-ignore-end */
