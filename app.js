const closeFormBtn = document.querySelector(".close-form")
const form = document.querySelector(".form-background")
const openForm = document.querySelector(".add-book")

closeFormBtn.addEventListener('click', function(){
    form.classList.toggle("hide")
})

openForm.addEventListener('click', function(){
    form.classList.toggle("hide")
})