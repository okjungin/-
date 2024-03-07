// 섹션 생성 
import { myWeb, myWebDocument, update, goBack } from './save_&_goback.js'
import { Section } from './f_section.js'

// '섹션 생성' 버튼 및 화면 
const createSectionBtn = document.getElementById('create_section')  // 인터페이스의 "섹션 생성" 버튼
// 가로 너비, 세로 높이 
const sectionInputWidth = document.querySelector('input.input_width')
const sectionInputHeight = document.querySelector('input.input_height')
// 배경색
const sectionInputBackgroundColor = document.querySelector('input.input_backgroundColor')
// 테두리
const sectionInputBorderWidth = document.querySelector('input.input_border_width')
const sectionInputBorderColor = document.querySelector('input.input_border_color')
const sectionInputBorderRadius = document.querySelector('input.input_border_radius')
// 섹션의 위치
const sectionCbWidthPosition = document.querySelectorAll('input.cb_widthPosition')
const sectionCbWidthPositionCustom = document.querySelector('input.cb_widthPosition.custom')
const sectionInputWidthPosition = document.querySelector('input.input_widthPosition')
const sectionInputHeightPosition = document.querySelector('input.input_heightPosition')
// 내부텍스트
const sectionInputInnerText = document.querySelector('input.input_innerText')
// 하단 UI
const defaultUI = document.querySelector('.interface.default')
const sectionUI = document.querySelector('.interface.section') 

export var section = new Section();

createSectionBtn.addEventListener('click', () => { menuOpen('create') })

sectionInputWidth.addEventListener('change', e => { 
    section.setWidth(e.target.value)
})
sectionInputHeight.addEventListener('change', e => { 
    section.setHeight(e.target.value)
})
sectionInputBackgroundColor.addEventListener('change', e => { 
    section.setBackgroundColor(e.target.value)
})
sectionInputBorderWidth.addEventListener('change', e => { 
    section.setBorder(e.target.value, 'solid', section.borderColor, section.borderRadius)
})
sectionInputBorderColor.addEventListener('change', e => {
    section.setBorder(section.borderWidth, 'solid', e.target.value, section.borderRadius)
})
sectionInputBorderRadius.addEventListener('change', e => {
    section.setBorder(section.borderWidth, 'solid', section.borderColor, e.target.value)
})
sectionCbWidthPosition.forEach((cb, index) => cb.addEventListener('change', e => {
    sectionCbWidthPosition.forEach((cb2, index2) => { 
        (index2 == index) ? cb.checked = true : cb2.checked = false
    })
    switch(index % 4) {
        case 0 : 
            section.setPosition(0, section.heightPosition)
            section.setCB_I_WP(0)
            break;
        case 1 :
            section.setPosition((100 - section.width) / 2, section.heightPosition)
            section.setCB_I_WP(1)
            break; 
        case 2 : 
            section.setPosition(100 - section.width, section.heightPosition)
            section.setCB_I_WP(2)
            break; 
        case 3 : 
            section.setPosition(section.widthPosition, section.heightPosition)
            section.setCB_I_WP(3)
            break; 
        default : 
            break; 
    }
}))
sectionCbWidthPositionCustom.addEventListener('change', e => {
    const customValue = e.target.parentNode.querySelector('.input_widthPosition').value
    section.setPosition(customValue, section.heightPosition)
})
sectionInputWidthPosition.addEventListener('change', e => {
    sectionCbWidthPosition.forEach((cb, index) => {
        index % 4 == 3 ? cb.checked = true : cb.checked = false 
    })
    section.setPosition(e.target.value, section.heightPosition)
})
sectionInputHeightPosition.addEventListener('change', e => {
    section.setPosition(section.widthPosition, e.target.value)
})
sectionInputInnerText.addEventListener('change', e => {
    section.setInnerText(e.target.value)
})

// 섹션 생성/취소 버튼
const sectionCreateBtn = document.querySelector('button.create_btn') // 섹션 디테일 창의 "생성" 버튼
const sectionCancelBtn = document.querySelector('button.cancel_btn') // 섹션 디테일 창의 "취소" 버튼 

sectionCreateBtn.addEventListener('click', () => {
    menuClose('create');
    update();
})

sectionCancelBtn.addEventListener('click', () => {
    menuClose('create');
    const body = section.element.parentNode 
    body.removeChild(section.element)
})


// 섹션 생성 후의 설정(변경)
var createdSections;

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        createdSections = myWebDocument.querySelectorAll('div')
        createdSections.forEach(cs => {
            cs.addEventListener('click', e => { 
                section = new Section(e.target)
                !e.target.parentNode.dataset.e_e ? menuOpen('change') : null  
            })  
        })
    }, 20)
})

function menuOpen(mode) {
    defaultUI.classList.add('off')
    sectionUI.classList.add('on')
    sectionUI.classList.add(mode)
    sectionUI.querySelectorAll('.btns_wrapper').forEach(bw => {
        bw.classList.contains(mode) ? bw.classList.add('on') : bw.classList.remove('on')
    })
    switch(mode) {
        case 'create' : // section 생성 UI
            var newDiv = document.createElement('div')
            section = new Section(newDiv)
            section.setWidth(100)
            section.setHeight(20)
            section.setBackgroundColor('#FFFFFF')
            section.setBorder(2, 'solid', 'silver', 0)
            section.setPosition(0,0) 
            myWebDocument.body.appendChild(newDiv)
            break;
        case 'change' :  // section 변경 UI
            break;
        default :
            break; 
    }
    sectionUIInputFill();
}

function sectionUIInputFill() {
    sectionUI.querySelector('input.input_width').value = section.width 
    sectionUI.querySelector('input.input_height').value = section.height
    sectionUI.querySelector('input.input_backgroundColor').value = section.backgroundColor
    sectionUI.querySelector('input.input_border_width').value = section.borderWidth
    sectionUI.querySelector('input.input_border_color').value = section.borderColor
    sectionUI.querySelector('input.input_border_radius').value = section.borderRadius
    sectionUI.querySelectorAll('input.cb_widthPosition').forEach((cb, index) => {
        return index % 4 == section.CB_I_WP ? cb.checked = true : cb.checked = false 
    })
    sectionUI.querySelector('input.input_widthPosition').value = section.widthPosition
    sectionUI.querySelector('input.input_heightPosition').value = section.heightPosition
    sectionUI.querySelector('input.input_innerText').value = section.innerText
}

const sectionChangeUIBtns = [document.querySelector('button.back_btn'), 
                             document.querySelector('button.change_btn'), 
                             document.querySelector('button.delete_btn')];

sectionChangeUIBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        index == sectionChangeUIBtns.length - 1 ? 
        section.element.parentNode.removeChild(section.element) : null 
        menuClose('change');
        update();
    })
}) 

function menuClose(mode) {
    defaultUI.classList.remove('off')
    sectionUI.classList.remove('on')
    sectionUI.classList.remove(mode)
    sectionUI.querySelectorAll('btns_wrapper').forEach(bw => {
        bw.classList.contains(mode) ? bw.classList.remove('on') : null 
    })
}

const goBackBtn = document.getElementById('go_back')    // 되돌리기 버튼 
goBackBtn.addEventListener('click', () => { goBack() })