# Tunnel

Wrap your commands with cloudflare DNS and tunnel.

### Installation

```
$ cd packages/tunnel
$ pnpm run setup
```

### Usage

1. Add `cloudflared` section to your `package.json`;

```json
"cloudflared": {
  "name": "site-$USER",
  "hostname": "site-$USER.theintern.fun",
  "target": "http://localhost:3000"
},
```

2. Prefix your dev script

```json
"scripts": {
  "dev": "tupnpm exec tunnel next dev"
}
```

3. Run it

```sh
$ pnpm run dev # ✅ Launched a tunnel https://site-yash.theintern.fun -> http://localhost:3000
```
