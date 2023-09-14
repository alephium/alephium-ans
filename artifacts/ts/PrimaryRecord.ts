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
import { default as PrimaryRecordContractJson } from "../registrars/PrimaryRecord.ral.json";
import { getContractByCodeHash } from "./contracts";

// Custom types for the contract
export namespace PrimaryRecordTypes {
  export type Fields = {
    registrar: HexString;
    owner: Address;
    resolver: HexString;
    ttl: bigint;
    refundAddress: Address;
    recordTokenId: HexString;
  };

  export type State = ContractState<Fields>;

  export interface CallMethodTable {
    getOwner: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<Address>;
    };
    getResolver: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getRefundAddress: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<Address>;
    };
    getTTL: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getRecordTokenId: {
      params: Omit<CallContractParams<{}>, "args">;
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
  PrimaryRecordInstance,
  PrimaryRecordTypes.Fields
> {
  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as PrimaryRecordTypes.Fields;
  }

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

  at(address: string): PrimaryRecordInstance {
    return new PrimaryRecordInstance(address);
  }

  tests = {
    getOwner: async (
      params: Omit<
        TestContractParams<PrimaryRecordTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<Address>> => {
      return testMethod(this, "getOwner", params);
    },
    getResolver: async (
      params: Omit<
        TestContractParams<PrimaryRecordTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "getResolver", params);
    },
    getRefundAddress: async (
      params: Omit<
        TestContractParams<PrimaryRecordTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<Address>> => {
      return testMethod(this, "getRefundAddress", params);
    },
    getTTL: async (
      params: Omit<
        TestContractParams<PrimaryRecordTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "getTTL", params);
    },
    destroy: async (
      params: TestContractParams<PrimaryRecordTypes.Fields, { node: HexString }>
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "destroy", params);
    },
    setOwner: async (
      params: TestContractParams<
        PrimaryRecordTypes.Fields,
        { newOwner: Address }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "setOwner", params);
    },
    setResolver: async (
      params: TestContractParams<
        PrimaryRecordTypes.Fields,
        { newResolver: HexString }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "setResolver", params);
    },
    setTTL: async (
      params: TestContractParams<PrimaryRecordTypes.Fields, { newTTL: bigint }>
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "setTTL", params);
    },
    setRecordTokenId: async (
      params: TestContractParams<
        PrimaryRecordTypes.Fields,
        { newRecordTokenId: HexString }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "setRecordTokenId", params);
    },
    getRecordTokenId: async (
      params: Omit<
        TestContractParams<PrimaryRecordTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "getRecordTokenId", params);
    },
  };
}

// Use this object to test and deploy the contract
export const PrimaryRecord = new Factory(
  Contract.fromJson(
    PrimaryRecordContractJson,
    "",
    "1e790b6768b90c85668bcc837fabd84ed985066500ab390b834833fc9892d895"
  )
);

// Use this class to interact with the blockchain
export class PrimaryRecordInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<PrimaryRecordTypes.State> {
    return fetchContractState(PrimaryRecord, this);
  }

  methods = {
    getOwner: async (
      params?: PrimaryRecordTypes.CallMethodParams<"getOwner">
    ): Promise<PrimaryRecordTypes.CallMethodResult<"getOwner">> => {
      return callMethod(
        PrimaryRecord,
        this,
        "getOwner",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getResolver: async (
      params?: PrimaryRecordTypes.CallMethodParams<"getResolver">
    ): Promise<PrimaryRecordTypes.CallMethodResult<"getResolver">> => {
      return callMethod(
        PrimaryRecord,
        this,
        "getResolver",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getRefundAddress: async (
      params?: PrimaryRecordTypes.CallMethodParams<"getRefundAddress">
    ): Promise<PrimaryRecordTypes.CallMethodResult<"getRefundAddress">> => {
      return callMethod(
        PrimaryRecord,
        this,
        "getRefundAddress",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getTTL: async (
      params?: PrimaryRecordTypes.CallMethodParams<"getTTL">
    ): Promise<PrimaryRecordTypes.CallMethodResult<"getTTL">> => {
      return callMethod(
        PrimaryRecord,
        this,
        "getTTL",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getRecordTokenId: async (
      params?: PrimaryRecordTypes.CallMethodParams<"getRecordTokenId">
    ): Promise<PrimaryRecordTypes.CallMethodResult<"getRecordTokenId">> => {
      return callMethod(
        PrimaryRecord,
        this,
        "getRecordTokenId",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  async multicall<Calls extends PrimaryRecordTypes.MultiCallParams>(
    calls: Calls
  ): Promise<PrimaryRecordTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      PrimaryRecord,
      this,
      calls,
      getContractByCodeHash
    )) as PrimaryRecordTypes.MultiCallResults<Calls>;
  }
}
