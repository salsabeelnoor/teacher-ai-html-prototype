const selectBtn = document.getElementById('select-btn');
const selectCatText = document.getElementById('select-cat-text');
const languageMaterial = document.getElementById('language-material');

selectBtn.addEventListener('click', () => {
    selectCatText.classList.toggle('d-none');
    languageMaterial.classList.toggle('d-none');
})