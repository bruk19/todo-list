/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/remove.js ***!
  \***********************/
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
  
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsTUFBTTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixpQkFBaUI7QUFDN0Msd0RBQXdELE1BQU07QUFDOUQsNkJBQTZCLE1BQU07QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcmVtb3ZlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNsZWFyVGFzayA9IChpbmRleCwgbGlzdCkgPT4ge1xyXG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSByZXR1cm47XHJcbiAgXHJcbiAgICBsaXN0LnNwbGljZShpbmRleCAtIDEsIDEpO1xyXG4gIFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2stJHtpbmRleH1gKS5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlKCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeShsaXN0KSk7XHJcbiAgXHJcbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDApIHJldHVybjtcclxuICBcclxuICAgIGZvciAobGV0IGkgPSBpbmRleCAtIDE7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGNvbnN0IG5leHRDaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7aSArIDJ9YCk7XHJcbiAgICAgIG5leHRDaGVjay5pZCA9IGB0YXNrLSR7aSArIDF9YDtcclxuICAgICAgbmV4dENoZWNrLnZhbHVlIC09IDE7XHJcbiAgICAgIGxpc3RbaV0uaW5kZXggLT0gMTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkobGlzdCkpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9