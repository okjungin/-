// export const myWeb = document.getElementById('my_web')
export var myWeb, myWebDocument, traceLogHTML;
import { renewIFrame, section } from './cc_section.js'

document.addEventListener('DOMContentLoaded', () => {
    myWeb = document.getElementById('my_web')
    myWeb.contentWindow.document.documentElement == null
    ? setTimeout(() => { initialize() }, 5)
    : initialize() 
});

// 기본 텍스트 제거
function initialize() { 
        myWebDocument = myWeb.contentWindow.document
        myWebDocument.querySelector('.click_to_remove')?.addEventListener('click', e => {
            // e.stopPropagation();
            const documentBody = myWebDocument.querySelector('.default_el_parent').parentNode
            documentBody.removeChild(documentBody.children[0]);
            update();
        })
        // HTML 로그 추적 
        traceLogHTML = [myWebDocument.documentElement.outerHTML];
}

// 되돌리기 
export function goBack() {
    axios.get('/goback')
    .then(res => {
        const newMyWeb = document.createElement('iframe');
        newMyWeb.src = '/userCreateWeb'
        newMyWeb.id = 'my_web'
        const myWebWrapper = document.querySelector('.my_web_wrapper')
        myWebWrapper.replaceChild(newMyWeb, myWebWrapper.children[0]) //myWeb.src한 경우 동적이벤트(addEventListener)가 반영되는지 확실하지 않음.
        res.data == 'alert' 
        ? alert('더 이상 되돌리기 할 수 없습니다.')
        : console.log('서버 응답 : ', res.data)
        // newMyWeb.contentWindow.location.reload()
        window.location.reload()
    })
    .catch(err => {
        console.error('오류 발생 :' , err)
    })
}

// 저장
export function update() {
    const newHTML = myWebDocument.documentElement.outerHTML
    traceLogHTML.push(newHTML)
    traceLogHTML.forEach(html => JSON.stringify(html))
    axios.post('/update', { 
        traceLogHTML,
        updatedHTML : JSON.stringify(newHTML) 
    })
    .then(res => {
        const newMyWeb = document.createElement('iframe');
        newMyWeb.src = '/userCreateWeb' 
        newMyWeb.id = 'my_web'
        const myWebWrapper = document.querySelector('.my_web_wrapper')
        myWebWrapper.replaceChild(newMyWeb, myWebWrapper.children[0])
        // newMyWeb.contentWindow.location.reload()
        window.location.reload()
    })
    .catch(err => {
        console.error('오류 발생:', err)
    })
}

