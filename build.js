const e=require("fs"),t=require("clean-css");e.writeFileSync("src/index.html",require("html-minifier").minify(e.readFileSync("src/index.html").toString(),{collapseBooleanAttributes:!0,collapseInlineTagWhitespace:0,collapseWhitespace:!0,decodeEntities:!0,html5:!0,quoteCharacter:'"',removeAttributeQuotes:!0,removeComments:!0,removeEmptyAttributes:!0,removeRedundantAttributes:!0,removeStyleLinkTypeAttributes:!0,sortAttributes:!0,sortClassName:!0,useShortDoctype:!0}));const s=s=>e.writeFileSync(s,(new t).minify(e.readFileSync(s).toString()).styles);s("src/css/brands.css"),s("src/css/normalize.css"),s("src/css/skeleton.css");