function refreshCart(cart) {
  var cartitems = document.getElementById("cartitems");
  cartitems.innerHTML = "";
  var total = calculateTotal(cart);
  var totalElement = document.createElement("p");
  totalElement.textContent = "Toplam: " + total + "₺";
  cartitems.appendChild(totalElement);

  // Sepet ürünlerini listeye ekle
  var items = JSON.parse(cart);
  console.log(items);
  for (var i = 0; i < items.length; i++) {
    var obj = items[i];
    var li = document.createElement("li");
    li.textContent = obj.name + " - " + obj.price + "₺";

       // Çöp kutusu ikonunu içeren bir element oluşturun
    var deleteIcon = document.createElement('i');
    deleteIcon.className = 'fas fa-trash-alt';
    
    // Sil butonunu oluşturun ve çöp kutusu ikonunu içeren elementi ekleyin
    var deleteButton = document.createElement('button');
    deleteButton.appendChild(deleteIcon);
    deleteButton.addEventListener('click', createDeleteHandler(i));
    
 
     li.appendChild(deleteButton);
 
    cartitems.appendChild(li);
  }

}

function calculateTotal(cart) {
  var items = JSON.parse(cart);
  var total = 0;

  for (var i = 0; i < items.length; i++) {
    total += parseFloat(items[i].price);
  }

  return total.toFixed(2); // Toplamı ondalık kısmı iki basamaklı olarak göster
}
function createDeleteHandler(index) {
  return function () {
    // Sepeti al ve JSON'dan ayrıştır
    var cart = localStorage.getItem('cart');
    var items = JSON.parse(cart);

    // İlgili indeksteki ürünü sepetten kaldır
    items.splice(index, 1);

    // Güncellenmiş sepeti tekrar localStorage'a kaydet
    localStorage.setItem('cart', JSON.stringify(items));

    // Sepeti yeniden güncelle
    refreshCart(localStorage.getItem('cart'));
  };
}

let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

refreshCart(localStorage.getItem('cart'));
