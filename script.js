document.getElementById("openMessage").addEventListener("click", function() {
    document.getElementById("messageBox").classList.remove("hidden");
    this.style.display = "none";
});

document.getElementById("replyBtn").addEventListener("click", function() {
    document.getElementById("replyOptions").classList.remove("hidden");
    this.style.display = "none";
});

document.querySelectorAll(".choice").forEach(button => {
    button.addEventListener("click", function() {
        let replyBox = document.getElementById("finalReply");
        replyBox.classList.remove("hidden");

        if (this.dataset.reply === "aku_suka") {
            replyBox.innerHTML = "<h2>💖 Aku juga suka kamu 💖</h2>";
        } else if (this.dataset.reply === "aku_cekal") {
            replyBox.innerHTML = "<h2>💕 Aku sukaa cekaliiiii💕💕💘</h2>";
        }

        document.getElementById("replyOptions").style.display = "none";
    });
});
