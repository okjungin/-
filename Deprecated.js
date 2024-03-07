// function setDetail_CLASSNAME (element, className) {
//     var krToEn = 'aㅁbㅠcㅊdㅇeㄷfㄹgㅎhㅗiㅑjㅓkㅏlㅣmㅡnㅜoㅐpㅔqㅂrㄱsㄴtㅅuㅕvㅍxㅌyㅛwㅈzㅋQㅃWㅉEㄸRㄲTOㅒPㅖ0123456789'
//     for(let w=0; w<className.length; w++) {
//         if(krToEn.indexOf(className[w])>=krToEn.length - 10) {  // 숫자면 
//             if(w==0) { 
//                 className = '_'.repeat(Number(className[w])) + className.slice(1)
//             }
//             continue 
//         }
//         else {
//             if(krToEn.indexOf(className[w])%2 == 0) {   //만약 영문입력이면 
//                 continue 
//             }
//             else {  // 한글 입력이면 -> 대응되는 영문으로 변환
//                 className = className.slice(0, w) 
//                 + krToEn[krToEn.indexOf(className[w]) - 1] 
//                 + className.slice(w+1, className.length - w - 1)
//             }
//         }
//     }
//     element.className = className
//     console.log(className)
// }
