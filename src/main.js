function callback() {
  const appElement = document.querySelector("#app");
  const ecommerceHtml = "<h2>ecommerce app</h2>";
  appElement.innerHTML = ecommerceHtml;
}
document.addEventListener("DOMContentLoaded", callback);
