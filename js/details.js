let productArr = []
let start = 0,end = 25 
let respons = new URLSearchParams(location.search)
let url = respons.get("category")

const title = document.getElementById("title")
title.innerHTML = url == "sale" ? "Günün endirimi" : ""

fetch("https://raw.githubusercontent.com/mirafgan/PerfectJson/main/UmicoProducts.json")
        .then(res => res.json())
        .then(data => {
                productArr = data
                if(url == "sale"){
                    productArr.map(item => item.products.filter(elem => elem.discount != 0).map(item => discountArr = [...discountArr,item]))
                }
                getDiscountProduct()
                renderDiscountArr(0,25)
        }) 
const discountProducts = document.getElementById("discountProducts")
const next = document.getElementById("next")
const prev = document.getElementById("prev")
const select = document.getElementById("select")
let discountArr = []
function getDiscountProduct() { 
    next.onclick = () => {
        if(end < discountArr.length){
            start += 25
            end += 25
            renderDiscountArr(start,end)
        }
    }
    prev.onclick = () => {
        if(start > 0 ){
            start -= 25 
            end -= 25
            renderDiscountArr(start,end)
        }       
    }
    select.onchange = () => { 
        select.value == "0" ? discountArr.sort((a,b)=> a.retail_price - b.retail_price) : select.value == "1" ? discountArr.sort((a,b)=> b.retail_price - a.retail_price) : discountArr.sort((a,b)=> b.discount - a.discount) 
        start = 0,end = 25
        renderDiscountArr(0,25)
    }   
}
function renderDiscountArr(start,end){
    let kod = ''
    let rnd = 0
    discountArr.slice(start,end).map(item => {
        rnd = Math.trunc(Math.random()*5 + 1)
        kod += 
        `
        <div class="swiper-slide !w-max h-full bg-white px-3 flex flex-col items-center justify-between">
                            <div class="w-[150px] relative h-[150px] mx-auto">
                                <div class="absolute right-[-20px] flex items-center text-[#9396AC]  flex-col gap-3 pt-3">
                                        <i class="hover:text-[#F81A5D] cursor-pointer fa-regular fa-heart"></i>
                                        <i class="hover:text-[#F81A5D] cursor-pointer fa-solid fa-scale-balanced"></i>
                                </div> 
                                <a href="../html/product.htm?id=${item.id}"><img src="${item.img_url_original}" class="w-full h-full object-contain" alt=""></a>
                            </div>
                            <span class="bg-[#F81A5D] text-[14px] text-white font-bold inline-block px-1">-${Math.trunc(item.discount)}%</span>
                            <div  class="py-2 flex items-end gap-3">
                                <h2 class="text-[#F81A5D] font-bold text-[14px] ">${item.retail_price} ₼</h2>
                                <h3 class="text-[#afafaf] font-bold text-[12px] line-through">${item.old_price} ₼</h3>
                            </div>
                            <div class="bg-yellow-400 font-bold w-max text-[14px] px-1">${(item.retail_price / 3).toFixed(2)} ₼ x 3 ay</div>
                            <div class="py-2">
                                <p class="text-[14px] w-[250px] h-8">${item.name} </p>
                            </div>
                            <ul class="flex items-center gap-1 pb-4">
                                <li><i class="fa-solid fa-star text-[13px] text-yellow-400"></i></li>
                                <li><i class="fa-solid fa-star text-[13px] text-yellow-400"></i></li>
                                <li><i class="fa-solid fa-star text-[13px] text-yellow-400"></i></li>
                                <li><i class="fa-solid fa-star text-[13px] text-yellow-400"></i></li>
                                <li><i class="fa-solid fa-star text-[13px] text-yellow-400"></i></li>
                                <li class="text-[13px] text-[#7C62E3]">${rnd} reytinq</li>
                            </ul>
                            <div class="py-2 border-t-1 border-[#E7E8ED]">
                                <button class="cursor-pointer text-[#7C62E3] font-bold text-[13px] px-3"><i class="fa-solid fa-cart-shopping pr-2"></i><span class="uppercase" onclick="addBasket(${item.id})">Səbətə At</span></button>
                            </div>
                </div>
        `}
    )
    discountProducts.innerHTML = kod  
}