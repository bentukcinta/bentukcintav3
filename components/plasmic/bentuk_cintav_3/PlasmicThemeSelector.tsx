// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9qXrGYPf2wu9Q69JKgx7rd
// Component: ck73clicZefz

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

import Theme1 from "../../Theme1"; // plasmic-import: a3bFpMTS7U_s/component
import Theme3 from "../../Theme3"; // plasmic-import: L6EX7BNfvU2R/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_bentuk_cintav_3.module.css"; // plasmic-import: 9qXrGYPf2wu9Q69JKgx7rd/projectcss
import sty from "./PlasmicThemeSelector.module.css"; // plasmic-import: ck73clicZefz/css

createPlasmicElementProxy;

export type PlasmicThemeSelector__VariantMembers = {};
export type PlasmicThemeSelector__VariantsArgs = {};
type VariantPropType = keyof PlasmicThemeSelector__VariantsArgs;
export const PlasmicThemeSelector__VariantProps = new Array<VariantPropType>();

export type PlasmicThemeSelector__ArgsType = {
  theme?: string;
  selectorSlug?: string;
  to?: string;
  onToChange?: (val: string) => void;
};
type ArgPropType = keyof PlasmicThemeSelector__ArgsType;
export const PlasmicThemeSelector__ArgProps = new Array<ArgPropType>(
  "theme",
  "selectorSlug",
  "to",
  "onToChange"
);

export type PlasmicThemeSelector__OverridesType = {
  root?: Flex__<"div">;
  theme1?: Flex__<typeof Theme1>;
  theme3?: Flex__<typeof Theme3>;
};

export interface DefaultThemeSelectorProps {
  theme?: string;
  selectorSlug?: string;
  to?: string;
  onToChange?: (val: string) => void;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicThemeSelector__RenderFunc(props: {
  variants: PlasmicThemeSelector__VariantsArgs;
  args: PlasmicThemeSelector__ArgsType;
  overrides: PlasmicThemeSelector__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          theme: "theme1",
          selectorSlug: "gupastephanie"
        },
        props.args
      ),
    [props.args]
  );

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
        path: "theme1.tmp1To",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $state.to;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()
      },
      {
        path: "to",
        type: "writable",
        variableType: "text",

        valueProp: "to",
        onChangeProp: "onToChange"
      },
      {
        path: "theme3.tmp1To",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $state.to;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()
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
        sty.root
      )}
    >
      {(() => {
        try {
          return $props.theme == "theme1";
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return true;
          }
          throw e;
        }
      })() ? (
        <Theme1
          data-plasmic-name={"theme1"}
          data-plasmic-override={overrides.theme1}
          className={classNames("__wab_instance", sty.theme1)}
          onTmp1ToChange={generateStateOnChangeProp($state, [
            "theme1",
            "tmp1To"
          ])}
          slug={(() => {
            try {
              return $props.selectorSlug;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "yantoyanti";
              }
              throw e;
            }
          })()}
          tmp1To={generateStateValueProp($state, ["theme1", "tmp1To"])}
        />
      ) : null}
      {(() => {
        try {
          return $props.theme == "theme3";
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return true;
          }
          throw e;
        }
      })() ? (
        <Theme3
          data-plasmic-name={"theme3"}
          data-plasmic-override={overrides.theme3}
          className={classNames("__wab_instance", sty.theme3)}
          onTmp1ToChange={generateStateOnChangeProp($state, [
            "theme3",
            "tmp1To"
          ])}
          slug={(() => {
            try {
              return $props.selectorSlug;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
          tmp1To={generateStateValueProp($state, ["theme3", "tmp1To"])}
        />
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "theme1", "theme3"],
  theme1: ["theme1"],
  theme3: ["theme3"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  theme1: typeof Theme1;
  theme3: typeof Theme3;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicThemeSelector__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicThemeSelector__VariantsArgs;
    args?: PlasmicThemeSelector__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicThemeSelector__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicThemeSelector__ArgsType,
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
          internalArgPropNames: PlasmicThemeSelector__ArgProps,
          internalVariantPropNames: PlasmicThemeSelector__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicThemeSelector__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicThemeSelector";
  } else {
    func.displayName = `PlasmicThemeSelector.${nodeName}`;
  }
  return func;
}

export const PlasmicThemeSelector = Object.assign(
  // Top-level PlasmicThemeSelector renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    theme1: makeNodeComponent("theme1"),
    theme3: makeNodeComponent("theme3"),

    // Metadata about props expected for PlasmicThemeSelector
    internalVariantProps: PlasmicThemeSelector__VariantProps,
    internalArgProps: PlasmicThemeSelector__ArgProps
  }
);

export default PlasmicThemeSelector;
/* prettier-ignore-end */
