async function getCordinate() {
    const columnNote = await getNote((currentNote) => {
        highlightRow(currentNote)
    });
    const rowNote = await getNote((currentNote) => {
        highlightCordinate(columnNote, currentNote)
    });
    return { columnNote, rowNote };
}