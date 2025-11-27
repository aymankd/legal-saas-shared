// Definition of the configuration of authorizations and resources and specialities
const authorisations = [
  "CREATE",
  "READ",
  "UPDATE",
  "DELETE",
  "EXPORT",
  "IMPORT",
] as const;

const resources = ["FACTURE", "AVOIR"] as const;
const specialized_resources = ["HEALTH_RECORD"] as const;

const specialities = [
  "GENERAL_PRACTITIONER",
  "DENTISTE",
  "PEDIATRICIAN",
] as const;

export type Authorisation = (typeof authorisations)[number];
export type Resource = (typeof resources)[number];
export type SpecializedResource = (typeof specialized_resources)[number];
export type Speciality = (typeof specialities)[number];

// the mapping of authorizations and resources and specialities

export const RESOURCE_AUTHORISATION_MAP = {
  FACTURE: ["CREATE", "READ", "UPDATE"],
  AVOIR: ["IMPORT", "EXPORT"],
} as const satisfies Record<Resource, Authorisation[]>;

export const SPECIALIZED_RESOURCE_AUTHORISATION_MAP = {
  HEALTH_RECORD: ["CREATE", "READ", "UPDATE", "DELETE", "EXPORT", "IMPORT"],
} as const satisfies Record<SpecializedResource, Authorisation[]>;
