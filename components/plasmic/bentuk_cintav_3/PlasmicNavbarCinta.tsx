// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9qXrGYPf2wu9Q69JKgx7rd
// Component: sirgQiSNN0bg

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { NavigationBar } from "@plasmicpkgs/plasmic-nav";
import Button from "../../Button"; // plasmic-import: 41nNSCEHS4Ht/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_bentuk_cintav_3.module.css"; // plasmic-import: 9qXrGYPf2wu9Q69JKgx7rd/projectcss
import sty from "./PlasmicNavbarCinta.module.css"; // plasmic-import: sirgQiSNN0bg/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: epcUIRU7cW9p/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 9XXkyNPveBxl/icon

createPlasmicElementProxy;

export type PlasmicNavbarCinta__VariantMembers = {
  bgOn: "bgOn";
};
export type PlasmicNavbarCinta__VariantsArgs = {
  bgOn?: SingleBooleanChoiceArg<"bgOn">;
};
type VariantPropType = keyof PlasmicNavbarCinta__VariantsArgs;
export const PlasmicNavbarCinta__VariantProps = new Array<VariantPropType>(
  "bgOn"
);

export type PlasmicNavbarCinta__ArgsType = {
  scrollingPage?: boolean;
  onScrollingPageChange?: (val: string) => void;
};
type ArgPropType = keyof PlasmicNavbarCinta__ArgsType;
export const PlasmicNavbarCinta__ArgProps = new Array<ArgPropType>(
  "scrollingPage",
  "onScrollingPageChange"
);

export type PlasmicNavbarCinta__OverridesType = {
  root?: Flex__<"div">;
  navigationBar?: Flex__<typeof NavigationBar>;
  button?: Flex__<typeof Button>;
};

export interface DefaultNavbarCintaProps {
  scrollingPage?: boolean;
  onScrollingPageChange?: (val: string) => void;
  bgOn?: SingleBooleanChoiceArg<"bgOn">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNavbarCinta__RenderFunc(props: {
  variants: PlasmicNavbarCinta__VariantsArgs;
  args: PlasmicNavbarCinta__ArgsType;
  overrides: PlasmicNavbarCinta__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "bgOn",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.bgOn
      },
      {
        path: "scrollingPage",
        type: "writable",
        variableType: "boolean",

        valueProp: "scrollingPage",
        onChangeProp: "onScrollingPageChange"
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root,
        { [sty.rootbgOn]: hasVariant($state, "bgOn", "bgOn") }
      )}
    >
      <NavigationBar
        data-plasmic-name={"navigationBar"}
        data-plasmic-override={overrides.navigationBar}
        brand={
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link___0RIzi
            )}
            component={Link}
            href={"#"}
            platform={"nextjs"}
          >
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img___195Jl)}
              displayHeight={"40px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"none"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              src={{
                src: "/plasmic/bentuk_cintav_3/images/logowitewebp.webp",
                fullWidth: 640,
                fullHeight: 129,
                aspectRatio: undefined
              }}
            />
          </PlasmicLink__>
        }
        className={classNames("__wab_instance", sty.navigationBar)}
        closeButton={
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__z0GhD)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            src={"https://static1.plasmic.app/close.svg"}
          />
        }
        itemsGap={24}
        menuItems={
          <React.Fragment>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__uZmYi
              )}
              component={Link}
              href={"/"}
              platform={"nextjs"}
            >
              {"Home"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__raxY
              )}
              component={Link}
              href={"/"}
              platform={"nextjs"}
            >
              {"Tentang Kami"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link___7HWgk
              )}
              component={Link}
              href={"/"}
              platform={"nextjs"}
            >
              {"Fitur"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__nIkHi
              )}
              component={Link}
              href={"/"}
              platform={"nextjs"}
            >
              {"Harga"}
            </PlasmicLink__>
            <Button
              data-plasmic-name={"button"}
              data-plasmic-override={overrides.button}
              className={classNames("__wab_instance", sty.button)}
              color={"blue"}
              shape={"rounded"}
              size={"compact"}
            >
              {"Contact us"}
            </Button>
          </React.Fragment>
        }
        openButton={
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__vhSh)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            src={"https://static1.plasmic.app/menu.svg"}
          />
        }
        responsiveBreakpoint={768}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "navigationBar", "button"],
  navigationBar: ["navigationBar", "button"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navigationBar: typeof NavigationBar;
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavbarCinta__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavbarCinta__VariantsArgs;
    args?: PlasmicNavbarCinta__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavbarCinta__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNavbarCinta__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicNavbarCinta__ArgProps,
          internalVariantPropNames: PlasmicNavbarCinta__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNavbarCinta__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbarCinta";
  } else {
    func.displayName = `PlasmicNavbarCinta.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbarCinta = Object.assign(
  // Top-level PlasmicNavbarCinta renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navigationBar: makeNodeComponent("navigationBar"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicNavbarCinta
    internalVariantProps: PlasmicNavbarCinta__VariantProps,
    internalArgProps: PlasmicNavbarCinta__ArgProps
  }
);

export default PlasmicNavbarCinta;
/* prettier-ignore-end */