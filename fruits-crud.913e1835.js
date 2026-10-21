let t=async t=>{try{let e={method:"POST",body:JSON.stringify(t)};await fetch("https://6ad8fa1cf89c5702ed9a5157.mockapi.io/fruits",e)}catch(t){console.log(t.message)}},e=async(t=1)=>{try{let e=await fetch(`https://6ad8fa1cf89c5702ed9a5157.mockapi.io/fruits?page=${t}&limit=3`);return await e.json()}catch(t){console.log(t.message)}},a=t=>t.map(t=>`<li class="fruit_item" data-id="${t.id}">
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
</li>`).join(""),i=document.querySelector(".fruits_list"),r=async()=>{let t=await e(1);i.innerHTML=a(t),document.querySelector(".moreFruits").hidden=null===t.next},s=async e=>{let a=document.querySelector("[data-form]");e.preventDefault();let i=e.target.elements,s=i.title.value,n=i.img.value,c=i.description.value;await t({title:s,photo:n,description:c}),await r(),a.reset()},n=async t=>{try{return await fetch(`https://6ad8fa1cf89c5702ed9a5157.mockapi.io/fruits/${t}`,{method:"DELETE"})}catch(t){console.log(t.message)}},c=async t=>{if(t.target.classList.contains("fruit_button-delete")){let e=t.target.dataset.id;await n(e).then(async()=>{await r()})}},o=async(t,e)=>{try{return await fetch(`https://6ad8fa1cf89c5702ed9a5157.mockapi.io/fruits/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}catch(t){console.log(t.message)}},d=document.querySelector("[data-modal-form]"),l=document.querySelector("[data-modal]"),u=document.querySelector(".close-btn"),m=null,f=async t=>{t.target.classList.contains("fruit_button-update")&&(m=t.target.dataset.id,l.classList.remove("is-hidden"),u.addEventListener("click",()=>{l.classList.add("is-hidden")}),d.addEventListener("submit",async t=>{t.preventDefault();let e=t.target.elements,a=e.title.value,i=e.img.value,s=e.description.value;await o(m,{title:a,photo:i,description:s}),l.classList.add("is-hidden"),d.reset(),await r()}))},y=document.querySelector(".fruits_list"),p=document.querySelector(".moreFruits"),h=2,g=async()=>{let t=await e(h);if(t&&Array.isArray(t)){if(0===t.length||(y.insertAdjacentHTML("beforeend",a(t)),null===t.next)){p.hidden=!0;return}h++}},b=async()=>{document.addEventListener("click",c),document.querySelector("[data-form]").addEventListener("submit",s),document.addEventListener("click",f),document.querySelector(".moreFruits").addEventListener("click",g)};(async()=>{await r(),await b()})();
//# sourceMappingURL=fruits-crud.913e1835.js.map
