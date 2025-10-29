/*
 Sample Only (Non-Turnkey)
 License: BUSL-1.1

 Express middleware excerpt to inject X-Request-Id. No app bootstrap.
*/

export function requestIdMiddleware(req: any, res: any, next: any) {
  const id = (global as any).crypto?.randomUUID?.() || Math.random().toString(36).slice(2);
  res.locals = res.locals || {};
  res.locals.requestId = id;
  res.setHeader('X-Request-Id', id);
  next();
}


