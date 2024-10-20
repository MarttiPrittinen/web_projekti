const steps = [
    {
        title: "Vaihe 1: Valkoinen risti",
        formula: "F R U R' U' F'",
        description: "Aseta valkoiset reunapalat ristin muotoon niin, että keskimmäisten reunapalojen värit ovat kohdallaan. Tämän vaiheen jälkeen sinun pitäisi nähdä valkoinen risti valkoisen puolen päällä.",
        image: "Images/1.JPG"
    },
    {
        title: "Vaihe 2: Valkoiset kulmapalat",
        formula: "R U R' U' R U2 R'",
        description: "Asenna valkoiset kulmat oikeille paikoilleen. Kulmapalat tuodaan oikealle paikalleen yksi kerrallaan. Varmista, että kulmapalojen muut värit vastaavat keskikappaleiden värejä.",
        image: "Images/2.JPG"
    },
    {
        title: "Vaihe 3: Toinen kerros",
        formula: "U R U' R' U' F' U F",
        description: "Valkoinen sivu käännetään alaspäin, ja keskikerroksen reunapalat haetaan paikoilleen. Tämä vaihe vaatii kahden liikeyhdistelmän käyttöä.",
        image: "Images/3.JPG"
    },
    {
        title: "Vaihe 4: Keltainen risti",
        formula: "F R U R' U' F'",
        description: "Aseta keltaiset reunapalat yläpintaan niin, että ne muodostavat keltaisen ristin. Tämä vaihe voi vaatia useita toistoja kaavan kanssa.",
        image: "Images/4.JPG"
    },
    {
        title: "Vaihe 5: Keltaiset reunapalat",
        formula: "R U R' U R U2 R'",
        description: "Asettele keltaiset reunapalat oikeille sivuille, jotta saadaan värit täsmäämään. Jos värit ovat jo kohdallaan, voit siirtyä suoraan seuraavaan vaiheeseen.",
        image: "Images/5.JPG"
    },
    {
        title: "Vaihe 6: Keltaiset kulmapalat oikeille paikoilleen",
        formula: "U R U' L' U R' U' L",
        description: "Siirrä viimeiset palat, eli keltaiset kulmat, oikeille paikoilleen. Käännä ne oikeaan asentoon seuraavassa vaiheessa.",
        image: "Images/6.JPG"
    },
    {
        title: "Vaihe 7: Keltaiset kulmapalat oikeaan asentoon",
        formula: "R U R' U R U2 R'",
        description: "Käännä keltaiset kulmapalat oikeaan asentoon. Varmista, että jokaisen kulman keltaiset värit ovat ylös, ja että ne sopivat myös reunakappaleiden väreihin.",
        image: "Images/7.JPG"
    }
];

class RubiksCubeStep {
    constructor(title, formula, description, image) {
        this.title = title;
        this.formula = formula;
        this.description = description;
        this.image = image;
    }

    display() {
        document.getElementById("step-title").innerText = this.title;
        document.getElementById("step-formula").innerText = "Kaava: " + this.formula;
        document.getElementById("step-description").innerText = this.description;
        const stepImage = document.getElementById("step-image");
        stepImage.src = this.image;
        stepImage.style.display = "block";
    }
}

class RubiksCube {
    constructor(steps) {
        this.steps = steps.map(step => new RubiksCubeStep(step.title, step.formula, step.description, step.image));
        this.timerInterval = null;
        this.elapsedTime = 0; 
    }

    showStep(stepNumber) {
        const step = this.steps[stepNumber - 1];
        step.display();

        if (stepNumber === 7) {
            alert("Onnittelut! Olet ratkaissut Rubikin kuution!");
        }

        this.startTimer();
    }

    startTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }

        this.elapsedTime = 0;
        document.getElementById("timer").innerText = `Kulunut aika: ${this.elapsedTime} sekuntia`; 
        this.timerInterval = setInterval(() => {
            this.elapsedTime++;
            document.getElementById("timer").innerText = `Kulunut aika: ${this.elapsedTime} sekuntia`;
        }, 1000);
    }

    populateFormulas() {
        const tbody = document.getElementById("formula-table-body");
        this.steps.forEach(step => {
            const row = document.createElement("tr");
            row.innerHTML = `<td>${step.title}</td><td>${step.formula}</td>`;
            tbody.appendChild(row);
        });
    }
}

const rubiksCube = new RubiksCube(steps);
rubiksCube.populateFormulas();

const stepContainer = document.getElementById("step-container");
steps.forEach((step, index) => {
    const stepBox = document.createElement("div");
    stepBox.className = "step-box";
    stepBox.innerHTML = `<h3>${step.title}</h3>`;
    stepBox.onclick = () => rubiksCube.showStep(index + 1);
    stepContainer.appendChild(stepBox);
});

async function fetchCurrentTime() {
    try {
        const response = await fetch('http://worldtimeapi.org/api/timezone/Europe/Helsinki');
        const data = await response.json();
        const currentTime = new Date(data.datetime);
        document.getElementById("time-display").innerText = currentTime.toLocaleString();
    } catch (error) {
        console.error("Virhe kellonajan hakemisessa:", error);
    }
}

fetchCurrentTime();

document.getElementById("feedback-form").addEventListener("submit", function (event) {
    event.preventDefault(); 
    alert("Palautteesi on lähetetty, kiitos!");
    this.reset(); 
});

const colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightyellow', 'lightpink', 'lightgray'];
let currentColorIndex = 0;

document.getElementById("change-bg-btn").addEventListener("click", () => {
    // Vaihdetaan taustaväri seuraavaan väriin
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[currentColorIndex]; 
});
