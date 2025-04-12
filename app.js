let categoryArr = []
let productArr = []
fetch("https://raw.githubusercontent.com/mirafgan/PerfectJson/main/shortUmicoCatalog.json")
        .then(res => res.json())
        .then(data => {                
                categoryArr = data
                getCategory()
                getSubCategory()
                getCtlg()
        })
fetch("https://raw.githubusercontent.com/mirafgan/PerfectJson/main/UmicoProducts.json")
        .then(res => res.json())
        .then(data => {
                productArr = data
                getDiscountProduct()
                getBestSelling()
                getMegaDisPro()
        })        

const category = document.getElementById("category")
const grayUi = document.getElementById("grayUi")
const dropMenu = document.getElementById("dropMenu")
const dropCategory = document.getElementById("dropCategory")
const parentCategory = document.getElementById("parentCategory")
function getCategory(){     
        let kod = ''
        categoryArr.data.map((item) => {
                kod += `<li class="whitespace-nowrap py-[10px] text-[13px] hover:text-[#7C62E3] cursor-pointer flex items-center gap-2"><img src="${item.icons.menu_icon}" /> <a href="filter.htm?category=${item.slugged_name}">${item.name}</a> </li>`
        })
        category.innerHTML = kod
}
function getDropCategory(arg){
        let kod = ''
        categoryArr.data[arg].child_ids.map((item) => {kod += `<li class="whitespace-nowrap py-[10px] text-[13px] hover:text-[#7C62E3] cursor-pointer flex items-center gap-2"><a href="filter.htm?category=${item.slugged_name}">${item.name}</a></li>`})       
        dropCategory.innerHTML = kod
        dropCategory.onmouseenter = () => {grayUi.classList.toggle("hidden")}
}
parentCategory.onmouseenter = () => {
        dropCategory.classList.remove("hidden")
        grayUi.classList.remove("hidden")
}
parentCategory.onmouseleave = () => {
        dropCategory.classList.add("hidden")
        grayUi.classList.add("hidden")
}
function getSubCategory(){
        let li = category.querySelectorAll('li');
        li.forEach((item,index) => {
                item.onmouseenter = () => {
                        grayUi.classList.remove("hidden")
                        dropMenu.classList.remove("hidden")
                        getDropCategory(index)
                }
                item.onmouseleave = () => {
                        grayUi.classList.add("hidden")
                        getDropCategory(index)
                }
        })
}
const swiperWrapper = document.getElementById("swiperWrapper")
function getDiscountProduct(){
        let discountArr = []
        productArr.map(item => item.products.filter(elem => elem.discount != 0)).map(disPro => disPro.map(item => discountArr.push(item)))
        render(discountArr.slice(0,15),swiperWrapper)
}
const swiperWrapper2 = document.getElementById("swiperWrapper2")
function getBestSelling(){
        let products = []
        let bestSellingArr = []
        let rnd = 0
        productArr.map(item => item.products.map(pr => products.push(pr)));
        for(let i = 1 ; i <= 20 ; i++ ){
                rnd = Math.trunc(Math.random()*products.length)
                bestSellingArr.push(products[rnd])
        }
        render(bestSellingArr,swiperWrapper2) 
}      

function render(arr,tag){
        let kod = ""
        arr.map(item => {
                let rnd = Math.trunc(Math.random()*5 + 1)
                kod += 
                `
                <div class="swiper-slide !w-max h-full bg-white px-3 flex flex-col items-center justify-between">
                            <div class="w-[150px] relative h-[150px] mx-auto">
                                <div class="absolute right-[-20px] flex items-center text-[#9396AC]  flex-col gap-3 pt-3">
                                        <i class="hover:text-[#F81A5D] cursor-pointer fa-regular fa-heart"></i>
                                        <i class="hover:text-[#F81A5D] cursor-pointer fa-solid fa-scale-balanced"></i>
                                </div> 
                                <a href="product.htm?id=${item.id}"><img src="${item.img_url_original}" class="w-full h-full object-contain" alt=""></a>
                            </div>
                            <span class="bg-[#F81A5D] text-[14px] text-white font-bold inline-block px-1">-${Math.trunc(item.discount)}%</span>
                            <div  class="py-2 flex items-end gap-3">
                                <h2 class="text-[#F81A5D] font-bold text-[14px] ">${item.retail_price} ₼</h2>
                                <h3 class="text-[#afafaf] font-bold text-[12px] line-through">${item.old_price ? `${item.old_price} ₼` : ``} </h3>
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
                `
        })
        tag.innerHTML = kod
}
function getCtlg(){
    const catalogs = document.getElementById("catalogs")
    let kod = ""
    
    categoryArr.data.slice(0,10).map(item => kod += 
        `
        <div class="cursor-pointer py-5 flex flex-col items-center justify-center bg-white ">
            <div class="!w-[120px] h-[120px]">
                <img 
                onerror="this.src='${item.icons.menu_icon}'"
                class="w-full h-full object-cover" src="${item.icons.original != undefined ? item.icons.original : item.icons.menu_icon }" alt="">
            </div>
            <p class="px-3 text-center text-[14px]">${item.name}</p>
        </div>
        `
    )
    catalogs.innerHTML = kod
}
function getMegaDisPro(){
        const swiperWrapper3 = document.getElementById("swiperWrapper3")
        let discountArr = []
        let newArr = productArr.map(item => item.products.filter(pr => pr.discount > 70))
        newArr.map(item => {item.length > 0 ? item.map(elem => discountArr.push(elem)) : ""});
        render(discountArr,swiperWrapper3)
}

var swiper = new Swiper(".mySwiper", {
        pagination: {el: ".swiper-pagination",},
        autoplay: {
                delay: 3000,  
                disableOnInteraction: false,
              },
      });
var swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination2",
          clickable: true,
        },
      });
var swiper3 = new Swiper(".mySwiper3", {
        slidesPerView: 2,
        breakpoints: {
                768: {
                  slidesPerView: 4.5,
                },
        },
        spaceBetween: 15,
        pagination: {
          el: ".swiper-pagination3",
          clickable: true,
        },
      });
var swiper4 = new Swiper(".mySwiper4", {
        slidesPerView: 2,
        breakpoints: {
                768: {
                  slidesPerView: 4.5,
                },
        },
        spaceBetween: 15,
        pagination: {
          el: ".swiper-pagination4",
          clickable: true,
        },
});