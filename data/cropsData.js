const cropsData = {
    Rice: [
    {
        disease: "Blast",
        image: "./assets/images/rice_blast.jpg",
        pesticide: "Tricyclazole",
        quantity: "2 ml per litre of water",
        cost: "₹200 per 100ml",
        safety: "Wear gloves, mask and avoid contact with skin"
    }
],
    Wheat: [
    {
        disease: "Rust",
        image: "./assets/images/wheat_rust.jpg",
        pesticide: "Propiconazole",
        quantity: "1 ml per litre of water",
        cost: "₹180 per 100ml",
        safety: "Do not spray in windy conditions"
    }
],
    Cotton: [
    {
        disease: "Bollworm",
        images: [
            "./assets/images/cotton_bollworm.jpg", 
            "./assets/images/cotton_bollworm2.jpg",
            "./assets/images/cotton_bollworm3.jpg",
        ],
        pesticide: "Spinosad",
        quantity: "0.5 ml per litre of water",
        cost: "₹250 per 100ml",
        safety: "Wash hands after use and avoid inhalation"
    },
    {
        disease: "Cotton Leaf Curl Virus",
        image: "./assets/images/cotton_leaf_curl_virus.jpg",
        pesticide: "Imidacloprid or Dinotefuran",
        quantity: "0.5–1 ml per litre of water",
        cost: "₹200–₹300 per 100ml",
        safety: "Wear gloves, mask, and protective clothing. Control whiteflies and avoid spraying in windy conditions."
    },
     {
        disease: "Fusarium Wilt",
        image: "./assets/images/cotton_fussarium_wilt.jpg",
        pesticide: "Carbendazim or Thiophanate-methyl",
        quantity: "1 g per litre of water (soil drenching near roots)",
        cost: "₹180–₹250 per 100g",
        safety: "Wear gloves and mask. Avoid skin contact. Do not overuse fungicides in soil."
    }
],
    Maize: [
    {
        disease: "Leaf Blight",
        image: "./assets/images/maize_leaf_blight.jpg",
        pesticide: "Mancozeb",
        quantity: "2.5 gm per litre of water",
        cost: "₹150 per 100gm",
        safety: "Wear protective clothing while spraying"
    }
],
    Tomato: [
    {
        disease: "Early Blight",
        image: "assets/images/tomato_early_blight.jpg",
        pesticide: "Chlorothalonil",
        quantity: "2 g per litre",
        cost: "₹120 per 100g",
        safety: "Avoid spraying during rain"
    }
],
    Groundnut: [
    {
        disease: "Leaf Spot",
        image: "assets/images/groundnut_leaf_spot.jpg",
        pesticide: "Mancozeb",
        quantity: "2 g per litre",
        cost: "₹130 per 100g",
        safety: "Spray during evening hours"
    }
],
    Potato: [
    {
        disease: "Late Blight",
        image: "assets/images/potato_late_blight.jpg",
        pesticide: "Metalaxyl",
        quantity: "2 g per litre",
        cost: "₹160 per 100g",
        safety: "Use protective clothing"
    }
]
};
console.log("cropsData loaded", cropsData);
