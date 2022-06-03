/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addTaskUI.js":
/*!**************************!*\
  !*** ./src/addTaskUI.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

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
/*!********************!*\
  !*** ./src/add.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "list": () => (/* binding */ list)
/* harmony export */ });
/* harmony import */ var _addTaskUI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTaskUI.js */ "./src/addTaskUI.js");


const list = [];

class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const addTask = (description, completed, index) => {
  const task = new Task(description, completed, index);
  list.push(task);
  (0,_addTaskUI_js__WEBPACK_IMPORTED_MODULE_0__["default"])(task);
  localStorage.setItem('tasks', JSON.stringify(list));
};


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNFO0FBQ0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELFlBQVksd0JBQXdCLFdBQVcsZ0JBQWdCLGlCQUFpQjtBQUM5STtBQUNBLGdCQUFnQixzQ0FBTztBQUN2QjtBQUNBO0FBQ0Esd0JBQXdCLHNDQUFPO0FBQy9CLG9CQUFvQix1Q0FBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsdUNBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isc0NBQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTixNQUFNLHNEQUFTO0FBQ2Y7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7OztBQ2hFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxNQUFNO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGlCQUFpQjtBQUMzQyxzREFBc0QsTUFBTTtBQUM1RCwyQkFBMkIsTUFBTTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkJ6QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseURBQVU7QUFDWjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYWRkVGFza1VJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9yZW1vdmUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hZGQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vdmVTcmMgZnJvbSAnLi9tb3ZlLnBuZyc7XHJcbmltcG9ydCB0cmFzaFNyYyBmcm9tICcuL3RyYXNoLnBuZyc7XHJcbmltcG9ydCBjbGVhclRhc2sgZnJvbSAnLi9yZW1vdmUuanMnO1xyXG5cclxuY29uc3QgdG9Eb0xpc3RVSSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1saXN0Jyk7XHJcbmNvbnN0IGVuZENvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xlYXInKTtcclxuXHJcbmNvbnN0IGFwcGVuZFRhc2sgPSAoaXRlbSwgbGlzdCkgPT4ge1xyXG4gIGNvbnN0IHRhc2tVSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgdGFza1VJLmlubmVySFRNTCA9IGA8ZGl2PjxpbnB1dCB0eXBlPSdjaGVja2JveCcgaWQgPSB0YXNrLSR7aXRlbS5pbmRleH0gY2xhc3MgPSAnY2hlY2snIHZhbHVlPSR7aXRlbS5pbmRleH0+PHAgc2l6ZT0nMTInPiR7aXRlbS5kZXNjcmlwdGlvbn08L3A+PC9kaXY+YDtcclxuICBjb25zdCBtb3ZlSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgbW92ZUltZy5zcmMgPSBtb3ZlU3JjO1xyXG4gIHRhc2tVSS5hcHBlbmRDaGlsZChtb3ZlSW1nKTtcclxuICBtb3ZlSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKG1vdmVJbWcuc3JjID09PSBtb3ZlU3JjKSB7XHJcbiAgICAgIG1vdmVJbWcuc3JjID0gdHJhc2hTcmM7XHJcbiAgICAgIG1vdmVJbWcucGFyZW50Tm9kZS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYmEoMjE0LCAyMTQsIDE0OCwgMC41MzQpJztcclxuICAgICAgdGFza1VJLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ3RydWUnKTtcclxuICAgICAgZW5kQ29udC50ZXh0Q29udGVudCA9ICdDbGljayBoZXJlIHRvIHNhdmUgY2hhbmdlcyc7XHJcbiAgICAgIGVuZENvbnQuY2xhc3NMaXN0LmFkZCgnbWFrZUNoYW5nZXMnKTtcclxuICAgICAgZW5kQ29udC5zdHlsZS5mb250U2l6ZSA9ICcyNHB4JztcclxuICAgICAgZW5kQ29udC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKG1vdmVJbWcuc3JjID09PSB0cmFzaFNyYykge1xyXG4gICAgICAgICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSAnQ2xlYXIgYWxsIGNvbXBsZXRlZCc7XHJcbiAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdtYWtlQ2hhbmdlcycpO1xyXG4gICAgICAgICAgZS50YXJnZXQuc3R5bGUuZm9udFNpemUgPSAnMjBweCc7XHJcbiAgICAgICAgICB0YXNrVUkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAnZmFsc2UnKTtcclxuICAgICAgICAgIG1vdmVJbWcuc3JjID0gbW92ZVNyYztcclxuICAgICAgICAgIG1vdmVJbWcucGFyZW50Tm9kZS5zdHlsZS5iYWNrZ3JvdW5kID0gJ2luaGVyaXQnO1xyXG4gICAgICAgICAgbGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmluZGV4ID09PSBpdGVtLmluZGV4KSB7XHJcbiAgICAgICAgICAgICAgZWxlbWVudC5kZXNjcmlwdGlvbiA9IHRhc2tVSS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeShsaXN0KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjbGVhclRhc2soaXRlbS5pbmRleCwgbGlzdCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgdG9Eb0xpc3RVSS5hcHBlbmRDaGlsZCh0YXNrVUkpO1xyXG4gIGNvbnN0IGNoZWNrID0gdGFza1VJLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdO1xyXG5cclxuICBpZiAoaXRlbS5jb21wbGV0ZWQgPT09IHRydWUpIHtcclxuICAgIGNoZWNrLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgdGFza1VJLmNoaWxkcmVuWzBdLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XHJcbiAgfVxyXG5cclxuICBjaGVjay5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcbiAgbW92ZUltZy5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcbiAgY2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAoY2hlY2suY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICB0YXNrVUkuY2hpbGRyZW5bMF0uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcclxuICAgICAgaXRlbS5jb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeShsaXN0KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0YXNrVUkuY2hpbGRyZW5bMF0uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XHJcbiAgICAgIGl0ZW0uY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KGxpc3QpKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwcGVuZFRhc2s7IiwiY29uc3QgY2xlYXJUYXNrID0gKGluZGV4LCBsaXN0KSA9PiB7XHJcbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSByZXR1cm47XHJcblxyXG4gIGxpc3Quc3BsaWNlKGluZGV4IC0gMSwgMSk7XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7aW5kZXh9YCkucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZSgpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KGxpc3QpKTtcclxuXHJcbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSByZXR1cm47XHJcblxyXG4gIGZvciAobGV0IGkgPSBpbmRleCAtIDE7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBuZXh0Q2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFzay0ke2kgKyAyfWApO1xyXG4gICAgbmV4dENoZWNrLmlkID0gYHRhc2stJHtpICsgMX1gO1xyXG4gICAgbmV4dENoZWNrLnZhbHVlIC09IDE7XHJcbiAgICBsaXN0W2ldLmluZGV4IC09IDE7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeShsaXN0KSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xlYXJUYXNrOyAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgYXBwZW5kVGFzayBmcm9tICcuL2FkZFRhc2tVSS5qcyc7XHJcblxyXG5jb25zdCBsaXN0ID0gW107XHJcblxyXG5jbGFzcyBUYXNrIHtcclxuICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbiwgY29tcGxldGVkLCBpbmRleCkge1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XHJcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBhZGRUYXNrID0gKGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQsIGluZGV4KSA9PiB7XHJcbiAgY29uc3QgdGFzayA9IG5ldyBUYXNrKGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQsIGluZGV4KTtcclxuICBsaXN0LnB1c2godGFzayk7XHJcbiAgYXBwZW5kVGFzayh0YXNrKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeShsaXN0KSk7XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIGFkZFRhc2ssXHJcbiAgbGlzdCxcclxuICBUYXNrLFxyXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==