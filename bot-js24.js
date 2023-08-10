let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let chatcontainerele = document.getElementById("chatContainer");
let userinputele = document.getElementById("userInput");


let buttonele = document.getElementById("sendMsgBtn");

buttonele.onclick = function() {
    let userinputmatter = userinputele.value;
    let userinputline = document.createElement("p");
    chatcontainerele.appendChild(userinputline);
    userinputline.classList.add("msg-to-chatbot-container", "msg-to-chatbot");
    userinputline.textContent = userinputmatter;
    userinputele.value = "";



    let botinputline = document.createElement("p");
    chatcontainerele.appendChild(botinputline);
    botinputline.classList.add("msg-from-chatbot-container", "msg-from-chatbot");
    if (userinputmatter === "Hello") {
        botinputline.textContent = chatbotMsgList[1];
    } else {
        botinputline.textContent = chatbotMsgList[4];
    }

};