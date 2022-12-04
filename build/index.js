(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), require("react")) : factory(root["Framer"], root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules\/.*)\/(?:build|dist)\/index\.js$/.exec(__module_i) || [])[1];
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./entry.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./1. Middle Reveal.tsx": "./code/1. Middle Reveal.tsx",
	"./1. Middle Reveal_Loop.tsx": "./code/1. Middle Reveal_Loop.tsx",
	"./10. Word.tsx": "./code/10. Word.tsx",
	"./10. Word_Loop.tsx": "./code/10. Word_Loop.tsx",
	"./2. Background.tsx": "./code/2. Background.tsx",
	"./2. Background_Loop.tsx": "./code/2. Background_Loop.tsx",
	"./3. Top Reveal.tsx": "./code/3. Top Reveal.tsx",
	"./3. Top Reveal_Loop.tsx": "./code/3. Top Reveal_Loop.tsx",
	"./4. Jump.tsx": "./code/4. Jump.tsx",
	"./4. Jump_Loop.tsx": "./code/4. Jump_Loop.tsx",
	"./5. Color.tsx": "./code/5. Color.tsx",
	"./6. Blur.tsx": "./code/6. Blur.tsx",
	"./6. Blur_Loop.tsx": "./code/6. Blur_Loop.tsx",
	"./7. Rotate.tsx": "./code/7. Rotate.tsx",
	"./7. Rotate_Loop.tsx": "./code/7. Rotate_Loop.tsx",
	"./8. Fly.tsx": "./code/8. Fly.tsx",
	"./8. Fly_Loop.tsx": "./code/8. Fly_Loop.tsx",
	"./9. Glitch.tsx": "./code/9. Glitch.tsx",
	"./9. Glitch_Loop.tsx": "./code/9. Glitch_Loop.tsx",
	"./canvas.tsx": "./code/canvas.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/1. Middle Reveal.tsx":
/*!***********************************!*\
  !*** ./code/1. Middle Reveal.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS4gTWlkZGxlIFJldmVhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvMS4gTWlkZGxlIFJldmVhbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsbUNBQThFO0FBRTlFLFNBQWdCLFlBQVksQ0FBQyxLQUFLOztJQUM5QixJQUFJLHFCQUFZLENBQUMsT0FBTyxFQUFFLEtBQUsscUJBQVksQ0FBQyxTQUFTLEVBQUU7UUFDbkQsT0FBTyxvQkFBQyxjQUFLLElBQUMsVUFBVSxFQUFFLFNBQVMsR0FBSSxDQUFBO0tBQzFDO0lBRUQsTUFBTSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FBRyxLQUFLLENBQUE7SUFFdEUsd0NBQXdDO0lBQ3hDLE1BQU0sZUFBZSxHQUFHO1FBQ3BCLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRSxRQUFRLEdBQUcsR0FBRyxFQUFFO1FBQzdCLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7S0FDbEIsQ0FBQTtJQUVELHlDQUF5QztJQUN6QyxNQUFNLGtCQUFrQixHQUFHO1FBQ3ZCLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsR0FBRyxHQUFHLEVBQUU7UUFDOUIsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtLQUNsQixDQUFBO0lBRUQsT0FBTyxDQUNILG9CQUFDLGNBQUssSUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxFQUFFO1FBQy9CLG9CQUFDLGNBQUssSUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNO1lBQ3hELG9CQUFDLGNBQUssSUFDRixLQUFLLEVBQUUsTUFBTSxFQUNiLE1BQU0sRUFBRSxRQUFRLEdBQUcsR0FBRyxFQUN0QixDQUFDLEVBQUUsQ0FBQyxRQUFR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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function MiddleReveal(props) {
    window["__checkBudget__"]();
    if (framer_1.RenderTarget.current() === framer_1.RenderTarget.thumbnail) {
        return React.createElement(framer_1.Frame, { background: "#0055FF" });
    }
    const { firstLine, secondLine, duration, fontSize, fontColor } = props;
    // Variants for animating the first line
    const textVariantsTop = {
        before: { y: fontSize * 1.2 },
        after: { y: 0 },
    };
    // Variants for animating the second line
    const textVariantsBottom = {
        before: { y: -fontSize * 1.2 },
        after: { y: 0 },
    };
    return (React.createElement(framer_1.Frame, { size: "100%", background: "" },
        React.createElement(framer_1.Frame, { height: "auto", width: "100%", background: "", center: true },
            React.createElement(framer_1.Frame, { width: "100%", height: fontSize * 1.2, y: -fontSize * 1.2, overflow: "hidden", background: "" },
                React.createElement(framer_1.Frame, { size: "100%", background: "", style: {
                        fontFamily: "Montserrat, Work Sans, sans-serif",
                        fontWeight: "bold",
                        letterSpacing: "-0.04em",
                        fontSize: fontSize,
                        color: fontColor,
                    }, variants: textVariantsTop, initial: "before", animate: "after", transition: {
                        ease: "easeOut",
                        duration: duration,
                    } }, firstLine)),
            React.createElement(framer_1.Frame, { width: "100%", height: fontSize * 1.2, y: 0, overflow: "hidden", background: "" },
                React.createElement(framer_1.Frame, { size: "100%", background: "", style: {
                        fontFamily: "Montserrat, Work Sans, sans-serif",
                        fontWeight: "bold",
                        letterSpacing: "-0.04em",
                        fontSize: fontSize,
                        color: fontColor,
                    }, variants: textVariantsBottom, initial: "before", animate: "after", transition: {
                        ease: "easeOut",
                        duration: duration,
                    } }, secondLine)))));
}
exports.MiddleReveal = MiddleReveal;
MiddleReveal.defaultProps = {
    height: 56,
    width: 200,
    firstLine: "First Line",
    secondLine: "Second Line",
    duration: 0.4,
    fontSize: 26,
    fontColor: "#FFF",
};
framer_1.addPropertyControls(MiddleReveal, {
    firstLine: {
        title: "First Line",
        type: framer_1.ControlType.String,
        defaultValue: "First Line",
    },
    secondLine: {
        title: "Second Line",
        type: framer_1.ControlType.String,
        defaultValue: "Second Line",
    },
    duration: {
        title: "Duration",
        type: framer_1.ControlType.Number,
        defaultValue: 0.4,
        min: 0,
        max: 2,
        unit: "s",
        step: 0.1,
        displayStepper: true,
    },
    fontSize: {
        title: "Font Size",
        type: framer_1.ControlType.Number,
        defaultValue: 26,
        min: 0,
        max: 120,
        unit: "pt",
        step: 1,
        displayStepper: true,
    },
    fontColor: {
        title: "Color",
        type: framer_1.ControlType.Color,
        defaultValue: "#FFF",
    },
});
exports.__info__ = [{ "name": "MiddleReveal", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/1. Middle Reveal_Loop.tsx":
/*!****************************************!*\
  !*** ./code/1. Middle Reveal_Loop.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS4gTWlkZGxlIFJldmVhbF9Mb29wLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS8xLiBNaWRkbGUgUmV2ZWFsX0xvb3AudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0NBQW9DO0FBRXBDLCtCQUE4QjtBQUM5QixtQ0FBOEU7QUFFOUUsU0FBZ0IsZ0JBQWdCLENBQUMsS0FBSzs7SUFDbEMsSUFBSSxxQkFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLHFCQUFZLENBQUMsU0FBUyxFQUFFO1FBQ25ELE9BQU8sb0JBQUMsY0FBSyxJQUFDLFVBQVUsRUFBRSxTQUFTLEdBQUksQ0FBQTtLQUMxQztJQUVELE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FBRyxLQUFLLENBQUE7SUFFNUQsd0NBQXdDO0lBQ3hDLE1BQU0sZUFBZSxHQUFHO1FBQ3BCLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRSxRQUFRLEdBQUcsR0FBRyxFQUFFO1FBQzdCLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7S0FDbEIsQ0FBQTtJQUVELHlDQUF5QztJQUN6QyxNQUFNLGtCQUFrQixHQUFHO1FBQ3ZCLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsR0FBRyxHQUFHLEVBQUU7UUFDOUIsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtLQUNsQixDQUFBO0lBRUQsT0FBTyxDQUNILG9CQUFDLGNBQUssSUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxFQUFFO1FBQy9CLG9CQUFDLGNBQUssSUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNO1lBQ3hELG9CQUFDLGNBQUssSUFDRixLQUFLLEVBQUUsTUFBTSxFQUNiLE1BQU0sRUFBRSxRQUFRLEdBQUcsR0FBRyxFQUN0QixDQUFD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

Object.defineProperty(exports, "__esModule", { value: true });
/* THIS FILE IS FOR THE DEMO ONLY */
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function MiddleRevealLoop(props) {
    window["__checkBudget__"]();
    if (framer_1.RenderTarget.current() === framer_1.RenderTarget.thumbnail) {
        return React.createElement(framer_1.Frame, { background: "#0055FF" });
    }
    const { firstLine, secondLine, fontSize, fontColor } = props;
    // Variants for animating the first line
    const textVariantsTop = {
        before: { y: fontSize * 1.2 },
        after: { y: 0 },
    };
    // Variants for animating the second line
    const textVariantsBottom = {
        before: { y: -fontSize * 1.2 },
        after: { y: 0 },
    };
    return (React.createElement(framer_1.Frame, { size: "100%", background: "" },
        React.createElement(framer_1.Frame, { height: "auto", width: "100%", background: "", center: true },
            React.createElement(framer_1.Frame, { width: "100%", height: fontSize * 1.2, y: -fontSize * 1.2, overflow: "hidden", background: "" },
                React.createElement(framer_1.Frame, { size: "100%", background: "", style: {
                        fontFamily: "Montserrat, Work Sans, sans-serif",
                        fontWeight: "bold",
                        letterSpacing: "-0.04em",
                        fontSize: fontSize,
                        color: fontColor,
                    }, variants: textVariantsTop, initial: "before", animate: "after", transition: {
                        ease: "easeOut",
                        duration: 0.4,
                        yoyo: Infinity,
                        repeatDelay: 1.2,
                    } }, firstLine)),
            React.createElement(framer_1.Frame, { width: "100%", height: fontSize * 1.2, y: 0, overflow: "hidden", background: "" },
                React.createElement(framer_1.Frame, { size: "100%", background: "", style: {
                        fontFamily: "Montserrat, Work Sans, sans-serif",
                        fontWeight: "bold",
                        letterSpacing: "-0.04em",
                        fontSize: fontSize,
                        color: fontColor,
                    }, variants: textVariantsBottom, initial: "before", animate: "after", transition: {
                        ease: "easeOut",
                        duration: 0.4,
                        yoyo: Infinity,
                        repeatDelay: 1.2,
                    } }, secondLine)))));
}
exports.MiddleRevealLoop = MiddleRevealLoop;
MiddleRevealLoop.defaultProps = {
    height: 56,
    width: 200,
    firstLine: "First Line",
    secondLine: "Second Line",
    fontSize: 26,
    fontColor: "#FFF",
};
framer_1.addPropertyControls(MiddleRevealLoop, {
    firstLine: {
        title: "First Line",
        type: framer_1.ControlType.String,
        defaultValue: "First Line",
    },
    secondLine: {
        title: "Second Line",
        type: framer_1.ControlType.String,
        defaultValue: "Second Line",
    },
    fontSize: {
        title: "Font Size",
        type: framer_1.ControlType.Number,
        defaultValue: 26,
        min: 0,
        max: 120,
        unit: "pt",
        step: 1,
        displayStepper: true,
    },
    fontColor: {
        title: "Color",
        type: framer_1.ControlType.Color,
        defaultValue: "#FFF",
    },
});
exports.__info__ = [{ "name": "MiddleRevealLoop", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/10. Word.tsx":
/*!***************************!*\
  !*** ./code/10. Word.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuIFdvcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlLzEwLiBXb3JkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUM5QixtQ0FBOEU7QUFFOUUsU0FBZ0IsSUFBSSxDQUFDLEtBQUs7O0lBQ3RCLElBQUkscUJBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxxQkFBWSxDQUFDLFNBQVMsRUFBRTtRQUNuRCxPQUFPLG9CQUFDLGNBQUssSUFBQyxVQUFVLEVBQUUsU0FBUyxHQUFJLENBQUE7S0FDMUM7SUFFRCxNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEdBQUcsS0FBSyxDQUFBO0lBRTFELDJCQUEyQjtJQUMzQixJQUFJLFdBQVcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBRXRDLHVDQUF1QztJQUN2QyxNQUFNLHFCQUFxQixHQUFHO1FBQzFCLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7UUFDdEIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNULE9BQU8sRUFBRSxDQUFDO1lBQ1YsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxXQUFXO2dCQUNqQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsS0FBSyxFQUFFLENBQUMsR0FBRyxRQUFRO2dCQUNuQixJQUFJLEVBQUUsZ0JBQWdCO2FBQ3pCO1NBQ0osQ0FBQztLQUNMLENBQUE7SUFFRCxtQ0FBbUM7SUFDbkMsTUFBTSxZQUFZLEdBQUc7UUFDakIsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRTtRQUNqQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1QsQ0FBQyxFQUFFLENBQUM7WUFDSixVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUU7U0FDdEQsQ0FBQztLQUNMLENBQUE7SUFFRCxPQUFPO0lBQ0gsNEVBQTRFO0lBQzVFLG9CQUFDLGNBQUssSUFDRixNQUFNLEVBQUUsR0FBRyxFQUNYLE1BQU0sRUFBRSxRQUFRLEVBQ2hCLEtBQUssRUFBRSxNQUFNLEVBQ2IsVUFBVSxFQUFFLEVBQUUsRUFDZCxLQUFLLEVBQUU7WUFDSCxPQUFPLEVBQUUsTUFBTTtZQUNmLGNBQWMsRUFBRSxRQUFRO1NBQzNCLElBS0EsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO0lBQzlCLHNEQUFzRDtJQUN0RCxvQkFBQyxjQUFLLElBQ0YsR0FBRyxFQUFFLEtBQUssRUFDVixNQUFNLEVBQUUsS0FBSyxFQUNiLEtBQUssRUFBRSxNQUFNLEVBQ2IsTUFBTSxFQUFFLFFBQVEsR0FBRyxHQUFHLEVBQ3RCLFVBQVUsRUFBRSxFQUFFLEVBQ2QsS0FBSyxFQUFFO1lBQ0gsT0FBTyxFQUFFLE1BQU07WUFDZixjQUFjLEVBQUUsUUFBUTtZQUN4QixRQUFRLEVBQUUsVUFBVTtTQUN2QixFQUNELFFBQVEsRUFBRSxxQkFBcUIsRUFDL0IsT0FBTyxFQUFFLFFBQVEsRUFDakIsT0FBTyxFQUFFLE9BQU87UUFLaEIsb0JBQUMsY0FBSyxJQUNGLEtBQUssRUFBRSxNQUFNLEVBQ2IsTUFBTSxFQUFFLFFBQVEsRUFDaEIsVUFBVSxFQUFFLEVBQUUsRUFDZCxLQUFLLEVBQUU7Z0JBQ0gsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFVBQVUsRUFBRSxtQ0FBbUM7Z0JBQy9DLFVBQVUsRUFBRSxNQUFNO2dCQUNsQixhQUFhLEVBQUUsU0FBUztnQkFDeEIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLEtBQUssRUFBRSxTQUFTO2FBQ25CLEVBQ0QsUUFBUSxFQUFFLFlBQVksSUFFckIsSUFBSSxDQUNEO1FBRVIsS0FBSyxLQUFLLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUMvQixvQkFBQyxjQUFLLElBQ0YsS0FBSyxFQUFFLFFBQVEsR0FBRyxDQUFDLEVBQ25CLE1BQU0sRUFBRSxRQUFRLEVBQ2hCLFVBQVUsRUFBRSxFQUFFLEVBQ2QsS0FBSyxFQUFFO2dCQUNILFFBQVEsRUFBRSxVQUFVO2FBQ3ZCLEdBQ0gsQ0FDTCxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQ0osQ0FDWCxDQUFDLENBQ0UsQ0FDWCxDQUFBO0NBQ0o7QUFuR0Qsb0JBbUdDO0FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRztJQUNoQixNQUFNLEVBQUUsRUFBRTtJQUNWLEtBQUssRUFBRSxHQUFHO0lBQ1YsU0FBUyxFQUFFLFlBQVk7SUFDdkIsUUFBUSxFQUFFLEVBQUU7SUFDWixTQUFTLEVBQUUsTUFBTTtJQUNqQixRQUFRLEVBQUUsSUFBSTtDQUNqQixDQUFBO0FBRUQsNEJBQW1CLENBQUMsSUFBSSxFQUFFO0lBQ3RCLFNBQVMsRUFBRTtRQUNQLEtBQUssRUFBRSxNQUFNO1FBQ2IsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTTtRQUN4QixZQUFZLEVBQUUsWUFBWTtLQUM3QjtJQUNELFFBQVEsRUFBRTtRQUNOLEtBQUssRUFBRSxXQUFXO1FBQ2xCLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsWUFBWSxFQUFFLEVBQUU7UUFDaEIsR0FBRyxFQUFFLENBQUM7UUFDTixHQUFHLEVBQUUsR0FBRztRQUNSLElBQUksRUFBRSxJQUFJO1FBQ1YsSUFBSSxFQUFFLENBQUM7UUFDUCxjQUFjLEVBQUUsSUFBSTtLQUN2QjtJQUNELFNBQVMsRUFBRTtRQUNQLEtBQUssRUFBRSxPQUFPO1FBQ2QsSUFBSSxFQUFFLG9CQUFXLENBQUMsS0FBSztRQUN2QixZQUFZLEVBQUUsTUFBTTtLQUN2QjtJQUNELFFBQVEsRUFBRTtRQUNOLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsWUFBWSxFQUFFLElBQUk7UUFDbEIsR0FBRyxFQUFFLENBQUM7UUFDTixHQUFHLEVBQUUsQ0FBQztRQUNOLElBQUksRUFBRSxHQUFHO1FBQ1QsSUFBSSxFQUFFLElBQUk7UUFDVixjQUFjLEVBQUUsSUFBSTtLQUN2QjtDQUNKLENBQUMsQ0FBQSJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function Word(props) {
    window["__checkBudget__"]();
    if (framer_1.RenderTarget.current() === framer_1.RenderTarget.thumbnail) {
        return React.createElement(framer_1.Frame, { background: "#FFB442" });
    }
    const { firstLine, fontSize, fontColor, duration } = props;
    // Create an array of words
    let wordStrings = firstLine.split(" ");
    // Variants for animating the container
    const wordContainerVariants = {
        before: { opacity: 0 },
        after: i => ({
            opacity: 1,
            transition: {
                ease: "circInOut",
                duration: duration,
                delay: i * duration,
                when: "beforeChildren",
            },
        }),
    };
    // Variants for animating the words
    const wordVariants = {
        before: { y: 20 },
        after: i => ({
            y: 0,
            transition: { ease: "easeOut", duration: duration },
        }),
    };
    return (
    // Set the display and justifyContent properties to align the text correctly
    React.createElement(framer_1.Frame, { center: "y", height: fontSize, width: "100%", background: "", style: {
            display: "flex",
            justifyContent: "center",
        } }, wordStrings.map((word, index) => (
    // Animate the container for staggering fade in effect
    React.createElement(framer_1.Frame, { key: index, custom: index, width: "auto", height: fontSize * 1.2, background: "", style: {
            display: "flex",
            justifyContent: "center",
            position: "relative",
        }, variants: wordContainerVariants, initial: "before", animate: "after" },
        React.createElement(framer_1.Frame, { width: "auto", height: fontSize, background: "", style: {
                position: "relative",
                fontFamily: "Montserrat, Work Sans, sans-serif",
                fontWeight: "bold",
                letterSpacing: "-0.04em",
                fontSize: fontSize,
                color: fontColor,
            }, variants: wordVariants }, word),
        index !== wordStrings.length - 1 ? (React.createElement(framer_1.Frame, { width: fontSize / 3, height: fontSize, background: "", style: {
                position: "relative",
            } })) : null)))));
}
exports.Word = Word;
Word.defaultProps = {
    height: 28,
    width: 200,
    firstLine: "First Line",
    fontSize: 26,
    fontColor: "#FFF",
    duration: 0.15,
};
framer_1.addPropertyControls(Word, {
    firstLine: {
        title: "Text",
        type: framer_1.ControlType.String,
        defaultValue: "First Line",
    },
    fontSize: {
        title: "Font Size",
        type: framer_1.ControlType.Number,
        defaultValue: 26,
        min: 0,
        max: 120,
        unit: "pt",
        step: 1,
        displayStepper: true,
    },
    fontColor: {
        title: "Color",
        type: framer_1.ControlType.Color,
        defaultValue: "#FFF",
    },
    duration: {
        type: framer_1.ControlType.Number,
        title: "Stagger",
        defaultValue: 0.15,
        min: 0,
        max: 1,
        unit: "s",
        step: 0.01,
        displayStepper: true,
    },
});
exports.__info__ = [{ "name": "Word", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/10. Word_Loop.tsx":
/*!********************************!*\
  !*** ./code/10. Word_Loop.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuIFdvcmRfTG9vcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvMTAuIFdvcmRfTG9vcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsbUNBQThFO0FBRTlFLFNBQWdCLFFBQVEsQ0FBQyxLQUFLOztJQUMxQixJQUFJLHFCQUFZLENBQUMsT0FBTyxFQUFFLEtBQUsscUJBQVksQ0FBQyxTQUFTLEVBQUU7UUFDbkQsT0FBTyxvQkFBQyxjQUFLLElBQUMsVUFBVSxFQUFFLFNBQVMsR0FBSSxDQUFBO0tBQzFDO0lBRUQsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEdBQUcsS0FBSyxDQUFBO0lBRWhELDJCQUEyQjtJQUMzQixJQUFJLFdBQVcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBRXRDLHVDQUF1QztJQUN2QyxNQUFNLHFCQUFxQixHQUFHO1FBQzFCLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7UUFDdEIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNULE9BQU8sRUFBRSxDQUFDO1lBQ1YsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxXQUFXO2dCQUNqQixRQUFRLEVBQUUsSUFBSTtnQkFDZCxLQUFLLEVBQUUsQ0FBQyxHQUFHLElBQUk7Z0JBQ2YsSUFBSSxFQUFFLGdCQUFnQjthQUN6QjtTQUNKLENBQUM7S0FDTCxDQUFBO0lBRUQsbUNBQW1DO0lBQ25DLE1BQU0sWUFBWSxHQUFHO1FBQ2pCLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUU7UUFDakIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNULENBQUMsRUFBRSxDQUFDO1lBQ0osVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxTQUFTO2dCQUNmLFFBQVEsRUFBRSxJQUFJO2dCQUNkLElBQUksRUFB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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function WordLoop(props) {
    window["__checkBudget__"]();
    if (framer_1.RenderTarget.current() === framer_1.RenderTarget.thumbnail) {
        return React.createElement(framer_1.Frame, { background: "#FFB442" });
    }
    const { firstLine, fontSize, fontColor } = props;
    // Create an array of words
    let wordStrings = firstLine.split(" ");
    // Variants for animating the container
    const wordContainerVariants = {
        before: { opacity: 0 },
        after: i => ({
            opacity: 1,
            transition: {
                ease: "circInOut",
                duration: 0.15,
                delay: i * 0.15,
                when: "beforeChildren",
            },
        }),
    };
    // Variants for animating the words
    const wordVariants = {
        before: { y: 15 },
        after: i => ({
            y: 0,
            transition: {
                ease: "easeOut",
                duration: 0.15,
                yoyo: Infinity,
                repeatDelay: 2,
            },
        }),
    };
    return (
    // Set the display and justifyContent properties to align the text correctly
    React.createElement(framer_1.Frame, { center: "y", height: fontSize, width: "100%", background: "", style: {
            display: "flex",
            justifyContent: "center",
        } }, wordStrings.map((word, index) => (
    // Animate the container for staggering fade in effect
    React.createElement(framer_1.Frame, { key: index, custom: index, width: "auto", height: fontSize * 1.2, background: "", style: {
            display: "flex",
            justifyContent: "center",
            position: "relative",
        }, variants: wordContainerVariants, initial: "before", animate: "after" },
        React.createElement(framer_1.Frame, { width: "auto", height: fontSize, background: "", style: {
                position: "relative",
                fontFamily: "Montserrat, Work Sans, sans-serif",
                fontWeight: "bold",
                letterSpacing: "-0.04em",
                fontSize: fontSize,
                color: fontColor,
            }, variants: wordVariants }, word),
        index !== wordStrings.length - 1 ? (React.createElement(framer_1.Frame, { width: fontSize / 3, height: fontSize, background: "", style: {
                position: "relative",
            } })) : null)))));
}
exports.WordLoop = WordLoop;
WordLoop.defaultProps = {
    height: 28,
    width: 200,
    firstLine: "First Line",
    fontSize: 26,
    fontColor: "#FFF",
};
framer_1.addPropertyControls(WordLoop, {
    firstLine: {
        title: "Text",
        type: framer_1.ControlType.String,
        defaultValue: "First Line",
    },
    fontSize: {
        title: "Font Size",
        type: framer_1.ControlType.Number,
        defaultValue: 26,
        min: 0,
        max: 120,
        unit: "pt",
        step: 1,
        displayStepper: true,
    },
    fontColor: {
        title: "Color",
        type: framer_1.ControlType.Color,
        defaultValue: "#FFF",
    },
});
exports.__info__ = [{ "name": "WordLoop", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/2. Background.tsx":
/*!********************************!*\
  !*** ./code/2. Background.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi4gQmFja2dyb3VuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvMi4gQmFja2dyb3VuZC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsbUNBQThFO0FBRTlFLFNBQWdCLFVBQVUsQ0FBQyxLQUFLOztJQUM1QixJQUFJLHFCQUFZLENBQUMsT0FBTyxFQUFFLEtBQUsscUJBQVksQ0FBQyxTQUFTLEVBQUU7UUFDbkQsT0FBTyxvQkFBQyxjQUFLLElBQUMsVUFBVSxFQUFFLFNBQVMsR0FBSSxDQUFBO0tBQzFDO0lBRUQsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUE7SUFFMUUseURBQXlEO0lBQ3pELE1BQU0saUJBQWlCLEdBQUc7UUFDdEIsTUFBTSxFQUFFLEVBQUU7UUFDVixLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLEVBQUU7S0FDdEQsQ0FBQTtJQUVELGtFQUFrRTtJQUNsRSxNQUFNLFdBQVcsR0FBRztRQUNoQixNQUFNLEVBQUUsRUFBRTtRQUNWLEtBQUssRUFBRSxFQUFFO0tBQ1osQ0FBQTtJQUVELDBDQUEwQztJQUMxQyxNQUFNLGtCQUFrQixHQUFHO1FBQ3ZCLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtRQUNuQyxLQUFLLEVBQUU7WUFDSCxPQUFPLEVBQUUsQ0FBQztZQUNWLEtBQUssRUFBRSxLQUFLO1lBQ1osVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxXQUFXO2dCQUNqQixRQUFRLEVBQUUsR0FBRzthQUNoQjtTQUNKO0tBQ0osQ0FBQTtJQUVELGtDQUFrQztJQUNsQyxNQUFNLFlBQVksR0FBRztRQUNqQixNQUFNLEVBQUU7WUFDSixDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ0wsT0FBTyxFQUFF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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function Background(props) {
    window["__checkBudget__"]();
    if (framer_1.RenderTarget.current() === framer_1.RenderTarget.thumbnail) {
        return React.createElement(framer_1.Frame, { background: "#0D6EFF" });
    }
    const { firstLine, fontSize, fontColor, backgroundColor, stagger } = props;
    // Add staggering effect to the children of the container
    const containerVariants = {
        before: {},
        after: { transition: { staggerChildren: stagger } },
    };
    // Variants to make sure the box elements animate at the same time
    const boxVariants = {
        before: {},
        after: {},
    };
    // Variants for animating the box elements
    const boxElementVariants = {
        before: { opacity: 0, width: "0%" },
        after: {
            opacity: 1,
            width: "50%",
            transition: {
                ease: "easeInOut",
                duration: 0.6,
            },
        },
    };
    // Variants for animating the text
    const textVariants = {
        before: {
            y: -2,
            opacity: 0,
            transition: {
                ease: "easeInOut",
                duration: 0.3,
            },
        },
        after: {
            y: 0,
            opacity: 1,
            transition: {
                ease: "easeInOut",
                duration: 0.3,
            },
        },
    };
    return (
    // Only set initial and animate to the parent container in order for stagger effect to work correctly
    React.createElement(framer_1.Frame, { size: "100%", background: "", variants: containerVariants, initial: "before", animate: "after" },
        React.createElement(framer_1.Frame, { size: "100%", background: "", variants: boxVariants },
            React.createElement(framer_1.Frame, { center: "y", height: fontSize * 2, background: backgroundColor, left: "50%", variants: boxElementVariants }),
            React.createElement(framer_1.Frame, { center: "y", height: fontSize * 2, background: backgroundColor, right: "50%", variants: boxElementVariants })),
        React.createElement(framer_1.Frame, { center: "y", height: fontSize * 1.2, width: "100%", overflow: "hidden", background: "", style: {
                fontFamily: "Montserrat, Work Sans, sans-serif",
                fontWeight: "bold",
                letterSpacing: "-0.04em",
                fontSize: fontSize,
                color: fontColor,
            }, variants: textVariants }, firstLine)));
}
exports.Background = Background;
Background.defaultProps = {
    height: 52,
    width: 200,
    firstLine: "First Line",
    fontSize: 26,
    fontColor: "#000",
    backgroundColor: "#FFF",
    stagger: 0.4,
};
framer_1.addPropertyControls(Background, {
    firstLine: {
        title: "Text",
        type: framer_1.ControlType.String,
        defaultValue: "First Line",
    },
    fontSize: {
        title: "Font Size",
        type: framer_1.ControlType.Number,
        defaultValue: 26,
        min: 0,
        max: 120,
        unit: "pt",
        step: 1,
        displayStepper: true,
    },
    fontColor: {
        title: "Font Color",
        type: framer_1.ControlType.Color,
        defaultValue: "#000",
    },
    backgroundColor: {
        title: "BG Color",
        type: framer_1.ControlType.Color,
        defaultValue: "#FFF",
    },
    stagger: {
        type: framer_1.ControlType.Number,
        title: "Stagger",
        defaultValue: 0.4,
        min: 0,
        max: 5,
        unit: "s",
        step: 0.1,
        displayStepper: true,
    },
});
exports.__info__ = [{ "name": "Background", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/2. Background_Loop.tsx":
/*!*************************************!*\
  !*** ./code/2. Background_Loop.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi4gQmFja2dyb3VuZF9Mb29wLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS8yLiBCYWNrZ3JvdW5kX0xvb3AudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0NBQW9DO0FBRXBDLCtCQUE4QjtBQUM5QixtQ0FBOEU7QUFFOUUsU0FBZ0IsY0FBYyxDQUFDLEtBQUs7O0lBQ2hDLElBQUkscUJBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxxQkFBWSxDQUFDLFNBQVMsRUFBRTtRQUNuRCxPQUFPLG9CQUFDLGNBQUssSUFBQyxVQUFVLEVBQUUsU0FBUyxHQUFJLENBQUE7S0FDMUM7SUFFRCxNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLEdBQUcsS0FBSyxDQUFBO0lBRWpFLHlEQUF5RDtJQUN6RCxNQUFNLGlCQUFpQixHQUFHO1FBQ3RCLE1BQU0sRUFBRSxFQUFFO1FBQ1YsS0FBSyxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsZUFBZSxFQUFFLEdBQUcsRUFBRSxFQUFFO0tBQ2xELENBQUE7SUFFRCxrRUFBa0U7SUFDbEUsTUFBTSxXQUFXLEdBQUc7UUFDaEIsTUFBTSxFQUFFLEVBQUU7UUFDVixLQUFLLEVBQUUsRUFBRTtLQUNaLENBQUE7SUFFRCwwQ0FBMEM7SUFDMUMsTUFBTSxrQkFBa0IsR0FBRztRQUN2QixNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7UUFDbkMsS0FBSyxFQUFFO1lBQ0gsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN4QixLQUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDO1lBQ3hDLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsV0FBVztnQkFDakIsUUFBUSxFQUFFLENBQUM7Z0JBQ1gsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsV0FBVyxFQUFFLEdBQUc7YUFDbkI7U0FDSjtLQUNKLENBQUE7SUFFRCxrQ0FBa0M7SUFDbEMsTUFBTSxZQUFZLEdBQUc7UUFDakIsTUFBTSxFQUFFO1lBQ0osQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNMLE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFDRCxLQUFLLEVBQUU7WUFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwQixPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3hCLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsV0FBVztnQkFDakIsUUFBUSxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztnQkFDckIsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsV0FBVyxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQzthQUM3QjtTQUNKO0tBQ0osQ0FBQTtJQUVELE9BQU87SUFDSCxxR0FBcUc7SUFDckcsb0JBQUMsY0FBSyxJQUNGLElBQUksRUFBRSxNQUFNLEVBQ1osVUFBVSxFQUFFLEVBQUUsRUFDZCxRQUFRLEVBQUUsaUJBQWlCLEVBQzNCLE9BQU8sRUFBRSxRQUFRLEVBQ2pCLE9BQU8sRUFBRSxPQUFPO1FBRWhCLG9CQUFDLGNBQUssSUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLFdBQVc7WUFDdEQsb0JBQUMsY0FBSyxJQUNGLE1BQU0sRUFBRSxHQUFHLEVBQ1gsTUFBTSxFQUFFLFFBQVEsR0FBRyxDQUFDLEVBQ3BCLFVBQVUsRUFBRSxlQUFlLEVBQzNCLElBQUksRUFBRSxLQUFLLEVBQ1gsUUFBUSxFQUFFLGtCQUFrQixHQUN2QjtZQUNULG9CQUFDLGNBQUssSUFDRixNQUFNLEVBQUUsR0FBRyxFQUNYLE1BQU0sRUFBRSxRQUFRLEdBQUcsQ0FBQyxFQUNwQixVQUFVLEVBQUUsZUFBZSxFQUMzQixLQUFLLEVBQUUsS0FBSyxFQUNaLFFBQVEsRUFBRSxrQkFBa0IsR0FDdkIsQ0FDTDtRQUNSLG9CQUFDLGNBQUssSUFDRixNQUFNLEVBQUUsR0FBRyxFQUNYLE1BQU0sRUFBRSxRQUFRLEdBQUcsR0FBRyxFQUN0QixLQUFLLEVBQUUsTUFBTSxFQUNiLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLFVBQVUsRUFBRSxFQUFFLEVBQ2QsS0FBSyxFQUFFO2dCQUNILFVBQVUsRUFBRSxtQ0FBbUM7Z0JBQy9DLFVBQVUsRUFBRSxNQUFNO2dCQUNsQixhQUFhLEVBQUUsU0FBUztnQkFDeEIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLEtBQUssRUFBRSxTQUFTO2FBQ25CLEVBQ0QsUUFBUSxFQUFFLFlBQVksSUFFckIsU0FBUyxDQUNOLENBQ0osQ0FDWCxDQUFBO0NBQ0o7QUFoR0Qsd0NBZ0dDO0FBRUQsY0FBYyxDQUFDLFlBQVksR0FBRztJQUMxQixNQUFNLEVBQUUsRUFBRTtJQUNWLEtBQUssRUFBRSxHQUFHO0lBQ1YsU0FBUyxFQUFFLFlBQVk7SUFDdkIsUUFBUSxFQUFFLEVBQUU7SUFDWixTQUFTLEVBQUUsTUFBTTtJQUNqQixlQUFlLEVBQUUsTUFBTTtDQUMxQixDQUFBO0FBRUQsNEJBQW1CLENBQUMsY0FBYyxFQUFFO0lBQ2hDLFNBQVMsRUFBRTtRQUNQLEtBQUssRUFBRSxNQUFNO1FBQ2IsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTTtRQUN4QixZQUFZLEVBQUUsWUFBWTtLQUM3QjtJQUNELFFBQVEsRUFBRTtRQUNOLEtBQUssRUFBRSxXQUFXO1FBQ2xCLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsWUFBWSxFQUFFLEVBQUU7UUFDaEIsR0FBRyxFQUFFLENBQUM7UUFDTixHQUFHLEVBQUUsR0FBRztRQUNSLElBQUksRUFBRSxJQUFJO1FBQ1YsSUFBSSxFQUFFLENBQUM7UUFDUCxjQUFjLEVBQUUsSUFBSTtLQUN2QjtJQUNELFNBQVMsRUFBRTtRQUNQLEtBQUssRUFBRSxZQUFZO1FBQ25CLElBQUksRUFBRSxvQkFBVyxDQUFDLEtBQUs7UUFDdkIsWUFBWSxFQUFFLE1BQU07S0FDdkI7SUFDRCxlQUFlLEVBQUU7UUFDYixLQUFLLEVBQUUsVUFBVTtRQUNqQixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxLQUFLO1FBQ3ZCLFlBQVksRUFBRSxNQUFNO0tBQ3ZCO0NBQ0osQ0FBQyxDQUFBIn0=

Object.defineProperty(exports, "__esModule", { value: true });
/* THIS FILE IS FOR THE DEMO ONLY */
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function BackgroundLoop(props) {
    window["__checkBudget__"]();
    if (framer_1.RenderTarget.current() === framer_1.RenderTarget.thumbnail) {
        return React.createElement(framer_1.Frame, { background: "#0D6EFF" });
    }
    const { firstLine, fontSize, fontColor, backgroundColor } = props;
    // Add staggering effect to the children of the container
    const containerVariants = {
        before: {},
        after: { transition: { staggerChildren: 0.6 } },
    };
    // Variants to make sure the box elements animate at the same time
    const boxVariants = {
        before: {},
        after: {},
    };
    // Variants for animating the box elements
    const boxElementVariants = {
        before: { opacity: 0, width: "0%" },
        after: {
            opacity: [0, 1, 1, 1, 0],
            width: ["0%", "50%", "50%", "50%", "0%"],
            transition: {
                ease: "easeInOut",
                duration: 3,
                yoyo: Infinity,
                repeatDelay: 0.8,
            },
        },
    };
    // Variants for animating the text
    const textVariants = {
        before: {
            y: -2,
            opacity: 0,
        },
        after: {
            y: [-2, 0, 0, 0, -2],
            opacity: [0, 1, 1, 1, 0],
            transition: {
                ease: "easeInOut",
                duration: 3 - 0.6 * 2,
                yoyo: Infinity,
                repeatDelay: 0.8 + 0.6 * 2,
            },
        },
    };
    return (
    // Only set initial and animate to the parent container in order for stagger effect to work correctly
    React.createElement(framer_1.Frame, { size: "100%", background: "", variants: containerVariants, initial: "before", animate: "after" },
        React.createElement(framer_1.Frame, { size: "100%", background: "", variants: boxVariants },
            React.createElement(framer_1.Frame, { center: "y", height: fontSize * 2, background: backgroundColor, left: "50%", variants: boxElementVariants }),
            React.createElement(framer_1.Frame, { center: "y", height: fontSize * 2, background: backgroundColor, right: "50%", variants: boxElementVariants })),
        React.createElement(framer_1.Frame, { center: "y", height: fontSize * 1.2, width: "100%", overflow: "hidden", background: "", style: {
                fontFamily: "Montserrat, Work Sans, sans-serif",
                fontWeight: "bold",
                letterSpacing: "-0.04em",
                fontSize: fontSize,
                color: fontColor,
            }, variants: textVariants }, firstLine)));
}
exports.BackgroundLoop = BackgroundLoop;
BackgroundLoop.defaultProps = {
    height: 52,
    width: 200,
    firstLine: "First Line",
    fontSize: 26,
    fontColor: "#000",
    backgroundColor: "#FFF",
};
framer_1.addPropertyControls(BackgroundLoop, {
    firstLine: {
        title: "Text",
        type: framer_1.ControlType.String,
        defaultValue: "First Line",
    },
    fontSize: {
        title: "Font Size",
        type: framer_1.ControlType.Number,
        defaultValue: 26,
        min: 0,
        max: 120,
        unit: "pt",
        step: 1,
        displayStepper: true,
    },
    fontColor: {
        title: "Font Color",
        type: framer_1.ControlType.Color,
        defaultValue: "#000",
    },
    backgroundColor: {
        title: "BG Color",
        type: framer_1.ControlType.Color,
        defaultValue: "#FFF",
    },
});
exports.__info__ = [{ "name": "BackgroundLoop", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/3. Top Reveal.tsx":
/*!********************************!*\
  !*** ./code/3. Top Reveal.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy4gVG9wIFJldmVhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvMy4gVG9wIFJldmVhbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsbUNBQThFO0FBRTlFLFNBQWdCLFNBQVMsQ0FBQyxLQUFLOztJQUMzQixJQUFJLHFCQUFZLENBQUMsT0FBTyxFQUFFLEtBQUsscUJBQVksQ0FBQyxTQUFTLEVBQUU7UUFDbkQsT0FBTyxvQkFBQyxjQUFLLElBQUMsVUFBVSxFQUFFLFNBQVMsR0FBSSxDQUFBO0tBQzFDO0lBRUQsTUFBTSxFQUNGLFNBQVMsRUFDVCxVQUFVLEVBQ1YsU0FBUyxFQUNULE9BQU8sRUFDUCxRQUFRLEVBQ1IsU0FBUyxFQUNULE9BQU8sRUFDUCxRQUFRLEdBQ1gsR0FBRyxLQUFLLENBQUE7SUFFVCxnQ0FBZ0M7SUFDaEMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFBO0lBRWhELHlEQUF5RDtJQUN6RCxNQUFNLGlCQUFpQixHQUFHO1FBQ3RCLE1BQU0sRUFBRSxFQUFFO1FBQ1YsS0FBSyxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxFQUFFO0tBQ3RELENBQUE7SUFFRCxrQ0FBa0M7SUFDbEMsTUFBTSxZQUFZLEdBQUc7UUFDakIsTUFBTSxFQUFFO1lBQ0osQ0FBQyxFQUFFLENBQUMsUUFBUSxHQUFHLEdBQUc7WUFDbEIsT0FBTyxFQUFFLEdBQUc7U0FDZjtRQUNELEtBQUssRUFBRTtZQUNILENBQUMsRUFBRSxDQUFDO1lBQ0osT0FBTyxFQUFFLENBQUM7WUFDVixVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUU7U0FDdEQ7S0FDSixDQUFBO0lBRUQsNENBQTRDO0lBQzVDLE1BQU0scUJBQXFCLEdBQUc7UUFDMUIsTUFBTSxFQUFFLEVBQUU7UUFD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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function TopReveal(props) {
    window["__checkBudget__"]();
    if (framer_1.RenderTarget.current() === framer_1.RenderTarget.thumbnail) {
        return React.createElement(framer_1.Frame, { background: "#1184FE" });
    }
    const { firstLine, secondLine, thirdLine, lineGap, fontSize, fontColor, stagger, duration, } = props;
    // Array of text to loop through
    const items = [firstLine, secondLine, thirdLine];
    // Add staggering effect to the children of the container
    const containerVariants = {
        before: {},
        after: { transition: { staggerChildren: stagger } },
    };
    // Variants for animating the text
    const textVariants = {
        before: {
            y: -fontSize * 1.2,
            opacity: 0.6,
        },
        after: {
            y: 0,
            opacity: 1,
            transition: { ease: "easeOut", duration: duration },
        },
    };
    // Variants for animating the line container
    const lineContainerVariants = {
        before: {},
        after: { transition: { delayChildren: stagger * 3 } },
    };
    // Variants for animating the lines
    const lineVariants = {
        before: {
            opacity: 0,
            width: 0,
        },
        after: {
            opacity: 1,
            width: 20,
            transition: { ease: "easeIn", duration: 0.2 },
        },
    };
    return (React.createElement(framer_1.Frame, { size: "100%", background: "" },
        React.createElement(framer_1.Frame, { height: (fontSize * 1.2 + lineGap) * 3 + 6, width: "100%", center: "y", background: "", variants: containerVariants, initial: "before", animate: "after" },
            items.map((item, i) => (React.createElement(framer_1.Frame, { key: i, width: "100%", height: fontSize * 1.2, y: (fontSize * 1.2 + lineGap) * i, overflow: "hidden", background: "" },
                React.createElement(framer_1.Frame, { size: "100%", background: "", style: {
                        fontFamily: "Montserrat, Work Sans, sans-serif",
                        fontWeight: "bold",
                        letterSpacing: "-0.04em",
                        fontSize: fontSize,
                        color: fontColor,
                    }, variants: textVariants }, item)))),
            React.createElement(framer_1.Frame, { size: "100%", background: "", variants: lineContainerVariants },
                React.createElement(framer_1.Frame, { background: "", height: 2, y: (fontSize * 1.2 + lineGap) * 3 + 8, backgroundColor: fontColor, left: "50%", style: { position: "absolute" }, variants: lineVariants }),
                React.createElement(framer_1.Frame, { background: "", height: 2, y: (fontSize * 1.2 + lineGap) * 3 + 8, backgroundColor: fontColor, right: "50%", style: { position: "absolute" }, variants: lineVariants })))));
}
exports.TopReveal = TopReveal;
TopReveal.defaultProps = {
    height: 108,
    width: 200,
    firstLine: "First Line",
    secondLine: "Second Line",
    thirdLine: "Third Line",
    lineGap: 0,
    fontSize: 26,
    fontColor: "#FFF",
    stagger: 0.3,
    duration: 0.4,
};
framer_1.addPropertyControls(TopReveal, {
    firstLine: {
        title: "First Line",
        type: framer_1.ControlType.String,
        defaultValue: "First Line",
    },
    secondLine: {
        title: "Second Line",
        type: framer_1.ControlType.String,
        defaultValue: "Second Line",
    },
    thirdLine: {
        title: "Third Line",
        type: framer_1.ControlType.String,
        defaultValue: "Third Line",
    },
    lineGap: {
        title: "Line Gap",
        type: framer_1.ControlType.Number,
        defaultValue: 0,
        min: 0,
        max: 10,
        unit: "px",
        step: 1,
        displayStepper: true,
    },
    fontSize: {
        title: "Font Size",
        type: framer_1.ControlType.Number,
        defaultValue: 26,
        min: 0,
        max: 120,
        unit: "pt",
        step: 1,
        displayStepper: true,
    },
    fontColor: {
        title: "Color",
        type: framer_1.ControlType.Color,
        defaultValue: "#FFF",
    },
    stagger: {
        type: framer_1.ControlType.Number,
        title: "Stagger",
        defaultValue: 0.3,
        min: 0,
        max: 5,
        unit: "s",
        step: 0.1,
        displayStepper: true,
    },
    duration: {
        type: framer_1.ControlType.Number,
        title: "Duration",
        defaultValue: 0.4,
        min: 0,
        max: 5,
        unit: "s",
        step: 0.1,
        displayStepper: true,
    },
});
exports.__info__ = [{ "name": "TopReveal", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/3. Top Reveal_Loop.tsx":
/*!*************************************!*\
  !*** ./code/3. Top Reveal_Loop.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy4gVG9wIFJldmVhbF9Mb29wLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS8zLiBUb3AgUmV2ZWFsX0xvb3AudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0NBQW9DO0FBRXBDLCtCQUE4QjtBQUM5QixtQ0FBOEU7QUFFOUUsU0FBZ0IsYUFBYSxDQUFDLEtBQUs7O0lBQy9CLElBQUkscUJBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxxQkFBWSxDQUFDLFNBQVMsRUFBRTtRQUNuRCxPQUFPLG9CQUFDLGNBQUssSUFBQyxVQUFVLEVBQUUsU0FBUyxHQUFJLENBQUE7S0FDMUM7SUFFRCxNQUFNLEVBQ0YsU0FBUyxFQUNULFVBQVUsRUFDVixTQUFTLEVBQ1QsT0FBTyxFQUNQLFFBQVEsRUFDUixTQUFTLEdBQ1osR0FBRyxLQUFLLENBQUE7SUFFVCxnQ0FBZ0M7SUFDaEMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFBO0lBRWhELGtDQUFrQztJQUNsQyxNQUFNLFlBQVksR0FBRztRQUNqQixNQUFNLEVBQUU7WUFDSixDQUFDLEVBQUUsQ0FBQyxRQUFRLEdBQUcsR0FBRztZQUNsQixPQUFPLEVBQUUsR0FBRztTQUNmO1FBQ0QsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNULENBQUMsRUFBRSxDQUFDO1lBQ0osT0FBTyxFQUFFLENBQUM7WUFDVixVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsS0FBSyxFQUFFLEdBQUcsR0FBRyxDQUFDO2dCQUNkLElBQUksRUFBRSxRQUFRO2dCQUNkLFdBQVcsRUFBRSxDQUFDO2FBQ2pCO1NBQ0osQ0FBQztLQUNMLENBQUE7SUFFRCw0Q0FBNEM7SUFDNUMsTUFBTSxxQkFBcUIsR0FBRztRQUMxQixNQUFNLEVBQUUsRUFBRTtRQUNWLEtBQUssRUFBRSxFQUFFO0tB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

Object.defineProperty(exports, "__esModule", { value: true });
/* THIS FILE IS FOR THE DEMO ONLY */
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function TopRevealLoop(props) {
    window["__checkBudget__"]();
    if (framer_1.RenderTarget.current() === framer_1.RenderTarget.thumbnail) {
        return React.createElement(framer_1.Frame, { background: "#1184FE" });
    }
    const { firstLine, secondLine, thirdLine, lineGap, fontSize, fontColor, } = props;
    // Array of text to loop through
    const items = [firstLine, secondLine, thirdLine];
    // Variants for animating the text
    const textVariants = {
        before: {
            y: -fontSize * 1.2,
            opacity: 0.6,
        },
        after: i => ({
            y: 0,
            opacity: 1,
            transition: {
                ease: "easeOut",
                duration: 0.3,
                delay: 0.3 * i,
                yoyo: Infinity,
                repeatDelay: 2,
            },
        }),
    };
    // Variants for animating the line container
    const lineContainerVariants = {
        before: {},
        after: {},
    };
    // Variants for animating the lines
    const lineVariants = {
        before: {
            opacity: 0,
            width: 0,
        },
        after: {
            opacity: 1,
            width: 35,
            transition: {
                ease: "easeIn",
                duration: 0.3,
                delay: 0.3 * 3,
                yoyo: Infinity,
                repeatDelay: 2,
            },
        },
    };
    return (React.createElement(framer_1.Frame, { size: "100%", background: "" },
        React.createElement(framer_1.Frame, { height: (fontSize * 1.2 + lineGap) * 3 + 6, width: "100%", center: "y", background: "", initial: "before", animate: "after" },
            items.map((item, i) => (React.createElement(framer_1.Frame, { key: i, width: "100%", height: fontSize * 1.2, y: (fontSize * 1.2 + lineGap) * i, overflow: "hidden", background: "" },
                React.createElement(framer_1.Frame, { custom: i, size: "100%", background: "", style: {
                        fontFamily: "Montserrat, Work Sans, sans-serif",
                        fontWeight: "bold",
                        letterSpacing: "-0.04em",
                        fontSize: fontSize,
                        color: fontColor,
                    }, variants: textVariants }, item)))),
            React.createElement(framer_1.Frame, { size: "100%", background: "", variants: lineContainerVariants },
                React.createElement(framer_1.Frame, { background: "", height: 4, y: (fontSize * 1.2 + lineGap) * 3 + 10, backgroundColor: fontColor, left: "50%", style: { position: "absolute" }, variants: lineVariants }),
                React.createElement(framer_1.Frame, { background: "", height: 4, y: (fontSize * 1.2 + lineGap) * 3 + 10, backgroundColor: fontColor, right: "50%", style: { position: "absolute" }, variants: lineVariants })))));
}
exports.TopRevealLoop = TopRevealLoop;
TopRevealLoop.defaultProps = {
    height: 104,
    width: 200,
    firstLine: "First Line",
    secondLine: "Second Line",
    thirdLine: "Third Line",
    lineGap: 0,
    fontSize: 26,
    fontColor: "#FFF",
};
framer_1.addPropertyControls(TopRevealLoop, {
    firstLine: {
        title: "First Line",
        type: framer_1.ControlType.String,
        defaultValue: "First Line",
    },
    secondLine: {
        title: "Second Line",
        type: framer_1.ControlType.String,
        defaultValue: "Second Line",
    },
    thirdLine: {
        title: "Third Line",
        type: framer_1.ControlType.String,
        defaultValue: "Third Line",
    },
    lineGap: {
        title: "Line Gap",
        type: framer_1.ControlType.Number,
        defaultValue: 0,
        min: 0,
        max: 10,
        unit: "px",
        step: 1,
        displayStepper: true,
    },
    fontSize: {
        title: "Font Size",
        type: framer_1.ControlType.Number,
        defaultValue: 26,
        min: 0,
        max: 120,
        unit: "pt",
        step: 1,
        displayStepper: true,
    },
    fontColor: {
        title: "Color",
        type: framer_1.ControlType.Color,
        defaultValue: "#FFF",
    },
});
exports.__info__ = [{ "name": "TopRevealLoop", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/4. Jump.tsx":
/*!**************************!*\
  !*** ./code/4. Jump.tsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC4gSnVtcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvNC4gSnVtcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsbUNBQThFO0FBRTlFLFNBQWdCLElBQUksQ0FBQyxLQUFLOztJQUN0QixJQUFJLHFCQUFZLENBQUMsT0FBTyxFQUFFLEtBQUsscUJBQVksQ0FBQyxTQUFTLEVBQUU7UUFDbkQsT0FBTyxvQkFBQyxjQUFLLElBQUMsVUFBVSxFQUFFLFNBQVMsR0FBSSxDQUFBO0tBQzFDO0lBRUQsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxHQUFHLEtBQUssQ0FBQTtJQUV6RCw2QkFBNkI7SUFDN0IsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUVwQyx5REFBeUQ7SUFDekQsTUFBTSxpQkFBaUIsR0FBRztRQUN0QixNQUFNLEVBQUUsRUFBRTtRQUNWLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsRUFBRTtLQUN0RCxDQUFBO0lBRUQscUNBQXFDO0lBQ3JDLE1BQU0sY0FBYyxHQUFHO1FBQ25CLE1BQU0sRUFBRTtZQUNKLE9BQU8sRUFBRSxDQUFDO1lBQ1YsQ0FBQyxFQUFFLEVBQUU7WUFDTCxVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsU0FBUyxFQUFFLEdBQUc7YUFDakI7U0FDSjtRQUNELEtBQUssRUFBRTtZQUNILE9BQU8sRUFBRSxDQUFDO1lBQ1YsQ0FBQyxFQUFFLENBQUM7WUFDSixVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsU0FBUyxFQUFFLEdBQUc7YUFDakI7U0FDSjtLQUNKLENBQUE7SUFFRCxPQUFPLENBQ0gsb0JBQUMsY0FB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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function Jump(props) {
    window["__checkBudget__"]();
    if (framer_1.RenderTarget.current() === framer_1.RenderTarget.thumbnail) {
        return React.createElement(framer_1.Frame, { background: "#0499FF" });
    }
    const { firstLine, fontSize, fontColor, stagger } = props;
    // Create an array of letters
    const string = Array.from(firstLine);
    // Add staggering effect to the children of the container
    const containerVariants = {
        before: {},
        after: { transition: { staggerChildren: stagger } },
    };
    // Variants for animating each letter
    const letterVariants = {
        before: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 16,
                stiffness: 200,
            },
        },
        after: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 16,
                stiffness: 200,
            },
        },
    };
    return (React.createElement(framer_1.Frame, { size: "100%", background: "" },
        React.createElement(framer_1.Frame, { center: "y", height: fontSize, width: "100%", background: "", style: {
                fontFamily: "Montserrat, Work Sans, sans-serif",
                fontWeight: "bold",
                letterSpacing: "-0.04em",
                fontSize: fontSize,
                color: fontColor,
                display: "flex",
                justifyContent: "center",
            }, variants: containerVariants, initial: "before", animate: "after" }, string.map((l, i) => (
        // Set width to "auto" in order to ensure default kerning
        React.createElement(framer_1.Frame, { key: i, width: "auto", height: fontSize, background: "", variants: letterVariants, style: { position: "relative" } }, // Set space to a non-breaking space, or a space with a default width
        l === " " ? "\u00A0" : l))))));
}
exports.Jump = Jump;
Jump.defaultProps = {
    height: 28,
    width: 200,
    firstLine: "First Line",
    fontSize: 26,
    fontColor: "#FFF",
    stagger: 0.06,
};
framer_1.addPropertyControls(Jump, {
    firstLine: {
        title: "Text",
        type: framer_1.ControlType.String,
        defaultValue: "First Line",
    },
    fontSize: {
        title: "Font Size",
        type: framer_1.ControlType.Number,
        defaultValue: 26,
        min: 0,
        max: 120,
        unit: "pt",
        step: 1,
        displayStepper: true,
    },
    fontColor: {
        title: "Color",
        type: framer_1.ControlType.Color,
        defaultValue: "#FFF",
    },
    stagger: {
        type: framer_1.ControlType.Number,
        title: "Stagger",
        defaultValue: 0.06,
        min: 0,
        max: 1,
        unit: "s",
        step: 0.01,
        displayStepper: true,
    },
});
exports.__info__ = [{ "name": "Jump", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/4. Jump_Loop.tsx":
/*!*******************************!*\
  !*** ./code/4. Jump_Loop.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC4gSnVtcF9Mb29wLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS80LiBKdW1wX0xvb3AudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsb0NBQW9DO0FBRXBDLCtCQUE4QjtBQUM5QixtQ0FNZTtBQUVmLFNBQWdCLFFBQVEsQ0FBQyxLQUFLOztJQUMxQixJQUFJLHFCQUFZLENBQUMsT0FBTyxFQUFFLEtBQUsscUJBQVksQ0FBQyxTQUFTLEVBQUU7UUFDbkQsT0FBTyxvQkFBQyxjQUFLLElBQUMsVUFBVSxFQUFFLFNBQVMsR0FBSSxDQUFBO0tBQzFDO0lBRUQsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEdBQUcsS0FBSyxDQUFBO0lBRWhELDZCQUE2QjtJQUM3QixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBRXBDLE1BQU0sZUFBZSxHQUFHLHFCQUFZLEVBQUUsQ0FBQTtJQUV0QyxTQUFlLFdBQVc7OztZQUN0QixTQUFTOztnQkFDTCxNQUFNLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFBO2dCQUNqRCxNQUFNLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFBO2FBQ3JEOztLQUNKO0lBRUQsV0FBVyxFQUFFLENBQUE7SUFFYixPQUFPLENBQ0gsb0JBQUMsY0FBSyxJQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEVBQUU7UUFJL0Isb0JBQUMsY0FBSyxJQUNGLE1BQU0sRUFBRSxHQUFHLEVBQ1gsTUFBTSxFQUFFLFFBQVEsRUFDaEIsS0FBSyxFQUFFLE1BQU0sRUFDYixVQUFVLEVBQUUsRUFBRSxFQUNkLEtBQUssRUFBRTtnQkFDSCxVQUFVLEVBQUUsbUNBQW1DO2dCQUMvQyxVQUFVLEVBQUUsTUFBTTtnQkFDbEIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixLQUFLLEVBQUUsU0FBUztnQkFDaEIsT0FBTyxFQUFFLE1BQU07Z0JBQ2YsY0FBYyxFQUFFLFFBQVE7YUFDM0IsSUFLQSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDbEIseURBQXlEO1FBQ3pELG9CQUFDLGNBQUssSUFDRixHQUFHLEVBQUUsQ0FBQyxFQUNOLEtBQUssRUFBRSxNQUFNLEVBQ2IsTUFBTSxFQUFFLFFBQVEsRUFDaEIsVUFBVSxFQUFFLEVBQUUsRUFDZCxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFDOUIsT0FBTyxFQUFFLGVBQWUsRUFDeEIsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxFQUMvQixVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsU0FBUyxFQUFFLEdBQUc7Z0JBQ2QsS0FBSyxFQUFFLElBQUksR0FBRyxDQUFDO2FBQ2xCLElBRUEscUVBQXFFO1FBQ3RFLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNwQixDQUNYLENBQUMsQ0FDRSxDQUNKLENBQ1gsQ0FBQTtDQUNKO0FBcEVELDRCQW9FQztBQUVELFFBQVEsQ0FBQyxZQUFZLEdBQUc7SUFDcEIsTUFBTSxFQUFFLEVBQUU7SUFDVixLQUFLLEVBQUUsR0FBRztJQUNWLFNBQVMsRUFBRSxZQUFZO0lBQ3ZCLFFBQVEsRUFBRSxFQUFFO0lBQ1osU0FBUyxFQUFFLE1BQU07Q0FDcEIsQ0FBQTtBQUVELDRCQUFtQixDQUFDLFFBQVEsRUFBRTtJQUMxQixTQUFTLEVBQUU7UUFDUCxLQUFLLEVBQUUsTUFBTTtRQUNiLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsWUFBWSxFQUFFLFlBQVk7S0FDN0I7SUFDRCxRQUFRLEVBQUU7UUFDTixLQUFLLEVBQUUsV0FBVztRQUNsQixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLFlBQVksRUFBRSxFQUFFO1FBQ2hCLEdBQUcsRUFBRSxDQUFDO1FBQ04sR0FBRyxFQUFFLEdBQUc7UUFDUixJQUFJLEVBQUUsSUFBSTtRQUNWLElBQUksRUFBRSxDQUFDO1FBQ1AsY0FBYyxFQUFFLElBQUk7S0FDdkI7SUFDRCxTQUFTLEVBQUU7UUFDUCxLQUFLLEVBQUUsT0FBTztRQUNkLElBQUksRUFBRSxvQkFBVyxDQUFDLEtBQUs7UUFDdkIsWUFBWSxFQUFFLE1BQU07S0FDdkI7Q0FDSixDQUFDLENBQUEifQ==

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/* THIS FILE IS FOR THE DEMO ONLY */
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function JumpLoop(props) {
    window["__checkBudget__"]();
    if (framer_1.RenderTarget.current() === framer_1.RenderTarget.thumbnail) {
        return React.createElement(framer_1.Frame, { background: "#0499FF" });
    }
    const { firstLine, fontSize, fontColor } = props;
    // Create an array of letters
    const string = Array.from(firstLine);
    const letterAnimation = framer_1.useAnimation();
    function animateLoop() {
        return __awaiter(this, void 0, void 0, function* () {
            window["__checkBudget__"]();
            for (;;) {
                window["__checkBudget__"]();
                yield letterAnimation.start({ opacity: 1, y: 0 });
                yield letterAnimation.start({ opacity: 0, y: 40 });
            }
        });
    }
    animateLoop();
    return (React.createElement(framer_1.Frame, { size: "100%", background: "" },
        React.createElement(framer_1.Frame, { center: "y", height: fontSize, width: "100%", background: "", style: {
                fontFamily: "Montserrat, Work Sans, sans-serif",
                fontWeight: "bold",
                letterSpacing: "-0.04em",
                fontSize: fontSize,
                color: fontColor,
                display: "flex",
                justifyContent: "center",
            } }, string.map((l, i) => (
        // Set width to "auto" in order to ensure default kerning
        React.createElement(framer_1.Frame, { key: i, width: "auto", height: fontSize, background: "", initial: { opacity: 0, y: 40 }, animate: letterAnimation, style: { position: "relative" }, transition: {
                type: "spring",
                damping: 16,
                stiffness: 240,
                delay: 0.06 * i,
            } }, // Set space to a non-breaking space, or a space with a default width
        l === " " ? "\u00A0" : l))))));
}
exports.JumpLoop = JumpLoop;
JumpLoop.defaultProps = {
    height: 28,
    width: 200,
    firstLine: "First Line",
    fontSize: 26,
    fontColor: "#FFF",
};
framer_1.addPropertyControls(JumpLoop, {
    firstLine: {
        title: "Text",
        type: framer_1.ControlType.String,
        defaultValue: "First Line",
    },
    fontSize: {
        title: "Font Size",
        type: framer_1.ControlType.Number,
        defaultValue: 26,
        min: 0,
        max: 120,
        unit: "pt",
        step: 1,
        displayStepper: true,
    },
    fontColor: {
        title: "Color",
        type: framer_1.ControlType.Color,
        defaultValue: "#FFF",
    },
});
exports.__info__ = [{ "name": "JumpLoop", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/5. Color.tsx":
/*!***************************!*\
  !*** ./code/5. Color.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4gQ29sb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlLzUuIENvbG9yLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUM5QixtQ0FBOEU7QUFFOUUsU0FBZ0IsS0FBSyxDQUFDLEtBQUs7O0lBQ3ZCLElBQUkscUJBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxxQkFBWSxDQUFDLFNBQVMsRUFBRTtRQUNuRCxPQUFPLG9CQUFDLGNBQUssSUFBQyxVQUFVLEVBQUUsU0FBUyxHQUFJLENBQUE7S0FDMUM7SUFFRCxNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxHQUFHLEtBQUssQ0FBQTtJQUVyRSxPQUFPLENBQ0gsb0JBQUMsY0FBSyxJQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEVBQUU7UUFJL0Isb0JBQUMsY0FBSyxJQUNGLE1BQU0sRUFBRSxHQUFHLEVBQ1gsTUFBTSxFQUFFLFFBQVEsRUFDaEIsS0FBSyxFQUFFLE1BQU0sRUFDYixVQUFVLEVBQUUsRUFBRSxFQUNkLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFDdEIsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUNyQixVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsSUFBSSxFQUFFLEdBQUc7Z0JBQ1QsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsT0FBTyxFQUFFLENBQUM7YUFDYjtZQUtELG9CQUFDLGNBQUssSUFDRixLQUFLLEVBQUUsTUFBTSxFQUNiLE1BQU0sRUFBRSxRQUFRLEdBQUcsR0FBRyxFQUN0QixVQUFVLEVBQUUsRUFBRSxFQUNkLEtBQUssRUFBRTtvQkFDSCxVQUFVLEVBQUUsbUNBQW1DO29CQUMvQyxVQUFVLEVBQUUsTUFBTTtvQkFDbEIsYUFBYSxFQUFFLFNBQVM7b0JBQ3hCLFFBQVEsRUFBRSxRQUFRO29CQUNsQixLQUFLLEVBQUUsUUFBUTtpQkFDbEIsRUFDRCxPQUFPLEVBQUU7b0JBQ0wsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUM7aUJBQzFDLEVBQ0QsVUFBVSxFQUFFO29CQUNSLFFBQVEsRUFBRSxDQUFDO29CQUNYLElBQUksRUFBRSxXQUFXO29CQUNqQixJQUFJLEVBQUUsUUFBUTtpQkFDakIsSUFFQSxTQUFTLENBQ04sQ0FDSixDQUNKLENBQ1gsQ0FBQTtDQUNKO0FBdkRELHNCQXVEQztBQUVELEtBQUssQ0FBQyxZQUFZLEdBQUc7SUFDakIsTUFBTSxFQUFFLEVBQUU7SUFDVixLQUFLLEVBQUUsR0FBRztJQUNWLFNBQVMsRUFBRSxZQUFZO0lBQ3ZCLFFBQVEsRUFBRSxFQUFFO0lBQ1osUUFBUSxFQUFFLFNBQVM7SUFDbkIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsVUFBVSxFQUFFLFNBQVM7Q0FDeEIsQ0FBQTtBQUVELDRCQUFtQixDQUFDLEtBQUssRUFBRTtJQUN2QixTQUFTLEVBQUU7UUFDUCxLQUFLLEVBQUUsTUFBTTtRQUNiLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsWUFBWSxFQUFFLFlBQVk7S0FDN0I7SUFDRCxRQUFRLEVBQUU7UUFDTixLQUFLLEVBQUUsV0FBVztRQUNsQixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLFlBQVksRUFBRSxFQUFFO1FBQ2hCLEdBQUcsRUFBRSxDQUFDO1FBQ04sR0FBRyxFQUFFLEdBQUc7UUFDUixJQUFJLEVBQUUsSUFBSTtRQUNWLElBQUksRUFBRSxDQUFDO1FBQ1AsY0FBYyxFQUFFLElBQUk7S0FDdkI7SUFDRCxRQUFRLEVBQUU7UUFDTixLQUFLLEVBQUUsYUFBYTtRQUNwQixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxLQUFLO1FBQ3ZCLFlBQVksRUFBRSxTQUFTO0tBQzFCO0lBQ0QsUUFBUSxFQUFFO1FBQ04sS0FBSyxFQUFFLGNBQWM7UUFDckIsSUFBSSxFQUFFLG9CQUFXLENBQUMsS0FBSztRQUN2QixZQUFZLEVBQUUsU0FBUztLQUMxQjtJQUNELFVBQVUsRUFBRTtRQUNSLEtBQUssRUFBRSxhQUFhO1FBQ3BCLElBQUksRUFBRSxvQkFBVyxDQUFDLEtBQUs7UUFDdkIsWUFBWSxFQUFFLFNBQVM7S0FDMUI7Q0FDSixDQUFDLENBQUEifQ==

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function Color(props) {
    window["__checkBudget__"]();
    if (framer_1.RenderTarget.current() === framer_1.RenderTarget.thumbnail) {
        return React.createElement(framer_1.Frame, { background: "#6600FF" });
    }
    const { firstLine, fontSize, colorOne, colorTwo, colorThree } = props;
    return (React.createElement(framer_1.Frame, { size: "100%", background: "" },
        React.createElement(framer_1.Frame, { center: "y", height: fontSize, width: "100%", background: "", initial: { scale: 10 }, animate: { scale: 1 }, transition: {
                type: "spring",
                stiffness: 90,
                mass: 0.3,
                velocity: 100,
                damping: 8,
            } },
            React.createElement(framer_1.Frame, { width: "100%", height: fontSize * 1.2, background: "", style: {
                    fontFamily: "Montserrat, Work Sans, sans-serif",
                    fontWeight: "bold",
                    letterSpacing: "-0.04em",
                    fontSize: fontSize,
                    color: colorOne,
                }, animate: {
                    color: [colorOne, colorTwo, colorThree],
                }, transition: {
                    duration: 2,
                    ease: "easeInOut",
                    yoyo: Infinity,
                } }, firstLine))));
}
exports.Color = Color;
Color.defaultProps = {
    height: 28,
    width: 200,
    firstLine: "First Line",
    fontSize: 26,
    colorOne: "#8FFFB8",
    colorTwo: "#FFFB0A",
    colorThree: "#A16BFF",
};
framer_1.addPropertyControls(Color, {
    firstLine: {
        title: "Text",
        type: framer_1.ControlType.String,
        defaultValue: "First Line",
    },
    fontSize: {
        title: "Font Size",
        type: framer_1.ControlType.Number,
        defaultValue: 26,
        min: 0,
        max: 120,
        unit: "pt",
        step: 1,
        displayStepper: true,
    },
    colorOne: {
        title: "First Color",
        type: framer_1.ControlType.Color,
        defaultValue: "#8FFFB8",
    },
    colorTwo: {
        title: "Second Color",
        type: framer_1.ControlType.Color,
        defaultValue: "#FFFB0A",
    },
    colorThree: {
        title: "Third Color",
        type: framer_1.ControlType.Color,
        defaultValue: "#A16BFF",
    },
});
exports.__info__ = [{ "name": "Color", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/6. Blur.tsx":
/*!**************************!*\
  !*** ./code/6. Blur.tsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi4gQmx1ci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvNi4gQmx1ci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsbUNBQThFO0FBRTlFLFNBQWdCLElBQUksQ0FBQyxLQUFLOztJQUN0QixJQUFJLHFCQUFZLENBQUMsT0FBTyxFQUFFLEtBQUsscUJBQVksQ0FBQyxTQUFTLEVBQUU7UUFDbkQsT0FBTyxvQkFBQyxjQUFLLElBQUMsVUFBVSxFQUFFLFNBQVMsR0FBSSxDQUFBO0tBQzFDO0lBRUQsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUE7SUFFN0QsNkJBQTZCO0lBQzdCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7SUFFcEMscUNBQXFDO0lBQ3JDLE1BQU0sY0FBYyxHQUFHO1FBQ25CLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDVixPQUFPLEVBQUUsQ0FBQztZQUNWLEtBQUssRUFBRSxDQUFDO1lBQ1IsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxTQUFTO2FBQ2xCO1lBQ0QsTUFBTSxFQUFFLFFBQVEsSUFBSSxLQUFLO1NBQzVCLENBQUM7UUFDRixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1QsT0FBTyxFQUFFLENBQUM7WUFDVixLQUFLLEVBQUUsQ0FBQztZQUNSLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsU0FBUztnQkFDZixrRUFBa0U7Z0JBQ2xFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSzthQUM1QjtZQUNELE1BQU0sRUFBRSxXQUFXO1NBQ3RCLENBQUM7S0FDTCxDQUFBO0lBRUQsb0NBQW9DO0lBQ3BDLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQTtJQUVoQixLQUFL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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function Blur(props) {
    window["__checkBudget__"]();
    if (framer_1.RenderTarget.current() === framer_1.RenderTarget.thumbnail) {
        return React.createElement(framer_1.Frame, { background: "#8400FF" });
    }
    const { firstLine, fontSize, fontColor, delay, blur } = props;
    // Create an array of letters
    const string = Array.from(firstLine);
    // Variants for animating each letter
    const letterVariants = {
        before: i => ({
            opacity: 0,
            scale: 4,
            transition: {
                ease: "easeOut",
            },
            filter: `blur(${blur}px)`,
        }),
        after: i => ({
            opacity: 1,
            scale: 1,
            transition: {
                ease: "easeOut",
                // Delay the animations for each letter with the generated numbers
                delay: numbers[i] * delay,
            },
            filter: "blur(0px)",
        }),
    };
    // Create an array of random numbers
    let numbers = [];
    for (let i = 0; i < string.length; i++) {
        window["__checkBudget__"]();
        let j = Math.floor(Math.random() * string.length);
        numbers.push(j);
    }
    return (React.createElement(framer_1.Frame, { size: "100%", background: "" },
        React.createElement(framer_1.Frame, { center: "y", height: fontSize, width: "100%", background: "", style: {
                fontFamily: "Montserrat, Work Sans, sans-serif",
                fontWeight: "bold",
                letterSpacing: "-0.04em",
                fontSize: fontSize,
                color: fontColor,
                display: "flex",
                justifyContent: "center",
            }, initial: "before", animate: "after" }, string.map((l, i) => (
        // Set width to "auto" in order to ensure default kerning
        React.createElement(framer_1.Frame, { key: i, custom: i, height: fontSize, background: "", variants: letterVariants, style: { width: "auto", position: "relative" } }, // Set space to a non-breaking space, or a space with a default width
        l === " " ? "\u00A0" : l))))));
}
exports.Blur = Blur;
Blur.defaultProps = {
    height: 28,
    width: 200,
    firstLine: "First Line",
    fontSize: 26,
    fontColor: "#FFF",
    delay: 0.04,
    blur: 10,
};
framer_1.addPropertyControls(Blur, {
    firstLine: {
        title: "Text",
        type: framer_1.ControlType.String,
        defaultValue: "First Line",
    },
    fontSize: {
        title: "Font Size",
        type: framer_1.ControlType.Number,
        defaultValue: 26,
        min: 0,
        max: 120,
        unit: "pt",
        step: 1,
        displayStepper: true,
    },
    fontColor: {
        title: "Color",
        type: framer_1.ControlType.Color,
        defaultValue: "#FFF",
    },
    delay: {
        type: framer_1.ControlType.Number,
        title: "Stagger",
        defaultValue: 0.04,
        min: 0,
        max: 1,
        unit: "s",
        step: 0.01,
        displayStepper: true,
    },
    blur: {
        type: framer_1.ControlType.Number,
        title: "Blur",
        defaultValue: 10,
        min: 0,
        max: 20,
        unit: "px",
        step: 1,
        displayStepper: true,
    },
});
exports.__info__ = [{ "name": "Blur", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/6. Blur_Loop.tsx":
/*!*******************************!*\
  !*** ./code/6. Blur_Loop.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi4gQmx1cl9Mb29wLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS82LiBCbHVyX0xvb3AudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsb0NBQW9DO0FBRXBDLCtCQUE4QjtBQUM5QixtQ0FNZTtBQUVmLFNBQWdCLFFBQVEsQ0FBQyxLQUFLOztJQUMxQixJQUFJLHFCQUFZLENBQUMsT0FBTyxFQUFFLEtBQUsscUJBQVksQ0FBQyxTQUFTLEVBQUU7UUFDbkQsT0FBTyxvQkFBQyxjQUFLLElBQUMsVUFBVSxFQUFFLFNBQVMsR0FBSSxDQUFBO0tBQzFDO0lBRUQsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEdBQUcsS0FBSyxDQUFBO0lBRWhELDZCQUE2QjtJQUM3QixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBRXBDLG9DQUFvQztJQUNwQyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUE7SUFFaEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O1FBQ3BDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNqRCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQ2xCO0lBRUQsMEJBQTBCO0lBQzFCLE1BQU0sZUFBZSxHQUFHLHFCQUFZLEVBQUUsQ0FBQTtJQUV0QyxTQUFlLFdBQVc7OztZQUN0QixTQUFTOztnQkFDTCxNQUFNLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUM5QixPQUFPLEVBQUUsQ0FBQztvQkFDVixLQUFLLEVBQUUsQ0FBQztvQkFDUixNQUFNLEVBQUUsV0FBVztvQkFDbkIsVUFBVSxFQUFFO3dCQUNSLFFBQVEsRUFBRSxHQUFHO3dCQUNiLElBQUksRUFBRSxTQUFTO3dCQUNmLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSTtxQkFDM0I7aUJBQ0osQ0FBQyxDQUFDLENBQUE7Z0JBQ0gsTUFBTSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDOUIsT0FBTyxFQUFFLENBQUM7b0JBQ1YsS0FBSyxFQUFFLENBQUM7b0JBQ1IsTUFBTSxFQUFFLFlBQVk7b0JBQ3BCLFVBQVUsRUFBRTt3QkFDUixRQUFRLEVBQUUsR0FBRzt3QkFDYixJQUFJLEVBQUUsU0FBUzt3QkFDZixLQUFLLEVBQUUsR0FBRyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJO3FCQUNqQztpQkFDSixDQUFDLENBQUMsQ0FBQTthQUNOOztLQUNKO0lBRUQsV0FBVyxFQUFFLENBQUE7SUFFYixPQUFPLENBQ0gsb0JBQUMsY0FBSyxJQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEVBQUU7UUFJL0Isb0JBQUMsY0FBSyxJQUNGLE1BQU0sRUFBRSxHQUFHLEVBQ1gsTUFBTSxFQUFFLFFBQVEsRUFDaEIsS0FBSyxFQUFFLE1BQU0sRUFDYixVQUFVLEVBQUUsRUFBRSxFQUNkLEtBQUssRUFBRTtnQkFDSCxVQUFVLEVBQUUsbUNBQW1DO2dCQUMvQyxVQUFVLEVBQUUsTUFBTTtnQkFDbEIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixLQUFLLEVBQUUsU0FBUztnQkFDaEIsT0FBTyxFQUFFLE1BQU07Z0JBQ2YsY0FBYyxFQUFFLFFBQVE7YUFDM0IsSUFLQSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDbEIseURBQXlEO1FBQ3pELG9CQUFDLGNBQUssSUFDRixHQUFHLEVBQUUsQ0FBQyxFQUNOLE1BQU0sRUFBRSxDQUFDLEVBQ1QsTUFBTSxFQUFFLFFBQVEsRUFDaEIsVUFBVSxFQUFFLEVBQUUsRUFDZCxPQUFPLEVBQUU7Z0JBQ0wsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsTUFBTSxFQUFFLFlBQVk7YUFDdkIsRUFDRCxPQUFPLEVBQUUsZUFBZSxFQUN4QixLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsSUFFN0MscUVBQXFFO1FBQ3RFLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNwQixDQUNYLENBQUMsQ0FDRSxDQUNKLENBQ1gsQ0FBQTtDQUNKO0FBN0ZELDRCQTZGQztBQUVELFFBQVEsQ0FBQyxZQUFZLEdBQUc7SUFDcEIsTUFBTSxFQUFFLEVBQUU7SUFDVixLQUFLLEVBQUUsR0FBRztJQUNWLFNBQVMsRUFBRSxZQUFZO0lBQ3ZCLFFBQVEsRUFBRSxFQUFFO0lBQ1osU0FBUyxFQUFFLE1BQU07Q0FDcEIsQ0FBQTtBQUVELDRCQUFtQixDQUFDLFFBQVEsRUFBRTtJQUMxQixTQUFTLEVBQUU7UUFDUCxLQUFLLEVBQUUsTUFBTTtRQUNiLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsWUFBWSxFQUFFLFlBQVk7S0FDN0I7SUFDRCxRQUFRLEVBQUU7UUFDTixLQUFLLEVBQUUsV0FBVztRQUNsQixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLFlBQVksRUFBRSxFQUFFO1FBQ2hCLEdBQUcsRUFBRSxDQUFDO1FBQ04sR0FBRyxFQUFFLEdBQUc7UUFDUixJQUFJLEVBQUUsSUFBSTtRQUNWLElBQUksRUFBRSxDQUFDO1FBQ1AsY0FBYyxFQUFFLElBQUk7S0FDdkI7SUFDRCxTQUFTLEVBQUU7UUFDUCxLQUFLLEVBQUUsT0FBTztRQUNkLElBQUksRUFBRSxvQkFBVyxDQUFDLEtBQUs7UUFDdkIsWUFBWSxFQUFFLE1BQU07S0FDdkI7Q0FDSixDQUFDLENBQUEifQ==

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/* THIS FILE IS FOR THE DEMO ONLY */
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function BlurLoop(props) {
    window["__checkBudget__"]();
    if (framer_1.RenderTarget.current() === framer_1.RenderTarget.thumbnail) {
        return React.createElement(framer_1.Frame, { background: "#8400FF" });
    }
    const { firstLine, fontSize, fontColor } = props;
    // Create an array of letters
    const string = Array.from(firstLine);
    // Create an array of random numbers
    let numbers = [];
    for (let i = 0; i < string.length; i++) {
        window["__checkBudget__"]();
        let j = Math.floor(Math.random() * string.length);
        numbers.push(j);
    }
    // Create letter animation
    const letterAnimation = framer_1.useAnimation();
    function animateLoop() {
        return __awaiter(this, void 0, void 0, function* () {
            window["__checkBudget__"]();
            for (;;) {
                window["__checkBudget__"]();
                yield letterAnimation.start(i => ({
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                    transition: {
                        duration: 0.4,
                        ease: "easeOut",
                        delay: numbers[i] * 0.05,
                    },
                }));
                yield letterAnimation.start(i => ({
                    opacity: 0,
                    scale: 4,
                    filter: "blur(10px)",
                    transition: {
                        duration: 0.4,
                        ease: "easeOut",
                        delay: 1.4 + numbers[i] * 0.05,
                    },
                }));
            }
        });
    }
    animateLoop();
    return (React.createElement(framer_1.Frame, { size: "100%", background: "" },
        React.createElement(framer_1.Frame, { center: "y", height: fontSize, width: "100%", background: "", style: {
                fontFamily: "Montserrat, Work Sans, sans-serif",
                fontWeight: "bold",
                letterSpacing: "-0.04em",
                fontSize: fontSize,
                color: fontColor,
                display: "flex",
                justifyContent: "center",
            } }, string.map((l, i) => (
        // Set width to "auto" in order to ensure default kerning
        React.createElement(framer_1.Frame, { key: i, custom: i, height: fontSize, background: "", initial: {
                opacity: 0,
                scale: 4,
                filter: "blur(10px)",
            }, animate: letterAnimation, style: { width: "auto", position: "relative" } }, // Set space to a non-breaking space, or a space with a default width
        l === " " ? "\u00A0" : l))))));
}
exports.BlurLoop = BlurLoop;
BlurLoop.defaultProps = {
    height: 28,
    width: 200,
    firstLine: "First Line",
    fontSize: 26,
    fontColor: "#FFF",
};
framer_1.addPropertyControls(BlurLoop, {
    firstLine: {
        title: "Text",
        type: framer_1.ControlType.String,
        defaultValue: "First Line",
    },
    fontSize: {
        title: "Font Size",
        type: framer_1.ControlType.Number,
        defaultValue: 26,
        min: 0,
        max: 120,
        unit: "pt",
        step: 1,
        displayStepper: true,
    },
    fontColor: {
        title: "Color",
        type: framer_1.ControlType.Color,
        defaultValue: "#FFF",
    },
});
exports.__info__ = [{ "name": "BlurLoop", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/7. Rotate.tsx":
/*!****************************!*\
  !*** ./code/7. Rotate.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy4gUm90YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS83LiBSb3RhdGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUE4RTtBQUU5RSxTQUFnQixNQUFNLENBQUMsS0FBSzs7SUFDeEIsSUFBSSxxQkFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLHFCQUFZLENBQUMsU0FBUyxFQUFFO1FBQ25ELE9BQU8sb0JBQUMsY0FBSyxJQUFDLFVBQVUsRUFBRSxTQUFTLEdBQUksQ0FBQTtLQUMxQztJQUVELE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUE7SUFFekQsNkJBQTZCO0lBQzdCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7SUFFcEMseURBQXlEO0lBQ3pELE1BQU0saUJBQWlCLEdBQUc7UUFDdEIsTUFBTSxFQUFFLEVBQUU7UUFDVixLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLEVBQUU7S0FDdEQsQ0FBQTtJQUVELHFDQUFxQztJQUNyQywwQ0FBMEM7SUFDMUMsTUFBTSxjQUFjLEdBQUc7UUFDbkIsTUFBTSxFQUFFO1lBQ0osTUFBTSxFQUFFLEVBQUU7WUFDVixPQUFPLEVBQUUsQ0FBQztZQUNWLGVBQWUsRUFBRSxhQUFhO1lBQzlCLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsU0FBUztnQkFDZixDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDLEdBQUcsRUFBRTthQUN6QztTQUNKO1FBQ0QsS0FBSyxFQUFFO1lBQ0gsTUFBTSxFQUFFLENBQUM7WUFDVCxPQUFPLEVBQUUsQ0FBQztZQUNWLGVBQWUsRUFBRSxhQUFhO1lBQzlCLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsU0FBUztnQkFD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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function Rotate(props) {
    window["__checkBudget__"]();
    if (framer_1.RenderTarget.current() === framer_1.RenderTarget.thumbnail) {
        return React.createElement(framer_1.Frame, { background: "#9C00FF" });
    }
    const { firstLine, fontSize, fontColor, stagger } = props;
    // Create an array of letters
    const string = Array.from(firstLine);
    // Add staggering effect to the children of the container
    const containerVariants = {
        before: {},
        after: { transition: { staggerChildren: stagger } },
    };
    // Variants for animating each letter
    // Set transform origin for desired effect
    const letterVariants = {
        before: {
            rotate: 90,
            opacity: 0,
            transformOrigin: "left bottom",
            transition: {
                ease: "easeOut",
                y: { stiffness: 1000, velocity: -100 },
            },
        },
        after: {
            rotate: 0,
            opacity: 1,
            transformOrigin: "left bottom",
            transition: {
                ease: "easeOut",
                y: { stiffness: 1000, velocity: -100 },
            },
        },
    };
    return (React.createElement(framer_1.Frame, { size: "100%", background: "" },
        React.createElement(framer_1.Frame, { center: "y", height: fontSize, width: "100%", background: "", overflow: "hidden", style: {
                fontFamily: "Montserrat, Work Sans, sans-serif",
                fontWeight: "bold",
                letterSpacing: "-0.04em",
                fontSize: fontSize,
                color: fontColor,
                display: "flex",
                justifyContent: "center",
            }, variants: containerVariants, initial: "before", animate: "after" }, string.map((l, i) => (
        // Set width to "auto" in order to ensure default kerning
        React.createElement(framer_1.Frame, { key: i, custom: i, height: fontSize, background: "", variants: letterVariants, style: { width: "auto", position: "relative" } }, // Set space to a non-breaking space, or a space with a default width
        l === " " ? "\u00A0" : l))))));
}
exports.Rotate = Rotate;
Rotate.defaultProps = {
    height: 28,
    width: 200,
    firstLine: "First Line",
    fontSize: 26,
    fontColor: "#FFF",
    stagger: 0.06,
};
framer_1.addPropertyControls(Rotate, {
    firstLine: {
        title: "Text",
        type: framer_1.ControlType.String,
        defaultValue: "First Line",
    },
    fontSize: {
        title: "Font Size",
        type: framer_1.ControlType.Number,
        defaultValue: 26,
        min: 0,
        max: 120,
        unit: "pt",
        step: 1,
        displayStepper: true,
    },
    fontColor: {
        title: "Color",
        type: framer_1.ControlType.Color,
        defaultValue: "#FFF",
    },
    stagger: {
        type: framer_1.ControlType.Number,
        title: "Stagger",
        defaultValue: 0.06,
        min: 0,
        max: 1,
        unit: "s",
        step: 0.01,
        displayStepper: true,
    },
});
exports.__info__ = [{ "name": "Rotate", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/7. Rotate_Loop.tsx":
/*!*********************************!*\
  !*** ./code/7. Rotate_Loop.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy4gUm90YXRlX0xvb3AuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlLzcuIFJvdGF0ZV9Mb29wLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG9DQUFvQztBQUVwQywrQkFBOEI7QUFDOUIsbUNBTWU7QUFFZixTQUFnQixVQUFVLENBQUMsS0FBSzs7SUFDNUIsSUFBSSxxQkFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLHFCQUFZLENBQUMsU0FBUyxFQUFFO1FBQ25ELE9BQU8sb0JBQUMsY0FBSyxJQUFDLFVBQVUsRUFBRSxTQUFTLEdBQUksQ0FBQTtLQUMxQztJQUVELE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxHQUFHLEtBQUssQ0FBQTtJQUVoRCw2QkFBNkI7SUFDN0IsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUVwQywwQkFBMEI7SUFDMUIsTUFBTSxlQUFlLEdBQUcscUJBQVksRUFBRSxDQUFBO0lBRXRDLFNBQWUsV0FBVzs7O1lBQ3RCLFNBQVM7O2dCQUNMLE1BQU0sZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQzlCLE1BQU0sRUFBRSxDQUFDO29CQUNULE9BQU8sRUFBRSxDQUFDO29CQUNWLGVBQWUsRUFBRSxhQUFhO29CQUM5QixVQUFVLEVBQUU7d0JBQ1IsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQzt3QkFDbkIsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUU7cUJBQ3pDO2lCQUNKLENBQUMsQ0FBQyxDQUFBO2dCQUNILE1BQU0sZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQzlCLE1BQU0sRUFBRSxFQUFFO29CQUNWLE9B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

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/* THIS FILE IS FOR THE DEMO ONLY */
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function RotateLoop(props) {
    window["__checkBudget__"]();
    if (framer_1.RenderTarget.current() === framer_1.RenderTarget.thumbnail) {
        return React.createElement(framer_1.Frame, { background: "#9C00FF" });
    }
    const { firstLine, fontSize, fontColor } = props;
    // Create an array of letters
    const string = Array.from(firstLine);
    // Create letter animation
    const letterAnimation = framer_1.useAnimation();
    function animateLoop() {
        return __awaiter(this, void 0, void 0, function* () {
            window["__checkBudget__"]();
            for (;;) {
                window["__checkBudget__"]();
                yield letterAnimation.start(i => ({
                    rotate: 0,
                    opacity: 1,
                    transformOrigin: "left bottom",
                    transition: {
                        ease: "easeOut",
                        delay: 1 + 0.06 * i,
                        y: { stiffness: 1000, velocity: -100 },
                    },
                }));
                yield letterAnimation.start(i => ({
                    rotate: 90,
                    opacity: 0,
                    transformOrigin: "left bottom",
                    transition: {
                        ease: "easeOut",
                        delay: 2 - 0.06 * i,
                        y: { stiffness: 1000, velocity: -100 },
                    },
                }));
            }
        });
    }
    animateLoop();
    return (React.createElement(framer_1.Frame, { size: "100%", background: "" },
        React.createElement(framer_1.Frame, { center: "y", height: fontSize, width: "100%", background: "", overflow: "hidden", style: {
                fontFamily: "Montserrat, Work Sans, sans-serif",
                fontWeight: "bold",
                letterSpacing: "-0.04em",
                fontSize: fontSize,
                color: fontColor,
                display: "flex",
                justifyContent: "center",
            } }, string.map((l, i) => (
        // Set width to "auto" in order to ensure default kerning
        React.createElement(framer_1.Frame, { key: i, custom: i, height: fontSize, background: "", initial: { rotate: 90, opacity: 0 }, animate: letterAnimation, style: { width: "auto", position: "relative" } }, // Set space to a non-breaking space, or a space with a default width
        l === " " ? "\u00A0" : l))))));
}
exports.RotateLoop = RotateLoop;
RotateLoop.defaultProps = {
    height: 28,
    width: 200,
    firstLine: "First Line",
    fontSize: 26,
    fontColor: "#FFF",
};
framer_1.addPropertyControls(RotateLoop, {
    firstLine: {
        title: "Text",
        type: framer_1.ControlType.String,
        defaultValue: "First Line",
    },
    fontSize: {
        title: "Font Size",
        type: framer_1.ControlType.Number,
        defaultValue: 26,
        min: 0,
        max: 120,
        unit: "pt",
        step: 1,
        displayStepper: true,
    },
    fontColor: {
        title: "Color",
        type: framer_1.ControlType.Color,
        defaultValue: "#FFF",
    },
});
exports.__info__ = [{ "name": "RotateLoop", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/8. Fly.tsx":
/*!*************************!*\
  !*** ./code/8. Fly.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC4gRmx5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS84LiBGbHkudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUE4RTtBQUU5RSxTQUFnQixHQUFHLENBQUMsS0FBSzs7SUFDckIsSUFBSSxxQkFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLHFCQUFZLENBQUMsU0FBUyxFQUFFO1FBQ25ELE9BQU8sb0JBQUMsY0FBSyxJQUFDLFVBQVUsRUFBRSxTQUFTLEdBQUksQ0FBQTtLQUMxQztJQUVELE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxHQUFHLEtBQUssQ0FBQTtJQUUxRSw2QkFBNkI7SUFDN0IsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUVwQyx5REFBeUQ7SUFDekQsTUFBTSxpQkFBaUIsR0FBRztRQUN0QixNQUFNLEVBQUUsRUFBRTtRQUNWLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsRUFBRTtLQUN0RCxDQUFBO0lBRUQscUNBQXFDO0lBQ3JDLE1BQU0sY0FBYyxHQUFHO1FBQ25CLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDVixDQUFDLEVBQUUsS0FBSztZQUNSLE9BQU8sRUFBRSxHQUFHLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMxQixPQUFPLEVBQUUsR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDMUIsT0FBTyxFQUFFLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQzdCLENBQUM7UUFDRixLQUFLLEVBQUU7WUFDSCxDQUFDLEVBQUUsQ0FBQztZQUNKLE9BQU8sRUFBRSxDQUFDO1lBQ1YsT0FBTyxFQUFFLENBQUM7WUFDVixPQUFPLEVBQUUsQ0FBQztZ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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function Fly(props) {
    window["__checkBudget__"]();
    if (framer_1.RenderTarget.current() === framer_1.RenderTarget.thumbnail) {
        return React.createElement(framer_1.Frame, { background: "#BA02FF" });
    }
    const { width, firstLine, fontSize, fontColor, duration, stagger } = props;
    // Create an array of letters
    const string = Array.from(firstLine);
    // Add staggering effect to the children of the container
    const containerVariants = {
        before: {},
        after: { transition: { staggerChildren: stagger } },
    };
    // Variants for animating each letter
    const letterVariants = {
        before: i => ({
            x: width,
            rotateX: 180 * numbersX[i],
            rotateY: 180 * numbersY[i],
            rotateZ: 180 * numbersZ[i],
        }),
        after: {
            x: 0,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            transition: {
                ease: "circOut",
                duration: duration,
            },
        },
    };
    // Create an array of random numbers
    let numbersX = [];
    let numbersY = [];
    let numbersZ = [];
    for (let i = 0; i < string.length; i++) {
        window["__checkBudget__"]();
        let j = Math.random() * 2 - 1;
        let k = Math.random() * 2 - 1;
        let l = Math.random() * 2 - 1;
        numbersX.push(j);
        numbersY.push(k);
        numbersZ.push(l);
    }
    return (React.createElement(framer_1.Frame, { size: "100%", background: "" },
        React.createElement(framer_1.Frame, { center: "y", height: fontSize * 1.2, width: "100%", background: "", overflow: "hidden", style: {
                fontFamily: "Montserrat, Work Sans, sans-serif",
                fontWeight: "bold",
                letterSpacing: "-0.04em",
                fontSize: fontSize,
                color: fontColor,
                display: "flex",
                justifyContent: "center",
            }, variants: containerVariants, initial: "before", animate: "after" }, string.map((l, i) => (
        // Set width to "auto" in order to ensure default kerning
        React.createElement(framer_1.Frame, { key: i, custom: i, height: fontSize * 1.2, background: "", variants: letterVariants, style: { width: "auto", position: "relative" } }, // Set space to a non-breaking space, or a space with a default width
        l === " " ? "\u00A0" : l))))));
}
exports.Fly = Fly;
Fly.defaultProps = {
    height: 28,
    width: 200,
    firstLine: "First Line",
    fontSize: 26,
    fontColor: "#FFF",
    duration: 0.8,
    stagger: 0.1,
};
framer_1.addPropertyControls(Fly, {
    firstLine: {
        title: "Text",
        type: framer_1.ControlType.String,
        defaultValue: "First Line",
    },
    fontSize: {
        title: "Font Size",
        type: framer_1.ControlType.Number,
        defaultValue: 26,
        min: 0,
        max: 120,
        unit: "pt",
        step: 1,
        displayStepper: true,
    },
    fontColor: {
        title: "Color",
        type: framer_1.ControlType.Color,
        defaultValue: "#FFF",
    },
    duration: {
        type: framer_1.ControlType.Number,
        title: "Duration",
        defaultValue: 0.8,
        min: 0,
        max: 5,
        unit: "s",
        step: 0.1,
        displayStepper: true,
    },
    stagger: {
        type: framer_1.ControlType.Number,
        title: "Stagger",
        defaultValue: 0.1,
        min: 0,
        max: 1,
        unit: "s",
        step: 0.01,
        displayStepper: true,
    },
});
exports.__info__ = [{ "name": "Fly", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/8. Fly_Loop.tsx":
/*!******************************!*\
  !*** ./code/8. Fly_Loop.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC4gRmx5X0xvb3AuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlLzguIEZseV9Mb29wLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG9DQUFvQztBQUVwQywrQkFBOEI7QUFDOUIsbUNBTWU7QUFFZixTQUFnQixPQUFPLENBQUMsS0FBSzs7SUFDekIsSUFBSSxxQkFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLHFCQUFZLENBQUMsU0FBUyxFQUFFO1FBQ25ELE9BQU8sb0JBQUMsY0FBSyxJQUFDLFVBQVUsRUFBRSxTQUFTLEdBQUksQ0FBQTtLQUMxQztJQUVELE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FBRyxLQUFLLENBQUE7SUFFdkQsNkJBQTZCO0lBQzdCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7SUFFcEMsMEJBQTBCO0lBQzFCLE1BQU0sZUFBZSxHQUFHLHFCQUFZLEVBQUUsQ0FBQTtJQUN0QyxTQUFlLFdBQVc7OztZQUN0QixTQUFTOztnQkFDTCxNQUFNLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUM5QixDQUFDLEVBQUUsQ0FBQztvQkFDSixPQUFPLEVBQUUsQ0FBQztvQkFDVixPQUFPLEVBQUUsQ0FBQztvQkFDVixPQUFPLEVBQUUsQ0FBQztvQkFDVixVQUFVLEVBQUU7d0JBQ1IsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsUUFBUSxFQUFFLEdBQUc7d0JBQ2IsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQztxQkFDdEI7aUJBQ0osQ0FBQyxDQUFDLENBQUE7Z0JBQ0gsTUFBTSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDOUIsQ0FBQyxFQUFFLEtBQUs7b0JBQ1IsT0FBTyxFQUFFLEdBQUcsR0FBRyxRQUFR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

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/* THIS FILE IS FOR THE DEMO ONLY */
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function FlyLoop(props) {
    window["__checkBudget__"]();
    if (framer_1.RenderTarget.current() === framer_1.RenderTarget.thumbnail) {
        return React.createElement(framer_1.Frame, { background: "#BA02FF" });
    }
    const { width, firstLine, fontSize, fontColor } = props;
    // Create an array of letters
    const string = Array.from(firstLine);
    // Create letter animation
    const letterAnimation = framer_1.useAnimation();
    function animateLoop() {
        return __awaiter(this, void 0, void 0, function* () {
            window["__checkBudget__"]();
            for (;;) {
                window["__checkBudget__"]();
                yield letterAnimation.start(i => ({
                    x: 0,
                    rotateX: 0,
                    rotateY: 0,
                    rotateZ: 0,
                    transition: {
                        ease: "circOut",
                        duration: 0.8,
                        delay: 1 + 0.08 * i,
                    },
                }));
                yield letterAnimation.start(i => ({
                    x: width,
                    rotateX: 180 * numbersX[i],
                    rotateY: 180 * numbersY[i],
                    rotateZ: 180 * numbersZ[i],
                    transition: {
                        ease: "circIn",
                        duration: 0.8,
                        delay: 2 - 0.08 * i,
                    },
                }));
            }
        });
    }
    animateLoop();
    // Create an array of random numbers
    let numbersX = [];
    let numbersY = [];
    let numbersZ = [];
    for (let i = 0; i < string.length; i++) {
        window["__checkBudget__"]();
        let j = Math.random() * 2 - 1;
        let k = Math.random() * 2 - 1;
        let l = Math.random() * 2 - 1;
        numbersX.push(j);
        numbersY.push(k);
        numbersZ.push(l);
    }
    return (React.createElement(framer_1.Frame, { size: "100%", background: "" },
        React.createElement(framer_1.Frame, { center: "y", height: fontSize * 1.2, width: "100%", background: "", overflow: "hidden", style: {
                fontFamily: "Montserrat, Work Sans, sans-serif",
                fontWeight: "bold",
                letterSpacing: "-0.04em",
                fontSize: fontSize,
                color: fontColor,
                display: "flex",
                justifyContent: "center",
            } }, string.map((l, i) => (
        // Set width to "auto" in order to ensure default kerning
        React.createElement(framer_1.Frame, { key: i, custom: i, height: fontSize * 1.2, background: "", initial: {
                x: width,
                rotateX: 180 * numbersX[i],
                rotateY: 180 * numbersY[i],
                rotateZ: 180 * numbersZ[i],
            }, animate: letterAnimation, style: { width: "auto", position: "relative" } }, // Set space to a non-breaking space, or a space with a default width
        l === " " ? "\u00A0" : l))))));
}
exports.FlyLoop = FlyLoop;
FlyLoop.defaultProps = {
    height: 28,
    width: 200,
    firstLine: "First Line",
    fontSize: 26,
    fontColor: "#FFF",
};
framer_1.addPropertyControls(FlyLoop, {
    firstLine: {
        title: "Text",
        type: framer_1.ControlType.String,
        defaultValue: "First Line",
    },
    fontSize: {
        title: "Font Size",
        type: framer_1.ControlType.Number,
        defaultValue: 26,
        min: 0,
        max: 120,
        unit: "pt",
        step: 1,
        displayStepper: true,
    },
    fontColor: {
        title: "Color",
        type: framer_1.ControlType.Color,
        defaultValue: "#FFF",
    },
});
exports.__info__ = [{ "name": "FlyLoop", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/9. Glitch.tsx":
/*!****************************!*\
  !*** ./code/9. Glitch.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS4gR2xpdGNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS85LiBHbGl0Y2gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUE4RTtBQUU5RSxTQUFnQixNQUFNLENBQUMsS0FBSzs7SUFDeEIsSUFBSSxxQkFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLHFCQUFZLENBQUMsU0FBUyxFQUFFO1FBQ25ELE9BQU8sb0JBQUMsY0FBSyxJQUFDLFVBQVUsRUFBRSxTQUFTLEdBQUksQ0FBQTtLQUMxQztJQUVELE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFBO0lBRS9ELCtDQUErQztJQUMvQyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUE7SUFDZCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztRQUM3QixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQ2hCO0lBRUQsb0NBQW9DO0lBQ3BDLE1BQU0sV0FBVyxHQUFHO1FBQ2hCLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDVixDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN6QixPQUFPLEVBQUUsR0FBRztTQUNmLENBQUM7UUFDRixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1QsQ0FBQyxFQUFFLENBQUM7WUFDSixPQUFPLEVBQUUsQ0FBQztZQUNWLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsUUFBUTtnQkFDZCxPQUFPLEVBQUUsQ0FBQztnQkFDVixJQUFJLEVBQUUsR0FBRztnQkFDVCxRQUFRLEVBQUUsR0FBRztnQkFDYixLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLElB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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function Glitch(props) {
    window["__checkBudget__"]();
    if (framer_1.RenderTarget.current() === framer_1.RenderTarget.thumbnail) {
        return React.createElement(framer_1.Frame, { background: "#FF9900" });
    }
    const { width, firstLine, fontSize, fontColor, rowNum } = props;
    // Create array as long as the number of slices
    let items = [];
    for (let m = 0; m < rowNum; m++) {
        window["__checkBudget__"]();
        items.push(0);
    }
    // Variants for animating each slice
    const boxVariants = {
        before: i => ({
            x: -width * directions[i],
            opacity: 0.6,
        }),
        after: i => ({
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 4,
                mass: 0.1,
                velocity: 500,
                delay: numbers[i] * 0.03,
            },
        }),
    };
    // Create an array of random numbers and directions
    let numbers = [];
    let directions = [];
    while (numbers.length < rowNum) {
        window["__checkBudget__"]();
        let j = Math.floor(Math.random() * rowNum) + 1;
        let k = Math.round(Math.random()) * 2 - 1;
        // Make sure that the number is unique
        numbers.indexOf(j) === -1 ? numbers.push(j) : null;
        directions.push(k);
    }
    return (React.createElement(framer_1.Frame, { center: "y", height: fontSize * 1.3, width: "100%", background: "", overflow: "hidden", initial: "before", animate: "after" }, items.map((item, i) => (
    // Create the clipping mask for each slice and position them accordingly
    React.createElement(framer_1.Frame, { key: i, custom: i, center: "y", width: "100%", height: (fontSize * 1.3) / rowNum, overflow: "hidden", background: "", y: ((fontSize * 1.3) / rowNum) * i - (fontSize * 1.3) / 2, variants: boxVariants },
        React.createElement(framer_1.Frame, { size: "100%", background: "", y: ((fontSize * 1.3) / rowNum) * (rowNum / 2 - i), style: {
                fontFamily: "Montserrat, Work Sans, sans-serif",
                fontWeight: "bold",
                letterSpacing: "-0.04em",
                fontSize: fontSize,
                color: fontColor,
            } }, firstLine))))));
}
exports.Glitch = Glitch;
Glitch.defaultProps = {
    height: 28,
    width: 200,
    firstLine: "First Line",
    fontSize: 26,
    fontColor: "#FFF",
    rowNum: 10,
};
framer_1.addPropertyControls(Glitch, {
    firstLine: {
        title: "Text",
        type: framer_1.ControlType.String,
        defaultValue: "First Line",
    },
    fontSize: {
        title: "Font Size",
        type: framer_1.ControlType.Number,
        defaultValue: 26,
        min: 12,
        max: 120,
        unit: "pt",
        step: 1,
        displayStepper: true,
    },
    fontColor: {
        title: "Color",
        type: framer_1.ControlType.Color,
        defaultValue: "#FFF",
    },
    rowNum: {
        title: "Slices",
        type: framer_1.ControlType.Number,
        defaultValue: 10,
        min: 4,
        max: 26,
        step: 2,
        displayStepper: true,
    },
});
exports.__info__ = [{ "name": "Glitch", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/9. Glitch_Loop.tsx":
/*!*********************************!*\
  !*** ./code/9. Glitch_Loop.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS4gR2xpdGNoX0xvb3AuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlLzkuIEdsaXRjaF9Mb29wLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG9DQUFvQztBQUVwQywrQkFBOEI7QUFDOUIsbUNBTWU7QUFFZixTQUFnQixVQUFVLENBQUMsS0FBSzs7SUFDNUIsSUFBSSxxQkFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLHFCQUFZLENBQUMsU0FBUyxFQUFFO1FBQ25ELE9BQU8sb0JBQUMsY0FBSyxJQUFDLFVBQVUsRUFBRSxTQUFTLEdBQUksQ0FBQTtLQUMxQztJQUVELE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FBRyxLQUFLLENBQUE7SUFFdkQsK0NBQStDO0lBQy9DLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQTtJQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O1FBQ3pCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7S0FDaEI7SUFFRCwwQkFBMEI7SUFDMUIsTUFBTSxlQUFlLEdBQUcscUJBQVksRUFBRSxDQUFBO0lBQ3RDLFNBQWUsV0FBVzs7O1lBQ3RCLFNBQVM7O2dCQUNMLE1BQU0sZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQzlCLENBQUMsRUFBRSxDQUFDO29CQUNKLE9BQU8sRUFBRSxDQUFDO29CQUNWLFVBQVUsRUFBRTt3QkFDUixJQUFJLEVBQUUsUUFBUTt3QkFDZCxPQUFPLEVBQUUsQ0FBQzt3QkFDVixJQUFJLEVBQUUsR0FBRzt3QkFDVCxRQUFRLEVBQUUsR0FBRzt3QkFDYixLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUk7cUJBQzNCO2lCQUNKLENBQUMsQ0FBQyxDQUFBO2dCQUNI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

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/* THIS FILE IS FOR THE DEMO ONLY */
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function GlitchLoop(props) {
    window["__checkBudget__"]();
    if (framer_1.RenderTarget.current() === framer_1.RenderTarget.thumbnail) {
        return React.createElement(framer_1.Frame, { background: "#FF9900" });
    }
    const { width, firstLine, fontSize, fontColor } = props;
    // Create array as long as the number of slices
    let items = [];
    for (let m = 0; m < 14; m++) {
        window["__checkBudget__"]();
        items.push(0);
    }
    // Create letter animation
    const letterAnimation = framer_1.useAnimation();
    function animateLoop() {
        return __awaiter(this, void 0, void 0, function* () {
            window["__checkBudget__"]();
            for (;;) {
                window["__checkBudget__"]();
                yield letterAnimation.start(i => ({
                    x: 0,
                    opacity: 1,
                    transition: {
                        type: "spring",
                        damping: 4,
                        mass: 0.1,
                        velocity: 500,
                        delay: numbers[i] * 0.03,
                    },
                }));
                yield letterAnimation.start(i => ({
                    x: -width * directions[i],
                    opacity: 0.6,
                    transition: {
                        type: "spring",
                        damping: 4,
                        mass: 0.1,
                        velocity: 500,
                        delay: 2 + numbers[i] * 0.03,
                    },
                }));
            }
        });
    }
    animateLoop();
    // Create an array of random numbers and directions
    let numbers = [];
    let directions = [];
    while (numbers.length < 10) {
        window["__checkBudget__"]();
        let j = Math.floor(Math.random() * 10) + 1;
        let k = Math.round(Math.random()) * 2 - 1;
        // Make sure that the number is unique
        numbers.indexOf(j) === -1 ? numbers.push(j) : null;
        directions.push(k);
    }
    return (React.createElement(framer_1.Frame, { center: "y", height: fontSize * 1.3, width: "100%", background: "", overflow: "hidden" }, items.map((item, i) => (
    // Create the clipping mask for each slice and position them accordingly
    React.createElement(framer_1.Frame, { key: i, custom: i, center: "y", width: "100%", height: (fontSize * 1.3) / 10, overflow: "hidden", background: "", y: ((fontSize * 1.3) / 10) * i - (fontSize * 1.3) / 2, initial: { x: -width * directions[i], opacity: 0.6 }, animate: letterAnimation },
        React.createElement(framer_1.Frame, { size: "100%", background: "", y: ((fontSize * 1.3) / 10) * (10 / 2 - i), style: {
                fontFamily: "Montserrat, Work Sans, sans-serif",
                fontWeight: "bold",
                letterSpacing: "-0.04em",
                fontSize: fontSize,
                color: fontColor,
            } }, firstLine))))));
}
exports.GlitchLoop = GlitchLoop;
GlitchLoop.defaultProps = {
    height: 28,
    width: 200,
    firstLine: "First Line",
    fontSize: 26,
    fontColor: "#FFF",
};
framer_1.addPropertyControls(GlitchLoop, {
    firstLine: {
        title: "Text",
        type: framer_1.ControlType.String,
        defaultValue: "First Line",
    },
    fontSize: {
        title: "Font Size",
        type: framer_1.ControlType.Number,
        defaultValue: 26,
        min: 12,
        max: 120,
        unit: "pt",
        step: 1,
        displayStepper: true,
    },
    fontColor: {
        title: "Color",
        type: framer_1.ControlType.Color,
        defaultValue: "#FFF",
    },
});
exports.__info__ = [{ "name": "GlitchLoop", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[]});


/***/ }),

/***/ "./entry.js":
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const packageInfo = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

try {
    // This is a special webpack thing that watches the whole directory
    // https://github.com/webpack/docs/wiki/context
    const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

    ctx.keys().forEach(key => {
        packageInfo.sourceModules[key] = () => ctx(key)
    })
} catch (e) {
    // Handle when the code directory is missing
    // See issue #8178 for more information
}

const packages = {}

// The packages are passed in through a template

                packages["framer"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer */ "framer")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["framer"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"name":"framer","version":"1.1.7","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@emotion/is-prop-valid":"^0.8.2","@microsoft/api-extractor":"^7.3.4","@testing-library/react":"^8.0.1","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/google.fonts":"^1.0.2","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^10.12.9","@types/promise-queue":"^2.2.0","@types/react":"16.8.4","@types/react-dom":"^16.8","@types/webfontloader":"^1.6.29","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"^1.6.7","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-dom":"^3.1.3","jest-junit":"^5.2.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","promise-queue":"^2.2.5","raf":"^3.4.0","react":"^16.8","react-dev-utils":"^5.0.1","react-dom":"^16.8","react-hooks-testing-library":"^0.5.1","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","style-value-types":"^3.1.4","ts-jest":"^23.10.5","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","typescript":"^3.5.3","watch":"^1.0.2","webfontloader":"^1.6.28","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.8.2","react-dom":"^16.8.2"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]}}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

packageInfo.dependencies = packages

exports.__framer__ = packageInfo


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: author, devDependencies, framer, license, main, peerDependencies, dependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"author\":\"Anne Lee\",\"devDependencies\":{\"@types/react\":\"^16.8\"},\"framer\":{\"authorId\":\"b3a21181-c4c8-4296-a5aa-d6ce34e6d49c\",\"webId\":\"8xC9LX04ZnCTHyzYTm4w\",\"id\":\"6e3a40fe-cf0d-4420-986a-efd24cb86fdb\"},\"license\":\"MIT\",\"main\":\"dist/index.js\",\"peerDependencies\":{\"framer\":\"^1.0\",\"react\":\"^16.8\"},\"dependencies\":{}}");

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});