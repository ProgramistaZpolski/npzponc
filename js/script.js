let trudnosc = 55;
let lvl = 1;
var correctAns;
var coundown;
var nrPytania;
function startGame() {
    let gameBackgroundMusic = document.getElementById('gameAudio');
    gameBackgroundMusic.play();
    document.getElementById('hideThisTrash').style.display = "none";
    document.getElementById('hideThisTrash2').style.display = "none";
    document.getElementById('game').style.display = "block";
    nrPytania = 0;
    createCountdown(trudnosc)
}
const slowaLvl13 = [
    "ósmy",
    "Ósemka",
    "Ołówek",
    "Wróżka",
    "górami",
    "czarów",
    "Żuczek",
    "Zasuwka",
    "Kwiatów",
    "gżegżółka",
    "chodź",
    "dinozaur"
]
const brakujaceSlowaLvl13 = [
    "_smy",
    "_semka",
    "_ł_wek",
    "Wr__ka",
    "g_rami",
    "__arów",
    "__czek",
    "Zas_wka",
    "kwiat_w",
    "g_eg_ółka",
    "chod__",
    "dinoza_r"
]
const odpowiedziNieprawidloweSlowaLvl13 = [
    "Usmy",
    "Usemka",
    "Ołuwek",
    "Wrószka",
    "górzami",
    "szarów",
    "Rzuczek",
    "Zasówka",
    "Kwiatuw",
    "grzegrzółka",
    "choć",
    "dinozaór"
]
function createCountdown(naIle) {
    document.getElementById('pytankoId').innerText = "Pytanie " + nrPytania + ", Level " + lvl;
    nrPytania++;
    if (lvl <= 3) {
        const random = Math.floor(Math.random() * slowaLvl13.length);
        console.log(random, slowaLvl13[random]);
        document.getElementById('sltxt').innerText = brakujaceSlowaLvl13[random];
        if (Math.floor((Math.random() * 10) + 1) > 5) {
            document.getElementById('opcja1').innerText = odpowiedziNieprawidloweSlowaLvl13[random];
            document.getElementById('opcja2').innerText = slowaLvl13[random];
            console.log("opcja2")
            correctAns = 2;
        }
        else {
            document.getElementById('opcja1').innerText = slowaLvl13[random];
            document.getElementById('opcja2').innerText = odpowiedziNieprawidloweSlowaLvl13[random];
            console.log("opcja1")
            correctAns = 1;
        }
    }
    let ileZostalo = naIle;
    let totalyCzas = naIle;
    countdown = setInterval(function () {
        ileZostalo--; 
        let seconds = ileZostalo;
        document.getElementById("countdown").value = Matt.floor((seconds / totalyCzas) * 100)
       

        if (seconds <= 0) {
            koniecGry();
        }
    }, 100);
}
function myStopFunction() {
    clearInterval(countdown);
    trudnosc -= 2;
    if (nrPytania == 6){
        lvl++;     
        nrPytania = 0;
        getLvlSpeed(lvl)
        if(lvl == 4){
            alert("Koniec gry");
            document.getElementById('game').style.display = "none";
        }
    }
    if (trudnosc >= 6) {
        createCountdown(trudnosc);
    }
}
function acceptResults(wButton) {
    if (wButton == 1) {
        if (correctAns == 1){
            console.log("Dobrze")
            myStopFunction();
        }
        else{
            console.log("Źle")
            koniecGry();
        }
    }
    else if (wButton == 2){
        if (correctAns == 2){
            console.log("Dobrze")
            myStopFunction();
        }
        else{
            console.log("Źle")
            koniecGry();
        }
    }
}
function koniecGry(){
    clearInterval(countdown);
    document.getElementById('failGame').style.display = "block";
    document.getElementById('game').style.display = "none";
    let loseGameBackgroundMusic = document.getElementById('loseGameAudio');
    loseGameBackgroundMusic.play();
    let gameBackgroundMusic = document.getElementById('gameAudio');
    gameBackgroundMusic.pause();
    nrPytania = 0;
    trudnosc = getLvlSpeed(lvl)
}
function retryGame(){
    let loseGameBackgroundMusic = document.getElementById('loseGameAudio');
    loseGameBackgroundMusic.pause();
    let gameBackgroundMusic = document.getElementById('gameAudio');
    gameBackgroundMusic.play();
    document.getElementById('failGame').style.display = "none";
    document.getElementById('game').style.display = "block";
    createCountdown(trudnosc);
}
function getLvlSpeed(lvler){
    if(lvler == 1){
        return 55;
    }
    else if(lvler == 2){
        return 45;
    }
    else if(lvler == 3){
        return 40;
    }      
}
