let t=async t=>{try{let e={method:"POST",body:JSON.stringify(t)};await fetch("http://localhost:3000/fruits",e)}catch(t){console.log(t.message)}},e=async(t=1)=>{try{let e=await fetch(`http://localhost:3000/fruits?_page=${t}&_per_page=3`);return await e.json()}catch(t){console.log(t.message)}},a=t=>t.map(t=>`<li class="fruit_item" data-id="${t.id}">
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
</li>`).join(""),i=document.querySelector(".fruits_list"),r=async()=>{let t=await e(1);i.innerHTML=a(t.data),document.querySelector(".moreFruits").hidden=null===t.next},s=async e=>{let a=document.querySelector("[data-form]");e.preventDefault();let i=e.target.elements,s=i.title.value,n=i.img.value,o=i.description.value;await t({title:s,photo:n,description:o}),await r(),a.reset()},n=async t=>{try{return await fetch(`http://localhost:3000/fruits/${t}`,{method:"DELETE"})}catch(t){console.log(t.message)}},o=async t=>{if(t.target.classList.contains("fruit_button-delete")){let e=t.target.dataset.id;await n(e).then(async()=>{await r()})}},c=async(t,e)=>{try{return await fetch(`http://localhost:3000/fruits/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}catch(t){console.log(t.message)}},l=document.querySelector("[data-modal-form]"),d=document.querySelector("[data-modal]"),u=document.querySelector(".close-btn"),m=null,y=async t=>{t.target.classList.contains("fruit_button-update")&&(m=t.target.dataset.id,d.classList.remove("is-hidden"),u.addEventListener("click",()=>{d.classList.add("is-hidden")}),l.addEventListener("submit",async t=>{t.preventDefault();let e=t.target.elements,a=e.title.value,i=e.img.value,s=e.description.value;await c(m,{title:a,photo:i,description:s}),d.classList.add("is-hidden"),l.reset(),await r()}))},h=document.querySelector(".fruits_list"),p=document.querySelector(".moreFruits"),f=2,g=async()=>{let t=await e(f);if(t&&Array.isArray(t.data)){if(0===t.data.length||(h.insertAdjacentHTML("beforeend",a(t.data)),null===t.next)){p.hidden=!0;return}f++}},b=async()=>{document.addEventListener("click",o),document.querySelector("[data-form]").addEventListener("submit",s),document.addEventListener("click",y),document.querySelector(".moreFruits").addEventListener("click",g)};(async()=>{await r(),await b()})();
//# sourceMappingURL=fruits-crud.ac5b1920.js.map
