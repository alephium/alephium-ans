/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { RunScriptResult, DeployContractExecutionResult } from "@alephium/cli";
import { NetworkId } from "@alephium/web3";
import {
  Record,
  RecordInstance,
  ANSRegistry,
  ANSRegistryInstance,
  AddressInfo,
  AddressInfoInstance,
  NameInfo,
  NameInfoInstance,
  PubkeyInfo,
  PubkeyInfoInstance,
  DefaultResolver,
  DefaultResolverInstance,
  Registrar,
  RegistrarInstance,
} from ".";
import { default as devnetDeployments } from "../.deployments.devnet.json";

export type Deployments = {
  deployerAddress: string;
  contracts: {
    Record: DeployContractExecutionResult<RecordInstance>;
    ANSRegistry: DeployContractExecutionResult<ANSRegistryInstance>;
    AddressInfo: DeployContractExecutionResult<AddressInfoInstance>;
    NameInfo: DeployContractExecutionResult<NameInfoInstance>;
    PubkeyInfo: DeployContractExecutionResult<PubkeyInfoInstance>;
    DefaultResolver: DeployContractExecutionResult<DefaultResolverInstance>;
    Registrar: DeployContractExecutionResult<RegistrarInstance>;
  };
  scripts: { SetupANS: RunScriptResult };
};

function toDeployments(json: any): Deployments {
  const contracts = {
    Record: {
      ...json.contracts.Record,
      contractInstance: Record.at(
        json.contracts.Record.contractInstance.address
      ),
    },
    ANSRegistry: {
      ...json.contracts.ANSRegistry,
      contractInstance: ANSRegistry.at(
        json.contracts.ANSRegistry.contractInstance.address
      ),
    },
    AddressInfo: {
      ...json.contracts.AddressInfo,
      contractInstance: AddressInfo.at(
        json.contracts.AddressInfo.contractInstance.address
      ),
    },
    NameInfo: {
      ...json.contracts.NameInfo,
      contractInstance: NameInfo.at(
        json.contracts.NameInfo.contractInstance.address
      ),
    },
    PubkeyInfo: {
      ...json.contracts.PubkeyInfo,
      contractInstance: PubkeyInfo.at(
        json.contracts.PubkeyInfo.contractInstance.address
      ),
    },
    DefaultResolver: {
      ...json.contracts.DefaultResolver,
      contractInstance: DefaultResolver.at(
        json.contracts.DefaultResolver.contractInstance.address
      ),
    },
    Registrar: {
      ...json.contracts.Registrar,
      contractInstance: Registrar.at(
        json.contracts.Registrar.contractInstance.address
      ),
    },
  };
  return {
    ...json,
    contracts: contracts as Deployments["contracts"],
  };
}

export function loadDeployments(
  networkId: NetworkId,
  deployerAddress?: string
): Deployments {
  const deployments = networkId === "devnet" ? devnetDeployments : undefined;
  if (deployments === undefined) {
    throw Error("The contract has not been deployed to the " + networkId);
  }
  const allDeployments = Array.isArray(deployments)
    ? deployments
    : [deployments];
  if (deployerAddress === undefined) {
    if (allDeployments.length > 1) {
      throw Error(
        "The contract has been deployed multiple times on " +
          networkId +
          ", please specify the deployer address"
      );
    } else {
      return toDeployments(allDeployments[0]);
    }
  }
  const result = allDeployments.find(
    (d) => d.deployerAddress === deployerAddress
  );
  if (result === undefined) {
    throw Error("The contract deployment result does not exist");
  }
  return toDeployments(result);
}
