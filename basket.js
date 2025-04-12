let productArr = []
fetch("https://raw.githubusercontent.com/mirafgan/PerfectJson/main/UmicoProducts.json")
        .then(res => res.json())
        .then(data => {
            getData(data)  
            renderBasket()     
            totalPrices()
        }) 
let basketArr = JSON.parse(localStorage.getItem("basket")) ||  []
let products = []
let idArr = []
function getData(arg){
    productArr = [...arg]
}
const cards = document.getElementById("cards")

function addBasket(arg){
    products.length == 0 ? productArr.map(item => item.products.map(elem => products.push(elem))) : ""
    let newObj = products.find(item => item.id == arg)
    let basketItem = basketArr.find(item => item.id == arg) 
    if(basketItem){basketItem.count += 1}
    else{
        newObj.count = 1
        basketArr.push({...newObj})
    }
    localStorage.setItem("basket",JSON.stringify(basketArr))
    renderBasket()
}

function renderBasket(){
    let kod = ""
    basketArr.map(item => kod += 
        `
        <div class="bg-white mb-3">
            <div class="w-full md:max-w-4xl mx-auto py-4 px-10 border-b-1 border-[#d7d7d7] gap-3 flex flex-col md:flex-row items-start md:items-center space-x-4">
                <button onclick="deletBasket(${item.id})" class="inline md:hidden text-gray-400 text-2xl hover:text-red-500">×</button>

                <img src="${item.img_url_original}" alt="Product" class="w-20 h-20 object-contain">
                
                <div class="flex-1">
                    <h2 class="text-lg font-semibold text-[#1e244d]">
                    ${item.name}
                    </h2>
                
                    <div class="flex flex-col items-start mt-3 gap-2 space-x-4">
                    <span class="bg-pink-600 text-white text-[12px] font-bold py-1 px-2 rounded">-${Math.trunc(item.discount)}%</span>
                    <div>
                        <span class="text-pink-600 font-bold text-lg">${item.retail_price} ₼</span>
                        <span class="line-through text-gray-400 text-sm">${item.old_price ? `${item.old_price} ₼`: ""}</span>
                    </div>
                    </div>
                
                    <div class="text-sm mt-2">
                    Taksitli ödəniş <span class="bg-yellow-300 font-bold px-1">${(item.retail_price / 3).toFixed(1)} ₼</span> x 3
                    </div>
                </div>
                <div class="flex items-center border border-[#cfcfcf]">
                    <button class="px-3 py-1 text-lg border-r-1 border-[#cfcfcf]" onclick="renderCount(${item.id},-1)">−</button>
                    <span class="px-3 py-1">${item.count}</span>
                    <button class="px-3 py-1 text-lg border-l-1 border-[#cfcfcf]" onclick="renderCount(${item.id},1)">+</button>
                </div>
                <button class="hidden md:inline ml-4 text-gray-400 text-2xl hover:text-red-500"  >×</button>
                </div>
                <div class="max-w-4xl mx-auto p-4 text-right text-gray-600 text-[14px]">
                Ümumi qiymət: <span class="font-bold text-gray-900 text-lg pl-2">${(item.retail_price * item.count).toFixed(2)} ₼</span>
                </div>
                
        </div>
        `
    )
    cards ? cards.innerHTML = kod : ""
}  
function renderCount(id,arg){
    let basketItem = basketArr.find(item => item.id == id)
    if(!(basketItem.count === 1 && arg === -1)) basketItem.count += arg
    localStorage.setItem("basket",JSON.stringify(basketArr))
    renderBasket()
    totalPrices()
}
const basketElemCount = document.getElementById("basketElemCount")
const ProductCount = document.getElementById("ProductCount")
const resCount = document.getElementById("resCount")
const totalPr = document.getElementById("totalPr")
const resTotalPr = document.getElementById("resTotalPr")
function totalPrices(){
    let count = basketArr.reduce((acc,item) => acc += item.count ,0)
    basketElemCount.innerHTML = count
    resCount.innerHTML = count
    ProductCount.innerHTML = count
    let totalPrice = basketArr.reduce((acc,item) => acc += (item.count * item.retail_price) ,0)
    totalPr.innerHTML = totalPrice.toFixed(2) 
    resTotalPr.innerHTML = totalPrice.toFixed(2)
}
function deletBasket(arg){
    let basketItem = basketArr.find(item => item.id == arg)
    basketArr.splice(basketArr.indexOf(basketItem),1)
    localStorage.setItem("basket",JSON.stringify(basketArr))
    totalPrices()
    renderBasket()
}