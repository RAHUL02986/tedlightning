"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/subscribe/route";
exports.ids = ["app/api/subscribe/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsubscribe%2Froute&page=%2Fapi%2Fsubscribe%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubscribe%2Froute.ts&appDir=C%3A%5CUsers%5Cmunis%5CDownloads%5Ctedlighting-website-2026-main%5Ctedlighting-website-2026-main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmunis%5CDownloads%5Ctedlighting-website-2026-main%5Ctedlighting-website-2026-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsubscribe%2Froute&page=%2Fapi%2Fsubscribe%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubscribe%2Froute.ts&appDir=C%3A%5CUsers%5Cmunis%5CDownloads%5Ctedlighting-website-2026-main%5Ctedlighting-website-2026-main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmunis%5CDownloads%5Ctedlighting-website-2026-main%5Ctedlighting-website-2026-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_munis_Downloads_tedlighting_website_2026_main_tedlighting_website_2026_main_app_api_subscribe_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/subscribe/route.ts */ \"(rsc)/./app/api/subscribe/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/subscribe/route\",\n        pathname: \"/api/subscribe\",\n        filename: \"route\",\n        bundlePath: \"app/api/subscribe/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\munis\\\\Downloads\\\\tedlighting-website-2026-main\\\\tedlighting-website-2026-main\\\\app\\\\api\\\\subscribe\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_munis_Downloads_tedlighting_website_2026_main_tedlighting_website_2026_main_app_api_subscribe_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/subscribe/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzdWJzY3JpYmUlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnN1YnNjcmliZSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnN1YnNjcmliZSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNtdW5pcyU1Q0Rvd25sb2FkcyU1Q3RlZGxpZ2h0aW5nLXdlYnNpdGUtMjAyNi1tYWluJTVDdGVkbGlnaHRpbmctd2Vic2l0ZS0yMDI2LW1haW4lNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q211bmlzJTVDRG93bmxvYWRzJTVDdGVkbGlnaHRpbmctd2Vic2l0ZS0yMDI2LW1haW4lNUN0ZWRsaWdodGluZy13ZWJzaXRlLTIwMjYtbWFpbiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDd0U7QUFDcko7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZWRsaWdodGluZy13ZWJzaXRlLW5leHRqcy8/MjEzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxtdW5pc1xcXFxEb3dubG9hZHNcXFxcdGVkbGlnaHRpbmctd2Vic2l0ZS0yMDI2LW1haW5cXFxcdGVkbGlnaHRpbmctd2Vic2l0ZS0yMDI2LW1haW5cXFxcYXBwXFxcXGFwaVxcXFxzdWJzY3JpYmVcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3N1YnNjcmliZS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3N1YnNjcmliZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc3Vic2NyaWJlL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcbXVuaXNcXFxcRG93bmxvYWRzXFxcXHRlZGxpZ2h0aW5nLXdlYnNpdGUtMjAyNi1tYWluXFxcXHRlZGxpZ2h0aW5nLXdlYnNpdGUtMjAyNi1tYWluXFxcXGFwcFxcXFxhcGlcXFxcc3Vic2NyaWJlXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9zdWJzY3JpYmUvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsubscribe%2Froute&page=%2Fapi%2Fsubscribe%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubscribe%2Froute.ts&appDir=C%3A%5CUsers%5Cmunis%5CDownloads%5Ctedlighting-website-2026-main%5Ctedlighting-website-2026-main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmunis%5CDownloads%5Ctedlighting-website-2026-main%5Ctedlighting-website-2026-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/subscribe/route.ts":
/*!************************************!*\
  !*** ./app/api/subscribe/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n/* harmony import */ var _lib_models_Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/models/Subscription */ \"(rsc)/./lib/models/Subscription.ts\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n\n\n\n\nasync function POST(req) {\n    try {\n        // 1️⃣ Connect MongoDB\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        // 2️⃣ Read request body\n        const { name, email } = await req.json();\n        if (!name || !email) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Name and email are required\"\n            }, {\n                status: 400\n            });\n        }\n        // 3️⃣ Check duplicate email\n        const existing = await _lib_models_Subscription__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n            email\n        });\n        if (existing) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Email already subscribed\"\n            }, {\n                status: 409\n            });\n        }\n        // 4️⃣ Save to database\n        await _lib_models_Subscription__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create({\n            name,\n            email\n        });\n        // 5️⃣ Gmail SMTP Transporter\n        const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_3__.createTransport({\n            service: \"gmail\",\n            auth: {\n                user: process.env.EMAIL_USER,\n                pass: process.env.EMAIL_PASS\n            }\n        });\n        // Optional but recommended\n        await transporter.verify();\n        // 6️⃣ Send confirmation email\n        await transporter.sendMail({\n            from: `\"Newsletter\" <${process.env.EMAIL_USER}>`,\n            to: email,\n            subject: \"Subscription Successful \\uD83C\\uDF89\",\n            html: `\r\n        <div style=\"font-family: Arial, sans-serif; line-height: 1.6\">\r\n          <h2>Hello ${name},</h2>\r\n          <p>Thank you for subscribing to our newsletter.</p>\r\n          <p>You’ll now receive updates, news, and offers.</p>\r\n          <br/>\r\n          <p>Best regards,<br/><b>Team CodexMatrix</b></p>\r\n        </div>\r\n      `\n        });\n        // 7️⃣ Success response\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            message: \"Subscription successful\"\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        console.error(\"SUBSCRIBE API ERROR:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: error.message || \"Internal Server Error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3N1YnNjcmliZS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3RDtBQUNYO0FBQ2U7QUFDeEI7QUFFN0IsZUFBZUksS0FBS0MsR0FBZ0I7SUFDekMsSUFBSTtRQUNGLHNCQUFzQjtRQUN0QixNQUFNSix3REFBU0E7UUFFZix3QkFBd0I7UUFDeEIsTUFBTSxFQUFFSyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHLE1BQU1GLElBQUlHLElBQUk7UUFFdEMsSUFBSSxDQUFDRixRQUFRLENBQUNDLE9BQU87WUFDbkIsT0FBT1AscURBQVlBLENBQUNRLElBQUksQ0FDdEI7Z0JBQUVDLE9BQU87WUFBOEIsR0FDdkM7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLDRCQUE0QjtRQUM1QixNQUFNQyxXQUFXLE1BQU1ULGdFQUFZQSxDQUFDVSxPQUFPLENBQUM7WUFBRUw7UUFBTTtRQUNwRCxJQUFJSSxVQUFVO1lBQ1osT0FBT1gscURBQVlBLENBQUNRLElBQUksQ0FDdEI7Z0JBQUVDLE9BQU87WUFBMkIsR0FDcEM7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLHVCQUF1QjtRQUN2QixNQUFNUixnRUFBWUEsQ0FBQ1csTUFBTSxDQUFDO1lBQUVQO1lBQU1DO1FBQU07UUFFeEMsNkJBQTZCO1FBQzdCLE1BQU1PLGNBQWNYLHVEQUEwQixDQUFDO1lBQzdDYSxTQUFTO1lBQ1RDLE1BQU07Z0JBQ0pDLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtnQkFDNUJDLE1BQU1ILFFBQVFDLEdBQUcsQ0FBQ0csVUFBVTtZQUM5QjtRQUNGO1FBRUEsMkJBQTJCO1FBQzNCLE1BQU1ULFlBQVlVLE1BQU07UUFFeEIsOEJBQThCO1FBQzlCLE1BQU1WLFlBQVlXLFFBQVEsQ0FBQztZQUN6QkMsTUFBTSxDQUFDLGNBQWMsRUFBRVAsUUFBUUMsR0FBRyxDQUFDQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2hETSxJQUFJcEI7WUFDSnFCLFNBQVM7WUFDVEMsTUFBTSxDQUFDOztvQkFFTyxFQUFFdkIsS0FBSzs7Ozs7O01BTXJCLENBQUM7UUFDSDtRQUVBLHVCQUF1QjtRQUN2QixPQUFPTixxREFBWUEsQ0FBQ1EsSUFBSSxDQUN0QjtZQUFFc0IsU0FBUztZQUFNQyxTQUFTO1FBQTBCLEdBQ3BEO1lBQUVyQixRQUFRO1FBQUk7SUFHbEIsRUFBRSxPQUFPRCxPQUFZO1FBQ25CdUIsUUFBUXZCLEtBQUssQ0FBQyx3QkFBd0JBO1FBRXRDLE9BQU9ULHFEQUFZQSxDQUFDUSxJQUFJLENBQ3RCO1lBQUVDLE9BQU9BLE1BQU1zQixPQUFPLElBQUk7UUFBd0IsR0FDbEQ7WUFBRXJCLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVkbGlnaHRpbmctd2Vic2l0ZS1uZXh0anMvLi9hcHAvYXBpL3N1YnNjcmliZS9yb3V0ZS50cz80NDNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IGRiQ29ubmVjdCBmcm9tIFwiLi4vLi4vLi4vbGliL21vbmdvZGJcIjtcclxuaW1wb3J0IFN1YnNjcmlwdGlvbiBmcm9tIFwiLi4vLi4vLi4vbGliL21vZGVscy9TdWJzY3JpcHRpb25cIjtcclxuaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSBcIm5vZGVtYWlsZXJcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogTmV4dFJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgLy8gMe+4j+KDoyBDb25uZWN0IE1vbmdvREJcclxuICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xyXG5cclxuICAgIC8vIDLvuI/ig6MgUmVhZCByZXF1ZXN0IGJvZHlcclxuICAgIGNvbnN0IHsgbmFtZSwgZW1haWwgfSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcblxyXG4gICAgaWYgKCFuYW1lIHx8ICFlbWFpbCkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgeyBlcnJvcjogXCJOYW1lIGFuZCBlbWFpbCBhcmUgcmVxdWlyZWRcIiB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDPvuI/ig6MgQ2hlY2sgZHVwbGljYXRlIGVtYWlsXHJcbiAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IFN1YnNjcmlwdGlvbi5maW5kT25lKHsgZW1haWwgfSk7XHJcbiAgICBpZiAoZXhpc3RpbmcpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgZXJyb3I6IFwiRW1haWwgYWxyZWFkeSBzdWJzY3JpYmVkXCIgfSxcclxuICAgICAgICB7IHN0YXR1czogNDA5IH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA077iP4oOjIFNhdmUgdG8gZGF0YWJhc2VcclxuICAgIGF3YWl0IFN1YnNjcmlwdGlvbi5jcmVhdGUoeyBuYW1lLCBlbWFpbCB9KTtcclxuXHJcbiAgICAvLyA177iP4oOjIEdtYWlsIFNNVFAgVHJhbnNwb3J0ZXJcclxuICAgIGNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xyXG4gICAgICBzZXJ2aWNlOiBcImdtYWlsXCIsXHJcbiAgICAgIGF1dGg6IHtcclxuICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5FTUFJTF9VU0VSLFxyXG4gICAgICAgIHBhc3M6IHByb2Nlc3MuZW52LkVNQUlMX1BBU1MsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBPcHRpb25hbCBidXQgcmVjb21tZW5kZWRcclxuICAgIGF3YWl0IHRyYW5zcG9ydGVyLnZlcmlmeSgpO1xyXG5cclxuICAgIC8vIDbvuI/ig6MgU2VuZCBjb25maXJtYXRpb24gZW1haWxcclxuICAgIGF3YWl0IHRyYW5zcG9ydGVyLnNlbmRNYWlsKHtcclxuICAgICAgZnJvbTogYFwiTmV3c2xldHRlclwiIDwke3Byb2Nlc3MuZW52LkVNQUlMX1VTRVJ9PmAsXHJcbiAgICAgIHRvOiBlbWFpbCxcclxuICAgICAgc3ViamVjdDogXCJTdWJzY3JpcHRpb24gU3VjY2Vzc2Z1bCDwn46JXCIsXHJcbiAgICAgIGh0bWw6IGBcclxuICAgICAgICA8ZGl2IHN0eWxlPVwiZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmOyBsaW5lLWhlaWdodDogMS42XCI+XHJcbiAgICAgICAgICA8aDI+SGVsbG8gJHtuYW1lfSw8L2gyPlxyXG4gICAgICAgICAgPHA+VGhhbmsgeW91IGZvciBzdWJzY3JpYmluZyB0byBvdXIgbmV3c2xldHRlci48L3A+XHJcbiAgICAgICAgICA8cD5Zb3XigJlsbCBub3cgcmVjZWl2ZSB1cGRhdGVzLCBuZXdzLCBhbmQgb2ZmZXJzLjwvcD5cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICA8cD5CZXN0IHJlZ2FyZHMsPGJyLz48Yj5UZWFtIENvZGV4TWF0cml4PC9iPjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgYCxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIDfvuI/ig6MgU3VjY2VzcyByZXNwb25zZVxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiU3Vic2NyaXB0aW9uIHN1Y2Nlc3NmdWxcIiB9LFxyXG4gICAgICB7IHN0YXR1czogMjAxIH1cclxuICAgICk7XHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJTVUJTQ1JJQkUgQVBJIEVSUk9SOlwiLCBlcnJvcik7XHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICB7IGVycm9yOiBlcnJvci5tZXNzYWdlIHx8IFwiSW50ZXJuYWwgU2VydmVyIEVycm9yXCIgfSxcclxuICAgICAgeyBzdGF0dXM6IDUwMCB9XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZGJDb25uZWN0IiwiU3Vic2NyaXB0aW9uIiwibm9kZW1haWxlciIsIlBPU1QiLCJyZXEiLCJuYW1lIiwiZW1haWwiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJleGlzdGluZyIsImZpbmRPbmUiLCJjcmVhdGUiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsInNlcnZpY2UiLCJhdXRoIiwidXNlciIsInByb2Nlc3MiLCJlbnYiLCJFTUFJTF9VU0VSIiwicGFzcyIsIkVNQUlMX1BBU1MiLCJ2ZXJpZnkiLCJzZW5kTWFpbCIsImZyb20iLCJ0byIsInN1YmplY3QiLCJodG1sIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/subscribe/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/models/Subscription.ts":
/*!************************************!*\
  !*** ./lib/models/Subscription.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst SubscriptionSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        required: true,\n        maxlength: 100\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true,\n        lowercase: true\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Subscription || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Subscription\", SubscriptionSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9kZWxzL1N1YnNjcmlwdGlvbi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0Q7QUFRdEQsTUFBTUUscUJBQXFCLElBQUlELDRDQUFNQSxDQUNuQztJQUNFRSxNQUFNO1FBQ0pDLE1BQU1DO1FBQ05DLFVBQVU7UUFDVkMsV0FBVztJQUNiO0lBQ0FDLE9BQU87UUFDTEosTUFBTUM7UUFDTkMsVUFBVTtRQUNWRyxRQUFRO1FBQ1JDLFdBQVc7SUFDYjtBQUNGLEdBQ0E7SUFBRUMsWUFBWTtBQUFLO0FBR3JCLGlFQUFlWCx3REFBZSxDQUFDYSxZQUFZLElBQ3pDYixxREFBYyxDQUFnQixnQkFBZ0JFLG1CQUFtQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlZGxpZ2h0aW5nLXdlYnNpdGUtbmV4dGpzLy4vbGliL21vZGVscy9TdWJzY3JpcHRpb24udHM/MzUxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hLCBEb2N1bWVudCB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU3Vic2NyaXB0aW9uIGV4dGVuZHMgRG9jdW1lbnQge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIGNyZWF0ZWRBdDogRGF0ZTtcclxufVxyXG5cclxuY29uc3QgU3Vic2NyaXB0aW9uU2NoZW1hID0gbmV3IFNjaGVtYTxJU3Vic2NyaXB0aW9uPihcclxuICB7XHJcbiAgICBuYW1lOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIG1heGxlbmd0aDogMTAwLFxyXG4gICAgfSxcclxuICAgIGVtYWlsOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIHVuaXF1ZTogdHJ1ZSxcclxuICAgICAgbG93ZXJjYXNlOiB0cnVlLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbHMuU3Vic2NyaXB0aW9uIHx8XHJcbiAgbW9uZ29vc2UubW9kZWw8SVN1YnNjcmlwdGlvbj4oXCJTdWJzY3JpcHRpb25cIiwgU3Vic2NyaXB0aW9uU2NoZW1hKTtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwiU3Vic2NyaXB0aW9uU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsIm1heGxlbmd0aCIsImVtYWlsIiwidW5pcXVlIiwibG93ZXJjYXNlIiwidGltZXN0YW1wcyIsIm1vZGVscyIsIlN1YnNjcmlwdGlvbiIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/models/Subscription.ts\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>mongoose);\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsY0FBY0MsUUFBUUMsR0FBRyxDQUFDRixXQUFXO0FBRTNDLElBQUksQ0FBQ0EsYUFBYTtJQUNoQixNQUFNLElBQUlHLE1BQ1I7QUFFSjtBQVFBLElBQUlDLFNBQVNDLE9BQU9OLFFBQVE7QUFFNUIsSUFBSSxDQUFDSyxRQUFRO0lBQ1hBLFNBQVNDLE9BQU9OLFFBQVEsR0FBRztRQUFFTyxNQUFNO1FBQU1DLFNBQVM7SUFBSztBQUN6RDtBQUVBLGVBQWVDO0lBQ2IsSUFBSUosT0FBT0UsSUFBSSxFQUFFO1FBQ2YsT0FBT0YsT0FBT0UsSUFBSTtJQUNwQjtJQUVBLElBQUksQ0FBQ0YsT0FBT0csT0FBTyxFQUFFO1FBQ25CLE1BQU1FLE9BQU87WUFBRUMsZ0JBQWdCO1FBQU07UUFDckNOLE9BQU9HLE9BQU8sR0FBR1IsdURBQWdCLENBQUNDLGFBQWFTLE1BQU1HLElBQUksQ0FBQyxDQUFDYixXQUFhQTtJQUMxRTtJQUVBLElBQUk7UUFDRkssT0FBT0UsSUFBSSxHQUFHLE1BQU1GLE9BQU9HLE9BQU87SUFDcEMsRUFBRSxPQUFPTSxHQUFHO1FBQ1ZULE9BQU9HLE9BQU8sR0FBRztRQUNqQixNQUFNTTtJQUNSO0lBRUEsT0FBT1QsT0FBT0UsSUFBSTtBQUNwQjtBQUVBLGlFQUFlRSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVkbGlnaHRpbmctd2Vic2l0ZS1uZXh0anMvLi9saWIvbW9uZ29kYi50cz8wNWJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJITtcclxuXHJcbmlmICghTU9OR09EQl9VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAnUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWwnXHJcbiAgKTtcclxufVxyXG5cclxuLy8gQWRkIGdsb2JhbCB0eXBpbmcgZm9yIFRTXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdmFyXHJcbiAgdmFyIG1vbmdvb3NlOiB7IGNvbm46IG1vbmdvb3NlLk1vbmdvb3NlIHwgbnVsbDsgcHJvbWlzZTogUHJvbWlzZTxtb25nb29zZS5Nb25nb29zZT4gfCBudWxsIH07XHJcbn1cclxuXHJcbmxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2U7XHJcblxyXG5pZiAoIWNhY2hlZCkge1xyXG4gIGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZSA9IHsgY29ubjogbnVsbCwgcHJvbWlzZTogbnVsbCB9O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKSB7XHJcbiAgaWYgKGNhY2hlZC5jb25uKSB7XHJcbiAgICByZXR1cm4gY2FjaGVkLmNvbm47XHJcbiAgfVxyXG5cclxuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XHJcbiAgICBjb25zdCBvcHRzID0geyBidWZmZXJDb21tYW5kczogZmFsc2UgfTtcclxuICAgIGNhY2hlZC5wcm9taXNlID0gbW9uZ29vc2UuY29ubmVjdChNT05HT0RCX1VSSSwgb3B0cykudGhlbigobW9uZ29vc2UpID0+IG1vbmdvb3NlKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNhY2hlZC5wcm9taXNlID0gbnVsbDtcclxuICAgIHRocm93IGU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY2FjaGVkLmNvbm47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImRiQ29ubmVjdCIsIm9wdHMiLCJidWZmZXJDb21tYW5kcyIsImNvbm5lY3QiLCJ0aGVuIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/nodemailer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsubscribe%2Froute&page=%2Fapi%2Fsubscribe%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsubscribe%2Froute.ts&appDir=C%3A%5CUsers%5Cmunis%5CDownloads%5Ctedlighting-website-2026-main%5Ctedlighting-website-2026-main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmunis%5CDownloads%5Ctedlighting-website-2026-main%5Ctedlighting-website-2026-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();