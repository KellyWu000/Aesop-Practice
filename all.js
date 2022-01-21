
let proImgTxt=document.querySelector('.pro-img');
let proNext =document.querySelector('.pro-img-txt');
let hide =document.querySelector('.hide');

let popdiv=document.querySelector('.popdiv')

proImgTxt.addEventListener("click",proIntroduce)
// let open=false;
function proIntroduce (e)
{
    console.log(e.target)
console.log(e.target.classList.contains('pro-img-txt'))

    if( e.target.classList.contains('pro-img-txt')){
        console.log( e.target.nextElementSibling)
       let arrow=e.target.querySelector('.fas');
        
        console.log(arrow)
         e.target.nextElementSibling.classList.toggle('hide');
     
         e.target.nextElementSibling.classList.toggle('showStyle');  

         //要知道現在的狀態是朝上還朝下 去判斷 
         //不能用toggle 是因為不同classname 
          if(arrow.classList.contains('fa-chevron-up')){
              
             arrow.classList.remove('fa-chevron-up');
         arrow.classList.add('fa-chevron-down');
        }else{
            arrow.classList.remove('fa-chevron-down');
            arrow.classList.add('fa-chevron-up');
    }
    }
   
 

    //   e.target.classList.toggle('showStyle');
    // proNext.classList.toggle('hide');
    // hide.classList.toggle('showStyle');


//open=!open;
//if(open){
    // proNext.classList.remove('hide'); 一開始隱藏 所以remove會出現
    // hide.classList.add('showStyle');


 
//   }
//   else{
//          proNext.classList.add('hide');
//          hide.classList.remove('showStyle');
//       }
  


//錯誤邏輯
//  if(open){
   
//      proNext.classList.add('show');
        
//      show.classList.add('showStyle');
//  }else{
//      proNext.classList.remove('show');
//  }
  
    
}
const data=[];
let menu=document.querySelector('.menu')
let menuwrapper =document.querySelector('#menu-wrapper')
menuwrapper.addEventListener('click',toggleMenu)
let  menuOpened=false;
function toggleMenu (e){
    menuOpened=!menuOpened;
    if(e.target.classList.contains('menu')){
       if(menuOpened){
        for(let i=0;i<data.length;i++){
          setTimeout(()=>{
       
         let c=data[i].target;
        //  c.style.left= data[i].p2.x +"px";
         c.style.bottom= data[i].p2.y + "px";
          },100 * i)  
        }
    }else{
        for(let i=0;i<data.length;i++){
            setTimeout(()=>{
                let c=data[i].target;
                console.log(c);
                c.style.right=data[i].p1.x + "px";
                c.style.bottom=data[i].p1.y + "px";
                 },100 * i)  
               }
        }  
    }
   
    }

let menuList=[{
    name:"常見問題",
    iconName: 'far fa-question-circle'
},{
   name:"聯絡我們",
   iconName: 'far fa-envelope'
},

{
    name:"行銷活動",
    iconName: 'fas fa-gift'
},
]

for (let i=0 ; i<menuList.length ;i++){
 
    let b = document.createElement("div");
    b.className = "ball";
    b.title = menuList[i].name;

    const icon = document.createElement("i");

    icon.className = menuList[i].iconName;
//    b.setAttribute('i',menuList[i].iconName)
    // <i class="fas fa-question"></i>
    // b.innerHTML = menuList[i].name;
    b.id = "b" + (i + 1);

//   const obj = { target: b, p1: { x: 15, y: 577-63 } };
        // b.style.top = obj.p1.y + "px";
        // b.style.left = obj.p1.x + "px";
        const obj = { 
            target: b, 
            p1: { x: 19, y: 15 }
         };
        b.style.bottom = obj.p1.y + "px";
        b.style.right = obj.p1.x + "px";
     

        obj.p2 = {
        //   x: 1263-63 * (i *2),
          y: (577-63) *((i+1) *0.16),
        };

        data.push(obj);
        console.log(data);
        b.appendChild(icon);

 menuwrapper.appendChild(b); //元素加入至指定的位置之後才會顯示
}

let gift =document.querySelector('#b3');
gift.addEventListener('click',campaign)

function campaign(){
   popdiv.classList.toggle('hide')
}

let close =document.querySelector('.close');
close.addEventListener('click',function(){
     popdiv.classList.toggle('hide')
})


let searchbar =document.querySelector('.search-wrapper');
searchbar.addEventListener('click',function(e){
    e.target.nextElementSibling.classList.toggle('hide')
    if(e.target.classList.contains('fa fa-search ')){
        
e.target.classList.toggle('searchbar')
    }

})
