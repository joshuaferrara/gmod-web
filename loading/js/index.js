let status = "...";
let totalFiles = 0;
let neededFiles = 0;
let percentage = 0;
let currentFiles = "...";

var audio = document.getElementById("backgroundMusic");
audio.volume = 0.1;

function checkImage(imageSrc, good, bad) {
    var img = new Image();
    img.onload = good; 
    img.onerror = bad;
    img.src = imageSrc;
}

function GameDetails(servername, serverurl, mapname, maxplayers, steamid, gamemode) {
    document.getElementById("servername").innerText = servername;
    document.getElementById("mapname").innerText = mapname;
    document.getElementById("gamemode").innerText = gamemode;
    document.getElementById("servername").innerText = servername;
    document.getElementById("maxplayers").innerText = maxplayers;
    
    checkImage(`https://joshuaferrara.github.io/gmod-web/map-images/${mapname}.jpg`, () => {
        document.body.style.backgroundImage = `url(https://joshuaferrara.github.io/gmod-web/map-images/${mapname}.jpg)`;
    }, () => {
        // Couldn't find a map image - do nothing.
    });
}

// GameDetails("The Church of Navist MORBUS", "google.com", "mor_spaceship_v10_re", "32", "123", "morbus");

function UpdateProgress() {
    let filesLoaded = Math.max(0, totalFiles - neededFiles);
    let progress = (totalFiles > 0) ? (filesLoaded / totalFiles) : 1;
    progress *= 100;
    progress = Math.round(progress);
    document.getElementById("file").innerText = currentFile;
    document.getElementById("percentage").innerText = `${progress}%`;
    document.getElementById("filesloaded").innerText = `${filesLoaded}`;
    document.getElementById("totalfiles").innerText = `${totalFiles}`;
}

function SetFilesTotal(total) {
    totalFiles = total;
    UpdateProgress();
}

function DownloadingFile(fileName) {
    currentFile = fileName;
    UpdateProgress();
}

function SetStatusChanged(status) {
    document.getElementById("status").innerText = status;
}

function SetFilesNeeded(needed) {
    neededFiles = needed;
    UpdateProgress();
}