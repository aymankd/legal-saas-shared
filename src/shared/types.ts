import {
  Resource,
  RESOURCE_AUTHORISATION_MAP,
  Speciality,
  SPECIALIZED_RESOURCE_AUTHORISATION_MAP,
  SpecializedResource,
} from "./config";

export type AuthorizationsInResource<T extends Resource | SpecializedResource> =
  T extends Resource
    ? (typeof RESOURCE_AUTHORISATION_MAP)[T]
    : T extends SpecializedResource
    ? (typeof SPECIALIZED_RESOURCE_AUTHORISATION_MAP)[T]
    : never;

export type AuthorizationsPerResource<
  T extends Resource | SpecializedResource
> = AuthorizationsInResource<T>[number];

export type NonSpecializedResourceAuthorizations = {
  [R in Resource]: `${R}_${AuthorizationsPerResource<R>}`;
}[Resource];

export type SpecializedResourceAuthorizations = {
  [R in keyof typeof SPECIALIZED_RESOURCE_AUTHORISATION_MAP]: `${Speciality}_${R}_${AuthorizationsPerResource<R>}`;
}[keyof typeof SPECIALIZED_RESOURCE_AUTHORISATION_MAP];

export type ResourceAuthorizations = NonSpecializedResourceAuthorizations | SpecializedResourceAuthorizations;