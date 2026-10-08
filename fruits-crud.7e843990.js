let t=async t=>{try{let e={method:"POST",body:JSON.stringify(t)};await fetch("http://localhost:3000/fruits",e)}catch(t){console.log(t.message)}},e=async()=>{try{return await fetch("http://localhost:3000/fruits").then(t=>t.json())}catch(t){console.log(t.message)}},a=document.querySelector(".fruits_list"),i=async()=>{await e().then(t=>{a.innerHTML=t.map(t=>`<li class="fruit_item" data-id="${t.id}">
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
</li>`).join("")})},s=async e=>{let a=document.querySelector("[data-form]");e.preventDefault();let s=e.target.elements,n=s.title.value,o=s.img.value,r=s.description.value;await t({title:n,photo:o,description:r}),await i(),a.reset()},n=async t=>{try{return await fetch(`http://localhost:3000/fruits/${t}`,{method:"DELETE"})}catch(t){console.log(t.message)}},o=async t=>{if(t.target.classList.contains("fruit_button-delete")){let e=t.target.dataset.id;await n(e).then(async()=>{await i()})}},r=async(t,e)=>{try{return await fetch(`http://localhost:3000/fruits/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}catch(t){console.log(t.message)}},c=document.querySelector("[data-modal-form]"),l=document.querySelector("[data-modal]"),d=document.querySelector(".close-btn"),u=null,h=async t=>{t.target.classList.contains("fruit_button-update")&&(u=t.target.dataset.id,l.classList.remove("is-hidden"),d.addEventListener("click",()=>{l.classList.add("is-hidden")}),c.addEventListener("submit",async t=>{t.preventDefault();let e=t.target.elements,a=e.title.value,s=e.img.value,n=e.description.value;await r(u,{title:a,photo:s,description:n}),l.classList.add("is-hidden"),c.reset(),await i()}))},m=async()=>{document.addEventListener("click",o),document.querySelector("[data-form]").addEventListener("submit",s),document.addEventListener("click",h)};(async()=>{await i(),await m()})();
//# sourceMappingURL=fruits-crud.7e843990.js.map
