const modules = {
  "./src/index.js": function (__webpack_exports__, __webpack_require__) {
    const multiply = __webpack_require__("./src/multiply.js").default;
    const sum = __webpack_require__("./src/sum.js").default;

    const totalMultiply = multiply(5, 3);
    const totalSum = sum(5, 3);

    console.log(`Product of 5 and 3 = ${totalMultiply}`);
    console.log(`Sum of 5 and 3 = ${totalSum}`);
  },

  "./src/multiply.js": function (__webpack_exports__, __webpack_require__) {
    const sum = __webpack_require__("./src/sum.js").default;

    __webpack_exports__.default = (a, b) => new Array(a).fill(b).reduce(sum, 0);
  },

  "./src/sum.js": function (__webpack_exports__) {
    __webpack_exports__.default = (a, b) => a + b;
  },
};


// The module cache
const installedModules = {};

// The require function
function __webpack_require__(moduleId) {

  if (installedModules[moduleId]) {
    return installedModules[moduleId].exports;
  }

  const module = installedModules[moduleId] = { exports: {} };

  modules[moduleId].call(module.exports, __webpack_require__);

  return module.exports;
}

// Load entry module
__webpack_require__("./src/index.js");

