/* empty css                                */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BNoKQkm8.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CNJYPtXc.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Coder++", "noNavbar": true, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative px-6 lg:px-8" data-astro-cid-j7pv25f6> <div class="h-100 mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <h1 class="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl dark:text-gray-100" data-astro-cid-j7pv25f6>
Welcome to <span class="text-gradient" data-astro-cid-j7pv25f6>&lt;/&gt;Coder++</span> </h1> <p class="mt-6 text-lg leading-8 text-gray-600 sm:text-center dark:text-gray-200" data-astro-cid-j7pv25f6>
It's like <a class="text-primary-400" href="http://kieranwood.ca/Coder" target="_blank" rel="noopener noreferrer" data-astro-cid-j7pv25f6>Coder</a>, but better!
</p> <div class="mt-8 flex gap-x-4 sm:justify-center" data-astro-cid-j7pv25f6> <a href="./create-a-page" class="inline-block rounded-lg bg-primary-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-primary-600 hover:bg-primary-700 hover:ring-primary-700" data-astro-cid-j7pv25f6>
Create-a-Page
<span aria-hidden="true" class="text-primary-200" data-astro-cid-j7pv25f6>→</span> </a> <a href="./blog" class="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 ring-1 ring-gray-900/10 hover:ring-gray-900/20" data-astro-cid-j7pv25f6>
Blog
<span aria-hidden="true" class="text-gray-400" data-astro-cid-j7pv25f6>→</span> </a> </div> </div> </div> </div> </div> ` })} `;
}, "/home/runner/work/CoderPlusPlus/CoderPlusPlus/src/pages/index.astro", void 0);

const $$file = "/home/runner/work/CoderPlusPlus/CoderPlusPlus/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
