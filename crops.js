const crops = {
    fruits: [
        { name: "Mango", price: 45, image: "images/mango.jpg", description: "Alphonso Mango - Premium variety with MSP support" },
        { name: "Banana", price: 35, image: "images/banana.jpg", description: "Robusta Banana - Essential MSP crop" },
        { name: "Jackfruit", price: 40, image: "images/jackfruit.jpg", description: "Artocarpus - Traditional MSP supported fruit" },
        { name: "Sapota", price: 30, image: "images/sapota.jpg", description: "Sapodilla - MSP protected variety" },
        { name: "Guava", price: 25, image: "images/guava.jpg", description: "Thai Guava - MSP listed fruit" },
        { name: "Pomegranate", price: 50, image: "images/pomegranate.jpg", description: "Madhulai - Premium MSP fruit" },
        { name: "Custard Apple", price: 35, image: "images/apple.jpg", description: "Apple - Traditional MSP crop" },
        { name: "Papaya", price: 30, image: "images/papaya.jpg", description: "Papaya - MSP supported" },
        { name: "Watermelon", price: 20, image: "images/watermelon.jpg", description: "Tharpusani - Essential MSP fruit" },
        { name: "Lime", price: 60, image: "images/lime.jpg", description: "Loca - MSP protected citrus" },
        { name: "Orange", price: 40, image: "images/orange.jpg", description: "Nagpur Orange - Premium MSP citrus" },
        { name: "Pineapple", price: 38, image: "images/pineapple.jpg", description: "Mauritius Pineapple - MSP supported tropical fruit" },
        { name: "Fig", price: 55, image: "images/fig.jpg", description: "Poona Fig - Premium MSP variety" },
        { name: "Grapes", price: 60, image: "images/grapes.jpg", description: "Thompson Seedless - MSP protected variety" },
        { name: "Plum", price: 45, image: "images/plum.jpg", description: "Indian Plum - Traditional MSP fruit" }
    ],
    vegetables: [
        { name: "Brinjal", price: 25, image: "images/brinjal.jpg", description: "Katharikkai - MSP listed vegetable" },
        { name: "Ladys Finger", price: 30, image: "images/ladysfinger.jpg", description: "Vendaikkai - Essential MSP crop" },
        { name: "Drumstick", price: 35, image: "images/drumstick.jpg", description: "Moringa - Traditional MSP vegetable" },
        { name: "Curry Leaves", price: 10, image: "images/curryleaves.jpg", description: "Fresh Curry Leaves - MSP supported" },
        { name: "Cluster Beans", price: 20, image: "images/beans.jpg", description: "Beans - MSP listed" },
        { name: "Snake Gourd", price: 25, image: "images/snakegourd.jpg", description: "Pudalai- Traditional MSP vegetable" },
        { name: "Bitter Gourd", price: 30, image: "images/bittergourd.jpg", description: "Pagarkkai - MSP protected variety" },
        { name: "Carrots", price: 35, image: "images/carrot.jpg", description: "Carrot - Traditional MSP vegetable" },
        { name: "Cauli Flower", price: 20, image: "images/cauliflower.jpg", description: "Cauli Flower - MSP listed" },
        { name: "Potato", price: 35, image: "images/potato.jpg", description: "Urulai - Traditional MSP vegetable" },
        { name: "Tomato", price: 28, image: "images/tomato.jpg", description: "Thakkali - Essential MSP vegetable" },
        { name: "Onion", price: 32, image: "images/onions.jpg", description: "Vengayam - Premium MSP crop" },
        { name: "Elephant Yam", price: 45, image: "images/elephantyam.jpg", description: "Senai Kizhangu - Traditional MSP tuber" },
        { name: "Green Chilli", price: 25, image: "images/greenchilli.jpg", description: "Pachai Milagai - MSP protected variety" },
        { name: "Radish", price: 22, image: "images/radish.jpg", description: "Mullangi - Traditional MSP root vegetable" }
    ]
};

// Update the display function to include descriptions
function displayCrops() {
    const cropsGrid = document.getElementById('cropsGrid');
    
    cropsGrid.innerHTML = `
        <div class="crops-container">
            <div class="section-title">
                <h2>Fruits</h2>
                <p class="section-subtitle">Premium Quality MSP Supported Fruits</p>
            </div>
            <div class="crops-grid">
                ${crops.fruits.map((crop, index) => `
                    <div class="crop-card">
                        <div class="crop-image">
                            <img src="${crop.image}" alt="${crop.name}">
                            <div class="crop-overlay">
                                <p>${crop.description}</p>
                            </div>
                        </div>
                        <div class="crop-card-content">
                            <h3>${crop.name}</h3>
                            <p class="price">MSP: ₹${crop.price}/kg</p>
                            <div class="crop-details">
                                <span class="msp-tag">MSP Protected</span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="section-title">
                <h2>Vegetables</h2>
                <p class="section-subtitle">Essential MSP Supported Vegetables</p>
            </div>
            <div class="crops-grid">
                ${crops.vegetables.map((crop, index) => `
                    <div class="crop-card">
                        <div class="crop-image">
                            <img src="${crop.image}" alt="${crop.name}">
                            <div class="crop-overlay">
                                <p>${crop.description}</p>
                            </div>
                        </div>
                        <div class="crop-card-content">
                            <h3>${crop.name}</h3>
                            <p class="price">MSP: ₹${crop.price}/kg</p>
                            <div class="crop-details">
                                <span class="msp-tag">MSP Protected</span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function searchCrops() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const searchResults = document.getElementById('searchResults');
    const cropsGrid = document.getElementById('cropsGrid');
    
    const matchedFruits = crops.fruits.filter(crop => 
        crop.name.toLowerCase().includes(searchInput)
    );
    const matchedVegetables = crops.vegetables.filter(crop => 
        crop.name.toLowerCase().includes(searchInput)
    );

    if (searchInput === '') {
        searchResults.innerHTML = '';
        displayCrops();
        return;
    }

    if (matchedFruits.length === 0 && matchedVegetables.length === 0) {
        searchResults.innerHTML = '<p>No crops found matching your search.</p>';
        cropsGrid.innerHTML = '';
    } else {
        searchResults.innerHTML = '';
        cropsGrid.innerHTML = `
            ${matchedFruits.length > 0 ? `
                <div class="section-title"><h2>Fruits</h2></div>
                <div class="crops-grid">
                    ${matchedFruits.map(crop => `
                        <div class="crop-card">
                            <img src="${crop.image}" alt="${crop.name}">
                            <h3>${crop.name}</h3>
                            <p>MSP: ₹${crop.price}/kg</p>
                            <p class="description">${crop.description}</p>
                        </div>
                    `).join('')}
                </div>
            ` : ''}
            ${matchedVegetables.length > 0 ? `
                <div class="section-title"><h2>Vegetables</h2></div>
                <div class="crops-grid">
                    ${matchedVegetables.map(crop => `
                        <div class="crop-card">
                            <img src="${crop.image}" alt="${crop.name}">
                            <h3>${crop.name}</h3>
                            <p>MSP: ₹${crop.price}/kg</p>
                            <p class="description">${crop.description}</p>
                        </div>
                    `).join('')}
                </div>
            ` : ''}
        `;
    }
}

// Load crops when the page loads
if (document.getElementById('cropsGrid')) {
    displayCrops();
}