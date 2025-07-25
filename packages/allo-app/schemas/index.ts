import { Address, Hex } from "viem";

export type Registration = {
  id: Hex;
  chainId: number;
  index: number;
  address: Address;
  owner: Address;
  metadata: {
    title: string;
    image: string;
    description: string;
  };
  allocations?: { items: Allocation[] };
  strategy: { address: Address; name: string };
  pool: { address: Address; name: string };
  status: "approved" | "rejected" | "pending";
  createdAt: Date;
  updatedAt: Date;
};

export type Allocation = {
  id: string;
  amount: number;
  from: Address;
  to: Address;
  token: { symbol: string; address: Address; decimals: number };
  registration: { address: Address };
  createdAt: Date;
  pool: { address: Address; name: string };
};
export type Strategy = {
  name: string;
  address: Address;
  createdAt: Date;
  schema: string;
};
