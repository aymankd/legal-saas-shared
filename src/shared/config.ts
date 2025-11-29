import { OptionsOfArray } from "./types";

// Definition of the configuration of authorizations and resources and specialities
const _authorisations = [
  "CREATE",
  "READ",
  "UPDATE",
  "DELETE",
  "EXPORT",
  "IMPORT",
] as const;

const _resources = ["FACTURE", "AVOIR"] as const;
const _specialized_resources = ["HEALTH_RECORD"] as const;

const _specialities = [
  "GENERAL_PRACTITIONER",
  "DENTISTE",
  "PEDIATRICIAN",
] as const;

export type Authorisation = OptionsOfArray<typeof _authorisations>;
export type Resource = OptionsOfArray<typeof _resources>;
export type SpecializedResource = OptionsOfArray<typeof _specialized_resources>;
export type Speciality = OptionsOfArray<typeof _specialities>;

// the mapping of authorizations and resources and specialities

export const RESOURCE_AUTHORISATION_MAP = {
  FACTURE: ["CREATE", "READ", "UPDATE"],
  AVOIR: ["IMPORT", "EXPORT"],
} as const satisfies Record<Resource, Authorisation[]>;

export const SPECIALIZED_RESOURCE_AUTHORISATION_MAP = {
  HEALTH_RECORD: ["CREATE", "READ", "UPDATE", "DELETE", "EXPORT", "IMPORT"],
} as const satisfies Record<SpecializedResource, Authorisation[]>;
