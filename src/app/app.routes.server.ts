import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
   path : "address/:CartId",
   renderMode: RenderMode.Server
  },
  {
   path : "ProductDetails/:id",
   renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
