import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, f as renderHead, d as renderComponent, e as renderSlot, b as createAstro } from './astro/server_BNoKQkm8.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                        */

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="px-4 mx-auto max-w-7xl sm:px-6" data-astro-cid-5blmo7yk> <div class="relative pt-6 pb-16 sm:pb-24" data-astro-cid-5blmo7yk> <nav class="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global" data-astro-cid-5blmo7yk> <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0" data-astro-cid-5blmo7yk> <div class="flex items-center justify-between w-full md:w-auto" data-astro-cid-5blmo7yk> <a class="text-gradient" href="/" data-astro-cid-5blmo7yk>&lt;/&gt;Coder++
</a> <div class="flex items-center -mr-2 md:hidden" data-astro-cid-5blmo7yk> <button class="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-50 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50" type="button" aria-expanded="false" data-astro-cid-5blmo7yk> <span class="sr-only" data-astro-cid-5blmo7yk>Open main menu</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="w-6 h-6" data-astro-cid-5blmo7yk> <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-5blmo7yk></path> </svg> </button> </div> </div> </div> <div class="hidden md:flex md:space-x-10 list-none" data-astro-cid-5blmo7yk> <li data-astro-cid-5blmo7yk> <a href="/blog" class="inline-block rounded-lg bg-primary-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-primary-600 hover:bg-primary-700 hover:ring-primary-700" data-astro-cid-5blmo7yk>
Blog
</a> </li> <li data-astro-cid-5blmo7yk> <a href="/create-a-page" class="inline-block rounded-lg bg-primary-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-primary-600 hover:bg-primary-700 hover:ring-primary-700" data-astro-cid-5blmo7yk>
Create-a-page
</a> </li> </div> <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0" data-astro-cid-5blmo7yk> <div class="inline-flex rounded-full shadow" data-astro-cid-5blmo7yk></div> </div> </nav> </div> </div> `;
}, "/home/runner/work/CoderPlusPlus/CoderPlusPlus/src/components/Navbar.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, noNavbar } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${!noNavbar && renderTemplate`${renderComponent($$result, "Navbar", $$Navbar, {})}`} <main> ${renderSlot($$result, $$slots["default"])} </main>  </body> </html>`;
}, "/home/runner/work/CoderPlusPlus/CoderPlusPlus/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
