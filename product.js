let products = []
let dataArr = []
let obj = {}
let res = new URLSearchParams(location.search)
let id = res.get("id")
fetch("https://raw.githubusercontent.com/mirafgan/PerfectJson/main/UmicoProducts.json")
.then(res => res.json())
.then(data => {
                dataArr =data
                getProducts()
                getImg()
                styleImg()
                getSameProduct()
            }) 

const productDetail = document.getElementById("productDetail")
function getProducts(){
    dataArr.map(item => item.products.map(prd => products = [...products,prd]));
    
    obj = products.find(item => item.id == id) 

    console.log(obj);
    
    
    productDetail.innerHTML = 
    `
     <div class="es flex flex-col lg:flex-row justify-between gap-5">
                <div class=" flex gap-10 flex-col lg:flex-row">
                    <div class="w-full lg:w-[40%] flex ">
                        <div id="imgs" class="w-[10%] flex flex-col">
                            <div class="w-full h-auto border-2 border-[#7C62E3]">
                                <img src="img/example.jpg" alt="">
                            </div>
                        </div>
                        <div id="detail" class="hidden w-[300px] bg-white  h-[300px] border-1 fixed z-50 left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2">
                            <div id="detailImg" class="w-full h-full">

                            </div>
                        </div>
                        <div id="hoveredImg" class="relative w-[90%] h-[500px]">
                            <img  src="${obj.img_url_original}" class="w-full h-full object-contain cursor-zoom-in" alt="">
                        </div>
                    </div>
                    <div class="w-full text-center lg:text-start lg:w-[60%]">
                        <div class="w-max py-0.5 px-1 mr-2 mb-1 bg-[#FF4B81] text-white text-[11px] font-bold ">${Math.trunc(obj.discount)}% endirim</div>
                        <h1 class="text-[#1e244d] font-bold text-2xl mb-2.5">${obj.name}</h1>
                        <div class="flex items-center flex-col md:flex-row gap-3  mb-6 pr-4">
                            <span class="text-[12px] text-[#1e244d]">Məhsulun kodu: ${id}</span>
                            <div class="flex items-center gap-2"><i class="text-[12px] text-[#F81A5D] cursor-pointer fa-regular fa-heart"></i><span>Seçilmişlərə əlavə et</span></div>
                            <div class="flex items-center gap-2"><i class="text-[12px] text-[#F81A5D] cursor-pointer fa-solid fa-scale-balanced"></i><span>Müqayisəyə əlavə et</span></div>
                        </div>
                        <div class="flex items-end gap-5">
                            <h2 class="text-[32px] text-[#ff4b81] font-bold">${obj.retail_price} ₼</h2>
                            <h3 class="text-[24px] text-[#9497AD] line-through font-bold">${obj.old_price ? `${obj.old_price} ₼` : ""} </h3>
                        </div>
                        <div class="flex items-center gap-5 py-5">
                            <div class="bg-yellow-400 font-bold w-max text-[16px] px-2 ">Taksitli Ödəniş</div>
                            <div class="text-[16px] font-semibold">${(obj.retail_price / 3).toFixed(2)} ₼ x 3 ay</div>
                        </div>
                        <div>
                            <button class="w-full py-3 bg-[#7C62E3] font-bold text-[18px] text-white" onclick="addBasket(${obj.id})">Səbətə Əlavə etmək</button>
                        </div>
                        <div class="pt-4">
                            <h2 class="text-[14px] font-bold py-3">Məhsul haqqında məlumat:</h2>
                            <div class="space-y-1 text-sm">
                                <p>
                                  <span class="text-gray-400">Brend:</span>
                                  <a href="#" class="text-purple-600 hover:underline">${obj.default_marketing_name.name ? obj.default_marketing_name.name : 'unknowed' }</a>
                                </p>
                                <p>
                                  <span class="text-gray-400">İstehsalçı ölkə:</span>
                                  <span class="text-black">İtaliya</span>
                                </p>
                                <p>
                                  <span class="text-gray-400">Mum çəkisi, q:</span>
                                  <a href="#" class="text-purple-600 hover:underline">500</a>
                                </p>
                                <p>
                                  <span class="text-gray-400">Təsnifat:</span>
                                  <span class="text-black">Mass-market</span>
                                </p>
                              </div>
                        </div>
                    </div>
                </div>
                
                <div class="w-full">
                    <div class="w-full mx-auto p-4 bg-white space-y-6 text-sm font-sans">
                        
                        <div class="p-4  bg-gray-50">
                          <h2 class="font-semibold text-gray-700 mb-2">Satıcı-şirkət</h2>
                          <div class="flex flex-col  gap-3">
                            <div class="flex">
                                <img src="${obj.default_marketing_name.logo ? obj.default_marketing_name.logo.thumbnail : 'img/logo.jpg'}" alt="Logo" class="w-10 h-10 rounded bg-gray-200" />
                            <div>
                              <p class="font-medium text-gray-800">${obj.default_marketing_name.name ? obj.default_marketing_name.name : 'unknowed'}</p>
                              <p class="text-gray-500 text-xs">Bu satıcıdan məhsul əldə edirsiniz</p>
                            </div>
                            </div>
                            <div class="flex items-center gap-1">
                              <span class="text-green-600 font-semibold text-sm">99%</span>
                              <span class="text-gray-500 text-xs font-bold">uğurlu sifarişlərin həcmi</span>
                            </div>
                          </div>
                        </div>
                      
                        
                        <div>
                          <h2 class="font-semibold text-gray-700 mb-2">Çatdırılma</h2>
                          <ul class="space-y-2">
                            <li class="flex flex-col  gap-2 text-gray-700">
                              <div class=" flex gap-3">
                                <span class="text-purple-600"><i class="fa-solid fa-truck"></i></span>
                                <span class="block">Kuryer ilə</span>
                              </div>
                              <span class=" text-red-500">50.00 ₼-dan yuxarı pulsuz</span>
                            </li>
                            <li class="flex flex-col  gap-2 text-gray-700">
                              <div class="flex gap-3">
                                <span class="text-purple-600"><i class="fa-solid fa-box"></i></span>
                                <span>Özünüz götürdükdə (təslim məntəqələrindən)</span>
                              </div>
                              <span class=" text-red-500">Pulsuz</span>
                            </li>
                            <li class="flex flex-col gap-2 text-gray-700">
                              <div class="flex gap-3">
                                <span class="text-purple-600"><i class="fa-solid fa-envelope"></i></span>
                                <span>Azərpoçt şöbələrinə çatdırılma (bütün ölkə üzrə)</span>
                              </div>
                              <span class="text-red-500">0.96 ₼-dan</span>
                              <a href="#" class="text-purple-600 underline text-xs ml-1">Ətraflı</a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h2 class="font-semibold text-gray-700 mb-2">Ödəniş</h2>
                          <ul class="space-y-2 text-gray-700">
                            <li class="flex  gap-2">
                              <div class="flex gap-3">
                                <span class="text-purple-600"><i class="fa-solid fa-money-bill-wave"></i></span>
                                </div>
                              <div class="flex flex-col">
                                <span>Nağd</span>
                               <span class=" text-gray-500 text-xs">Təhvil alarkən ödəmək</span>
                              </div>
                            </li>
                            <li class="flex  gap-2">
                              <span class="text-purple-600"><i class="fa-solid fa-credit-card"></i></span>
                              <div class="flex flex-col">
                                <span>Bank kartı ilə</span>
                                <span class=" text-gray-500 text-xs">Təhvil alındıqda və ya onlayn</span>
                              </div>
                            </li>
                            <li class="flex  gap-2">
                              <span class="text-purple-600"><i class="fa-solid fa-percent"></i></span>
                              <div class="flex flex-col pl-1">
                                <span>Kreditlə</span>
                                <span class=" text-gray-500 text-xs">Kapital Bank-dan</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      
                      
                </div>
            </div> 
    `

}
function getImg(){
    const imgs = document.getElementById("imgs")
    let kod = ``
    obj.img_urls_secondary.map(item => 
        kod += `
            <div class="w-full h-auto border-2 mb-2 border-[#7C62E3]">
                <img src="${item}" alt="">
            </div>
        `)
    imgs.innerHTML = kod
}
const sameProducts = document.getElementById("sameProducts")

function getSameProduct(){
  let kod = ''
  let sameArr = products.filter(item => item.category.slugged_name == obj.category.slugged_name)
  let rnd = 0
  sameArr.slice(0,5).map(item => {
    rnd = Math.trunc(Math.random()*5 + 1 )
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
                                <h3 class="text-[#afafaf] font-bold text-[12px] line-through">${obj.old_price ? `${obj.old_price} ₼` : ""}</h3>
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
  sameProducts.innerHTML = kod
}


function styleImg(){
    const hoveredImg = document.getElementById("hoveredImg")
    const detail = document.getElementById("detail")
    const detailImg = document.getElementById("detailImg")
    detailImg.style.background = `url(${obj.img_url_original}) center/cover no-repeat`
    detailImg.style.backgroundSize = "200%"
    hoveredImg.onmousemove = (e) => {
        detail.classList.remove("hidden")
        const rect = hoveredImg.getBoundingClientRect();
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const percentX = (x / rect.width)  * 100
        const percentY = (y / rect.height) * 100
        detailImg.style.backgroundPosition = `${percentX}% ${percentY}%`
        detailImg.style.backgroundSize = `150% 150%`
    }
    hoveredImg.onmouseleave = () => {detail.classList.add("hidden")}
}

