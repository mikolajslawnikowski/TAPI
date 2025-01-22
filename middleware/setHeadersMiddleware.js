const setHeaders = (req, res, next) => {
    res.set("Content-Type", "application/json");
    res.set("Cache-Control", "no-store");
    res.set("X-Powered-By", "Express");
    next();
  };
  
  export default setHeaders;
  