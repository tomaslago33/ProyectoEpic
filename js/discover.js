const games = [
    {
        title: "Call of Duty: Black Ops 6",
        description: "Acción intensa en la nueva entrega de COD.",
        image: "img/discover/codbo6.jpeg"
    },
    {
        title: "Juego 1",
        description: "Un juego épico de aventuras.",
        image: "img/discover/1.jpg"
    },
    {
        title: "Sonic",
        description: "Velocidad y acción con el erizo azul.",
        image: "img/discover/sonic.jpeg"
    }
];
let currentIndex = 0;

const background = document.getElementById("background");
const title = document.getElementById("title");
const description = document.getElementById("description");
const gameList = document.getElementById("gameList");

function updateSlide(index) {
    const game = games[index];
    background.style.backgroundImage = `url('${game.image}')`;
    title.textContent = game.title;
    description.textContent = game.description;

    document.querySelectorAll('.game-item').forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });

    currentIndex = index;
}

function createGameList() {
    games.forEach((game, index) => {
        const div = document.createElement("div");
        div.className = "game-item";
        div.textContent = game.title;
        div.addEventListener("click", () => {
            updateSlide(index);
        });
        gameList.appendChild(div);
    });
}

createGameList();
updateSlide(0);

// Cambio automático
setInterval(() => {
    let nextIndex = (currentIndex + 1) % games.length;
    updateSlide(nextIndex);
}, 7000); // cada 7 segundos