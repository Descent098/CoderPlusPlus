/* empty css                                */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, b as createAstro, d as renderComponent } from '../chunks/astro/server_BNoKQkm8.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CNJYPtXc.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Tabs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tabs;
  const { tab1Label, tab2Label, tab3Label, tab4Label, tab5Label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div x-data="{ activeTab:  0 }"> <div class="border-b border-b-gray-100"> <ul class="-mb-px flex items-center gap-4 text-sm font-medium"> ${tab1Label && renderTemplate`<li> <a @click="activeTab = 0" :class="{ 'relative text-primary-700  after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-primary-700': activeTab === 0 }" class="inline-flex cursor-pointer items-center gap-2 px-1 py-3 text-gray-500 hover:text-primary-700"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"> <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" clip-rule="evenodd"></path> </svg> ${tab1Label}</a> </li>`} ${tab2Label && renderTemplate`<li> <a @click="activeTab = 1" :class="{ 'relative text-primary-700  after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-primary-700': activeTab === 1 }" class="inline-flex cursor-pointer items-center gap-2 px-1 py-3 text-gray-500 hover:text-primary-700"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"> <path fill-rule="evenodd" d="M3.5 2A1.5 1.5 0 002 3.5V15a3 3 0 106 0V3.5A1.5 1.5 0 006.5 2h-3zm11.753 6.99L9.5 14.743V6.257l1.51-1.51a1.5 1.5 0 012.122 0l2.121 2.121a1.5 1.5 0 010 2.122zM8.364 18H16.5a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1.5-1.5h-2.136l-6 6zM5 16a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path> </svg> ${tab2Label}</a> </li>`} ${tab3Label && renderTemplate`<li> <a @click="activeTab = 2" :class="{ 'relative text-primary-700  after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-primary-700': activeTab === 2 }" class="inline-flex cursor-pointer items-center gap-2 px-1 py-3 text-gray-500 hover:text-primary-700"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"> <path fill-rule="evenodd" d="M10 2a6 6 0 00-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 00.515 1.076 32.91 32.91 0 003.256.508 3.5 3.5 0 006.972 0 32.903 32.903 0 003.256-.508.75.75 0 00.515-1.076A11.448 11.448 0 0116 8a6 6 0 00-6-6zM8.05 14.943a33.54 33.54 0 003.9 0 2 2 0 01-3.9 0z" clip-rule="evenodd"></path> </svg> ${tab3Label} <span class="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-500"> 8 </span></a> </li>`} ${tab4Label && renderTemplate`<li> <a @click="activeTab = 3" :class="{ 'relative text-primary-700  after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-primary-700': activeTab === 3 }" class="inline-flex cursor-pointer items-center gap-2 px-1 py-3 text-gray-500 hover:text-primary-700"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"> <path fill-rule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z" clip-rule="evenodd"></path> </svg> ${tab4Label}</a> </li>`} ${tab5Label && renderTemplate`<li> <a @click="activeTab = 4" :class="{ 'relative text-primary-700  after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-primary-700': activeTab === 4 }" class="inline-flex cursor-pointer items-center gap-2 px-1 py-3 text-gray-500 hover:text-primary-700"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"> <path fill-rule="evenodd" d="M10.362 1.093a.75.75 0 00-.724 0L2.523 5.018 10 9.143l7.477-4.125-7.115-3.925zM18 6.443l-7.25 4v8.25l6.862-3.786A.75.75 0 0018 14.25V6.443zm-8.75 12.25v-8.25l-7.25-4v7.807a.75.75 0 00.388.657l6.862 3.786z" clip-rule="evenodd"></path> </svg> ${tab5Label}</a> </li>`} </ul> </div> <div class="py-3"> <div :class="{ '!block': activeTab === 0 }" x-show.transition.in.opacity.duration.600="activeTab === 0" class="hidden">${renderSlot($$result, $$slots["tab1"])}</div> <div :class="{ '!block': activeTab === 1 }" x-show.transition.in.opacity.duration.600="activeTab === 1" class="hidden">${renderSlot($$result, $$slots["tab2"])}</div> <div :class="{ '!block': activeTab === 2 }" x-show.transition.in.opacity.duration.600="activeTab === 2" class="hidden">${renderSlot($$result, $$slots["tab3"])}</div> <div :class="{ '!block': activeTab === 3 }" x-show.transition.in.opacity.duration.600="activeTab === 3" class="hidden">${renderSlot($$result, $$slots["tab4"])}</div> <div :class="{ '!block': activeTab === 4 }" x-show.transition.in.opacity.duration.600="activeTab === 4" class="hidden">${renderSlot($$result, $$slots["tab5"])}</div> </div> </div>`;
}, "/home/runner/work/CoderPlusPlus/CoderPlusPlus/src/components/Tabs.astro", void 0);

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
const $$Editor = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", `<div id="monaco" class="h-screen"></div> <script src="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs/loader.min.js"><\/script> <script src="https://unpkg.com/emmet-monaco-es/dist/emmet-monaco.min.js"><\/script> <script>
    const template = \`
&lt;!DOCTYPE html&gt;
    &lt;html lang="en"&gt;
    &lt;head&gt;
        &lt;meta charset="UTF-8"&gt;
        &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
        &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
        &lt;title&gt;Enter a title! | Blog&lt;/title&gt;
        &lt;!--Bootstrap--&gt;
        &lt;link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"&gt;
        &lt;link rel="shortcut icon" href="../img/favicon.png" type="image/x-icon"&gt;
        
        &lt;!-- Highlightjs--&gt;
        &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/default.min.css"&gt;
        &lt;style&gt;
            .img-fluid{
                border-radius: 5%;
            }
        &lt;/style&gt;
    &lt;/head&gt;&lt;body&gt;

        &lt;!-- Start of Navbar--&gt;
        &lt;nav class="navbar navbar-expand-lg navbar-light bg-light"&gt;
            &lt;div class="container-fluid"&gt;
                &lt;a class="navbar-brand" href="../index.html"&gt;		
                &lt;p style="font-size:1em; font-weight:bold;display:inline;"&gt;&lt;/&gt;&lt;/p&gt;
                Coder!  
                &lt;/a&gt;
    
                &lt;button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"&gt;
                &lt;span class="navbar-toggler-icon"&gt;&lt;/span&gt;
                &lt;/button&gt;
                &lt;div class="collapse navbar-collapse" id="navbarNavDropdown"&gt;
                &lt;ul class="navbar-nav"&gt;
                    &lt;li class="nav-item"&gt;
                        &lt;a class="nav-link active" aria-current="page" href="../index.html"&gt;Home&lt;/a&gt;
                    &lt;/li&gt;
                    &lt;li class="nav-item"&gt;
                        &lt;a class="nav-link" href="../blog.html"&gt;Blog&lt;/a&gt;
                    &lt;/li&gt;
                    &lt;li class="nav-item"&gt;
                        &lt;a class="nav-link" href="../create-a-page.html"&gt;Create-a-page&lt;/a&gt;
                    &lt;/li&gt;
                &lt;/ul&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/nav&gt;
        &lt;!-- End of Navbar--&gt;    &lt;!-- Start of header--&gt;
    &lt;div class="container col-xxl-8 px-4 py-5"&gt;
        &lt;div class="row flex-lg-row-reverse align-items-center g-5 py-5"&gt;
            &lt;div class="col-10 col-sm-8 col-lg-6"&gt;
                &lt;img src="https://images.unsplash.com/photo-1589101545496-c5dcd131213f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1058&q=80" class="d-block mx-lg-auto img-fluid" alt="create-a-page" width="700" height="500" loading="lazy"&gt;
            &lt;/div&gt;
            &lt;div class="col-lg-6"&gt;
                &lt;h1 class="display-5 fw-bold lh-1 mb-3"&gt;{{title}}&lt;/h1&gt;
                &lt;p class="lead"&gt;{{description}}&lt;/p&gt;
                {{content}}
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;hr&gt;
    &lt;/div&gt;
    &lt;!-- End of header--&gt;&lt;!-- Start of content --&gt;
        &lt;article class="mb-4"&gt;
            &lt;div class="container px-4 px-lg-5"&gt;
                &lt;div class="row gx-4 gx-lg-5 justify-content-center"&gt;
                    &lt;div class="col-md-10 col-lg-8 col-xl-7"&gt;
                        &lt;!-- Blog content goes Below--&gt;&lt;p&gt;Put your content here!&lt;/p&gt;
        &lt;!-- Blog content goes Above--&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/article&gt;
&lt;!-- End of content--&gt;

&lt;/body&gt;

&lt;!--Bootstrap--&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"&gt;&lt;/script&gt;


&lt;!-- Highlight js--&gt;
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js"&gt;&lt;/script&gt;
&lt;script&gt;hljs.highlightAll();&lt;/script&gt;

&lt;/html&gt;
\`.replaceAll("&lt;","<").replaceAll("&gt;",">")
<\/script> <script>
// Setup Monaco
    require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs',automaticLayout: true }});
    require(["vs/editor/editor.main"], () => {

    emmetMonaco.emmetHTML(monaco)

    window.templateEditor = monaco.editor.create(document.getElementById("monaco"), {
        value:template,
        language:"html",
        automaticLayout: true,
	    theme:"vs-dark",
        fontSize: 24
        });
    })
<\/script>`], ["", `<div id="monaco" class="h-screen"></div> <script src="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs/loader.min.js"><\/script> <script src="https://unpkg.com/emmet-monaco-es/dist/emmet-monaco.min.js"><\/script> <script>
    const template = \\\`
&lt;!DOCTYPE html&gt;
    &lt;html lang="en"&gt;
    &lt;head&gt;
        &lt;meta charset="UTF-8"&gt;
        &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
        &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
        &lt;title&gt;Enter a title! | Blog&lt;/title&gt;
        &lt;!--Bootstrap--&gt;
        &lt;link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"&gt;
        &lt;link rel="shortcut icon" href="../img/favicon.png" type="image/x-icon"&gt;
        
        &lt;!-- Highlightjs--&gt;
        &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/default.min.css"&gt;
        &lt;style&gt;
            .img-fluid{
                border-radius: 5%;
            }
        &lt;/style&gt;
    &lt;/head&gt;&lt;body&gt;

        &lt;!-- Start of Navbar--&gt;
        &lt;nav class="navbar navbar-expand-lg navbar-light bg-light"&gt;
            &lt;div class="container-fluid"&gt;
                &lt;a class="navbar-brand" href="../index.html"&gt;		
                &lt;p style="font-size:1em; font-weight:bold;display:inline;"&gt;&lt;/&gt;&lt;/p&gt;
                Coder!  
                &lt;/a&gt;
    
                &lt;button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"&gt;
                &lt;span class="navbar-toggler-icon"&gt;&lt;/span&gt;
                &lt;/button&gt;
                &lt;div class="collapse navbar-collapse" id="navbarNavDropdown"&gt;
                &lt;ul class="navbar-nav"&gt;
                    &lt;li class="nav-item"&gt;
                        &lt;a class="nav-link active" aria-current="page" href="../index.html"&gt;Home&lt;/a&gt;
                    &lt;/li&gt;
                    &lt;li class="nav-item"&gt;
                        &lt;a class="nav-link" href="../blog.html"&gt;Blog&lt;/a&gt;
                    &lt;/li&gt;
                    &lt;li class="nav-item"&gt;
                        &lt;a class="nav-link" href="../create-a-page.html"&gt;Create-a-page&lt;/a&gt;
                    &lt;/li&gt;
                &lt;/ul&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/nav&gt;
        &lt;!-- End of Navbar--&gt;    &lt;!-- Start of header--&gt;
    &lt;div class="container col-xxl-8 px-4 py-5"&gt;
        &lt;div class="row flex-lg-row-reverse align-items-center g-5 py-5"&gt;
            &lt;div class="col-10 col-sm-8 col-lg-6"&gt;
                &lt;img src="https://images.unsplash.com/photo-1589101545496-c5dcd131213f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1058&q=80" class="d-block mx-lg-auto img-fluid" alt="create-a-page" width="700" height="500" loading="lazy"&gt;
            &lt;/div&gt;
            &lt;div class="col-lg-6"&gt;
                &lt;h1 class="display-5 fw-bold lh-1 mb-3"&gt;{{title}}&lt;/h1&gt;
                &lt;p class="lead"&gt;{{description}}&lt;/p&gt;
                {{content}}
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;hr&gt;
    &lt;/div&gt;
    &lt;!-- End of header--&gt;&lt;!-- Start of content --&gt;
        &lt;article class="mb-4"&gt;
            &lt;div class="container px-4 px-lg-5"&gt;
                &lt;div class="row gx-4 gx-lg-5 justify-content-center"&gt;
                    &lt;div class="col-md-10 col-lg-8 col-xl-7"&gt;
                        &lt;!-- Blog content goes Below--&gt;&lt;p&gt;Put your content here!&lt;/p&gt;
        &lt;!-- Blog content goes Above--&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/article&gt;
&lt;!-- End of content--&gt;

&lt;/body&gt;

&lt;!--Bootstrap--&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"&gt;&lt;/script&gt;


&lt;!-- Highlight js--&gt;
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js"&gt;&lt;/script&gt;
&lt;script&gt;hljs.highlightAll();&lt;/script&gt;

&lt;/html&gt;
\\\`.replaceAll("&lt;","<").replaceAll("&gt;",">")
<\/script> <script>
// Setup Monaco
    require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs',automaticLayout: true }});
    require(["vs/editor/editor.main"], () => {

    emmetMonaco.emmetHTML(monaco)

    window.templateEditor = monaco.editor.create(document.getElementById("monaco"), {
        value:template,
        language:"html",
        automaticLayout: true,
	    theme:"vs-dark",
        fontSize: 24
        });
    })
<\/script>`])), maybeRenderHead());
}, "/home/runner/work/CoderPlusPlus/CoderPlusPlus/src/components/Editor.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Metadata = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<div class="mb-4 w-full"> <label for="title"></label> <input id="title" required="true" value="Title" placeholder="Title" type="text" id="title" class="w-full block rounded-lg border dark:border-none dark:bg-neutral-600 py-[9px] px-3 pr-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"> </div> <div class="mb-4 w-full"> <label for="subtitle"></label> <input id="subtitle" required="true" value="Subtitle" placeholder="Subtitle" type="text" id="subtitle" class="w-full block rounded-lg border dark:border-none dark:bg-neutral-600 py-[9px] px-3 pr-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"> </div> <script>\nfunction getMetadataInformation(){\n  return {"title": document.getElementById("title").value, "subtitle": document.getElementById("subtitle").value}\n}\n<\/script>'])), maybeRenderHead());
}, "/home/runner/work/CoderPlusPlus/CoderPlusPlus/src/components/Metadata.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$ContentEditor = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="w-full rounded-lg bg-white shadow text-black"> <div id="editorjs"></div> </div> ', ' <script src="https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest"><\/script> <!--Additional Tools--> <script src="https://cdn.jsdelivr.net/npm/@editorjs/header@latest"><\/script><!-- Header --> <script src="https://cdn.jsdelivr.net/npm/@editorjs/delimiter@latest"><\/script><!-- Delimiter --> <script src="https://cdn.jsdelivr.net/npm/@editorjs/list@latest"><\/script><!-- List --> <script src="https://cdn.jsdelivr.net/npm/@editorjs/checklist@latest"><\/script><!-- Checklist --> <script src="https://cdn.jsdelivr.net/npm/@editorjs/quote@latest"><\/script><!-- Quote --> <script src="https://cdn.jsdelivr.net/gh/paraswaykole/editor-js-code@latest/dist/bundle.js"><\/script><!-- Code --> <script src="https://cdn.jsdelivr.net/npm/@editorjs/embed@latest"><\/script><!-- Embed --> <script src="https://cdn.jsdelivr.net/npm/@editorjs/table@latest"><\/script><!-- Table --> <script src="https://cdn.jsdelivr.net/npm/@editorjs/link@latest"><\/script><!-- Link --> <script src="https://cdn.jsdelivr.net/npm/@editorjs/marker@latest"><\/script><!-- Marker --> <script src="https://cdn.jsdelivr.net/npm/@editorjs/inline-code@latest"><\/script><!-- Inline Code --> <script>\n// @ts-nocheck\n\nconst contentEditor = new EditorJS({ \n        // Id of Element that should contain the Editor \n        holder: \'editorjs\', \n        \n        /** \n         * Available Tools list. \n         * Pass Tool\'s class or Settings object for each Tool you want to use \n         */ \n        tools: { \n            heading: Header, \n            list: List,\n            code:CodeTool,\n            table: Table,\n            marker:Marker,\n            quote:Quote,\n            inlinecode:InlineCode,\n            delimiter: Delimiter,\n            checklist: Checklist\n\n        }, \n        data: {\n            time: 1552744582955,\n            blocks: [\n                {\n                type: "heading",\n                data: {\n                    level:2,\n                    text:"Your Content here!"\n                    }\n                },\n            ],\n            version: "2.11.10"\n        }\n    })\n<\/script> <script>\n    function extractDatatoHTML(){\n        // Takes in raw output data from editor js and turns it into a list of html strings\n        \n        return contentEditor.save().then((editorData) => {\n            outputData = editorData.blocks\n\n        \n        formattedData = new Array();\n        for (let contentBlock of outputData) {\n            switch (contentBlock.type){\n            case \'heading\':\n                if (contentBlock.data.level == 1 && !title){ // h1 and no title yet\n                    title = contentBlock.data.text;\n                }\n                else if (contentBlock.data.level == 3 && !description){\n                    description = contentBlock.data.text;\n                }else{\n                // console.log("heading", contentBlock.data)\n                formattedData.push(`<h${contentBlock.data.level}>${contentBlock.data.text}</h${contentBlock.data.level}>`)\n                }\n                break\n            case \'list\': // Parse lists\n                console.log("list", contentBlock.data)\n                if (contentBlock.data.style== "ordered"){\n                    tagname = "ol"\n                }else{\n                    tagname="ul"\n                }\n                items = ""\n                for (let item of contentBlock.data.items) {\n                    items +=`<li>${item}</li>`\n                }\n                formattedData.push(`<${tagname}>${items}</${tagname}>`)\n                break\n            case \'paragraph\':\n                //console.log("paragraph", contentBlock.data)\n                formattedData.push(`<p>${contentBlock.data.text}</p>`)\n                break\n            case \'code\':\n                //console.log("code", contentBlock.data)\n                // Escape HTML sequences\n                processedData = contentBlock.data.code.replace("<", "&lt;").replace(">", "&gt;")\n                formattedData.push(`\n<pre>\n    <code class="language-${contentBlock.data.languageCode}">${processedData}</code>\n</pre>        `)\n                break\n            case "table": \n                // console.log("table", contentBlock.data)\n                if (contentBlock.data.withHeadings){\n\n                    table_contents = ""\n                    var isHeading = true;\n                    for (const row of contentBlock.data.content){\n\n                        if (isHeading){\n                            table_contents += \'<tr>\'\n                            for (const column of row){\n                                table_contents += `<th>${column}</th>`\n                            }\n                            table_contents += "</tr>"\n                            isHeading = false\n                        }else{\n                            table_contents += "<tr>"\n                            for (const column of row){\n                                table_contents += `<td>${column}</td>`\n                            }\n                            table_contents += "</tr>"\n                        }\n                    }\n                    formattedData.push(`<table class="table table-striped">${table_contents} </table>`)\n                } else{\n                    table_contents = ""\n                    for (const row of contentBlock.data.content){\n                        table_contents += "<tr>"\n                        for (const column of row){\n                            table_contents += `<td>${column}</td>`\n                        }\n                        table_contents += "</tr>"\n                    }\n                    formattedData.push(`<table class="table table-striped">${table_contents} </table>`)\n                }\n                break\n            case "delimiter":\n                formattedData.push(`<hr>`)\n                break\n            case "quote":\n                    // console.log("quote", contentBlock.data)\n                    formattedData.push(`<blockquote class="blockquote text-${contentBlock.data.alignment}">\n                        <p>${contentBlock.data.text}</p>\n                        <footer class="blockquote-footer">${contentBlock.data.caption}</footer>\n                    </blockquote>\n                    `)\n                break\n            case "checklist":\n                // console.log("checklist", contentBlock.data)\n                for (const item of contentBlock.data.items){\n                    if (item.checked){\n                        checked = "checked"\n                    }else (\n                        checked= ""\n                    )\n                        formattedData.push(`\n                        <div class="form-check">\n                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled ${checked}>\n                            <label class="form-check-label" for="flexCheckDisabled">\n                                ${item.text}\n                            </label>\n                        </div>\n                        `)\n                    }\n                break\n\n            }\n        }\n\n\n    \n    let content = "";\n    for (const element of formattedData) {\n        content += element\n    }\n    console.log(content)\n    return content;\n    }).catch((error) => {\n    console.log(\'Saving failed: \', error)\n    });\n    }\n\n\n<\/script>'], ["", '<div class="w-full rounded-lg bg-white shadow text-black"> <div id="editorjs"></div> </div> ', ' <script src="https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest"><\/script> <!--Additional Tools--> <script src="https://cdn.jsdelivr.net/npm/@editorjs/header@latest"><\/script><!-- Header --> <script src="https://cdn.jsdelivr.net/npm/@editorjs/delimiter@latest"><\/script><!-- Delimiter --> <script src="https://cdn.jsdelivr.net/npm/@editorjs/list@latest"><\/script><!-- List --> <script src="https://cdn.jsdelivr.net/npm/@editorjs/checklist@latest"><\/script><!-- Checklist --> <script src="https://cdn.jsdelivr.net/npm/@editorjs/quote@latest"><\/script><!-- Quote --> <script src="https://cdn.jsdelivr.net/gh/paraswaykole/editor-js-code@latest/dist/bundle.js"><\/script><!-- Code --> <script src="https://cdn.jsdelivr.net/npm/@editorjs/embed@latest"><\/script><!-- Embed --> <script src="https://cdn.jsdelivr.net/npm/@editorjs/table@latest"><\/script><!-- Table --> <script src="https://cdn.jsdelivr.net/npm/@editorjs/link@latest"><\/script><!-- Link --> <script src="https://cdn.jsdelivr.net/npm/@editorjs/marker@latest"><\/script><!-- Marker --> <script src="https://cdn.jsdelivr.net/npm/@editorjs/inline-code@latest"><\/script><!-- Inline Code --> <script>\n// @ts-nocheck\n\nconst contentEditor = new EditorJS({ \n        // Id of Element that should contain the Editor \n        holder: \'editorjs\', \n        \n        /** \n         * Available Tools list. \n         * Pass Tool\'s class or Settings object for each Tool you want to use \n         */ \n        tools: { \n            heading: Header, \n            list: List,\n            code:CodeTool,\n            table: Table,\n            marker:Marker,\n            quote:Quote,\n            inlinecode:InlineCode,\n            delimiter: Delimiter,\n            checklist: Checklist\n\n        }, \n        data: {\n            time: 1552744582955,\n            blocks: [\n                {\n                type: "heading",\n                data: {\n                    level:2,\n                    text:"Your Content here!"\n                    }\n                },\n            ],\n            version: "2.11.10"\n        }\n    })\n<\/script> <script>\n    function extractDatatoHTML(){\n        // Takes in raw output data from editor js and turns it into a list of html strings\n        \n        return contentEditor.save().then((editorData) => {\n            outputData = editorData.blocks\n\n        \n        formattedData = new Array();\n        for (let contentBlock of outputData) {\n            switch (contentBlock.type){\n            case \'heading\':\n                if (contentBlock.data.level == 1 && !title){ // h1 and no title yet\n                    title = contentBlock.data.text;\n                }\n                else if (contentBlock.data.level == 3 && !description){\n                    description = contentBlock.data.text;\n                }else{\n                // console.log("heading", contentBlock.data)\n                formattedData.push(\\`<h\\${contentBlock.data.level}>\\${contentBlock.data.text}</h\\${contentBlock.data.level}>\\`)\n                }\n                break\n            case \'list\': // Parse lists\n                console.log("list", contentBlock.data)\n                if (contentBlock.data.style== "ordered"){\n                    tagname = "ol"\n                }else{\n                    tagname="ul"\n                }\n                items = ""\n                for (let item of contentBlock.data.items) {\n                    items +=\\`<li>\\${item}</li>\\`\n                }\n                formattedData.push(\\`<\\${tagname}>\\${items}</\\${tagname}>\\`)\n                break\n            case \'paragraph\':\n                //console.log("paragraph", contentBlock.data)\n                formattedData.push(\\`<p>\\${contentBlock.data.text}</p>\\`)\n                break\n            case \'code\':\n                //console.log("code", contentBlock.data)\n                // Escape HTML sequences\n                processedData = contentBlock.data.code.replace("<", "&lt;").replace(">", "&gt;")\n                formattedData.push(\\`\n<pre>\n    <code class="language-\\${contentBlock.data.languageCode}">\\${processedData}</code>\n</pre>        \\`)\n                break\n            case "table": \n                // console.log("table", contentBlock.data)\n                if (contentBlock.data.withHeadings){\n\n                    table_contents = ""\n                    var isHeading = true;\n                    for (const row of contentBlock.data.content){\n\n                        if (isHeading){\n                            table_contents += \'<tr>\'\n                            for (const column of row){\n                                table_contents += \\`<th>\\${column}</th>\\`\n                            }\n                            table_contents += "</tr>"\n                            isHeading = false\n                        }else{\n                            table_contents += "<tr>"\n                            for (const column of row){\n                                table_contents += \\`<td>\\${column}</td>\\`\n                            }\n                            table_contents += "</tr>"\n                        }\n                    }\n                    formattedData.push(\\`<table class="table table-striped">\\${table_contents} </table>\\`)\n                } else{\n                    table_contents = ""\n                    for (const row of contentBlock.data.content){\n                        table_contents += "<tr>"\n                        for (const column of row){\n                            table_contents += \\`<td>\\${column}</td>\\`\n                        }\n                        table_contents += "</tr>"\n                    }\n                    formattedData.push(\\`<table class="table table-striped">\\${table_contents} </table>\\`)\n                }\n                break\n            case "delimiter":\n                formattedData.push(\\`<hr>\\`)\n                break\n            case "quote":\n                    // console.log("quote", contentBlock.data)\n                    formattedData.push(\\`<blockquote class="blockquote text-\\${contentBlock.data.alignment}">\n                        <p>\\${contentBlock.data.text}</p>\n                        <footer class="blockquote-footer">\\${contentBlock.data.caption}</footer>\n                    </blockquote>\n                    \\`)\n                break\n            case "checklist":\n                // console.log("checklist", contentBlock.data)\n                for (const item of contentBlock.data.items){\n                    if (item.checked){\n                        checked = "checked"\n                    }else (\n                        checked= ""\n                    )\n                        formattedData.push(\\`\n                        <div class="form-check">\n                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled \\${checked}>\n                            <label class="form-check-label" for="flexCheckDisabled">\n                                \\${item.text}\n                            </label>\n                        </div>\n                        \\`)\n                    }\n                break\n\n            }\n        }\n\n\n    \n    let content = "";\n    for (const element of formattedData) {\n        content += element\n    }\n    console.log(content)\n    return content;\n    }).catch((error) => {\n    console.log(\'Saving failed: \', error)\n    });\n    }\n\n\n<\/script>'])), maybeRenderHead(), renderSlot($$result, $$slots["default"]));
}, "/home/runner/work/CoderPlusPlus/CoderPlusPlus/src/components/ContentEditor.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$CreateAPage = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ' <!-- File saving--> <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.8/FileSaver.min.js" integrity="sha256-FPJJt8nA+xL4RU6/gsriA8p8xAeLGatoyTjldvQKGdE=" crossorigin="anonymous"><\/script> <script>\n    async function updatePreview(initial = false){\n        console.log("running")\n    if (!initial){\n        html = window.templateEditor.getValue().replace("{{content}}", await extractDatatoHTML())\n\n    }\n    else{\n        html = template.replace("{{content}}", await extractDatatoHTML())\n    }\n    metadata= getMetadataInformation();\n    title = metadata.title\n    subtitle = metadata.subtitle\n\n    html = html.replace("{{title}}", title)\n    html = html.replace("{{description}}", subtitle)\n\n    document.getElementById("preview").contentDocument.body.innerHTML = html\n}\n\n\nasync function saveResult(){\n        // Takes in outputData and shows the result to the result div\n        result = document.getElementById("result")\n        contentHTML = await extractDatatoHTML();\n        metadata= getMetadataInformation();\n        title = metadata.title\n        console.log(contentHTML)\n        console.log(html)\n        if (!title){ // Someone deletes headings\n            title="create-a-page output"\n        }\n        var blob = new Blob([contentHTML], { type: "text/plain;charset=utf-8" });\n        saveAs(blob, title + ".html");\n    }\n    \n    updatePreview(true)\n    setInterval(updatePreview, 3000); \n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Coder++" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative px-6 lg:px-8"> <div class="h-100 mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40"> <div> <div> <h1 class="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl dark:text-gray-100">
Create-a-page
</h1> <p class="mt-6 text-lg leading-8 text-gray-600 sm:text-center dark:text-gray-200">
Create-a-page is our revolutionary new system that lets you create webpages right in your browser! All you have to do is start typing in the section below, and once done hit the button to save the content as HTML! It's never been so easy!
</p> </div> </div> </div> </div> ${renderComponent($$result2, "Tabs", $$Tabs, { "tab3Label": "Base Template", "tab1Label": "Modify Metadata", "tab2Label": "Content" }, { "tab1": ($$result3) => renderTemplate`${renderComponent($$result3, "Metadata", $$Metadata, { "slot": "tab1" })}`, "tab2": ($$result3) => renderTemplate`${renderComponent($$result3, "ContentEditor", $$ContentEditor, { "slot": "tab2" }, { "default": ($$result4) => renderTemplate` <button class="btn btn-primary" onclick="saveResult()">Hit me to save html file</button> ` })}`, "tab3": ($$result3) => renderTemplate`${renderComponent($$result3, "Editor", $$Editor, { "slot": "tab3" })}` })} <h3>Preview</h3> <iframe class="w-full h-screen rounded-lg bg-white shadow" id="preview"></iframe> ` }));
}, "/home/runner/work/CoderPlusPlus/CoderPlusPlus/src/pages/create-a-page.astro", void 0);

const $$file = "/home/runner/work/CoderPlusPlus/CoderPlusPlus/src/pages/create-a-page.astro";
const $$url = "/create-a-page";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CreateAPage,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
