const fs = require('fs')
const path = require('path')

const defaultHTML = `
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Web</title>
    <style>
        * { 
           margin : 0;
           padding : 0;
           box-sizing : border-box; 
        }

        .default_el_parent {
            padding : 20px;
        }
    </style>
</head>
<script type="module">
    // setTimeout(() => {
        // document.querySelector('.click_to_remove')?.addEventListener('click', e => {
        //     e.stopPropagation();
        //     const documentBody = document.querySelector('.default_el_parent').parentNode
        //     documentBody.removeChild(documentBody.children[0])
        // })
    // }, 5)
</script>
<body>

    <div class="default_el_parent" data-E_E="true">
        <h1 class="design_my_web">나의 웹사이트를 디자인하세요.</h1><br/>
        <p class="just_order">코딩몽에게 명령만 내리면 코딩은 코딩몽이 알아서 해줍니다.</p><br/>
        <p class="click_to_remove">이 텍스트를 클릭하면 사라집니다.</p>
    </div>
</body>
</html>
`

const filePath = path.join(__dirname, 'new_HTML.html')

fs.writeFileSync(filePath, defaultHTML)

module.exports = filePath