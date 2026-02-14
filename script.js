const cropSelect = document.getElementById("cropSelect");
const resultDiv = document.getElementById("result");
const languageSelect = document.getElementById("languageSelect");

const titleEl = document.getElementById("title");
const descEl = document.getElementById("description");
const disclaimerEl = document.getElementById("disclaimer");

let currentLang = "en";

// Apply language text
function applyLanguage(lang) {
    currentLang = lang;
    const text = languageData[lang];

    titleEl.textContent = text.title;
    descEl.textContent = text.description;
    disclaimerEl.textContent = text.disclaimer;

    // Reload crop dropdown
    cropSelect.innerHTML = "";

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = text.selectCrop;
    cropSelect.appendChild(defaultOption);

    for (let crop in cropsData) {
        const option = document.createElement("option");
        option.value = crop;
        option.textContent = crop;
        cropSelect.appendChild(option);
    }

    resultDiv.innerHTML = "";
}

// Initial load
applyLanguage("en");

// Language change
languageSelect.addEventListener("change", function () {
    applyLanguage(this.value);
});

// Crop selection
cropSelect.addEventListener("change", function () {
    const selectedCrop = this.value;
    if (!selectedCrop) {
        resultDiv.innerHTML = "";
        return;
    }

    const labels = languageData[currentLang];
    const cropDetails = cropsData[selectedCrop];

    let html = `<h2>${selectedCrop}</h2>`;

cropDetails.forEach(item => {

    let imagesHTML = "";

    // If multiple images exist
    if (item.images && item.images.length > 0) {
        item.images.forEach(img => {
            imagesHTML += `<img src="${img}" class="disease-img">`;
        });
    } 
    // If only single image exists (old data support)
    else if (item.image) {
        imagesHTML = `<img src="${item.image}" class="disease-img">`;
    }

    html += `
        <div class="card">
            <div class="image-gallery">
                ${imagesHTML}
            </div>
            <p><strong>${labels.disease}:</strong> ${item.disease}</p>
            <p><strong>${labels.pesticide}:</strong> ${item.pesticide}</p>
            <p><strong>${labels.quantity}:</strong> ${item.quantity}</p>
            <p><strong>${labels.cost}:</strong> ${item.cost}</p>
            <p><strong>${labels.safety}:</strong> ${item.safety}</p>
        </div>
    `;

});

resultDiv.innerHTML = html;
});







