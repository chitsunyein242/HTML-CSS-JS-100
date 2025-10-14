//copyText
const copyText = document.querySelector("textarea[name=copyTxt]")
//finalText
const finalText = document.querySelector("textarea[name=finalTxt]")
//moveBtn
const moveBtn = document.querySelector('.moverBtn');
//CopyBtn
const CopyBtn = document.querySelector('.copyBtn');
//output
const output = document.querySelector('.output');

CopyBtn.addEventListener('click',() =>{
    let temp = copyText.value;
    copyToClipBoard(temp);
});

moveBtn.addEventListener('click',()=>{
    let temp = copyText.value;
    finalText.value = temp;
})

copyText.addEventListener('click',() => this.select())
finalText.addEventListener('click',() => this.select())

function copyToClipBoard(str){
    const outputContainer = document.querySelector('.output-container')
    //crating TextArea
    const textarea = document.createElement('textarea')
    textarea.value = str;
    outputContainer.appendChild(textarea);
    textarea.select();
    document.execCommand('copy')
    outputContainer.removeChild(textarea);
    output.innerHTML = `<h3>Content Copied </h3>`;
    output.classList.add("added")
    setTimeout(()=>{
        output.classList.toggle("added")
        output.textContent = "";
    },2000)
}