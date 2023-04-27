function spawnEmoji(emoji) {
    let div = document.createElement("div");
    div.classList.add("emoji");
    div.innerHTML = emoji;
    document.body.appendChild(div);
    setTimeout(() => {
        div.remove();
    }, 1000);
}