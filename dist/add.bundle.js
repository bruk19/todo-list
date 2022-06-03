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
      endCont.style.fontSize = '25px';
      endCont.style.color = 'rgba(243, 9, 9, 0.534)';
      endCont.addEventListener('click', (e) => {
        if (moveImg.src === _trash_png__WEBPACK_IMPORTED_MODULE_1__) {
          e.target.textContent = 'Clear all completed';
          e.target.style.background = 'rgba(168, 157, 157, 0.534)';
          e.target.style.fontSize = '16px';
          e.target.style.color = 'black';
          taskUI.children[0].children[1].setAttribute('contenteditable', 'false');
          moveImg.src = _move_png__WEBPACK_IMPORTED_MODULE_0__;

          taskUI(() => {
            localStorage.setItem('moveImg', JSON.stringify(_move_png__WEBPACK_IMPORTED_MODULE_0__));
          }, [_move_png__WEBPACK_IMPORTED_MODULE_0__]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNFO0FBQ0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELFlBQVksd0JBQXdCLFdBQVcsZ0JBQWdCLGlCQUFpQjtBQUM5STtBQUNBLGdCQUFnQixzQ0FBTztBQUN2QjtBQUNBO0FBQ0Esd0JBQXdCLHNDQUFPO0FBQy9CLG9CQUFvQix1Q0FBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHVDQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isc0NBQU87QUFDL0I7QUFDQTtBQUNBLDJEQUEyRCxzQ0FBTztBQUNsRSxXQUFXLEdBQUcsc0NBQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTixNQUFNLHNEQUFTO0FBQ2Y7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7OztBQ3BFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxNQUFNO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGlCQUFpQjtBQUMzQyxzREFBc0QsTUFBTTtBQUM1RCwyQkFBMkIsTUFBTTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ25CeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZndDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHlEQUFVO0FBQ1o7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FkZFRhc2tVSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcmVtb3ZlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYWRkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb3ZlU3JjIGZyb20gJy4vbW92ZS5wbmcnO1xyXG5pbXBvcnQgdHJhc2hTcmMgZnJvbSAnLi90cmFzaC5wbmcnO1xyXG5pbXBvcnQgY2xlYXJUYXNrIGZyb20gJy4vcmVtb3ZlLmpzJztcclxuXHJcbmNvbnN0IHRvRG9MaXN0VUkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tbGlzdCcpO1xyXG5jb25zdCBlbmRDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsZWFyJyk7XHJcblxyXG5jb25zdCBhcHBlbmRUYXNrID0gKGl0ZW0sIGxpc3QpID0+IHtcclxuICBjb25zdCB0YXNrVUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIHRhc2tVSS5pbm5lckhUTUwgPSBgPGRpdj48aW5wdXQgdHlwZT0nY2hlY2tib3gnIGlkID0gdGFzay0ke2l0ZW0uaW5kZXh9IGNsYXNzID0gJ2NoZWNrJyB2YWx1ZT0ke2l0ZW0uaW5kZXh9PjxwIHNpemU9JzEyJz4ke2l0ZW0uZGVzY3JpcHRpb259PC9wPjwvZGl2PmA7XHJcbiAgY29uc3QgbW92ZUltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIG1vdmVJbWcuc3JjID0gbW92ZVNyYztcclxuICB0YXNrVUkuYXBwZW5kQ2hpbGQobW92ZUltZyk7XHJcbiAgbW92ZUltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChtb3ZlSW1nLnNyYyA9PT0gbW92ZVNyYykge1xyXG4gICAgICBtb3ZlSW1nLnNyYyA9IHRyYXNoU3JjO1xyXG4gICAgICBtb3ZlSW1nLnBhcmVudE5vZGUuc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2JhKDIxNCwgMjE0LCAxNDgsIDAuNTM0KSc7XHJcbiAgICAgIHRhc2tVSS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICd0cnVlJyk7XHJcbiAgICAgIGVuZENvbnQuc3R5bGUuZm9udFNpemUgPSAnMjVweCc7XHJcbiAgICAgIGVuZENvbnQuc3R5bGUuY29sb3IgPSAncmdiYSgyNDMsIDksIDksIDAuNTM0KSc7XHJcbiAgICAgIGVuZENvbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChtb3ZlSW1nLnNyYyA9PT0gdHJhc2hTcmMpIHtcclxuICAgICAgICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gJ0NsZWFyIGFsbCBjb21wbGV0ZWQnO1xyXG4gICAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2JhKDE2OCwgMTU3LCAxNTcsIDAuNTM0KSc7XHJcbiAgICAgICAgICBlLnRhcmdldC5zdHlsZS5mb250U2l6ZSA9ICcxNnB4JztcclxuICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gJ2JsYWNrJztcclxuICAgICAgICAgIHRhc2tVSS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICdmYWxzZScpO1xyXG4gICAgICAgICAgbW92ZUltZy5zcmMgPSBtb3ZlU3JjO1xyXG5cclxuICAgICAgICAgIHRhc2tVSSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtb3ZlSW1nJywgSlNPTi5zdHJpbmdpZnkobW92ZVNyYykpO1xyXG4gICAgICAgICAgfSwgW21vdmVTcmNdKTtcclxuXHJcbiAgICAgICAgICBsaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW5kZXggPT09IGl0ZW0uaW5kZXgpIHtcclxuICAgICAgICAgICAgICBlbGVtZW50LmRlc2NyaXB0aW9uID0gdGFza1VJLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KGxpc3QpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNsZWFyVGFzayhpdGVtLmluZGV4LCBsaXN0KTtcclxuICAgIH1cclxuICB9KTtcclxuICB0b0RvTGlzdFVJLmFwcGVuZENoaWxkKHRhc2tVSSk7XHJcbiAgY29uc3QgY2hlY2sgPSB0YXNrVUkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF07XHJcblxyXG4gIGlmIChpdGVtLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xyXG4gICAgY2hlY2suY2hlY2tlZCA9IHRydWU7XHJcbiAgICB0YXNrVUkuY2hpbGRyZW5bMF0uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcclxuICB9XHJcblxyXG4gIGNoZWNrLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICBtb3ZlSW1nLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICBjaGVjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChjaGVjay5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgIHRhc2tVSS5jaGlsZHJlblswXS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xyXG4gICAgICBpdGVtLmNvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KGxpc3QpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRhc2tVSS5jaGlsZHJlblswXS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcclxuICAgICAgaXRlbS5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkobGlzdCkpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBwZW5kVGFzazsiLCJjb25zdCBjbGVhclRhc2sgPSAoaW5kZXgsIGxpc3QpID0+IHtcclxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgbGlzdC5zcGxpY2UoaW5kZXggLSAxLCAxKTtcclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2stJHtpbmRleH1gKS5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlKCk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkobGlzdCkpO1xyXG5cclxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgZm9yIChsZXQgaSA9IGluZGV4IC0gMTsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IG5leHRDaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7aSArIDJ9YCk7XHJcbiAgICBuZXh0Q2hlY2suaWQgPSBgdGFzay0ke2kgKyAxfWA7XHJcbiAgICBuZXh0Q2hlY2sudmFsdWUgLT0gMTtcclxuICAgIGxpc3RbaV0uaW5kZXggLT0gMTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KGxpc3QpKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGVhclRhc2s7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGFwcGVuZFRhc2sgZnJvbSAnLi9hZGRUYXNrVUkuanMnO1xyXG5cclxuY29uc3QgbGlzdCA9IFtdO1xyXG5cclxuY2xhc3MgVGFzayB7XHJcbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24sIGNvbXBsZXRlZCwgaW5kZXgpIHtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xyXG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgYWRkVGFzayA9IChkZXNjcmlwdGlvbiwgY29tcGxldGVkLCBpbmRleCkgPT4ge1xyXG4gIGNvbnN0IHRhc2sgPSBuZXcgVGFzayhkZXNjcmlwdGlvbiwgY29tcGxldGVkLCBpbmRleCk7XHJcbiAgbGlzdC5wdXNoKHRhc2spO1xyXG4gIGFwcGVuZFRhc2sodGFzayk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkobGlzdCkpO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBhZGRUYXNrLFxyXG4gIGxpc3QsXHJcbiAgVGFzayxcclxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=