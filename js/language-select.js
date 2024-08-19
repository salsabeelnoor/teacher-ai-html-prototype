const selectBtn = document.getElementById('select-btn');
const infoBtn = document.getElementById('info-btn');
const description = document.getElementById('description-box');
const languageMaterial = document.getElementById('language-material');
const languageOutput = document.getElementById('language-output');

const startBtn = document.getElementById('start-btn');
const startCircle = document.querySelectorAll('.circle');
const assessmentBtn = document.getElementById('assessment-btn');

const startBtn2 = document.getElementById('start-btn2');
const assessmentBtn2 = document.getElementById('assessment-btn2');

console.log(startCircle)
selectBtn.addEventListener('click', () => {
    languageMaterial.classList.toggle('d-none');
    description.classList.add('d-none');
    assessmentBtn.classList.toggle('d-none');
    if(screen.width >= 991){
        assessmentBtn2.classList.toggle('d-none');
    }
})
infoBtn.addEventListener('click', () => {
    description.classList.toggle('d-none');
    languageMaterial.classList.add('d-none');
})

startBtn.addEventListener('click', () => {
    startCircle[1].classList.toggle('circle--green');
    languageOutput.classList.toggle('d-none');
    if(startBtn.hasAttribute("disabled")){
        startBtn.removeAttribute('disabled')
    }
    else{
        startBtn.setAttribute('disabled', '')
    }
})
startBtn2.addEventListener('click', () => {
    startCircle[0].classList.toggle('circle--green');
    languageOutput.classList.toggle('d-none');
    if(startBtn2.hasAttribute("disabled")){
        startBtn2.removeAttribute('disabled')
    }
    else{
        startBtn2.setAttribute('disabled', '')
    }
})