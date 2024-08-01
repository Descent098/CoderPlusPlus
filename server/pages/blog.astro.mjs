/* empty css                                */
import { c as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_BNoKQkm8.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CNJYPtXc.mjs';
export { renderers } from '../renderers.mjs';

const $$Blog = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog" }, { "default": ($$result2) => renderTemplate`
WIP
` })}`;
}, "/home/runner/work/CoderPlusPlus/CoderPlusPlus/src/pages/blog.astro", void 0);

const $$file = "/home/runner/work/CoderPlusPlus/CoderPlusPlus/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Blog,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
