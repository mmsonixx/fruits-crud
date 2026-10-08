function t(t,e,r,i){Object.defineProperty(t,e,{get:r,set:i,enumerable:!0,configurable:!0})}var e=globalThis,r={},i={},n=e.parcelRequire423e;null==n&&((n=function(t){if(t in r)return r[t].exports;if(t in i){var e=i[t];delete i[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){i[t]=e},e.parcelRequire423e=n);var s=n.register;s("4CEV9",function(t,e){n("cMrwx"),n("1wnSN");var r=n("EkVUI"),i=n("3kuRV");(0,i.renderFruits)(),document.addEventListener("click",function(t){if(!t.target.classList.contains("fruit_button-delete"))return;let e=t.target.dataset.id;(0,r.deleteFruit)(e).then(()=>{console.log("Фрукт удалён"),(0,i.renderFruits)()})})}),s("cMrwx",function(e,r){t(e.exports,"getFriuts",()=>i);let i=async()=>await fetch("http://localhost:3000/fruits").then(t=>t.json())}),s("1wnSN",function(e,r){t(e.exports,"makeFrutsList",()=>i);let i=t=>t.map(t=>`<li class="fruit_item" data-id="${t.id}">
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
</li>`).join("")}),s("EkVUI",function(e,r){t(e.exports,"deleteFruit",()=>i);let i=async t=>await fetch(`http://localhost:3000/fruits/${t}`,{method:"DELETE"})}),s("3kuRV",function(e,r){t(e.exports,"renderFruits",()=>u);var i=n("cMrwx"),s=n("1wnSN");let o=document.querySelector(".fruits_list"),u=async()=>{await (0,i.getFriuts)().then(t=>{o.innerHTML=(0,s.makeFrutsList)(t)})}}),n("4CEV9");
//# sourceMappingURL=fruits-crud.e56f2cae.js.map
