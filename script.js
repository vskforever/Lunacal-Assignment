const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const imageUploadInput = document.getElementById('image-upload');
const addImageButton = document.getElementById('add-image-btn');
const galleryImages = document.querySelector('.gallery-images');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

addImageButton.addEventListener('click', () => {
    imageUploadInput.click();  
});

imageUploadInput.addEventListener('change', (event) => {
    const file = event.target.files[0];  

    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const newImage = document.createElement('div');
            newImage.classList.add('gallery-item');
            newImage.style.backgroundImage = `url(${e.target.result})`;  

            galleryImages.appendChild(newImage);  
        };

        reader.readAsDataURL(file);  
    }
});

const prevBtn = document.querySelector('.gallery-prev');
const nextBtn = document.querySelector('.gallery-next');

prevBtn.addEventListener('click', () => {
});

nextBtn.addEventListener('click', () => {
});
