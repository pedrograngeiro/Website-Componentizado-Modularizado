document.addEventListener("DOMContentLoaded", function () {
  fetch("components/menu-lateral/menu-lateral.html")
    .then((response) => response.text())
    .then((content) => {
      const contentElement = document.getElementById("menu-lateral");
      if (contentElement) {
        contentElement.innerHTML = content;
      } else {
        console.error("Element with ID 'div' not found.");
      }
    })
    .catch((error) => {
      console.error("Error loading content:", error);
    });
});
