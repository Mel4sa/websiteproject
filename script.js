//  buton başlangıç

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

// menü başlangıç üç çizgi



// menü bitiş üç çizgi
