let input1=document.getElementById("input1");
let text=document.querySelector(".text");

function Add(){
    if(!input1.value){
        alert("please Enter Task")
    }else{
        let newline=document.createElement('ul');
        let newList=document.createElement('li');
        newline.appendChild(newList);
        newList.innerHTML=`${input1.value} <i id="bin" class="ri-delete-bin-5-fill"></i> <i id="edit" class="ri-edit-line"></i> `;
        input1.value="";
        text.appendChild(newline);
        let bin=document.querySelector('#bin');
        let edit=document.getElementById("edit");
        edit.addEventListener("click",replace);
        bin.addEventListener('click',remove);
        function remove(){
         newList.remove();
        }

        function replace(){
           
            newList.innerHTML=`<i  id="save" class="ri-save-2-line"></i>`;
            let save=document.querySelector('#save');
           var box=(document.createElement('input'));
            box.setAttribute("type","text");
            box.value=edit.textContent;
            newList.append(box)
            box.focus;
            box.addEventListener('blur',(e)=>{
                 save=newList.innerHTML=box.value;
                box.remove()
            })
        }

    }
}

const logout=document.getElementById("logout");
logout.addEventListener("click",()=>{
    alert("logout");
    window.location.replace("./index.html")
})
