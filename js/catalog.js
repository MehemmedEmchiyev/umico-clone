let productArr = []
fetch("https://raw.githubusercontent.com/mirafgan/PerfectJson/main/shortUmicoCatalog.json")
        .then(res => res.json())
        .then(data => {
                productArr = data.data
                getCatalogItems()
                console.log(productArr);
                
            }) 
const catalog = document.getElementById("catalog")
function getCatalogItems(){
    let kod = ""
    productArr.map(item => kod += 
        `
        <div class="cursor-pointer py-5 flex flex-col items-center justify-center bg-white duration-300 hover:shadow-md">
            <div class="!w-[120px] h-[120px]">
                <img 
                onerror="this.src='${item.icons.menu_icon}'"
                class="w-full h-full object-cover" src="${item.icons.original != undefined ? item.icons.original : item.icons.menu_icon }" alt="">
            </div>
            <p class="px-3 text-center">${item.name}</p>
        </div>
        `
    )
    catalog.innerHTML = kod
}