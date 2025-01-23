"use client";

import { useChainId } from "wagmi";
import deployedContracts from "~/contracts/deployedContracts";

export function useContracts() {
  const chainId = useChainId();

  return deployedContracts[chainId] ?? {};
}
