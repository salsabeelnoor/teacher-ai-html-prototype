const selectBtn = document.getElementById('select-btn');
// const selectCatText = document.getElementById('select-cat-text');
const infoBtn = document.getElementById('info-btn');
const description = document.getElementById('description-box');
const languageMaterial = document.getElementById('language-material');

selectBtn.addEventListener('click', () => {
    languageMaterial.classList.toggle('d-none');
    description.classList.add('d-none');
})
infoBtn.addEventListener('click', () => {
    description.classList.toggle('d-none');
    languageMaterial.classList.add('d-none');
})