export interface Link {
  href: string;
}

export interface Links {
  self?: Link;
  [key: string]: Link | undefined;
}

export interface ApiResponse<T> {
  message?: string;
  data?: T;
  _links?: Links;
  error?: string;
  requiredFields?: Record<string, string>;
}
