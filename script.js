let paragrafo = document.getElementById('corpo');

function sumir() {
    document.getElementById('espaco-foto').innerHTML = ""
    document.getElementById('olho-off').innerHTML = '<img src="/img/eye-off.png" id="" onclick="aparecer()">'

}

function aparecer(){
    document.getElementById('espaco-foto').innerHTML = '<div  id="imagem" >                <img src="/img/eye.png" id="vizualp" onclick="sumir()">                    <img src="/img/monkey.jpg" id="foto"> </div>'
    document.getElementById('olho-off').innerHTML = ''
}
   
    // if (paragrafo.innerText === "Corpo do texto, esse é apenas um exemplo simples de legenda para o texto no card, quando precisar trocar o texto, basta trocar.") {
    //     paragrafo.innerText = "";  // 
    //     document.getElementById('vizualp').src = "/img/eye-off.png";  
    //     document.getElementById('espaco-foto').innerHTML = ""
        // document.getElementById('imagem').classList.add('sumiu');

    // } else {
    //     paragrafo.innerText = "Corpo do texto, esse é apenas um exemplo simples de legenda para o texto no card, quando precisar trocar o texto, basta trocar.";  // Define um novo texto para o parágrafo
    //     document.getElementById('vizualp').src = "/img/eye.png"; 
    //     document.getElementById('espaco-foto').innerHTML = '<img src="/img/monkey.jpg " id="foto">'
    // }




















    const ligarSeta = () => {
    document.getElementById('seta').addEventListener('mouseover', arrow);
    document.getElementById('seta').src = "/img/arrow.png"
};
    const desligarSeta = () => {
    document.getElementById('seta').removeEventListener('mouseover', arrow);
    document.getElementById('seta').src = ""
};
    function arrow(){
        document.getElementById('seta').src = "/img/arrow.png"

    }
