export class Section {
    constructor(myDiv) {
        this.element = myDiv 
        const element = this.element    // 초기 undefined 상태 
        this.width = element === undefined ? 100 : (element.style.width.split('%')[0] || 100)
        this.height = element === undefined ? 0 : (element.style.height.split('%')[0] || 20)
        this.backgroundColor = element === undefined ? 'white' : (element.style.backgroundColor || 'white')
        this.borderWidth = element === undefined ? 2 : (element.style.borderWidth.split('px')[0] || 2)
        this.borderColor = element === undefined ? 'silver' : (element.style.borderColor || 'silver')
        this.borderRadius = element === undefined ? 0 : (element.style.borderRadius.split('px')[0] || 0)
        this.CB_I_WP = element === undefined ? 0 : (element.dataset.CB_I_WP || 0)
        this.widthPosition = element === undefined ? 0 : (element.style.left.split('%')[0] || 0)
        this.heightPosition =  element === undefined ? 0 : (element.style.top.split('%')[0] || 0)
        this.innerText = element === undefined ? '' : (element.innerText || '') 

        this.setWidth = (width) => {
            this.width = width 
            element.style.width = this.width + '%'
        }
        
        this.setHeight = (height) => {
            this.height = height 
            element.style.height = this.height + '%'
        }
        
        this.setBackgroundColor = (backgroundColor) => {
            this.backgroundColor = backgroundColor
            element.style.backgroundColor = this.backgroundColor
        }
        
        this.setBorder = (borderWidth, borderType, borderColor, borderRadius) => {
            this.borderWidth = borderWidth
            this.borderType = borderType 
            this.borderColor = borderColor 
            this.borderRadius = borderRadius 
            element.style.border = this.borderWidth + 'px ' + this.borderType + ' ' + this.borderColor
            element.style.borderRadius = this.borderRadius + 'px'
        }
        
        this.setCB_I_WP = (index) => {  // 체크박스 뭐 체크했는지 저장 
            this.CB_I_WP = index; 
            element.dataset.CB_I_WP = this.CB_I_WP;
        }
        
        this.setPosition = (widthPosition, heightPosition) => {
            this.widthPosition = widthPosition 
            this.heightPosition = heightPosition 
            element.style.position = 'absolute';
            element.style.left = this.widthPosition + '%'
            element.style.top = this.heightPosition + '%'

        }
        
        this.setInnerText = (innerText) => {
            this.innerText = innerText 
            element.innerText = this.innerText 
            element.style.textAlign = 'left'
            element.style.fontSize = '24px'
        }
    }
}