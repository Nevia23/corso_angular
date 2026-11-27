import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  /* {
    path: 'contact',
    renderMode: RenderMode.Client
  }
  {
    path: 'contact/:id',
    renderMode: RenderMode.Client
  } */
  {
    path: '**',
    renderMode: RenderMode.Client
  }
];
