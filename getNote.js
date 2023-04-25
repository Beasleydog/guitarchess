async function getNote(onEachNoteChange) {
    return new Promise(async (resolve, reject) => {


        let note = "";
        let changeTimer = 500;

        const handle = (data) => {
            if (onEachNoteChange) onEachNoteChange(data.note);
            window.note = data.note;
            if (note != data.note || !window.noteList.includes(data.note)) {
                changeTimer = 500;
                note = data.note;
            }
        }

        freelizerSubscribe(handle);

        const timerLoop = setInterval(() => {
            changeTimer--;
            if (changeTimer == 0) {
                console.log("Note: " + note);
                clearInterval(timerLoop);
                freelizerUnsubscribe(handle);
                resolve(note);
            }
        }, 1);

    });
}