// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({6:[function(require,module,exports) {

var button = document.querySelector(".button");
var initialsc = document.querySelector(".initialize");

button.addEventListener("click", function () {
  initialsc.classList.add("hidden");
});

//Board variable initialization


var w1 = document.querySelector("#w1");
var w2 = document.querySelector("#w2");
var w3 = document.querySelector("#w3");
var y1 = document.querySelector("#y1");
var y2 = document.querySelector("#y2");
var y3 = document.querySelector("#y3");
var z1 = document.querySelector("#z1");
var z2 = document.querySelector("#z2");
var z3 = document.querySelector("#z3");

var cellId = 0;

var token = "o";
var tokenHover = "oh";

function hoverOn() {
  cellId.classList.add(tokenHover);
};

function hoverOff() {
  cellId.classList.remove(tokenHover);
};

function cellClick() {
  cellId.classList.add(token);
  cellId.removeEventListener("mouseover", hoverOn);
}

function activity() {
  cellId.addEventListener("mouseover", hoverOn);
  cellId.addEventListener("mouseout", hoverOff);
  cellId.addEventListener("click", cellClick);
}

w1.addEventListener("mouseover", function () {
  cellId = w1;activity();return cellId;
});
w2.addEventListener("mouseover", function () {
  cellId = w2;activity();return cellId;
});
w3.addEventListener("mouseover", function () {
  cellId = w3;activity();return cellId;
});
y1.addEventListener("mouseover", function () {
  cellId = y1;activity();return cellId;
});
y2.addEventListener("mouseover", function () {
  cellId = y2;activity();return cellId;
});
y3.addEventListener("mouseover", function () {
  cellId = y3;activity();return cellId;
});
z1.addEventListener("mouseover", function () {
  cellId = z1;activity();return cellId;
});
z2.addEventListener("mouseover", function () {
  cellId = z2;activity();return cellId;
});
z3.addEventListener("mouseover", function () {
  cellId = z3;activity();return cellId;
});

/*
var filtered = [];
//Functions
//the function arrayCleaning returns all the spots to be cleared for X or O when the mouse is not over them
function arrayCleaning(str){
//this variable arrayOfSquares provides assistance to clear the sqares that are not pre-selected
var arrayOfSquares = ['w1', 'w2', 'w3', 'y1', 'y2', 'y3', 'z1', 'z2', 'z3'];
var filtered = arrayOfSquares.filter(function(value){
  return value !== str;
});
return filtered;
}
//The function classCleaning will take care of clearing the non-selected Xs or Os in the board, during the preselection phase
function classCleaning(arr){
var clearElement = {};
var i = 0;
 while (i < arr.length){
  clearElement = document.getElementById(arr[i]);
  clearElement.classList.remove("x");
  i++;
}
}
//The mouseFunction Function handles the exact position of the mouse,
function mouseFunction(e) {
  var x = e.clientX;
  var y = e.clientY;
  var coor = "Coordinates: " + x + "," + y + ")";
  console.log(coor);
   var element = {};
  var arr = [];
//First column handeling
if (x >= 517 && x < 684){
   if(y >= 93 && y <= 270){
     classCleaning(arrayCleaning("w1"));
    element = document.getElementById("w1");
    element.classList.add('x');
    }
   else if(y > 271 && y < 449){
       classCleaning(arrayCleaning("y1"));
      element = document.getElementById("y1");
      element.classList.add("x");
    }
     else {
      classCleaning(arrayCleaning("z1"));
      element = document.getElementById("z1");
      element.classList.add("x");
    }
}
 else if(x > 685 && x < 855){
   if(y >= 93 && y < 270){
     classCleaning(arrayCleaning("w2"));
    element = document.getElementById("w2");
    element.classList.add('x');
    }
   else if(y > 271 && y < 449){
       classCleaning(arrayCleaning("y2"));
      element = document.getElementById("y2");
      element.classList.add("x");
    }
     else {
      classCleaning(arrayCleaning("z2"));
      element = document.getElementById("z2");
      element.classList.add("x");
    }
}
 else{
  if(y >= 93 && y < 270){
     classCleaning(arrayCleaning("w3"));
    element = document.getElementById("w3");
    element.classList.add('x');
    }
   else if(y > 271 && y < 449){
       classCleaning(arrayCleaning("y3"));
      element = document.getElementById("y3");
      element.classList.add("x");
    }
     else {
      classCleaning(arrayCleaning("z3"));
      element = document.getElementById("z3");
      element.classList.add("x");
    }
   }
}
*/
},{}],21:[function(require,module,exports) {

var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '38065' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id);
  });
}
},{}]},{},[21,6])
//# sourceMappingURL=/dist/TicTacToe.map