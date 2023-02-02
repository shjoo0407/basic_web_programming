// title에 배경 입히기, 마우스 이벤트
function over(obj){
    obj.style.backgroundColor = 'lightgreen';
}

function out(obj){
    obj.style.backgroundColor = 'white';
}

// 페이지 이동 질문
function query(){
    let ret = confirm("예약 페이지로 이동하시겠습니까?");
    return ret;
}

// 키 이벤트, 글자수 보여주기.
document.addEventListener("DOMContentLoaded",()=>{
    const textarea = document.querySelector("textarea");
    const h2 = document.querySelector("#wordsNum");

    textarea.addEventListener("keyup",()=>{
        const length = textarea.value.length;
        h2.textContent = `입력 글자수 : ${length}`
    })
})

// 폼 요소에 이벤트 활용하기
document.addEventListener('DOMContentLoaded',()=>{
    const oneOrRound = document.querySelector("#oneOrRound")
    const radios = document.querySelectorAll("[name=booking]")

    radios.forEach((radio)=>{
        radio.addEventListener('change',(event) =>{
            const current = event.currentTarget
            if (current.checked){
                oneOrRound.textContent = `여행을 ${current.value}으로 가시는 군요! 행복한 여행이 되기를!`
            }
        })
    })
})
// DOM 요소 추가 삭제를 통해 명소 메모하기.
document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#togo')
    const togoList = document.querySelector('#togo-list')
    const addButton = document.querySelector('#add-button')

    let keyCount = 0

    const addTogo = () => {
        if (input.value.trim() === '') {
            alert('가고 싶은 명소를 입력해주세요.')
            return
        }
        const item = document.createElement('div')
        const checkbox = document.createElement('input')
        const text = document.createElement('span')
        const button = document.createElement('button')

        const key = keyCount
        keyCount += 1

        item.setAttribute('data-key', key)
        item.appendChild(checkbox)
        item.appendChild(text)
        item.appendChild(button)
        togoList.appendChild(item)

        checkbox.type = 'checkbox'
        checkbox.addEventListener('change', (event) => {
            item.style.textDecoration = event.target.checked ? 'line-through' : ''
        })

        text.textContent = input.value

        button.textContent = '제거하기'
        button.addEventListener('click', () => {
            removeTogo(key)
        })
        input.value = ''
    }
    const removeTogo = (key) => {
        const item = document.querySelector(`[data-key="${key}"]`)
        togoList.removeChild(item)
    }
    addButton.addEventListener('click', addTogo)
    input.addEventListener('keyup', (event) => {
        const ENTER = 13
        if (event.keyCode === ENTER) {
            addTogo()
        }
    })
})




