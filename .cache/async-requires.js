// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("./../../../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-projects-index-js": () => import("./../../../src/pages/projects/index.js" /* webpackChunkName: "component---src-pages-projects-index-js" */),
  "component---src-templates-project-details-js": () => import("./../../../src/templates/project-details.js" /* webpackChunkName: "component---src-templates-project-details-js" */)
}

