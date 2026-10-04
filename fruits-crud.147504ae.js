function t(t,e,r,i){Object.defineProperty(t,e,{get:r,set:i,enumerable:!0,configurable:!0})}var e=globalThis,r={},i={},n=e.parcelRequire423e;null==n&&((n=function(t){if(t in r)return r[t].exports;if(t in i){var e=i[t];delete i[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},e.parcelRequire423e=n);var o=n.register;o("4CEV9",function(e,r){t(e.exports,"renderFruits",()=>l);var i=n("cMrwx"),o=n("1wnSN"),s=n("EkVUI");let u=document.querySelector(".fruits_list"),l=()=>{(0,i.getFriuts)().then(t=>{u.innerHTML=(0,o.makeFrutsList)(t)})};l(),document.addEventListener("click",function(t){if(!t.target.classList.contains("fruit_button-delete"))return;let e=t.target.dataset.id;(0,s.deleteFruit)(e).then(()=>{console.log("Фрукт удалён"),l()})})}),o("cMrwx",function(e,r){t(e.exports,"getFriuts",()=>i);let i=()=>fetch("http://localhost:3000/fruits").then(t=>t.json())}),o("1wnSN",function(e,r){t(e.exports,"makeFrutsList",()=>i);let i=t=>t.map(t=>`<li class="fruit_item" data-id="${t.id}">
    <h2 class="friut_title">${t.title}</h2>
        <img src="${t.photo}" alt="${t.title}" class="fruit_img">
        <p class="fruit_description">${t.description}</p>
        <div class="button__wrapper">
       <button class="fruit_button-delete" type="button" data-id="${t.id}">
            Delete
          </button>
           <button class="fruit_button-update" type="button" data-id="${t.id}">
          Update
          </button>
          </div>
</li>`).join("")}),o("EkVUI",function(e,r){t(e.exports,"deleteFruit",()=>i);let i=t=>fetch(`http://localhost:3000/fruits/${t}`,{method:"DELETE"})}),n("4CEV9");
//# sourceMappingURL=fruits-crud.147504ae.js.map
