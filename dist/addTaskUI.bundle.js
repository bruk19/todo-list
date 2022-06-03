/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/remove.js":
/*!***********************!*\
  !*** ./src/remove.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const clearTask = (index, list) => {
  if (list.length === 0) return;

  list.splice(index - 1, 1);

  document.querySelector(`#task-${index}`).parentNode.parentNode.remove();
  localStorage.setItem('tasks', JSON.stringify(list));

  if (list.length === 0) return;

  for (let i = index - 1; i < list.length; i += 1) {
    const nextCheck = document.querySelector(`#task-${i + 2}`);
    nextCheck.id = `task-${i + 1}`;
    nextCheck.value -= 1;
    list[i].index -= 1;
    localStorage.setItem('tasks', JSON.stringify(list));
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearTask); 

/***/ }),

/***/ "./src/move.png":
/*!**********************!*\
  !*** ./src/move.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0cdea37dae77c92671b5.png";

/***/ }),

/***/ "./src/trash.png":
/*!***********************!*\
  !*** ./src/trash.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "667a1805229ae33e7d3d.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/addTaskUI.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _move_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./move.png */ "./src/move.png");
/* harmony import */ var _trash_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trash.png */ "./src/trash.png");
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove.js */ "./src/remove.js");




const toDoListUI = document.querySelector('.to-do-list');
const endCont = document.querySelector('.clear');

const appendTask = (item, list) => {
  const taskUI = document.createElement('li');
  taskUI.innerHTML = `<div><input type='checkbox' id = task-${item.index} class = 'check' value=${item.index}><p size='12'>${item.description}</p></div>`;
  const moveImg = new Image();
  moveImg.src = _move_png__WEBPACK_IMPORTED_MODULE_0__;
  taskUI.appendChild(moveImg);
  moveImg.addEventListener('click', () => {
    if (moveImg.src === _move_png__WEBPACK_IMPORTED_MODULE_0__) {
      moveImg.src = _trash_png__WEBPACK_IMPORTED_MODULE_1__;
      moveImg.parentNode.style.background = 'rgba(214, 214, 148, 0.534)';
      taskUI.children[0].children[1].setAttribute('contenteditable', 'true');
      endCont.textContent = 'Click here to save changes';
      endCont.classList.add('makeChanges');
      endCont.style.fontSize = '24px';
      endCont.addEventListener('click', (e) => {
        if (moveImg.src === _trash_png__WEBPACK_IMPORTED_MODULE_1__) {
          e.target.textContent = 'Clear all completed';
          e.target.classList.remove('makeChanges');
          e.target.style.fontSize = '20px';
          taskUI.children[0].children[1].setAttribute('contenteditable', 'false');
          moveImg.src = _move_png__WEBPACK_IMPORTED_MODULE_0__;
          moveImg.parentNode.style.background = 'inherit';
          list.forEach((element) => {
            if (element.index === item.index) {
              element.description = taskUI.children[0].children[1].textContent;
              localStorage.setItem('tasks', JSON.stringify(list));
            }
          });
        }
      });
    } else {
      (0,_remove_js__WEBPACK_IMPORTED_MODULE_2__["default"])(item.index, list);
    }
  });
  toDoListUI.appendChild(taskUI);
  const check = taskUI.children[0].children[0];

  if (item.completed === true) {
    check.checked = true;
    taskUI.children[0].style.textDecoration = 'line-through';
  }

  check.style.cursor = 'pointer';
  moveImg.style.cursor = 'pointer';
  check.addEventListener('click', () => {
    if (check.checked === true) {
      taskUI.children[0].style.textDecoration = 'line-through';
      item.completed = true;
      localStorage.setItem('tasks', JSON.stringify(list));
    } else {
      taskUI.children[0].style.textDecoration = 'none';
      item.completed = false;
      localStorage.setItem('tasks', JSON.stringify(list));
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendTask);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkVGFza1VJLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsTUFBTTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixpQkFBaUI7QUFDM0Msc0RBQXNELE1BQU07QUFDNUQsMkJBQTJCLE1BQU07QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ25CekI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZmlDO0FBQ0U7QUFDQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsWUFBWSx3QkFBd0IsV0FBVyxnQkFBZ0IsaUJBQWlCO0FBQzlJO0FBQ0EsZ0JBQWdCLHNDQUFPO0FBQ3ZCO0FBQ0E7QUFDQSx3QkFBd0Isc0NBQU87QUFDL0Isb0JBQW9CLHVDQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix1Q0FBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzQ0FBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOLE1BQU0sc0RBQVM7QUFDZjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFlLFVBQVUsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9yZW1vdmUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hZGRUYXNrVUkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2xlYXJUYXNrID0gKGluZGV4LCBsaXN0KSA9PiB7XHJcbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSByZXR1cm47XHJcblxyXG4gIGxpc3Quc3BsaWNlKGluZGV4IC0gMSwgMSk7XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7aW5kZXh9YCkucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZSgpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KGxpc3QpKTtcclxuXHJcbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSByZXR1cm47XHJcblxyXG4gIGZvciAobGV0IGkgPSBpbmRleCAtIDE7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBuZXh0Q2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFzay0ke2kgKyAyfWApO1xyXG4gICAgbmV4dENoZWNrLmlkID0gYHRhc2stJHtpICsgMX1gO1xyXG4gICAgbmV4dENoZWNrLnZhbHVlIC09IDE7XHJcbiAgICBsaXN0W2ldLmluZGV4IC09IDE7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeShsaXN0KSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xlYXJUYXNrOyAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgbW92ZVNyYyBmcm9tICcuL21vdmUucG5nJztcclxuaW1wb3J0IHRyYXNoU3JjIGZyb20gJy4vdHJhc2gucG5nJztcclxuaW1wb3J0IGNsZWFyVGFzayBmcm9tICcuL3JlbW92ZS5qcyc7XHJcblxyXG5jb25zdCB0b0RvTGlzdFVJID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWxpc3QnKTtcclxuY29uc3QgZW5kQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhcicpO1xyXG5cclxuY29uc3QgYXBwZW5kVGFzayA9IChpdGVtLCBsaXN0KSA9PiB7XHJcbiAgY29uc3QgdGFza1VJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICB0YXNrVUkuaW5uZXJIVE1MID0gYDxkaXY+PGlucHV0IHR5cGU9J2NoZWNrYm94JyBpZCA9IHRhc2stJHtpdGVtLmluZGV4fSBjbGFzcyA9ICdjaGVjaycgdmFsdWU9JHtpdGVtLmluZGV4fT48cCBzaXplPScxMic+JHtpdGVtLmRlc2NyaXB0aW9ufTwvcD48L2Rpdj5gO1xyXG4gIGNvbnN0IG1vdmVJbWcgPSBuZXcgSW1hZ2UoKTtcclxuICBtb3ZlSW1nLnNyYyA9IG1vdmVTcmM7XHJcbiAgdGFza1VJLmFwcGVuZENoaWxkKG1vdmVJbWcpO1xyXG4gIG1vdmVJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAobW92ZUltZy5zcmMgPT09IG1vdmVTcmMpIHtcclxuICAgICAgbW92ZUltZy5zcmMgPSB0cmFzaFNyYztcclxuICAgICAgbW92ZUltZy5wYXJlbnROb2RlLnN0eWxlLmJhY2tncm91bmQgPSAncmdiYSgyMTQsIDIxNCwgMTQ4LCAwLjUzNCknO1xyXG4gICAgICB0YXNrVUkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAndHJ1ZScpO1xyXG4gICAgICBlbmRDb250LnRleHRDb250ZW50ID0gJ0NsaWNrIGhlcmUgdG8gc2F2ZSBjaGFuZ2VzJztcclxuICAgICAgZW5kQ29udC5jbGFzc0xpc3QuYWRkKCdtYWtlQ2hhbmdlcycpO1xyXG4gICAgICBlbmRDb250LnN0eWxlLmZvbnRTaXplID0gJzI0cHgnO1xyXG4gICAgICBlbmRDb250LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBpZiAobW92ZUltZy5zcmMgPT09IHRyYXNoU3JjKSB7XHJcbiAgICAgICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9ICdDbGVhciBhbGwgY29tcGxldGVkJztcclxuICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ21ha2VDaGFuZ2VzJyk7XHJcbiAgICAgICAgICBlLnRhcmdldC5zdHlsZS5mb250U2l6ZSA9ICcyMHB4JztcclxuICAgICAgICAgIHRhc2tVSS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICdmYWxzZScpO1xyXG4gICAgICAgICAgbW92ZUltZy5zcmMgPSBtb3ZlU3JjO1xyXG4gICAgICAgICAgbW92ZUltZy5wYXJlbnROb2RlLnN0eWxlLmJhY2tncm91bmQgPSAnaW5oZXJpdCc7XHJcbiAgICAgICAgICBsaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW5kZXggPT09IGl0ZW0uaW5kZXgpIHtcclxuICAgICAgICAgICAgICBlbGVtZW50LmRlc2NyaXB0aW9uID0gdGFza1VJLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KGxpc3QpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNsZWFyVGFzayhpdGVtLmluZGV4LCBsaXN0KTtcclxuICAgIH1cclxuICB9KTtcclxuICB0b0RvTGlzdFVJLmFwcGVuZENoaWxkKHRhc2tVSSk7XHJcbiAgY29uc3QgY2hlY2sgPSB0YXNrVUkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF07XHJcblxyXG4gIGlmIChpdGVtLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xyXG4gICAgY2hlY2suY2hlY2tlZCA9IHRydWU7XHJcbiAgICB0YXNrVUkuY2hpbGRyZW5bMF0uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcclxuICB9XHJcblxyXG4gIGNoZWNrLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICBtb3ZlSW1nLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICBjaGVjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChjaGVjay5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgIHRhc2tVSS5jaGlsZHJlblswXS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xyXG4gICAgICBpdGVtLmNvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KGxpc3QpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRhc2tVSS5jaGlsZHJlblswXS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcclxuICAgICAgaXRlbS5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkobGlzdCkpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBwZW5kVGFzazsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=