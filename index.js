var LOL = prompt("Whats is your name?");
var answer = prompt(`So, rate Umar's presentation on a scale of 1 to 10 ${LOL}?`);

if (answer >= 9) {
    alert(`I appreciate your opinion ${LOL})`)
} else {
    alert(`OK ${LOL}, but do not forget that i'm a vindictive man...)`)
}


document.querySelector( "#retrobg-sun" ).onclick = () => {
    document.querySelector( "#retrobg" ).classList.toggle( "retrobg-shutdown" );
};