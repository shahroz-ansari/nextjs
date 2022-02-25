import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactNode } from "react";

export type NextPagePropsExtend = NextPage & {
  title?: string | ReactNode;
};

export type AppPropsExtended = AppProps & {
  Component: NextPagePropsExtend;
};
