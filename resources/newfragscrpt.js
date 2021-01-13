const PLAYER = "player";
const IDENTIFIER = "identifier";
const WEAPON = "weapon";
const AGAINST = "against";
const SCORE = "score";
const EVENT = "event";
const MAP = "map";
const CREATE_FRAG = "/create-frag";

function NewFrag()
{

    

    var httpRequest = new XMLHttpRequest();

    var inputPlayer = document.getElementById(PLAYER).value;
    var inputIdentifier = document.getElementById(IDENTIFIER).value;
    var inputWeapon = document.getElementById(WEAPON).value;
    var inputAgainst = document.getElementById(AGAINST).value;
    var inputScore = document.getElementById(SCORE).value;
    var inputEvent = document.getElementById(EVENT).value;
    var inputMap = document.getElementById(MAP).value;
    var payload = JSON.stringify(
        {
            "Player": inputPlayer,
            "Identifier": inputIdentifier,
            "Weapon": inputWeapon,
            "Against": inputAgainst,
            "Score": inputScore,
            "Event": inputEvent,
            "Map": inputMap,
        }
    );
    var btn = document.createElement("p");
    btn.innerHTML = payload;
    document.body.appendChild(btn);
    
    httpRequest.addEventListener("load", handleResponse);

    httpRequest.open('POST', CREATE_FRAG);
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    httpRequest.send(payload);
    
}

function handleResponse(response) 
{
    var responseText = response.target.responseText;
    document.getElementById('message').innerHTML = responseText;
}