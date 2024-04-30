//  buton başlangıç

const cart = [];
const searchForm = document.querySelector(".search-form");

const searchButon = document.querySelector("#search-buton");

// search buton başlangıç
searchButon.addEventListener("click", function () {
  searchForm.classList.toggle("active"); //toggle search açılıp kapanma özelliği
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(searchButon) &&
      !e.composedPath().includes(searchForm)
    ) {
      searchForm.classList.remove("active");
    }
  });
});
// search buton bitiş

// saat başlangıç
function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const clockElement = document.getElementById("clock");
  clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();
// saat bitiş

// ANKET BAŞLANGIÇ
function anketGonder() {
  alert("ANKETE KATILDIĞINIZ İÇİN TEŞEKKÜRLER");
}
// ANKET BİTİŞ

// sepet başlangıç




function AddCartItem(name,price) {
  alert('Ürün Sepete eklendi')
  obj = { name: name, price: price };
  cart.push(obj);
  console.log(JSON.stringify(cart))
localStorage.setItem('cart',JSON.stringify(cart));

}

// sepet bitiş