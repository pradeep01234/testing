const chatButton = document.querySelector('.chatbox__button');
const chatContent = document.querySelector('.chatbox__support');
const icons = {
    isClicked: '<img src="./images/icons/chatbox-icon.svg" />',
    isNotClicked: '<img src="./images/icons/chatbox-icon.svg" />'
}
const chatbox = new InteractiveChatbox(chatButton, chatContent, icons);
chatbox.display();
chatbox.toggleIcon(false, chatButton);

const aihelp =async ()=>{
    const query = document.getElementById("userInput").value;
    document.getElementById("userInput").value = "";
    const element = document.querySelector(".chat-box");
    var userInput = document.createElement('div');
    userInput.className = "messages__item messages__item--operator";
    userInput.textContent=`${query}`;
    element.appendChild(userInput);
    var div = document.createElement('div');
    div.className = "messages__item messages__item--visitor";
    let headersList = {
        "Content-Type": "application/json"
       }
    let bodyContent = JSON.stringify({
        "question":`${query}`
     });
     
     let response = await fetch("https://studentlms.onrender.com/aihelp", { 
       method: "POST",
       body: bodyContent,
       headers: headersList
     });
     
     
     let data = await response.text();
     console.log(data);
     div.textContent = `${data}`;
     
     element.appendChild(div);
     const speak = new SpeechSynthesisUtterance(data);
     speechSynthesis.speak(speak)
}