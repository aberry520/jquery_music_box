document.addEventListener("DOMContentLoaded", function () 
{
    // This controls the button for the c note.
    // This variable calls the cNote audio element in the HTML.
    const cNote = document.getElementById('cAudio');
    c.addEventListener("click", function (){
        cNote.currentTime = 0;
        cNote.play();
    });

    // This controls the button for the d note.
    const dNote = document.getElementById('dAudio');
    d.addEventListener("click", function (){
        dNote.currentTime = 0;
        dNote.play();
    });

    // This controls the button for the e note.
    const eNote = document.getElementById('eAudio');
    e.addEventListener("click", function (){
        eNote.currentTime = 0;
        eNote.play();
    });

    // This controls the button for the f note.
    const fNote = document.getElementById('fAudio');
    f.addEventListener("click", function (){
        fNote.currentTime = 0;
        fNote.play();
    });

    // This controls the button for the g note.
    const gNote = document.getElementById('gAudio');
    g.addEventListener("click", function (){
        gNote.currentTime = 0;
        gNote.play();
    });

    // This controls the button for the a note.
    const aNote = document.getElementById('aAudio');
    a.addEventListener("click", function (){
        aNote.currentTime = 0;
        aNote.play();
    });

    // This controls the button for the b note.
    const bNote = document.getElementById('bAudio');
    b.addEventListener("click", function (){
        bNote.currentTime = 0;
        bNote.play();
    });
});
