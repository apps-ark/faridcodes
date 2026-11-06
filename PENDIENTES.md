# Pendientes

## 2026-11-06 · Vercel no despliega al pushear a `main`

- **Qué está bloqueado:** los deploys automáticos. Los pushes a `main` (`a179db1`, `49b7a23`) no dispararon ningún deploy; el anterior era de hace 334 días. El artículo nuevo daba 500 hasta que se desplegó a mano.
- **Quién lo desbloquea:** Farid (owner del proyecto `faridmurzones-projects/faridcodes` en Vercel).
- **Paso:** Vercel → proyecto `faridcodes` → Settings → Git → conectar el repo `apps-ark/faridcodes` con la branch de producción `main`. Mientras tanto, desplegar a mano: `vercel deploy --prod --yes` desde la raíz del repo.
- **Si no se hace:** cada artículo nuevo da 500 en producción hasta que alguien despliegue a mano.
