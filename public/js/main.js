const hiddenText = document.querySelectorAll('.hidden_text')
const plusIcon = document.querySelectorAll('.plus_icon')

plusIcon.forEach((el, index) => {
    el.onclick = () => {
        el.innerText == 'add_circle' 
        ? el.innerText = 'do_not_disturb_on' 
        : el.innerText = 'add_circle'
        hiddenText[index].classList.toggle('on')
    }
})

