
function handleDomLoad() {
  const messageDiv = document.createElement("div");
  messageDiv.innerText = "DOM load success";
  document.body.appendChild(messageDiv);
}

document.addEventListener("DOMContentLoaded", handleDomLoad);
