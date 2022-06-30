/**
 * @name olum-jsonEditor
 * @version 0.1.0
 * @copyright 2022
 * @author Eissa Saber
 * @license MIT
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else if (typeof define === "function" && define.amd) define(factory);
  else root.OlumJsonEditor = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  function OlumJsonEditor(options) {
    var $this = this;

    function buildTree(entryPoint, rootName) {
      if (!entryPoint) return;

      const foo = {
        rightIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>`,
        isNull(val) {
          return typeof val == "object" && val === null;
        },
        isUndefined(val) {
          return typeof val == "undefined";
        },
        isObject(val) {
          return !this.isNull(val) && typeof val == "object" && !Array.isArray(val);
        },
        isArray(val) {
          return typeof val == "object" && Array.isArray(val);
        },
        isBoolean(val) {
          return typeof val == "boolean";
        },
        isNumber(val) {
          return typeof val == "number";
        },
        isString(val) {
          return typeof val == "string";
        },
        mkBoolean(key, val, index, path) {
          let str = `<div class="line">`;
          if (key === null) {
            // inside array
            str += `<span class="index boolean">`;
            str += `<span class="item">${index}</span><span class="colon">:</span>`;
            str += `<span class="boolean"><span contenteditable data-path="${path}" data-type="boolean" data-prop="${key}">${val}</span>`;
            str += "<button class='saveBtn o-btn'></button>";
            str += "<button class='delBtn o-btn'></button>";
            str += "<button class='addBtn o-btn'></button>";
            str += "</span>";
            str += "</span>";
          } else {
            // inside object
            str += `<span class="prop" data-prop="${key}">${key}</span>`;
            str += '<span class="colon">:</span>';
            str += `<span class="boolean"><span contenteditable data-path="${path}" data-type="boolean" data-prop="${key}">${val}</span>`;
            str += "<button class='saveBtn o-btn'></button>";
            str += "<button class='delBtn o-btn'></button>";
            str += "<button class='addBtn o-btn'></button>";
            str += "</span>";
          }
          str += "</div>";
          return str;
        },
        mkString(key, val, index, path) {
          let str = `<div class="line">`;
          if (key === null) {
            // inside array
            str += `<span class="index string">`;
            str += `<span class="item">${index}</span><span class="colon">:</span>`;
            str += `<span class="string"><span class="quotes">"</span><span contenteditable data-path="${path}" data-type="string" data-prop="${key}">${val}</span><span class="quotes">"</span>`;
            str += "<button class='saveBtn o-btn'></button>";
            str += "<button class='delBtn o-btn'></button>";
            str += "<button class='addBtn o-btn'></button>";
            str += "</span>";
            str += "</span>";
          } else {
            // inside object
            str += `<span class="prop" data-prop="${key}">${key}</span>`;
            str += '<span class="colon">:</span>';
            str += `<span class="string"><span class="quotes">"</span><span contenteditable data-path="${path}" data-type="string" data-prop="${key}">${val}</span><span class="quotes">"</span>`;
            str += "<button class='saveBtn o-btn'></button>";
            str += "<button class='delBtn o-btn'></button>";
            str += "<button class='addBtn o-btn'></button>";
            str += "</span>";
          }
          str += "</div>";
          return str;
        },
        mkNumber(key, val, index, path) {
          let str = `<div class="line">`;
          if (key === null) {
            // inside array
            str += `<span class="index number">`;
            str += `<span class="item">${index}</span><span class="colon">:</span>`;
            str += `<span class="number"><span contenteditable data-path="${path}" data-type="number" data-prop="${key}">${val}</span>`;
            str += "<button class='saveBtn o-btn'></button>";
            str += "<button class='delBtn o-btn'></button>";
            str += "<button class='addBtn o-btn'></button>";
            str += "</span>";
            str += "</span>";
          } else {
            // inside object
            str += `<span class="prop" data-prop="${key}">${key}</span>`;
            str += '<span class="colon">:</span>';
            str += `<span class="number"><span contenteditable data-path="${path}" data-type="number" data-prop="${key}">${val}</span>`;
            str += "<button class='saveBtn o-btn'></button>";
            str += "<button class='delBtn o-btn'></button>";
            str += "<button class='addBtn o-btn'></button>";
            str += "</span>";
          }
          str += "</div>";
          return str;
        },
        mkNull(key, val, index, path) {
          let str = `<div class="line">`;
          if (key === null) {
            // inside array
            str += `<span class="index null">`;
            str += `<span class="item">${index}</span><span class="colon">:</span>`;
            str += `<span class="null"><span contenteditable data-path="${path}" data-type="null" data-prop="${key}">${val}</span>`;
            str += "<button class='saveBtn o-btn'></button>";
            str += "<button class='delBtn o-btn'></button>";
            str += "<button class='addBtn o-btn'></button>";
            str += "</span>";
            str += "</span>";
          } else {
            // inside object
            str += `<span class="prop" data-prop="${key}">${key}</span>`;
            str += '<span class="colon">:</span>';
            str += `<span class="null"><span contenteditable data-path="${path}" data-type="null" data-prop="${key}">${val}</span>`;
            str += "<button class='saveBtn o-btn'></button>";
            str += "<button class='delBtn o-btn'></button>";
            str += "<button class='addBtn o-btn'></button>";
            str += "</span>";
          }
          str += "</div>";
          return str;
        },
        mkUndefined(key, val, index, path) {
          let str = `<div class="line">`;
          if (key === null) {
            // inside array
            str += `<span class="index undefined">`;
            str += `<span class="item">${index}</span><span class="colon">:</span>`;
            str += `<span class="undefined"><span contenteditable data-path="${path}" data-type="undefined" data-prop="${key}">${val}</span>`;
            str += "<button class='saveBtn o-btn'></button>";
            str += "<button class='delBtn o-btn'></button>";
            str += "<button class='addBtn o-btn'></button>";
            str += "</span>";
            str += "</span>";
          } else {
            // inside object
            str += `<span class="prop" data-prop="${key}">${key}</span>`;
            str += '<span class="colon">:</span>';
            str += `<span class="undefined"><span contenteditable data-path="${path}" data-type="undefined" data-prop="${key}">${val}</span>`;
            str += "<button class='saveBtn o-btn'></button>";
            str += "<button class='addBtn o-btn'></button>";
            str += "<button class='delBtn o-btn'></button>";
            str += "</span>";
          }
          str += "</div>";
          return str;
        },
        mkArray(key, val) {
          let str = "";
          recursive(key, val);
          function recursive(key, arr) {
            str += `<div class="line caret">`;
            str += `<span class="indentation"></span>`;
            str += `<span class="prop" data-prop="${key}"><span class='collapse'>${foo.rightIcon}</span>${key}</span>`;
            str += '<span class="colon">:</span>';
            str += `<span class="array">Array<span class="length"><span class="bracket">(</span>${arr.length}<span class="bracket">)</span></span></span>`;

            arr.forEach((item, index) => {
              if (foo.isBoolean(item)) str += foo.mkBoolean(null, item, index);
              else if (foo.isString(item)) str += foo.mkString(null, item, index);
              else if (foo.isNumber(item)) str += foo.mkNumber(null, item, index);
              else if (foo.isNull(item)) str += foo.mkNull(null, item, index);
              else if (foo.isUndefined(item)) str += foo.mkUndefined(null, item, index);
              else if (foo.isObject(item)) str += foo.mkObject(index, item);
              else if (foo.isArray(item)) recursive(index, item); // nested arrays
            });

            str += "</div>";
          }
          return str;
        },
        mkObject(key, val) {
          let origin = "0root." + key;
          let path = origin;
          let str = "";
          recursive(key, val);

          function recursive(key, obj) {
            const keys = Object.keys(obj);
            str += `<div class="line caret">`;
            str += `<span class="indentation"></span>`;
            str += `<span class="prop" data-prop="${key}"><span class='collapse'>${foo.rightIcon}</span>${key}</span>`;
            str += '<span class="colon">:</span>';
            str += `<span class="object">Object<span class="length"><span class="bracket">{</span>${keys.length}<span class="bracket">}</span></span></span>`;
            keys.forEach(prop => {
              const val = obj[prop];
              if (foo.isBoolean(val)) str += foo.mkBoolean(prop, val, null, path + "." + prop);
              else if (foo.isString(val)) str += foo.mkString(prop, val, null, path + "." + prop);
              else if (foo.isNumber(val)) str += foo.mkNumber(prop, val, null, path + "." + prop);
              else if (foo.isNull(val)) str += foo.mkNull(prop, val, null, path + "." + prop);
              else if (foo.isUndefined(val)) str += foo.mkUndefined(prop, val, null, path + "." + prop);
              else if (foo.isArray(val)) str += foo.mkArray(prop, val);
              else if (foo.isObject(val)) {
                // nested objects
                path += "." + prop;
                recursive(prop, val);
                // todo fix this part and then continue with the mkArray in this method
                path = origin + "." + key;
                // const parts = origin.split(".");
                // path = path.replace(new RegExp(`${origin + "." + parts.at(-1)}`, "g"), origin);
              }
            });
            str += "</div>";
          }
          return str;
        },
      };

      let markup = "";
      if (foo.isArray(entryPoint)) {
        // console.warn("entryPoint is an Array");
        markup += foo.mkArray(rootName ? rootName : "root", entryPoint);
      } else if (foo.isObject(entryPoint)) {
        // console.warn("entryPoint is an Object");
        const entryPointWrapper = {};
        entryPointWrapper[rootName ? rootName : "root"] = entryPoint;
        let keys = Object.keys(entryPointWrapper);
        keys.forEach(key => {
          if (entryPointWrapper.hasOwnProperty(key)) {
            const val = entryPointWrapper[key];
            if (foo.isBoolean(val)) markup += foo.mkBoolean(key, val, null, "0root." + key);
            else if (foo.isString(val)) markup += foo.mkString(key, val, null, "0root." + key);
            else if (foo.isNumber(val)) markup += foo.mkNumber(key, val, null, "0root." + key);
            else if (foo.isNull(val)) markup += foo.mkNull(key, val, null, "0root." + key);
            else if (foo.isUndefined(val)) markup += foo.mkUndefined(key, val, null, "0root." + key);
            else if (foo.isObject(val)) markup += foo.mkObject(key, val);
            else if (foo.isArray(val)) markup += foo.mkArray(key, val);
          }
        });
      }

      return markup;
    }

    function getTargetObj(path, obj) {
      const sequence = path.split(".").slice(1); // remove root prop as it's accessable
      const propName = sequence.pop(); // get dest prop name and remove it from the sequence
      const target = sequence.reduce((object, prop) => (object || {})[prop], obj);
      // console.warn({ sequence, target, propName, obj });
      if (!(target && target[propName])) {
        console.warn("wrong path! @ " + path);
        return null;
      }
      return { obj: target, name: propName };
    }

    function toggleLines(wrapper, entryPoint) {
      if (!wrapper) return;
      wrapper.onclick = function (e) {
        if (e.target.className.indexOf("collapse") !== -1) {
          const btn = e.target;
          const line = btn.parentElement.parentElement;
          if (line.clientHeight > 30) {
            btn.style.transform = "rotate(0deg)";
            line.style.height = "30px";
          } else {
            btn.style.transform = "rotate(90deg)";
            line.style.height = "auto";
          }
        } else if (e.target.className.indexOf("array") !== -1 || e.target.className.indexOf("object") !== -1) {
          const line = e.target.parentElement;
          const btn = line.querySelector(".collapse");
          if (line.clientHeight > 30) {
            btn.style.transform = "rotate(0deg)";
            line.style.height = "30px";
          } else {
            btn.style.transform = "rotate(90deg)";
            line.style.height = "auto";
          }
        }

        function init(btn, status) {
          const item = btn.parentElement.querySelector("[contenteditable]");
          const prop = item.getAttribute("data-prop");
          const type = item.getAttribute("data-type");
          const path = item.getAttribute("data-path");
          if (item && path && type && prop) {
            // console.warn({ item, path, type, prop });
            const hasProp = item => {
              if (item.getAttribute("data-prop") && item.classList.contains("prop")) return item.getAttribute("data-prop");
              return null;
            };
            const hasPropInChildren = item => {
              const nodes = item.querySelectorAll(":scope > .prop");
              if (nodes.length) return [...nodes];
              return null;
            };

            let arr = [];
            function recursive(node) {
              const elms = hasPropInChildren(node);
              if (elms) {
                elms.forEach(elm => (hasProp(elm) ? arr.push(hasProp(elm)) : null));
                if (hasProp(node)) arr.push(hasProp(node));
                if (node.parentElement !== wrapper) recursive(node.parentElement);
              } else {
                if (hasProp(node)) {
                  arr.push(hasProp(node));
                } else {
                  if (node.parentElement !== wrapper) recursive(node.parentElement);
                }
              }
            }
            recursive(item);
            const propPath = arr.reverse().join(".");
            let { obj, name } = getTargetObj(propPath, entryPoint);
            console.log(propPath, obj);

            // delete and edit props
            if (obj && obj[name]) {
              if (status === "save") {
                if (type === "string") {
                  obj[name] = item.textContent;
                } else if (type === "boolean" || type === null) {
                  obj[name] = JSON.parse(item.textContent.trim());
                } else if (type === "number") {
                  obj[name] = +item.textContent.trim();
                }
              } else if (status === "delete") {
                const line = btn.parentElement.parentElement;
                if (line.classList.contains("line")) {
                  delete obj[name];
                  line.remove();
                } else console.warn("Couldn't reach the .line class for deletion!");
              }
            }

            console.log("updated entryPoint", entryPoint);
          }
        }

        if (e.target.className.indexOf("saveBtn") !== -1) init(e.target, "save");
        else if (e.target.className.indexOf("delBtn") !== -1) init(e.target, "delete");
      }
    }

    $this.render = function (wrapper, entryPoint, rootName) {
      if (!wrapper) return console.warn("wrapper is NOT accessable in DOM!");
      if (!entryPoint) return console.warn("entryPoint is NOT passed!");
      var markup = buildTree(entryPoint, rootName);
      wrapper.innerHTML = markup;
      toggleLines(wrapper, entryPoint);
    }
  }

  return OlumJsonEditor;
});