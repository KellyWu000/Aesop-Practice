
let proImgTxt=document.querySelector('.pro-img');
let proNext =document.querySelector('.pro-img-txt').nextElementSibling;
let hide =document.querySelector('.hide');

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



