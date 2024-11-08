// src/types/routes.ts
export type AppRoute = 
  | '/'
  | '/about'
  | '/portfolio'
  | '/portfolio/:projectId'
  | '/contact'
  | '*';

export interface RouteConfig {
  path: AppRoute;
  component: React.ComponentType;
  exact?: boolean;
}