async function getNote(onEachNoteChange) {
    return new Promise(async (resolve, reject) => {


        let note = "";

        const pickedNote = () => {
            freelizerUnsubscribe(handle);
            resolve(note);
        }
        let pickedNoteTimeout = setTimeout(pickedNote, Number(noteHoldTime.value));

        const handle = (data) => {
            if (onEachNoteChange && data.note != note) onEachNoteChange(data.note);
            window.note = data.note;
            currentNote.innerText = data.note;
            if (note != data.note || !window.noteList.includes(data.note)) {
                note = data.note;
                clearTimeout(pickedNoteTimeout);
                pickedNoteTimeout = setTimeout(pickedNote, Number(noteHoldTime.value));
            }
        }

        freelizerSubscribe(handle);

    });
}