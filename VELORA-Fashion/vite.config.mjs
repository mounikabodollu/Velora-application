import { defineConfig } from 'vite';
import { resolve } from 'path';

const currentDir = import.meta.dirname || process.cwd();

export default defineConfig({
  server: {
    port: 5173,
    open: true
  },
  plugins: [
    {
      name: 'html-rewrite-middleware',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url.split('?')[0];
          if (url === '/collections') {
            req.url = '/collections.html';
          } else if (url === '/new-arrivals') {
            req.url = '/new-arrivals.html';
          }
          next();
        });
      }
    }
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(currentDir, 'index.html'),
        collections: resolve(currentDir, 'collections.html'),
        newArrivals: resolve(currentDir, 'new-arrivals.html')
      }
    }
  }
});
