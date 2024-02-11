// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9qXrGYPf2wu9Q69JKgx7rd
// Component: _X0mDRM2OR_A

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

import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import ThemeSelector from "../../ThemeSelector"; // plasmic-import: ck73clicZefz/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_bentuk_cintav_3.module.css"; // plasmic-import: 9qXrGYPf2wu9Q69JKgx7rd/projectcss
import sty from "./PlasmicInvitation.module.css"; // plasmic-import: _X0mDRM2OR_A/css

createPlasmicElementProxy;

export type PlasmicInvitation__VariantMembers = {};
export type PlasmicInvitation__VariantsArgs = {};
type VariantPropType = keyof PlasmicInvitation__VariantsArgs;
export const PlasmicInvitation__VariantProps = new Array<VariantPropType>();

export type PlasmicInvitation__ArgsType = {};
type ArgPropType = keyof PlasmicInvitation__ArgsType;
export const PlasmicInvitation__ArgProps = new Array<ArgPropType>();

export type PlasmicInvitation__OverridesType = {
  root?: Flex__<"div">;
  themeSelector?: Flex__<typeof ThemeSelector>;
};

export interface DefaultInvitationProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicInvitation__RenderFunc(props: {
  variants: PlasmicInvitation__VariantsArgs;
  args: PlasmicInvitation__ArgsType;
  overrides: PlasmicInvitation__OverridesType;
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

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "themeSelector.to",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $ctx.query.to;
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
    $queries: $queries,
    $refs
  });

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    query: usePlasmicDataOp(() => {
      return {
        sourceId: "6tnFCKpFqPsM7FNwtC6sAz",
        opId: "6ee5e142-a461-40cf-8c02-4a3ec9bc4bd8",
        userArgs: {
          filters: [$ctx.params.slug]
        },
        cacheKey: `plasmic.$.6ee5e142-a461-40cf-8c02-4a3ec9bc4bd8.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
            const child$Props = {
              className: classNames("__wab_instance", sty.themeSelector),
              onToChange: generateStateOnChangeProp($state, [
                "themeSelector",
                "to"
              ]),
              selectorSlug: (() => {
                try {
                  return $queries.query.data[0].slug;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "yantoyanti";
                  }
                  throw e;
                }
              })(),
              theme: (() => {
                try {
                  return $queries.query.data[0].temaUndangan;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "theme1";
                  }
                  throw e;
                }
              })(),
              to: generateStateValueProp($state, ["themeSelector", "to"])
            };

            initializePlasmicStates(
              $state,
              [
                {
                  name: "themeSelector.to",
                  initFunc: ({ $props, $state, $queries }) =>
                    (() => {
                      try {
                        return $ctx.query.to;
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
              []
            );
            return (
              <ThemeSelector
                data-plasmic-name={"themeSelector"}
                data-plasmic-override={overrides.themeSelector}
                {...child$Props}
              />
            );
          })()}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "themeSelector"],
  themeSelector: ["themeSelector"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  themeSelector: typeof ThemeSelector;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicInvitation__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicInvitation__VariantsArgs;
    args?: PlasmicInvitation__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicInvitation__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicInvitation__ArgsType,
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
          internalArgPropNames: PlasmicInvitation__ArgProps,
          internalVariantPropNames: PlasmicInvitation__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicInvitation__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInvitation";
  } else {
    func.displayName = `PlasmicInvitation.${nodeName}`;
  }
  return func;
}

export const PlasmicInvitation = Object.assign(
  // Top-level PlasmicInvitation renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    themeSelector: makeNodeComponent("themeSelector"),

    // Metadata about props expected for PlasmicInvitation
    internalVariantProps: PlasmicInvitation__VariantProps,
    internalArgProps: PlasmicInvitation__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicInvitation;
/* prettier-ignore-end */
