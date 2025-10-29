/*
 Sample Only (Non-Turnkey)
 License: BUSL-1.1
*/

export type HttpConfig = { url: string; method?: 'GET'|'POST'|'PUT'|'DELETE'; headers?: Record<string,string>; data?: unknown };

export interface HttpClient {
  request<T = unknown>(config: HttpConfig): Promise<{ status: number; data: T }>;
}


