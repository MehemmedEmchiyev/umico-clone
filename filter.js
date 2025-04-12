let categoryArr = []
let productsArr = []
let res = new URLSearchParams(location.search)
let category = res.get("category")
fetch("https://raw.githubusercontent.com/mirafgan/PerfectJson/main/shortUmicoCatalog.json")
        .then(res => res.json())
        .then(data => {                
                categoryArr = data    
        })
fetch("https://raw.githubusercontent.com/mirafgan/PerfectJson/main/UmicoProducts.json")
        .then(res => res.json())
        .then(data => {
                productsArr = data
                getCategoryElement()
        })  

function getCategoryElement(){
        let subArr = []
        let subProducts = productsArr.map(item => item.products.filter(elem => elem.category.slugged_name == category))
        subProducts.map(item => item.map(elem => subArr.push(elem)))
        
        let obj = productsArr.find(item => item.slugged_name == category);
        obj ? renderProducts(obj.products)  : renderProducts(subArr)
        obj ? filterCards(obj.products) : filterCards(subArr)
}
const select = document.querySelector("select")
const xAlpha = document.getElementById("xAlpha")
const alpha = document.getElementById("alpha")
const discount = document.getElementById("discount")
const minPrice = document.getElementById("minPrice")
const maxPrice = document.getElementById("maxPrice")
const renderPrice = document.getElementById("renderPrice")

function filterCards(arg){
        select.onchange = () => { 
                select.value == "0" ? arg.sort((a,b)=> a.retail_price - b.retail_price) : select.value == "1" ? arg.sort((a,b)=> b.retail_price - a.retail_price) : arg.sort((a,b)=> b.discount - a.discount) 
                renderProducts(arg)
        }
        discount.onchange = () => {
                discount.checked && alpha.checked ? renderProducts(arg.filter(item => item.discount != 0).sort((a,b) => {if(a.name < b.name) return -1})) :
                discount.checked && xAlpha.checked ? renderProducts(arg.filter(item => item.discount != 0).sort((a,b) => {if(a.name > b.name) return -1})) : renderProducts(arg.filter(item => item.discount != 0))
        }
        alpha.onchange = () => {
                alpha.checked && xAlpha.checked ? xAlpha.checked = false : ""
                discount.checked && alpha.checked ? renderProducts(arg.filter(item => item.discount != 0).sort((a,b) => {if(a.name < b.name) return -1})) :
                discount.checked && xAlpha.checked ? renderProducts(arg.filter(item => item.discount != 0).sort((a,b) => {if(a.name > b.name) return -1})) : 
                renderProducts(arg.sort((a,b) => {if(a.name < b.name) return -1}))
        }
        xAlpha.onchange = () => {
                alpha.checked && xAlpha.checked ? alpha.checked = false : ""
                discount.checked && alpha.checked ? renderProducts(arg.filter(item => item.discount != 0).sort((a,b) => {if(a.name < b.name) return -1})) :
                discount.checked && xAlpha.checked ? renderProducts(arg.filter(item => item.discount != 0).sort((a,b) => {if(a.name > b.name) return -1})) : 
                renderProducts(arg.sort((a,b) => {if(a.name > b.name) return -1}))
        }
        renderPrice.onclick = () => {
                minPrice.value && maxPrice.value ? renderProducts(arg.filter(item => item.retail_price > minPrice.value  && item.retail_price < maxPrice.value)) : 
                minPrice.value ? renderProducts(arg.filter(item => item.retail_price > minPrice.value)):
                renderProducts(arg.filter(item => item.retail_price < maxPrice.value))
        }
}


const categoryCards = document.getElementById("categoryCards")
function renderProducts(arg){
        let kod = ""
        arg.length > 0 ? arg.map(item => {
                rnd = Math.trunc(Math.random()*5 + 1)
                kod += 
                `
                <div class="card bg-white p-3 ">
                <div class="w-[150px] relative h-[150px] mx-auto">
                        <div class="absolute right-[-20px] flex items-center text-[#9396AC]  flex-col gap-3 pt-3">
                                <i class="hover:text-[#F81A5D] cursor-pointer fa-regular fa-heart"></i>
                                <i class="hover:text-[#F81A5D] cursor-pointer fa-solid fa-scale-balanced"></i>
                        </div> 
                        <a href="product.htm?id=${item.id}"><img src="${item.img_url_original}" class="w-full h-full object-contain" alt=""></a>
                </div>
                <div >
                        <span class="bg-[#FE4B80] text-white font-bold text-[14px] inline-block px-1">-${Math.trunc(item.discount)}%</span>
                        <div  class="py-2 flex items-end gap-3">
                        <h2 class="text-[#F81A5D] font-bold text-[14px] ">${item.retail_price} ₼</h2>
                        <h3 class="text-[#afafaf] font-bold text-[12px] line-through">${item.old_price ? `${item.old_price} ₼` : ""} </h3>
                        </div>
                        <div class="py-1">
                        <div class="bg-yellow-400 font-bold w-max text-[14px] px-1">${(item.retail_price / 3).toFixed(2)} ₼ x 3 ay</div>
                        </div>
                        <div class="pt-2">
                        <p class="text-[14px] w-full h-9 overflow-hidden">${item.name}</p>
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
                </div>
                `
        }) : getProblem()
        categoryCards.innerHTML = kod
}
function getProblem(){
        Swal.fire({
                icon: "error",
                title: "Oops...",
                showConfirmButton: false,
                text: "Təəssüfki Bu Kategoriyada Məhsul Yoxdur",
              });
        setTimeout(() => {
                location.href = "index.htm"
        },1000)      
}
