const selectBtn = document.getElementById('select-btn');
// const selectCatText = document.getElementById('select-cat-text');
const infoBtn = document.getElementById('info-btn');
const description = document.getElementById('description-box');
const languageMaterial = document.getElementById('language-material');
const languageOutput = document.getElementById('language-output');
const startBtn = document.getElementById('start-btn');
const startCircle = document.querySelector('.circle');
console.log(startCircle)
selectBtn.addEventListener('click', () => {
    languageMaterial.classList.toggle('d-none');
    description.classList.add('d-none');
})
infoBtn.addEventListener('click', () => {
    description.classList.toggle('d-none');
    languageMaterial.classList.add('d-none');
})
startBtn.addEventListener('click', () => {
    startCircle.classList.toggle('circle--green');
    languageOutput.classList.toggle('d-none');
    if(startBtn.hasAttribute("disabled")){
        startBtn.removeAttribute('disabled')
    }
    else{
        startBtn.setAttribute('disabled', '')
    }
})