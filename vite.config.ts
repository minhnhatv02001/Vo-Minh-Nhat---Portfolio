import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

// Custom plugin to serve local video & image assets with HTTP Range header support
function serveLocalMedia() {
  return {
    name: 'serve-local-media',
    configureServer(server: any) {
      server.middlewares.use((req: any, res: any, next: any) => {
        const decodedUrl = decodeURIComponent(req.url?.split('?')[0] || '');
        
        // Match /footage, /footage 2, /footage 3, /footage 4, /images, /references
        const matchedPrefix = ['/footage', '/footage 2', '/footage 3', '/footage 4', '/images', '/references'].find(
          prefix => decodedUrl.startsWith(prefix)
        );

        if (matchedPrefix) {
          const relativePath = decodedUrl.slice(1); // remove leading slash
          const filePath = path.join(__dirname, relativePath);

          if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            const stat = fs.statSync(filePath);
            const fileSize = stat.size;
            const ext = path.extname(filePath).toLowerCase();

            const mimeTypes: Record<string, string> = {
              '.mp4': 'video/mp4',
              '.mov': 'video/quicktime',
              '.webm': 'video/webm',
              '.jpg': 'image/jpeg',
              '.jpeg': 'image/jpeg',
              '.png': 'image/png',
              '.jfif': 'image/jpeg',
              '.webp': 'image/webp',
              '.svg': 'image/svg+xml',
            };

            const contentType = mimeTypes[ext] || 'application/octet-stream';
            const range = req.headers.range;

            if (range) {
              const parts = range.replace(/bytes=/, '').split('-');
              const start = parseInt(parts[0], 10);
              const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
              const chunksize = end - start + 1;
              const file = fs.createReadStream(filePath, { start, end });
              
              res.writeHead(206, {
                'Content-Range': `bytes ${start}-${end}/${fileSize}`,
                'Accept-Ranges': 'bytes',
                'Content-Length': chunksize,
                'Content-Type': contentType,
                'Access-Control-Allow-Origin': '*',
              });
              file.pipe(res);
              return;
            } else {
              res.writeHead(200, {
                'Content-Length': fileSize,
                'Content-Type': contentType,
                'Accept-Ranges': 'bytes',
                'Access-Control-Allow-Origin': '*',
              });
              fs.createReadStream(filePath).pipe(res);
              return;
            }
          }
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), serveLocalMedia()],
  server: {
    port: 5173,
    host: true,
  },
});
