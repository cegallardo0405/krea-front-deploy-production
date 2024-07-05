/* empty css                         */
import { l as createComponent, m as renderTemplate, p as renderHead, q as renderComponent } from './astro/server_DwHqf-yc.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$DefaultLayout } from './DefaultLayout_nC3nGuma.mjs';
import { $ as $$Convocatorias2 } from './Convocatorias2_CgQqYCrB.mjs';

const $$Convocatorias = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Krea Proyectos - Convocatorias</title>${renderHead()}</head> ${renderComponent($$result, "DefaultLayout", $$DefaultLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Convocatorias2", $$Convocatorias2, {})} ` })} </html>`;
}, "C:/Users/carlo/Desktop/DEPLOY-PRODUCTION-KREA/krea-front-deploy-production/front/src/pages/convocatorias.astro", void 0);

const $$file = "C:/Users/carlo/Desktop/DEPLOY-PRODUCTION-KREA/krea-front-deploy-production/front/src/pages/convocatorias.astro";
const $$url = "/convocatorias";

export { $$Convocatorias as default, $$file as file, $$url as url };
