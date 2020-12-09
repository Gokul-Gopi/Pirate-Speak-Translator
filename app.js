let input = document.querySelector('.input');
let output = document.querySelector('.output');
let translateBtn = document.querySelector('.trans');
let aboutBtn = document.querySelector('.abt');
let closeBtn = document.querySelector('.close-btn');

let serverURL = 'https://api.funtranslations.com/translate/pirate.json';

function translate(input) {
    return serverURL + '?' + 'text=' + input;
}

function errorHandler(error) {
    alert('Server must be down, Try again after sometime')
}

translateBtn.addEventListener('click', function () {
    fetch(translate(input.value))
        .then(response => response.json())
        .then(json => {
            let pirateSaid = json.contents.translated;
            output.innerText = pirateSaid;
        }).catch(errorHandler);

})

aboutBtn.addEventListener('click', function () {
    document.querySelector('.about-container').style.display = 'block';
})

closeBtn.addEventListener('click', function () {
    document.querySelector('.about-container').style.display = 'none';
})

