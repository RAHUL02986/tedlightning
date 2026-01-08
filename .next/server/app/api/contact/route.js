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
exports.id = "app/api/contact/route";
exports.ids = ["app/api/contact/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.ts&appDir=C%3A%5CUsers%5Cmunis%5CDownloads%5Ctedlighting-website-2026-main%5Ctedlighting-website-2026-main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmunis%5CDownloads%5Ctedlighting-website-2026-main%5Ctedlighting-website-2026-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.ts&appDir=C%3A%5CUsers%5Cmunis%5CDownloads%5Ctedlighting-website-2026-main%5Ctedlighting-website-2026-main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmunis%5CDownloads%5Ctedlighting-website-2026-main%5Ctedlighting-website-2026-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_munis_Downloads_tedlighting_website_2026_main_tedlighting_website_2026_main_app_api_contact_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/contact/route.ts */ \"(rsc)/./app/api/contact/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/contact/route\",\n        pathname: \"/api/contact\",\n        filename: \"route\",\n        bundlePath: \"app/api/contact/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\munis\\\\Downloads\\\\tedlighting-website-2026-main\\\\tedlighting-website-2026-main\\\\app\\\\api\\\\contact\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_munis_Downloads_tedlighting_website_2026_main_tedlighting_website_2026_main_app_api_contact_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/contact/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjb250YWN0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZjb250YWN0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY29udGFjdCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNtdW5pcyU1Q0Rvd25sb2FkcyU1Q3RlZGxpZ2h0aW5nLXdlYnNpdGUtMjAyNi1tYWluJTVDdGVkbGlnaHRpbmctd2Vic2l0ZS0yMDI2LW1haW4lNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q211bmlzJTVDRG93bmxvYWRzJTVDdGVkbGlnaHRpbmctd2Vic2l0ZS0yMDI2LW1haW4lNUN0ZWRsaWdodGluZy13ZWJzaXRlLTIwMjYtbWFpbiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDc0U7QUFDbko7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZWRsaWdodGluZy13ZWJzaXRlLW5leHRqcy8/MmUyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxtdW5pc1xcXFxEb3dubG9hZHNcXFxcdGVkbGlnaHRpbmctd2Vic2l0ZS0yMDI2LW1haW5cXFxcdGVkbGlnaHRpbmctd2Vic2l0ZS0yMDI2LW1haW5cXFxcYXBwXFxcXGFwaVxcXFxjb250YWN0XFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9jb250YWN0L3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvY29udGFjdFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvY29udGFjdC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXG11bmlzXFxcXERvd25sb2Fkc1xcXFx0ZWRsaWdodGluZy13ZWJzaXRlLTIwMjYtbWFpblxcXFx0ZWRsaWdodGluZy13ZWJzaXRlLTIwMjYtbWFpblxcXFxhcHBcXFxcYXBpXFxcXGNvbnRhY3RcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2NvbnRhY3Qvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.ts&appDir=C%3A%5CUsers%5Cmunis%5CDownloads%5Ctedlighting-website-2026-main%5Ctedlighting-website-2026-main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmunis%5CDownloads%5Ctedlighting-website-2026-main%5Ctedlighting-website-2026-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/contact/route.ts":
/*!**********************************!*\
  !*** ./app/api/contact/route.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n/* harmony import */ var _lib_models_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/models/Contact */ \"(rsc)/./lib/models/Contact.ts\");\n\n\n\n\nasync function POST(request) {\n    try {\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        const body = await request.json();\n        const { name, email, phone, country, businessType, application, quantity, message } = body;\n        if (!name || !email || !country || !businessType || !application) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Missing required fields\"\n            }, {\n                status: 400\n            });\n        }\n        const savedContact = await _lib_models_Contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"].create({\n            name,\n            email,\n            phone,\n            country,\n            businessType,\n            application,\n            quantity,\n            message\n        });\n        // 🚀 EMAIL SECTION\n        try {\n            const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_1__.createTransport({\n                host: \"smtp.gmail.com\",\n                port: 465,\n                secure: true,\n                auth: {\n                    user: process.env.EMAIL_USER,\n                    pass: process.env.EMAIL_PASS\n                }\n            });\n            // 1️⃣ ADMIN EMAIL (replyTo = user)\n            await transporter.sendMail({\n                from: `\"TED Lighting Website\" <${process.env.EMAIL_USER}>`,\n                to: \"rahul.codexmatrix@gmail.com\",\n                replyTo: email,\n                subject: `New Contact Inquiry - ${name}`,\n                html: `\r\n          <h2>New Contact Inquiry</h2>\r\n          <p><b>Name:</b> ${name}</p>\r\n          <p><b>Email:</b> ${email}</p>\r\n          <p><b>Phone:</b> ${phone || \"N/A\"}</p>\r\n          <p><b>Country:</b> ${country}</p>\r\n          <p><b>Business Type:</b> ${businessType}</p>\r\n          <p><b>Application:</b> ${application}</p>\r\n          <p><b>Quantity:</b> ${quantity || \"N/A\"}</p>\r\n          <p><b>Message:</b> ${message || \"N/A\"}</p>\r\n        `\n            });\n            // ⏳ SMALL DELAY (VERY IMPORTANT FOR GMAIL)\n            await new Promise((resolve)=>setTimeout(resolve, 1500));\n            // 2️⃣ USER FEEDBACK EMAIL\n            await transporter.sendMail({\n                from: `\"TED Lighting\" <${process.env.EMAIL_USER}>`,\n                to: email,\n                subject: \"We received your inquiry – TED Lighting\",\n                html: `\r\n          <h2>Thank you for contacting TED Lighting</h2>\r\n          <p>Dear ${name},</p>\r\n\r\n          <p>\r\n            We have successfully received your inquiry.\r\n            Our team will get back to you within <b>24–48 hours</b>.\r\n          </p>\r\n\r\n          <h4>Your Details</h4>\r\n          <ul>\r\n            <li><b>Business Type:</b> ${businessType}</li>\r\n            <li><b>Application:</b> ${application}</li>\r\n            <li><b>Country:</b> ${country}</li>\r\n            ${quantity ? `<li><b>Quantity:</b> ${quantity}</li>` : \"\"}\r\n          </ul>\r\n\r\n          <p>\r\n            Regards,<br/>\r\n            <b>TED Lighting Team</b>\r\n          </p>\r\n        `\n            });\n            console.log(\"✅ Admin + User emails sent\");\n        } catch (mailError) {\n            console.error(\"❌ Email failed:\", mailError);\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Contact submitted successfully\",\n            id: savedContact._id\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        console.error(\"❌ API Error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Something went wrong\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXMiOlsid2VicGFjazovL3RlZGxpZ2h0aW5nLXdlYnNpdGUtbmV4dGpzLy4vYXBwL2FwaS9jb250YWN0L3JvdXRlLnRzP2NmZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSAnbm9kZW1haWxlcic7XHJcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSAnLi4vLi4vLi4vbGliL21vbmdvZGInO1xyXG5pbXBvcnQgQ29udGFjdCwgeyBJQ29udGFjdCB9IGZyb20gJy4uLy4uLy4uL2xpYi9tb2RlbHMvQ29udGFjdCc7XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xyXG5cclxuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgbmFtZSxcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBob25lLFxyXG4gICAgICBjb3VudHJ5LFxyXG4gICAgICBidXNpbmVzc1R5cGUsXHJcbiAgICAgIGFwcGxpY2F0aW9uLFxyXG4gICAgICBxdWFudGl0eSxcclxuICAgICAgbWVzc2FnZSxcclxuICAgIH0gPSBib2R5IGFzIFBhcnRpYWw8SUNvbnRhY3Q+O1xyXG5cclxuICAgIGlmICghbmFtZSB8fCAhZW1haWwgfHwgIWNvdW50cnkgfHwgIWJ1c2luZXNzVHlwZSB8fCAhYXBwbGljYXRpb24pIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgZXJyb3I6ICdNaXNzaW5nIHJlcXVpcmVkIGZpZWxkcycgfSxcclxuICAgICAgICB7IHN0YXR1czogNDAwIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzYXZlZENvbnRhY3QgPSBhd2FpdCBDb250YWN0LmNyZWF0ZSh7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIGVtYWlsLFxyXG4gICAgICBwaG9uZSxcclxuICAgICAgY291bnRyeSxcclxuICAgICAgYnVzaW5lc3NUeXBlLFxyXG4gICAgICBhcHBsaWNhdGlvbixcclxuICAgICAgcXVhbnRpdHksXHJcbiAgICAgIG1lc3NhZ2UsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDwn5qAIEVNQUlMIFNFQ1RJT05cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xyXG4gICAgICAgIGhvc3Q6ICdzbXRwLmdtYWlsLmNvbScsXHJcbiAgICAgICAgcG9ydDogNDY1LFxyXG4gICAgICAgIHNlY3VyZTogdHJ1ZSxcclxuICAgICAgICBhdXRoOiB7XHJcbiAgICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5FTUFJTF9VU0VSLFxyXG4gICAgICAgICAgcGFzczogcHJvY2Vzcy5lbnYuRU1BSUxfUEFTUyxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIDHvuI/ig6MgQURNSU4gRU1BSUwgKHJlcGx5VG8gPSB1c2VyKVxyXG4gICAgICBhd2FpdCB0cmFuc3BvcnRlci5zZW5kTWFpbCh7XHJcbiAgICAgICAgZnJvbTogYFwiVEVEIExpZ2h0aW5nIFdlYnNpdGVcIiA8JHtwcm9jZXNzLmVudi5FTUFJTF9VU0VSfT5gLFxyXG4gICAgICAgIHRvOiAncmFodWwuY29kZXhtYXRyaXhAZ21haWwuY29tJyxcclxuICAgICAgICByZXBseVRvOiBlbWFpbCxcclxuICAgICAgICBzdWJqZWN0OiBgTmV3IENvbnRhY3QgSW5xdWlyeSAtICR7bmFtZX1gLFxyXG4gICAgICAgIGh0bWw6IGBcclxuICAgICAgICAgIDxoMj5OZXcgQ29udGFjdCBJbnF1aXJ5PC9oMj5cclxuICAgICAgICAgIDxwPjxiPk5hbWU6PC9iPiAke25hbWV9PC9wPlxyXG4gICAgICAgICAgPHA+PGI+RW1haWw6PC9iPiAke2VtYWlsfTwvcD5cclxuICAgICAgICAgIDxwPjxiPlBob25lOjwvYj4gJHtwaG9uZSB8fCAnTi9BJ308L3A+XHJcbiAgICAgICAgICA8cD48Yj5Db3VudHJ5OjwvYj4gJHtjb3VudHJ5fTwvcD5cclxuICAgICAgICAgIDxwPjxiPkJ1c2luZXNzIFR5cGU6PC9iPiAke2J1c2luZXNzVHlwZX08L3A+XHJcbiAgICAgICAgICA8cD48Yj5BcHBsaWNhdGlvbjo8L2I+ICR7YXBwbGljYXRpb259PC9wPlxyXG4gICAgICAgICAgPHA+PGI+UXVhbnRpdHk6PC9iPiAke3F1YW50aXR5IHx8ICdOL0EnfTwvcD5cclxuICAgICAgICAgIDxwPjxiPk1lc3NhZ2U6PC9iPiAke21lc3NhZ2UgfHwgJ04vQSd9PC9wPlxyXG4gICAgICAgIGAsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8g4o+zIFNNQUxMIERFTEFZIChWRVJZIElNUE9SVEFOVCBGT1IgR01BSUwpXHJcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDE1MDApKTtcclxuXHJcbiAgICAgIC8vIDLvuI/ig6MgVVNFUiBGRUVEQkFDSyBFTUFJTFxyXG4gICAgICBhd2FpdCB0cmFuc3BvcnRlci5zZW5kTWFpbCh7XHJcbiAgICAgICAgZnJvbTogYFwiVEVEIExpZ2h0aW5nXCIgPCR7cHJvY2Vzcy5lbnYuRU1BSUxfVVNFUn0+YCxcclxuICAgICAgICB0bzogZW1haWwsXHJcbiAgICAgICAgc3ViamVjdDogJ1dlIHJlY2VpdmVkIHlvdXIgaW5xdWlyeSDigJMgVEVEIExpZ2h0aW5nJyxcclxuICAgICAgICBodG1sOiBgXHJcbiAgICAgICAgICA8aDI+VGhhbmsgeW91IGZvciBjb250YWN0aW5nIFRFRCBMaWdodGluZzwvaDI+XHJcbiAgICAgICAgICA8cD5EZWFyICR7bmFtZX0sPC9wPlxyXG5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBXZSBoYXZlIHN1Y2Nlc3NmdWxseSByZWNlaXZlZCB5b3VyIGlucXVpcnkuXHJcbiAgICAgICAgICAgIE91ciB0ZWFtIHdpbGwgZ2V0IGJhY2sgdG8geW91IHdpdGhpbiA8Yj4yNOKAkzQ4IGhvdXJzPC9iPi5cclxuICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICA8aDQ+WW91ciBEZXRhaWxzPC9oND5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpPjxiPkJ1c2luZXNzIFR5cGU6PC9iPiAke2J1c2luZXNzVHlwZX08L2xpPlxyXG4gICAgICAgICAgICA8bGk+PGI+QXBwbGljYXRpb246PC9iPiAke2FwcGxpY2F0aW9ufTwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48Yj5Db3VudHJ5OjwvYj4gJHtjb3VudHJ5fTwvbGk+XHJcbiAgICAgICAgICAgICR7cXVhbnRpdHkgPyBgPGxpPjxiPlF1YW50aXR5OjwvYj4gJHtxdWFudGl0eX08L2xpPmAgOiAnJ31cclxuICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIFJlZ2FyZHMsPGJyLz5cclxuICAgICAgICAgICAgPGI+VEVEIExpZ2h0aW5nIFRlYW08L2I+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgYCxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZygn4pyFIEFkbWluICsgVXNlciBlbWFpbHMgc2VudCcpO1xyXG4gICAgfSBjYXRjaCAobWFpbEVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+KdjCBFbWFpbCBmYWlsZWQ6JywgbWFpbEVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHsgbWVzc2FnZTogJ0NvbnRhY3Qgc3VibWl0dGVkIHN1Y2Nlc3NmdWxseScsIGlkOiBzYXZlZENvbnRhY3QuX2lkIH0sXHJcbiAgICAgIHsgc3RhdHVzOiAyMDEgfVxyXG4gICAgKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcign4p2MIEFQSSBFcnJvcjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHsgZXJyb3I6ICdTb21ldGhpbmcgd2VudCB3cm9uZycgfSxcclxuICAgICAgeyBzdGF0dXM6IDUwMCB9XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwibm9kZW1haWxlciIsImRiQ29ubmVjdCIsIkNvbnRhY3QiLCJQT1NUIiwicmVxdWVzdCIsImJvZHkiLCJqc29uIiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJjb3VudHJ5IiwiYnVzaW5lc3NUeXBlIiwiYXBwbGljYXRpb24iLCJxdWFudGl0eSIsIm1lc3NhZ2UiLCJlcnJvciIsInN0YXR1cyIsInNhdmVkQ29udGFjdCIsImNyZWF0ZSIsInRyYW5zcG9ydGVyIiwiY3JlYXRlVHJhbnNwb3J0IiwiaG9zdCIsInBvcnQiLCJzZWN1cmUiLCJhdXRoIiwidXNlciIsInByb2Nlc3MiLCJlbnYiLCJFTUFJTF9VU0VSIiwicGFzcyIsIkVNQUlMX1BBU1MiLCJzZW5kTWFpbCIsImZyb20iLCJ0byIsInJlcGx5VG8iLCJzdWJqZWN0IiwiaHRtbCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJtYWlsRXJyb3IiLCJpZCIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/contact/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/models/Contact.ts":
/*!*******************************!*\
  !*** ./lib/models/Contact.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst contactSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true\n    },\n    phone: {\n        type: String\n    },\n    country: {\n        type: String,\n        required: true\n    },\n    businessType: {\n        type: String,\n        required: true\n    },\n    application: {\n        type: String,\n        required: true\n    },\n    quantity: {\n        type: String\n    },\n    message: {\n        type: String\n    }\n}, {\n    timestamps: true\n});\nconst Contact = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Contact || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Contact\", contactSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9kZWxzL0NvbnRhY3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFEO0FBYXJELE1BQU1DLGdCQUFnQixJQUFJRCx3REFBZSxDQUFXO0lBQ2xERyxNQUFNO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUNyQ0MsT0FBTztRQUFFSCxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDdENFLE9BQU87UUFBRUosTUFBTUM7SUFBTztJQUN0QkksU0FBUztRQUFFTCxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDeENJLGNBQWM7UUFBRU4sTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQzdDSyxhQUFhO1FBQUVQLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUM1Q00sVUFBVTtRQUFFUixNQUFNQztJQUFPO0lBQ3pCUSxTQUFTO1FBQUVULE1BQU1DO0lBQU87QUFDMUIsR0FBRztJQUFFUyxZQUFZO0FBQUs7QUFFdEIsTUFBTUMsVUFBMkJmLHdEQUFlLENBQUNlLE9BQU8sSUFBSWYscURBQWMsQ0FBQyxXQUFXQztBQUV0RixpRUFBZWMsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlZGxpZ2h0aW5nLXdlYnNpdGUtbmV4dGpzLy4vbGliL21vZGVscy9Db250YWN0LnRzPzNjNTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IERvY3VtZW50LCBNb2RlbCB9IGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRhY3QgZXh0ZW5kcyBEb2N1bWVudCB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgcGhvbmU/OiBzdHJpbmc7XHJcbiAgY291bnRyeTogc3RyaW5nO1xyXG4gIGJ1c2luZXNzVHlwZTogc3RyaW5nO1xyXG4gIGFwcGxpY2F0aW9uOiBzdHJpbmc7XHJcbiAgcXVhbnRpdHk/OiBzdHJpbmc7XHJcbiAgbWVzc2FnZT86IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgY29udGFjdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWE8SUNvbnRhY3Q+KHtcclxuICBuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICBlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgcGhvbmU6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgY291bnRyeTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgYnVzaW5lc3NUeXBlOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICBhcHBsaWNhdGlvbjogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgcXVhbnRpdHk6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgbWVzc2FnZTogeyB0eXBlOiBTdHJpbmcgfSxcclxufSwgeyB0aW1lc3RhbXBzOiB0cnVlIH0pO1xyXG5cclxuY29uc3QgQ29udGFjdDogTW9kZWw8SUNvbnRhY3Q+ID0gbW9uZ29vc2UubW9kZWxzLkNvbnRhY3QgfHwgbW9uZ29vc2UubW9kZWwoJ0NvbnRhY3QnLCBjb250YWN0U2NoZW1hKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbnRhY3RTY2hlbWEiLCJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZW1haWwiLCJwaG9uZSIsImNvdW50cnkiLCJidXNpbmVzc1R5cGUiLCJhcHBsaWNhdGlvbiIsInF1YW50aXR5IiwibWVzc2FnZSIsInRpbWVzdGFtcHMiLCJDb250YWN0IiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/models/Contact.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/nodemailer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.ts&appDir=C%3A%5CUsers%5Cmunis%5CDownloads%5Ctedlighting-website-2026-main%5Ctedlighting-website-2026-main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmunis%5CDownloads%5Ctedlighting-website-2026-main%5Ctedlighting-website-2026-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();