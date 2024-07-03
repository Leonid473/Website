var count = 0;
document.getElementById("myButton").onclick = function() {
    count++;
    if (count % 2 == 0) {
        document.getElementById("demo").innerHTML = "";
    }
    else {
        var img = document.createElement("img");
        img.src = "https://watcher.guru/assets/img/branding/logo_circle/logo.svg?h=5404e978d75739446190437c186347b1";
        document.getElementById("demo").appendChild(img);
    }
}