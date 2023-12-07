document.getElementById('searchInput').addEventListener('input', function() {
    var input = this.value.toLowerCase(); // Hole den eingegebenen Suchbegriff
    var gameLinks = document.querySelectorAll('.content a'); // Finde alle Spiel-Links
    var noResultsMsg = document.getElementById('noResults'); // Holen des "Keine Ergebnisse"-Textes
    var linkElement = document.getElementById('link'); // Holen des "Link"-Elements
    linkElement.style.display = 'none';
    console.log("0")
    var foundResults = false; // Initial ist kein Ergebnis gefunden

    gameLinks.forEach(function(link) {
        var gameTitle = link.getAttribute('id').toLowerCase(); // Hole den Titel des Spiels
        if (gameTitle.includes(input)) {
            link.style.display = 'inline-block';
            linkElement.style.display = 'none';
            console.log("1")
            foundResults = true; // Ein Ergebnis wurde gefunden
        } else {
            link.style.display = 'none';
            console.log("2")// Verstecke den Link, wenn der Suchbegriff nicht enthalten ist
        }
    });

    // Hier fügen wir den Code hinzu, der den "Link"-Bereich mit dem entsprechenden Link sichtbar macht







    if (input.includes('twitch')) {
        linkElement.href = 'https://www.twitch.tv/amaterasu_vt';
        linkElement.style.display = 'inline-block';
        foundResults = true;
        console.log("3")
    }
    else if (input.includes('youtube')) {
        linkElement.href = 'https://www.youtube.com/@Amaterasu_VT';
        linkElement.style.display = 'inline-block';
        foundResults = true;
        console.log("4")
    }

    else if (input.includes('wiki')) {
        linkElement.href = 'https://german-vtuber.fandom.com/de/wiki/Amaterasu_VT';
        linkElement.style.display = 'inline-block';
        foundResults = true;
        console.log("5")
    }

    else if (input.includes('twitter')) {
        linkElement.href = 'https://twitter.com/Amaterasu_VTx';
        linkElement.style.display = 'inline-block';
        foundResults = true;
        console.log("6")
    }

    else if (input.includes('tiktok')) {
        linkElement.href = 'https://www.tiktok.com/@amaterasu_vt';
        linkElement.style.display = 'inline-block';
        foundResults = true;
        console.log("7")
    }

    else if (input.includes('insta')) {
        linkElement.href = 'https://www.instagram.com/amaterasu_vt/';
        linkElement.style.display = 'inline-block';
        foundResults = true;
        console.log("8")
    }

    else if (input.includes('merch')) {
        linkElement.href = 'https://ko-fi.com/amaterasu_vt/shop';
        linkElement.style.display = 'inline-block';
        foundResults = true;
        console.log("9")
    }

    else if (input.includes('patreon')) {
        linkElement.href = 'https://www.patreon.com/Amaterasu_VT';
        linkElement.style.display = 'inline-block';
        foundResults = true;
        console.log("10")
    }

    else if (input.includes('daki')) {
        linkElement.href = 'https://dakimakura.de/shop/partner/540-3254-amaterasuvt-2473600000004.html';
        linkElement.style.display = 'inline-block';
        foundResults = true;
        console.log("11")
    }

    else if (input.includes('ko-fi')) {
        linkElement.href = 'https://ko-fi.com/amaterasu_vt';
        linkElement.style.display = 'inline-block';
        foundResults = true;
        console.log("12")
    }

    else if (input.includes('home')) {
        linkElement.href = 'https://discord.gg/amsu';
        linkElement.style.display = 'inline-block';
        foundResults = true;
        console.log("13")
    }

    else if (input.includes('links')) {
        linkElement.href = 'https://amaterasuvt.carrd.co/';
        linkElement.style.display = 'inline-block';
        foundResults = true;
        console.log("14")
    }

    else if (input.includes('cute')) {
        linkElement.href = 'https://amaterasuvt.carrd.co/';
        linkElement.style.display = 'inline-block';
        foundResults = true;
        console.log("15")
    }








    else if (input.includes('uwu')) {
        var uwu = document.getElementById('uwu');
        uwu.play();
        console.log("16")
        foundResults = true;
    }


    else if (input.includes('nya')) {
        var nya = document.getElementById('nya');
        nya.play();
        console.log("17")
        foundResults = true;
    }


    else if (input.includes('senpai')) {
        var senpai = document.getElementById('senpai');
        senpai.play();
        console.log("18")
        foundResults = true;
    }


    else if (input.includes('paimon')) {
        var paimon = document.getElementById('paimon');
        paimon.play();
        console.log("19")
        foundResults = true;
    }




    else {
        linkElement.style.display = 'none';
        console.log("20")
    }


    if (!foundResults) {
        noResultsMsg.style.display = 'block';

    } else {
        noResultsMsg.style.display = 'none';
    }
});