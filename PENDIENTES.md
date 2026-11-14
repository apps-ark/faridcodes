# Pendientes

## 2026-11-06 · Vercel no despliega al pushear a `main`

- **Qué está bloqueado:** los deploys automáticos. Los pushes a `main` (`a179db1`, `49b7a23`) no dispararon ningún deploy; el anterior era de hace 334 días. El artículo nuevo daba 500 hasta que se desplegó a mano.
- **Quién lo desbloquea:** Farid (owner del proyecto `faridmurzones-projects/faridcodes` en Vercel).
- **Intento del 2026-11-13:** `vercel git connect` desde la CLI falló con 400 («Failed to connect apps-ark/faridcodes to project»). El repo es público, hay permiso de admin en GitHub y la app de Vercel está instalada en la organización `apps-ark` con acceso a todos los repos, así que lo que falta está del lado de la cuenta de Vercel: probablemente no tiene vinculado un login de GitHub con acceso a `apps-ark`.
- **Paso:** en el navegador, Vercel → proyecto `faridcodes` → Settings → Git → Connect Git Repository → GitHub → elegir `apps-ark/faridcodes`, con `main` como branch de producción. Si la organización no aparece en la lista, usar «Add GitHub Account» en ese mismo diálogo y autorizar `apps-ark`. Mientras tanto, desplegar a mano: `vercel deploy --prod --yes` desde la raíz del repo.
- **Si no se hace:** cada artículo nuevo da 500 en producción hasta que alguien despliegue a mano.
