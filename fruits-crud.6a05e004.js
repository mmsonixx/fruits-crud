let t=async t=>{let e={method:"POST",body:JSON.stringify(t)};await fetch("http://localhost:3000/fruits",e)},e=async()=>await fetch("http://localhost:3000/fruits").then(t=>t.json()),a=document.querySelector(".fruits_list"),i=async()=>{await e().then(t=>{a.innerHTML=t.map(t=>`<li class="fruit_item" data-id="${t.id}">
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
</li>`).join("")})},s=async e=>{let a=document.querySelector("[data-form]");e.preventDefault();let s=e.target.elements,n=s.title.value,d=s.img.value,l=s.description.value;await t({title:n,photo:d,description:l}),await i(),a.reset()},n=async t=>await fetch(`http://localhost:3000/fruits/${t}`,{method:"DELETE"}),d=async t=>{if(t.target.classList.contains("fruit_button-delete")){let e=t.target.dataset.id;await n(e).then(async()=>{await i()})}},l=async(t,e)=>await fetch(`http://localhost:3000/fruits/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),o=document.querySelector("[data-modal-form]"),c=document.querySelector("[data-modal]"),r=document.querySelector(".close-btn"),u=null,p=async t=>{t.target.classList.contains("fruit_button-update")&&(u=t.target.dataset.id,c.classList.remove("is-hidden"),r.addEventListener("click",()=>{c.classList.add("is-hidden")}),o.addEventListener("submit",async t=>{t.preventDefault();let e=t.target.elements,a=e.title.value,s=e.img.value,n=e.description.value;await l(u,{title:a,photo:s,description:n}),c.classList.add("is-hidden"),o.reset(),await i()}))};(async()=>{await i(),document.addEventListener("click",d),document.querySelector("[data-form]").addEventListener("submit",s),document.addEventListener("click",p)})();
//# sourceMappingURL=fruits-crud.6a05e004.js.map
