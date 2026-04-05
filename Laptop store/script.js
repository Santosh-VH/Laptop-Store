const products = [

 // laptops
 
  { id: 1, name: "Dell Inspiron 15", brand: "Dell", price: 55000, image: "images/dell.jpg" },
  { id: 2, name: "HP Pavilion 14", brand: "HP", price: 62000, image: "images/hp.jpg" },
  { id: 3, name: "Lenovo IdeaPad Slim 5", brand: "Lenovo", price: 58000, image: "images/lenovo.jpg" },
  { id: 4, name: "Apple MacBook Air M1", brand: "Apple", price: 85000, image: "images/macbook.jpg" },
  { id: 5, name: "Asus VivoBook 15", brand: "Asus", price: 52000, image: "images/asus.jpg" },
  { id: 6, name: "Acer Aspire 7", brand: "Acer", price: 60000, image: "images/acer.jpg" },
  { id: 7, name: "MSI GF63 Thin", brand: "MSI", price: 70000, image: "images/msi.jpg" },
  { id: 8, name: "Dell XPS 13", brand: "Dell", price: 110000, image: "images/xps.jpg" },

  { id: 9, name: "HP Victus Gaming", brand: "HP", price: 75000, image: "images/victus.jpg" },
  { id: 10, name: "Lenovo Legion 5", brand: "Lenovo", price: 95000, image: "images/legion.jpg" },
  { id: 11, name: "Asus ROG Strix", brand: "Asus", price: 120000, image: "images/rog.jpg" },
  { id: 12, name: "Acer Nitro 5", brand: "Acer", price: 80000, image: "images/nitro.jpg" },
  { id: 13, name: "Apple MacBook Pro M2", brand: "Apple", price: 130000, image: "images/macpro.jpg" },
  { id: 14, name: "Microsoft Surface Laptop 4", brand: "Microsoft", price: 105000, image: "images/surface.jpg" },
  { id: 15, name: "Samsung Galaxy Book2", brand: "Samsung", price: 68000, image: "images/samsung.jpg" }
];

let selectedCategory = "All";
let likes = JSON.parse(localStorage.getItem("likes")) || {};

function displayProducts() {
  const container = document.getElementById("productContainer");
  const search = document.getElementById("search").value.toLowerCase();

  container.innerHTML = "";

  const filtered = products.filter(p =>
    (selectedCategory === "All" || p.brand === selectedCategory) &&
    p.name.toLowerCase().includes(search)
  );

  filtered.forEach(p => {
    container.innerHTML += `
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4">
        <div class="card">
          <img src="${p.image}" class="card-img-top">
          <div class="card-body">
            <h5>${p.name}</h5>
            <p>${p.brand}</p>
            <p>₹${p.price}</p>
            <span class="like-btn ${likes[p.id] ? "liked" : ""}" onclick="toggleLike(${p.id})">
              ❤️ ${likes[p.id] || 0}
            </span>
          </div>
        </div>
      </div>
    `;
  } );
}

function toggleLike(id) {
  likes[id] = likes[id] ? 0 : 1;
  localStorage.setItem("likes", JSON.stringify(likes));
  displayProducts();
}

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    selectedCategory = btn.dataset.category;
    displayProducts();
  });
});
document.getElementById("search").addEventListener("input", displayProducts);
displayProducts();