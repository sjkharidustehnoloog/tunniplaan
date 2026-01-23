function n2str(nr) {
    return nr.toString();
}

function doDisplayTimetable(Form, topDir) {
    if (Form.element.selectedIndex < 0) return;
    
    var week = "39"; // Sinu nädala kaust
    var type = "c";  // Klasside kaust
    
    // Võtame klassi tähise (nt "1a", "1b") otse menüüst
    var classTag = Form.element[Form.element.selectedIndex].text.toLowerCase();
    
    // Moodustame failinime: Kla1 + _ + klassitähis (nt Kla1_1a.htm)
    var FileName = "Kla1_" + classTag + ".htm";
    
    // Kui valitakse "Kõik" või esimene üldvaade
    if (Form.element.selectedIndex == 0 && Form.element[0].text == "-Kõik-") {
        FileName = "Kla1.htm";
    }

    var url = week + "/" + type + "/" + FileName;
    parent.postMessage(url, '*');
}

// Ülejäänud funktsioonid (getParameter, IsLeapYear jne) jäta samaks nagu sul olid
