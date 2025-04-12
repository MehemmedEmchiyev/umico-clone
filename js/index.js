import { getHamMenu,getHeader ,getFooter } from "./elements.js"
const header = document.querySelector('header')
const footer = document.querySelector('footer')
const hamburgerMenu = document.getElementById("hamburgerMenu")
header.innerHTML = getHeader()
hamburgerMenu.innerHTML = getHamMenu()
footer.innerHTML = getFooter()
const searchInput = document.getElementById("searchInput")
document.getElementById("changeBarsStatue").onclick = () => {hamburgerMenu.classList.toggle("hidden")}
document.getElementById("changeBarsStatue2").onclick = () => {hamburgerMenu.classList.toggle("hidden")}
const changeSearchStatue = document.getElementById("changeSearchStatue")
changeSearchStatue.onclick = function(){  
        searchInput.classList.toggle("hidden")
        searchInput.classList.toggle("flex")
        searchInput.classList.contains("flex") ? document.querySelector("main").classList.add("pt-39") : document.querySelector("main").classList.remove("pt-39")
}
const grayUi = document.getElementById("grayUi")
const input = searchInput.querySelector("input")
const searchPlace = document.getElementById("searchPlace")

let productArr = []
fetch("https://raw.githubusercontent.com/mirafgan/PerfectJson/main/UmicoProducts.json")
        .then(res => res.json())
        .then(data => {
                productArr = data
                event()
        })

function event(){
        let produts = []
        productArr.map(item => item.products.map(elem => produts = [...produts,elem]))
        input.oninput = () => {
                input.value.length > 0 ? grayUi.classList.add("!z-302") : grayUi.classList.remove("!z-302")
                input.value.length > 0 ? grayUi.classList.remove("hidden") : grayUi.classList.add("hidden")
                !grayUi.classList.contains("hidden") ? searchPlace.classList.remove("hidden") : searchPlace.classList.add("hidden") 
                let newArr = produts.filter(item => item.name.toLowerCase().includes(input.value.toLowerCase()))
                if(newArr.length > 3){
                        searchPlace.classList.remove("h-max")
                        searchPlace.classList.add("h-[300px]")
                }
                else{
                        searchPlace.classList.remove("h-[300px]")
                        searchPlace.classList.add("h-max")
                }
                let kod = ""
                newArr.length ? newArr.map(item => kod += 
                        `
                        <div class="flex justify-between min-h-max items-center border-1 border-[#cbcbcb] py-2 px-2 mb-2">
                        <div class="flex items-center gap-3">
                        <div class="w-[100px] h-[100px] relative">
                          <span class="bg-[#FF4B81] px-1 rounded-[2px] top-[-3px] text-[13px] text-white absolute right-0">-${Math.trunc(item.discount)}%</span>
                          <img src="${item.img_url_original}" class="w-full h-full object-contain" />
                        </div>
                        <div>
                          <a href="../html/product.htm?id=${item.id}"><h2 class="text-start text-[24px] font-bold">${item.name}</h2></a>
                          <h3 class="italic text-[14px] text-[#b0b0b0] text-start">${item.category.category_name}</h3>
                        </div>
                      </div>
                      <div class="">
                          <h2 class="text-[24px] text-[#FF4B81] font-bold">${item.retail_price} ₼</h2>
                          <h3 class="italic text-[14px] line-through text-[#b0b0b0]">${item.old_price ? `${item.old_price} ₼` : "" }</h3> 
                      </div>
                    </div>
                        `
                ) : kod = "<div class='text-2xl font-bold text-[#FF4B81]'>Belə Mehsul Tapılmadı</div>"
                searchPlace.innerHTML = kod
                
        }
}