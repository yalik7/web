function topNavUpdate() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function addTopnavButton(pageName, topnav) {
    var button = document.createElement("a");
    if (getCurrentPage() == pageName) {
        button.className = "active";
    } else {
        button.className = "a";
    }
    button.href = "/" + pageName + ".html";
    button.innerHTML = pageName[0].toUpperCase() + pageName.substring(1);
    topnav.appendChild(button);
}

function getCurrentPage() {
    return document.location.href.split("/")[document.location.href.split("/").length - 1].replace(".html", "");
}

function addTopnavHomeButton(topnav) {
    var button = document.createElement("a");
    if (getCurrentPage() == "index") {
        button.className = "active";
    } else {
        button.className = "a";
    }
    button.href = "/index.html";
    button.innerHTML = "Home";
    topnav.appendChild(button);
}

function createTopnav() {
    var body = document.body || document.getElementsByTagName('body')[0];
    var topnav = document.createElement("div");
    topnav.className = "topnav";
    topnav.id = "myTopnav";
    body.insertBefore(topnav, body.childNodes[0])
    addTopnavHomeButton(topnav);
    addTopnavButton("about", topnav);

    var s = document.createElement("a");
    s.href = "javascript:void(0);";
    s.className = "icon";
    s.addEventListener('click', event => {
        topNavUpdate();
    });
    topnav.appendChild(s);
    var i = document.createElement("i");
    i.className = "fa fa-bars"
    s.appendChild(i);
}

const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};


function copyIp() {
    copyToClipboard("ip");
    document.getElementsByClassName("tooltiptext")[0].innerHTML = "Copied";
    setTimeout(function() {
        document.getElementsByClassName("tooltiptext")[0].innerHTML = "Copy";
    }, 3000)
}