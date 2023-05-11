//Gmail
const GmailInput = document.querySelector("#GmailInput")
const GmailCheck = document.querySelector("#GmailCheck")
const GmailResult = document.querySelector(".GmailResult")

const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

GmailCheck.onclick = () => {
    if (regExp.test(GmailInput.value)) {
        GmailResult.innerHTML = 'excellent'
        GmailResult.style.color = 'blue'
    }else {
        GmailResult.innerHTML = 'not good'
        GmailResult.style.color = 'black'
    }
}

//dz-2
let counter = 0
const mini = document.querySelector(".mini_block")
const max = document.querySelector(".main_block")
max.addEventListener("click",rev=()=>{
    if(counter <= 450) {
      setTimeout(()=>{
        mini.style.left = `${counter}px`
        counter += 50
        rev()}
    ,100)}
  }
)

