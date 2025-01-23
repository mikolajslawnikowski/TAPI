export interface ResourceLinks {
  self: { href: string };
  [key: string]: { href: string };
}

export interface TransformedResource {
  _links: ResourceLinks;
}
