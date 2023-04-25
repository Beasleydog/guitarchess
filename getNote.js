async function getNote(onEachNoteChange) {
    return new Promise(async (resolve, reject) => {

        const { start, subscribe, stop } = await freelizer();

        let note = "";
        let changeTimer = 500;
        start()
        subscribe((data) => {
            console.log(data);
            if (onEachNoteChange) onEachNoteChange(data.note);
            if (note != data.note) {
                changeTimer = 500;
                note = data.note;
            }
        });

        const timerLoop = setInterval(() => {
            changeTimer--;
            if (changeTimer == 0) {
                clearInterval(timerLoop);
                stop();
                resolve(note);
            }
        }, 1);

    });
}