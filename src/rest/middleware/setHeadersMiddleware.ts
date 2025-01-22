import { Request, Response, NextFunction } from "express";

const setHeaders = (_req: Request, res: Response, next: NextFunction): void => {
  res.set("Content-Type", "application/json");
  res.set("Cache-Control", "no-store");
  res.set("X-Powered-By", "Express");
  next();
};

export default setHeaders;
