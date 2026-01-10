# Wild Skies

Landing page for Wild Skies, a Hytale mod.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
```

Static files output to `out/`

## Docker

```bash
# Build and run
docker compose up --build -d

# Stop
docker compose down
```

Runs on [http://localhost:3000](http://localhost:3000)

## Deploy to Nginx

```bash
# Build
npm run build

# Copy to server
/var/www/html/

Nginx config:

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri.html $uri/ /index.html;
    }

    location /_next/static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

```bash
sudo nginx -t && sudo systemctl reload nginx
```
