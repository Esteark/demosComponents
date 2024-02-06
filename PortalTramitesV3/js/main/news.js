const btnMenufilterNews = document.getElementById("btnMenufilterNews");
const secfilterNews = document.getElementById("secfilterNews");
btnMenufilterNews.addEventListener("click", () => {
  if (secfilterNews.classList.contains("max-h-0")) {
    secfilterNews.classList.remove("max-h-0");
    secfilterNews.classList.add("max-h-[500px]");
  } else {
    secfilterNews.classList.add("max-h-0");
    secfilterNews.classList.remove("max-h-[500px]");
  }
});
