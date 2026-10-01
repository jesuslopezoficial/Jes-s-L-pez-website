# CLAUDE.md — Reglas de Deploy Obligatorias

## REGLAS DE GIT/DEPLOY (LEER ANTES DE CUALQUIER CAMBIO)

1. **NUNCA** `git push origin main` directo. SIEMPRE branch + PR.
2. **NUNCA** `vercel --prod` ni `vercel deploy --prod` manual.
3. Cada cambio: `git checkout -b feat/X origin/main` → push a la branch → `gh pr create` → review → merge → GitHub Actions auto-deploya.
4. Cuando el alias del dominio queda manual-pinned, cada merge requiere `vercel alias set <new-deployment> jesuslopezoficial.com` con pre-flight curl de paridad.
5. **SIEMPRE** verificar env vars con `vercel env pull /tmp/v.env` — nunca asumir que están configuradas.

## PROYECTO

- **Cliente**: Jesus López
- **Sitio**: jesuslopezoficial.com
- **Stack**: Next.js 15 App Router + TypeScript + Tailwind CSS + Framer Motion
- **Deploy**: Vercel (auto-deploy via GitHub Actions on merge to main)
- **DB**: Supabase (PR Auto-Pilot)
- **Email**: Resend API

## ENV VARS REQUERIDAS

```
RESEND_API_KEY=
ANTHROPIC_API_KEY=
NEXT_PUBLIC_SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
PR_AUTH_SECRET=
PR_AUTOPILOT_WEBHOOK_SECRET=
NEXT_PUBLIC_GA_ID=
```
