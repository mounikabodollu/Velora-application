/**
 * VELORA Development Server (Zero-Dependency)
 * Serves index.html, collections.html, and new-arrivals.html with clean URL routing.
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2'
};

const server = http.createServer((req, res) => {
  let cleanUrl = req.url.split('?')[0];

  // URL rewrite routing
  if (cleanUrl === '/' || cleanUrl === '') {
    cleanUrl = '/index.html';
  } else if (cleanUrl === '/collections') {
    cleanUrl = '/collections.html';
  } else if (cleanUrl === '/new-arrivals') {
    cleanUrl = '/new-arrivals.html';
  }

  let filePath = path.join(__dirname, cleanUrl);

  // If path doesn't have an extension, try appending .html
  if (!path.extname(filePath) && fs.existsSync(filePath + '.html')) {
    filePath = filePath + '.html';
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1><p>The requested file does not exist.</p>');
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`\n✦ VELORA Luxury Fashion & Lifestyle Maison`);
  console.log(`✦ Development Server is live at: http://localhost:${PORT}`);
  console.log(`✦ Routes:`);
  console.log(`   - Home:         http://localhost:${PORT}/`);
  console.log(`   - Collections:  http://localhost:${PORT}/collections`);
  console.log(`   - New Arrivals: http://localhost:${PORT}/new-arrivals`);
  console.log(`✦ Press Ctrl + C to stop the server.\n`);
});
