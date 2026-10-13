# SLS Car Protection Prototype

واجهة عربية/إنجليزية تجريبية لـ SLS | Car Paint Protection Film في الشيخ زايد، بهوية **Industrial Performance Lab** مختلفة عن مشروع العيادة السابق.

## الهوية

- Graphite / near-black surfaces with bronze and safety-orange scan accents.
- Manrope للـ UI والإنجليزية، وIBM Plex Sans Arabic للنص العربي.
- Lenis للـ smooth scrolling مع fallback تلقائي عند تفعيل `prefers-reduced-motion`.
- تفاعل paint-scan في قسم الحماية يوضح الانتقال من قبل الحماية إلى التشطيب المحمي.

## الصور

- `public/images/sls-logo.png`: اللوجو المقدم من SLS، مستخدم كما هو.
- `hero-car-3d.png`: transparent premium automotive CGI concept generated specifically for the layered 2.5D hero.
- `hero-garage.png`, `ppf-application.png`, `paint-protection-detail.png`, `before-protection.png`, `after-protection.png`: concept imagery مولدة للـ prototype، وليست صورًا موثقة لتنفيذات فعلية.

## التشغيل

```bash
npm install
npm run dev
```

أوامر التحقق:

```bash
npm test
npm run typecheck
npm run lint
npm run build
```

بيانات المكان والاتصال المعروضة في النموذج مأخوذة من listing عام على Google Maps، ويجب مراجعتها مع العميل قبل النشر النهائي.
