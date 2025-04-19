"use client";

import { AppStore, makeStore } from "@/lib/state/store";
import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";

interface IProps {
  children: ReactNode;
}

export const StoreProvider = ({ children }: IProps) => {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) storeRef.current = makeStore();

  return <Provider store={storeRef.current}>{children}</Provider>;
};
