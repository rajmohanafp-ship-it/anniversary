document.getElementById("startBtn").onclick=function(){

    document.getElementById("welcome").style.display="none";
    
    document.getElementById("bgmusic").play();
    
    type();
    
    }
const text = `C:\\Users\\Raj> npm start love

Loading Memories...
████████████████████ 100%

Developer : Raj ❤️

Target : Sneha ❤️

Connection : Successful ✔

Initializing Forever...

while(alive){

   Love++;
   Care++;
   Respect++;
   Happiness++;

}

Compilation Successful ❤️

Opening Love Story...
`;

let i = 0;
const typing = document.getElementById("typing");

function type() {
    if (i < text.length) {
        typing.textContent += text.charAt(i);
        i++;
        setTimeout(type, 35);
    } else {
        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
            document.getElementById("main").style.display = "flex";
        }, 800);
    }
}

type();

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {

    document.getElementById("letter").style.display = "block";
    document.getElementById("bgmusic").play();

    createHearts();
    fireworks();

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });

});

function createHearts() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * window.innerWidth + "px";

        heart.style.fontSize = (20 + Math.random() * 25) + "px";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 6000);

    }, 250);

}
function fireworks(){

    for(let i=0;i<100;i++){

        setTimeout(()=>{

            const heart=document.createElement("div");

            heart.innerHTML="💖";

            heart.className="heart";

            heart.style.left=Math.random()*window.innerWidth+"px";

            heart.style.fontSize=(20+Math.random()*40)+"px";

            document.body.appendChild(heart);

            setTimeout(()=>{

                heart.remove();

            },5000);

        },i*40);

    }

}
