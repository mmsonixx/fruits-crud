var e=globalThis,t={},r={},i=e.parcelRequire423e;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in r){var i=r[e];delete r[e];var l={id:e,exports:{}};return t[e]=l,i.call(l.exports,l,l.exports),l.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequire423e=i),(0,i.register)("cMrwx",function(e,t){Object.defineProperty(e.exports,"getFriuts",{get:()=>r,set:void 0,enumerable:!0,configurable:!0});let r=()=>fetch("http://localhost:3000/fruits").then(e=>e.json())});var l=i("cMrwx");let o=document.querySelector(".fruits_list");(0,l.getFriuts)().then(e=>{o.innerHTML=e.map(e=>`<li class="fruit_item">
    <h2 class="friut_title">${e.title}</h2>
        <img src="${e.photo}" alt="${e.title}" class="fruit_img">
        <p class="fruit_description">${e.description}</p>
    
</li>`).join("")});
//# sourceMappingURL=fruits-crud.b4713f39.js.map
