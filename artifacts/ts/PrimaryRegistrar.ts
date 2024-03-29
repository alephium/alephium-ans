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
import { default as PrimaryRegistrarContractJson } from "../registrars/PrimaryRegistrar.ral.json";
import { getContractByCodeHash } from "./contracts";

// Custom types for the contract
export namespace PrimaryRegistrarTypes {
  export type Fields = {
    registrarOwner: Address;
    recordTemplateId: HexString;
    credentialTokenTemplateId: HexString;
    minRegistrationDuration: bigint;
  };

  export type State = ContractState<Fields>;

  export type NameRegisteredEvent = ContractEvent<{
    name: HexString;
    owner: Address;
    ttl: bigint;
  }>;
  export type NameRenewedEvent = ContractEvent<{
    name: HexString;
    ttl: bigint;
  }>;
}

class Factory extends ContractFactory<
  PrimaryRegistrarInstance,
  PrimaryRegistrarTypes.Fields
> {
  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as PrimaryRegistrarTypes.Fields;
  }

  eventIndex = { NameRegistered: 0, NameRenewed: 1 };
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

  at(address: string): PrimaryRegistrarInstance {
    return new PrimaryRegistrarInstance(address);
  }

  tests = {
    register: async (
      params: TestContractParams<
        PrimaryRegistrarTypes.Fields,
        { name: HexString; owner: Address; payer: Address; duration: bigint }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "register", params);
    },
    renew: async (
      params: TestContractParams<
        PrimaryRegistrarTypes.Fields,
        { name: HexString; payer: Address; duration: bigint }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "renew", params);
    },
    cost: async (
      params: TestContractParams<
        PrimaryRegistrarTypes.Fields,
        { duration: bigint }
      >
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "cost", params);
    },
    getCredentialTokenPath: async (
      params: TestContractParams<
        PrimaryRegistrarTypes.Fields,
        { name: HexString; caller: Address }
      >
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "getCredentialTokenPath", params);
    },
    mintCredentialToken: async (
      params: TestContractParams<
        PrimaryRegistrarTypes.Fields,
        { name: HexString; payer: Address }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "mintCredentialToken", params);
    },
    burnCredentialToken: async (
      params: TestContractParams<
        PrimaryRegistrarTypes.Fields,
        { name: HexString; payer: Address }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "burnCredentialToken", params);
    },
    preRegister: async (
      params: TestContractParams<
        PrimaryRegistrarTypes.Fields,
        { node: HexString; currentTs: bigint }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "preRegister", params);
    },
    withdraw: async (
      params: TestContractParams<
        PrimaryRegistrarTypes.Fields,
        { to: Address; amount: bigint }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "withdraw", params);
    },
    updateRegistrarOwner: async (
      params: TestContractParams<
        PrimaryRegistrarTypes.Fields,
        { newOwner: Address }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "updateRegistrarOwner", params);
    },
  };
}

// Use this object to test and deploy the contract
export const PrimaryRegistrar = new Factory(
  Contract.fromJson(
    PrimaryRegistrarContractJson,
    "",
    "2ff150df9d0eea8e2babccfdae15a3167ca3ed4d16cd3018bad9b4105805fe19"
  )
);

// Use this class to interact with the blockchain
export class PrimaryRegistrarInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<PrimaryRegistrarTypes.State> {
    return fetchContractState(PrimaryRegistrar, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeNameRegisteredEvent(
    options: EventSubscribeOptions<PrimaryRegistrarTypes.NameRegisteredEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      PrimaryRegistrar.contract,
      this,
      options,
      "NameRegistered",
      fromCount
    );
  }

  subscribeNameRenewedEvent(
    options: EventSubscribeOptions<PrimaryRegistrarTypes.NameRenewedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      PrimaryRegistrar.contract,
      this,
      options,
      "NameRenewed",
      fromCount
    );
  }

  subscribeAllEvents(
    options: EventSubscribeOptions<
      | PrimaryRegistrarTypes.NameRegisteredEvent
      | PrimaryRegistrarTypes.NameRenewedEvent
    >,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvents(
      PrimaryRegistrar.contract,
      this,
      options,
      fromCount
    );
  }
}
