const btn = document.querySelector("#emojies");

const emojis = [
  "😆",
  "😅",
  "🤣",
  "😂",
  "😀",
  "🤑",
  "🤨",
  "🙂",
  "😊",
  "😗",
  "😛",
  "😏",
  "🤥",
  "😴",
  "🥺",
  "😧",
  "😇",
  "😳",
  "🙃",
  "🥴",
  "🧐",
  "🤨",
  "😒",
  "🤔",
  "🤭",
  "🥰",
  "🤐",
  "👀",
  "🤔",
  "🤪",
  "🥲",
  "😃",
  "😁",
  "😬",
];

btn.addEventListener("mouseover",()=>{
    btn.innerHTML = emojis[Math.floor(Math.random() * emojis.length)]
})