const counter = document.querySelector(".counter-number");
async function updateCounter(){
    let response = await fetch("https://z4b3a7w6lttjihzcr2ezkrlpkq0pmftx.lambda-url.eu-west-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ' Views  : ' + data;
}
updateCounter();