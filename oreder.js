const modal = document.getElementById("modal")
const numberInput = document.getElementById("numberInput")
const fakeOtpCode = document.getElementById("fakeOtpCode")
let code = 0
function openModal(){
    if(basketArr.length > 0){
        if(numberInput.value.length >= 12){
            modal.classList.add("!flex")
            const number = numberInput.value;
            code = Math.floor(100000 + Math.random() * 900000);
            const message = `Sizin doğrulama kodunuz: ${code}`;
            const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        }
        else alert("Nomrenizi dogru daxil edin")
    }
    else{alert("Səbətiniz Boşdur")}
}
function orderConfirm(){
    fakeOtpCode.value == code ? Swal.fire({
        position: "center",
        icon: "success",
        title: "Sifarişiniz Hazırdır",
        showConfirmButton: false,
        timer: 1500
      }) : Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Nə isə yanlış getdi!",
        footer: '<a href="#">Zəhmət olmasa Kodu doğru daxil edin</a>'
      })
      setTimeout(()=>{
        modal.classList.remove("!flex")
        window.location.href = (`index.htm`)
        basketArr.length = 0
        localStorage.setItem("basket",JSON.stringify(basketArr))

      },1500)
}