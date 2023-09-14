/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  EventSubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
} from "@alephium/web3";
import { default as PubkeyResolverContractJson } from "../resolvers/PubkeyResolver.ral.json";
import { getContractByCodeHash } from "./contracts";

// Custom types for the contract
export namespace PubkeyResolverTypes {
  export type Fields = {
    registrar: HexString;
    pubkeyInfoTemplateId: HexString;
  };

  export type State = ContractState<Fields>;

  export type NewPubkeyInfoCreatedEvent = ContractEvent<{
    node: HexString;
    pubkey: HexString;
  }>;
  export type PubkeyUpdatedEvent = ContractEvent<{
    node: HexString;
    newPubkey: HexString;
  }>;
  export type PubkeyInfoRemovedEvent = ContractEvent<{ node: HexString }>;

  export interface CallMethodTable {
    getPubkey: {
      params: CallContractParams<{ node: HexString }>;
      result: CallContractResult<HexString>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };
}

class Factory extends ContractFactory<
  PubkeyResolverInstance,
  PubkeyResolverTypes.Fields
> {
  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as PubkeyResolverTypes.Fields;
  }

  eventIndex = {
    NewPubkeyInfoCreated: 0,
    PubkeyUpdated: 1,
    PubkeyInfoRemoved: 2,
  };
  consts = {
    ErrorCodes: {
      InvalidCaller: BigInt(0),
      InvalidArgs: BigInt(1),
      ExpectAssetAddress: BigInt(2),
      NameHasBeenRegistered: BigInt(3),
      ContractNotExists: BigInt(4),
      NameHasExpired: BigInt(5),
      InvalidCredentialToken: BigInt(6),
    },
  };

  at(address: string): PubkeyResolverInstance {
    return new PubkeyResolverInstance(address);
  }

  tests = {
    removeNode: async (
      params: TestContractParams<
        PubkeyResolverTypes.Fields,
        { node: HexString; refundAddress: Address }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "removeNode", params);
    },
    newPubkeyInfo: async (
      params: TestContractParams<
        PubkeyResolverTypes.Fields,
        { node: HexString; payer: Address; pubkey: HexString }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "newPubkeyInfo", params);
    },
    setPubkey: async (
      params: TestContractParams<
        PubkeyResolverTypes.Fields,
        { node: HexString; pubkey: HexString }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "setPubkey", params);
    },
    getPubkey: async (
      params: TestContractParams<
        PubkeyResolverTypes.Fields,
        { node: HexString }
      >
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "getPubkey", params);
    },
  };
}

// Use this object to test and deploy the contract
export const PubkeyResolver = new Factory(
  Contract.fromJson(
    PubkeyResolverContractJson,
    "",
    "f830ba665c29246c2a622af6f674de1798415d1cc34e077e14556044d599bf32"
  )
);

// Use this class to interact with the blockchain
export class PubkeyResolverInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<PubkeyResolverTypes.State> {
    return fetchContractState(PubkeyResolver, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeNewPubkeyInfoCreatedEvent(
    options: EventSubscribeOptions<PubkeyResolverTypes.NewPubkeyInfoCreatedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      PubkeyResolver.contract,
      this,
      options,
      "NewPubkeyInfoCreated",
      fromCount
    );
  }

  subscribePubkeyUpdatedEvent(
    options: EventSubscribeOptions<PubkeyResolverTypes.PubkeyUpdatedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      PubkeyResolver.contract,
      this,
      options,
      "PubkeyUpdated",
      fromCount
    );
  }

  subscribePubkeyInfoRemovedEvent(
    options: EventSubscribeOptions<PubkeyResolverTypes.PubkeyInfoRemovedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      PubkeyResolver.contract,
      this,
      options,
      "PubkeyInfoRemoved",
      fromCount
    );
  }

  subscribeAllEvents(
    options: EventSubscribeOptions<
      | PubkeyResolverTypes.NewPubkeyInfoCreatedEvent
      | PubkeyResolverTypes.PubkeyUpdatedEvent
      | PubkeyResolverTypes.PubkeyInfoRemovedEvent
    >,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvents(
      PubkeyResolver.contract,
      this,
      options,
      fromCount
    );
  }

  methods = {
    getPubkey: async (
      params: PubkeyResolverTypes.CallMethodParams<"getPubkey">
    ): Promise<PubkeyResolverTypes.CallMethodResult<"getPubkey">> => {
      return callMethod(
        PubkeyResolver,
        this,
        "getPubkey",
        params,
        getContractByCodeHash
      );
    },
  };

  async multicall<Calls extends PubkeyResolverTypes.MultiCallParams>(
    calls: Calls
  ): Promise<PubkeyResolverTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      PubkeyResolver,
      this,
      calls,
      getContractByCodeHash
    )) as PubkeyResolverTypes.MultiCallResults<Calls>;
  }
}