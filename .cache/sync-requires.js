const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/home/x1/ninja/uxyama/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/x1/ninja/uxyama/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/x1/ninja/uxyama/src/pages/index.js"))),
  "component---src-pages-projects-index-js": hot(preferDefault(require("/home/x1/ninja/uxyama/src/pages/projects/index.js"))),
  "component---src-templates-project-details-js": hot(preferDefault(require("/home/x1/ninja/uxyama/src/templates/project-details.js")))
}

