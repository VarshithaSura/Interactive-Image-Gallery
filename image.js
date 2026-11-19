
let images = [
    {
        name: "Rose",
        category: "Flowers",
        src: "pics/rose.jpg"
    },
    {
        name: "Sunflower",
        category: "Flowers",
        src: "pics/sunflower.jpg"
    },
    {
        name: "Orchid",
        category: "Flowers",
        src: "pics/orchid.jpg"
    },
    {
        name: "Fuschia",
        category: "Flowers",
        src: "pics/fuschia.jpg"
    },
    {
        name: "Lily",
        category: "Flowers",
        src: "pics/lily.jpg"
    },
    {
        name: "Hibiscus",
        category: "Flowers",
        src: "pics/hibiscus.jpg"
    },
    {
        name: "Lotus",
        category: "Flowers",
        src: "pics/lotus.jpg"
    },
    {
        name: "Apple",
        category: "Fruits",
        src: "pics/apple.jpg"
    },
    {
        name: "Watermelon",
        category: "Fruits",
        src: "pics/watermelon.jpg"
    },
    {
        name: "Pineapple",
        category: "Fruits",
        src: "pics/pineapple.jpg"
    },
    {
        name: "Grapes",
        category: "Fruits",
        src: "pics/grapes.jpg"
    },
    {
        name: "Orange",
        category: "Fruits",
        src: "pics/orange.jpg"
    },
    {
        name: "Kiwi",
        category: "Fruits",
        src: "pics/kiwi.jpg"
    },
    {
        name: "Karthi",
        category: "Actors",
        src: "pics/karthi.jpg"
    },
    {
        name: "NTR",
        category: "Actors",
        src: "pics/ntr.jpg"
    },
    {
        name: "Ranbir Kapoor",
        category: "Actors",
        src: "pics/ranbir.jpg"
    },
    {
        name: "Surya",
        category: "Actors",
        src: "pics/surya.jpg"
    },
    {
        name: "Nani",
        category: "Actors",
        src: "pics/nani.jpg"
    },
    {
        name: "Prabhas",
        category: "Actors",
        src: "pics/prabhas.jpg"
    },
    {
        name: "M.S.Dhoni",
        category: "Cricketers",
        src: "pics/dhoni.jpg"
    },
    {
        name: "Virat Kohli",
        category: "Cricketers",
        src: "pics/virat.jpg"
    },
    {
        name: "Rohit Sharma",
        category: "Cricketers",
        src: "pics/rohith.jpg"
    },
    {
        name: "KL Rahul",
        category: "Cricketers",
        src: "pics/kl.jpg"
    },
    {
        name: "Hardik Pandya",
        category: "Cricketers",
        src: "pics/hardik.jpg"
    },
    {
        name: "Siraj",
        category: "Cricketers",
        src: "pics/siraj.jpg"
    },
    {
        name: "Jasprit Bumrah",
        category: "Cricketers",
        src: "pics/bumrah.jpg"
    },
    
];

let selectedCategory = "All";

let gallery = document.getElementById("gallery");
let search = document.getElementById("search");
let imageCount = document.getElementById("imageCount");
let emptyMessage = document.getElementById("emptyMessage");

let buttons = document.querySelectorAll(".filter-btn");


function displayImages() {

    gallery.innerHTML = "";

    let searchValue = search.value.toLowerCase();

    let filteredImages = images.filter(function(image) {

        let categoryMatch =
            selectedCategory === "All" ||
            image.category === selectedCategory;

        let searchMatch =
            image.name.toLowerCase().includes(searchValue);

        return categoryMatch && searchMatch;

    });

    imageCount.textContent =
        "Showing " + filteredImages.length + " images";

    emptyMessage.style.display =
        filteredImages.length === 0 ? "block" : "none";

    filteredImages.forEach(function(image) {

        let card = document.createElement("div");
        card.className = "image-card";

        let photo = document.createElement("img");
        photo.src = image.src;
        photo.alt = image.name;
        photo.loading = "lazy";

        photo.onerror = function() {
            photo.alt = "Image could not be loaded";
            photo.style.objectFit = "contain";
        };

        let info = document.createElement("div");
        info.className = "image-info";

        let title = document.createElement("h3");
        title.textContent = image.name;

        let category = document.createElement("p");
        category.textContent = image.category;

        info.appendChild(title);
        info.appendChild(category);

        card.appendChild(photo);
        card.appendChild(info);

        card.addEventListener("click", function() {
            openPreview(image);
        });

        gallery.appendChild(card);

    });
}

// Category filtering

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        buttons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        selectedCategory = button.dataset.category;

        displayImages();

    });

});

// Search functionality

search.addEventListener("input", displayImages);

// Image preview

function openPreview(image) {

    document.getElementById("previewImage").src = image.src;

    document.getElementById("previewName").textContent =
        image.name;

    document.getElementById("lightbox").classList.add("show");

}

// Close preview

document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("lightbox").classList.remove("show");
});

document.getElementById("lightbox").addEventListener("click", function(event) {

    if (event.target.id === "lightbox") {
        this.classList.remove("show");
    }

});

// Initial display

displayImages();
