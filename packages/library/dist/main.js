var $yx6n1$muimaterial = require("@mui/material");
var $yx6n1$muimaterialstyles = require("@mui/material/styles");
var $yx6n1$reactjsxruntime = require("react/jsx-runtime");
require("react");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "theme", () => $91fc7c7f5ab63f5b$export$bca14c5b3b88a9c9);
$parcel$export(module.exports, "ThemeProvider", () => $91fc7c7f5ab63f5b$export$d8964aec282183a3);




const $91fc7c7f5ab63f5b$var$RalewayBold = new URL("raleway-bold.e83afe7e.woff", "file:" + __filename);
const $91fc7c7f5ab63f5b$export$bca14c5b3b88a9c9 = (0, $yx6n1$muimaterialstyles.createTheme)({
    typography: {
        fontFamily: "Raleway, Arial"
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
        @font-face {
            font-family: 'Raleway';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('Raleway'), local('Raleway-Bold'), url(${$91fc7c7f5ab63f5b$var$RalewayBold}) format('woff2');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `
        }
    }
});
const $91fc7c7f5ab63f5b$export$d8964aec282183a3 = ({ children: children  })=>{
    return /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$muimaterialstyles.ThemeProvider), {
        theme: $91fc7c7f5ab63f5b$export$bca14c5b3b88a9c9,
        children: /*#__PURE__*/ (0, $yx6n1$reactjsxruntime.jsx)((0, $yx6n1$muimaterial.CssBaseline), {
            children: children
        })
    });
};


//# sourceMappingURL=main.js.map
