# Deployment Guide - Miendo

Panduan deployment yang aman untuk aplikasi Miendo.

## Prerequisites

1. ✅ Node.js 18+ terinstall
2. ✅ npm atau yarn terinstall
3. ✅ Git terinstall
4. ✅ Account di platform hosting (Vercel/Netlify/AWS/dll)

## Security Checklist Sebelum Deploy

### 1. Environment Variables
```bash
# Copy env.example ke .env.production
cp env.example .env.production

# Edit dengan nilai production yang sesuai
nano .env.production
```

**Penting:** Jangan commit file `.env.production` ke Git!

### 2. Build Production
```bash
# Install dependencies
npm install

# Run security audit
npm run security:check

# Build untuk production
npm run build

# Test production build locally
npm run preview
```

### 3. Security Headers Check
Pastikan file berikut ada:
- ✅ `_headers` (untuk Netlify/Cloudflare Pages)
- ✅ `vercel.json` (untuk Vercel)
- ✅ `netlify.toml` (untuk Netlify)

## Deployment ke Berbagai Platform

### Option 1: Vercel (Recommended)

**Via CLI:**
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

**Via Dashboard:**
1. Login ke [vercel.com](https://vercel.com)
2. Import repository GitHub
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Add environment variables di dashboard
5. Deploy!

**Security Headers:** Otomatis terload dari `vercel.json` ✅

---

### Option 2: Netlify

**Via CLI:**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

**Via Dashboard:**
1. Login ke [netlify.com](https://netlify.com)
2. New site from Git
3. Connect repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Add environment variables
6. Deploy site

**Security Headers:** Otomatis terload dari `netlify.toml` ✅

---

### Option 3: Cloudflare Pages

```bash
# Install Wrangler CLI
npm i -g wrangler

# Login
wrangler login

# Deploy
wrangler pages deploy dist
```

**Security Headers:** Upload file `_headers` ✅

---

### Option 4: AWS S3 + CloudFront

```bash
# Build
npm run build

# Sync ke S3
aws s3 sync dist/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

**Security Headers:** Configure di CloudFront response headers policy

---

### Option 5: Docker

```dockerfile
# Dockerfile sudah tersedia
docker build -t miendo .
docker run -p 80:80 miendo
```

## Post-Deployment Security Checklist

### 1. Test Security Headers
```bash
curl -I https://your-domain.com
```

Pastikan headers berikut ada:
- ✅ `X-Content-Type-Options: nosniff`
- ✅ `X-Frame-Options: DENY`
- ✅ `X-XSS-Protection: 1; mode=block`
- ✅ `Strict-Transport-Security`
- ✅ `Content-Security-Policy`

### 2. Test dengan Security Tools

**Online Tools:**
- [Security Headers](https://securityheaders.com/) - Check security headers
- [SSL Labs](https://www.ssllabs.com/ssltest/) - Test SSL/TLS
- [Mozilla Observatory](https://observatory.mozilla.org/) - Overall security scan

**CLI Tools:**
```bash
# Test dengan curl
curl -I https://your-domain.com

# Test dengan httpie
http HEAD https://your-domain.com
```

### 3. Enable HTTPS

**Vercel/Netlify:** HTTPS otomatis enabled ✅

**Custom Domain:**
1. Add custom domain di dashboard
2. Update DNS records (A/CNAME)
3. SSL certificate otomatis di-provision
4. Enable force HTTPS redirect

### 4. Configure DNS Security

**Recommended DNS Records:**
```
# CAA Record (Certificate Authority Authorization)
@ CAA 0 issue "letsencrypt.org"
@ CAA 0 issuewild "letsencrypt.org"

# SPF Record (if sending emails)
@ TXT "v=spf1 -all"

# DMARC Record
_dmarc TXT "v=DMARC1; p=reject; rua=mailto:security@yourdomain.com"
```

### 5. Setup Monitoring

**Error Tracking:**
```bash
# Install Sentry (optional)
npm install @sentry/react

# Configure in src/main.tsx
```

**Uptime Monitoring:**
- [UptimeRobot](https://uptimerobot.com/) (Free)
- [Pingdom](https://www.pingdom.com/)
- [StatusCake](https://www.statuscake.com/)

### 6. Rate Limiting

**Cloudflare (Recommended):**
- Enable "Under Attack Mode" saat diperlukan
- Configure rate limiting rules
- Enable Bot Fight Mode

**Vercel/Netlify:**
- Built-in DDoS protection ✅
- Consider Cloudflare sebagai proxy tambahan

## Environment Variables untuk Production

```bash
# Application
VITE_APP_NAME=Miendo
VITE_APP_URL=https://miendo.com

# API (if applicable)
# VITE_API_URL=https://api.miendo.com
# VITE_API_KEY=production_key_here

# Analytics (optional)
# VITE_GA_TRACKING_ID=G-XXXXXXXXXX
# VITE_SENTRY_DSN=https://xxx@sentry.io/xxx

# Security
VITE_SECURE_COOKIES=true
```

## Backup Strategy

1. **Source Code:** Already on GitHub ✅
2. **Environment Variables:** Save securely di password manager
3. **Database:** Regular backups (jika ada)
4. **Media Files:** S3 versioning atau backup berkala

## Rollback Strategy

**Vercel:**
```bash
vercel rollback
```

**Netlify:**
```bash
netlify rollback
```

**Manual:**
```bash
# Revert ke commit sebelumnya
git revert HEAD
git push origin main
```

## Security Maintenance

### Weekly:
- ✅ Check uptime monitoring
- ✅ Review error logs

### Monthly:
- ✅ Run `npm audit`
- ✅ Update dependencies: `npm update`
- ✅ Review security advisories

### Quarterly:
- ✅ Run full security scan
- ✅ Review and update security policies
- ✅ Test disaster recovery

## Performance Optimization

```bash
# Analyze bundle size
npm run build

# Check for large dependencies
npm install -g webpack-bundle-analyzer
npx webpack-bundle-analyzer dist/stats.json
```

## Troubleshooting

### Build fails
```bash
# Clear cache
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

### Security headers not working
1. Check file `_headers` / `vercel.json` / `netlify.toml`
2. Clear CDN cache
3. Wait 5-10 minutes untuk propagasi
4. Test dengan `curl -I`

### CORS errors
1. Check Content-Security-Policy header
2. Pastikan API domain di whitelist
3. Add proper CORS headers di backend

## Support

Jika ada masalah:
1. Check SECURITY.md
2. Review deployment logs
3. Contact: support@lintasinovasiglobal.com

---

**Status:** ✅ Ready for Production Deployment

**Last Updated:** January 5, 2026

