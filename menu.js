"use strict";

const menu=[{
    id:1,
    title:'Fish & Vegtebles',
    category:'lunch',
    price:15.99,
    img:`pexels-anntarazevich-5182122.jpg`,
    dsec:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam modi necessitatibus ea, cupiditate explicabo qui?'
},{
    id:2,
    title:'Eggs & Beef',
    category:'breakfast',
    price:15.99,
    img:`pexels-brettjordan-2297961.jpg`,
    dsec:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam modi necessitatibus ea, cupiditate explicabo qui?'
},{
    id:3,
    title:'Soup',
    category:'lunch',
    price:10.99,
    img:`pexels-cookeat-772518.jpg`,
    dsec:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam modi necessitatibus ea, cupiditate explicabo qui?'
},{
    id:4,
    title:'Pankcakes',
    category:'dessert',
    price:8.99,
    img:`pexels-hakimsatoso-2613471.jpg`,
    dsec:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam modi necessitatibus ea, cupiditate explicabo qui?'
},{
    id:5,
    title:'Steak and Mashrom Souce',
    category:'lunch',
    price:12.99,
    img:`pexels-maxavans-5056823.jpg`,
    dsec:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam modi necessitatibus ea, cupiditate explicabo qui?'
},{
    id:6,
    title:'Shrimp',
    category:'lunch',
    price:10.99,
    img:`pexels-maria-bortolotto-10714080-6270541.jpg`,
    dsec:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam modi necessitatibus ea, cupiditate explicabo qui?'
},{
    id:7,
    title:'Souchi',
    category:'lunch',
    price:15.99,
    img:`pexels-meguchi-343870.jpg`,
    dsec:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam modi necessitatibus ea, cupiditate explicabo qui?'
},{
    id:8,
    title:'Cube Cake',
    category:'dessert',
    price:0.99,
    img:`pexels-vojtech-okenka-127162-1055272.jpg`,
    dsec:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam modi necessitatibus ea, cupiditate explicabo qui?'
},{
    id:9,
    title:'Nodels With Vegtebles',
    category:'lunch',
    price:7.99,
    img:`pexels-meguchi-343871.jpg`,
    dsec:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam modi necessitatibus ea, cupiditate explicabo qui?'
},{
    id:10,
    title:'Chicken Salad',
    category:'lunch',
    price:8.99,
    img:`pexels-victorjung-983587.jpg`,
    dsec:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam modi necessitatibus ea, cupiditate explicabo qui?'

}]

let father=document.querySelector('.father');
let container=document.querySelector('.containers');

window.addEventListener('DOMContentLoaded',()=>{
    renderItem(menu);
    uniqueBtns();

})


function renderItem(itemMenu){
    let filter=itemMenu.map((item)=>{
        return `   
            <div class="cards container d-flex justify-content-around">
            <div class=" mt-4 ">
               <div class="card mb-3 " style="max-width: 340px; max-height: 100px; background: transparent; border: none;">
                   <div class="row g-0">
                     <div class="col-md-2">
                       <img src=${item.img} class="" alt="" width="200px">
                     </div>
                     <div class="col">
                       <div class="card-body">
                           <div class="d-flex">
                               <h5 class="card-title text-black fs-5">${item.title}</h5>
                               <h5 class="card-title text-warning fs-5 ms-3">$${item.price}</h5>  
                           </div>
                         
                         <div class="dash-title"></div>
                         <p class="card-text lead"> ${item.dsec}</p>
                       </div>
                     </div>
                   </div>
                 </div>
           </div>
           </div>        
        `;
    })
    filter=filter.join("");
    father.innerHTML=filter;
}


function uniqueBtns() {
    let categories=menu.reduce((values,item)=>{
        console.log(values);
        
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    },
    //القيمة الاولية 
    ['all'])

    let categoriesBtns=categories.map((category)=>{
        return `
        <button data-id=${category} class="btns btn ms-3 fs-5 btn-outline-light">${category}</button>
        `
    }).join("");
    container.innerHTML=categoriesBtns;
    
    let btns=document.querySelectorAll('.btns');    
    btns.forEach((btn)=>{
        btn.addEventListener('click',function(event){
            const category= event.currentTarget.dataset.id;
            const menuCategory=menu.filter((menuItem)=>{
                if(menuItem.category ===category){
                    return menuItem;
                }
            })
            if (category ==='all'){
                renderItem(menu);
            }else{
                renderItem(menuCategory);
            }
        })
    })
} 
