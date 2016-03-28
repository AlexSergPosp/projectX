function run() {
    var xhr = new XMLHttpRequest();
    write(xhr.readyState);
    xhr.open('Get','../localhost/8080/digits', true);
    
    xhr.onreadystatechange = function () {
        write(xhr.readyState + " получено символов " + xhr.responseText.length);
    };
    xhr.send();
}
function write() {  
    var li = log.appendChild(document.createElement('li'));
}

document.getElementById('timerButton').onclick = run;