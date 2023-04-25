async function getCordinate() {
    const columnNote = await getNote((currentNote) => {
        highlightRow(currentNote)
    });
    const rowNote = await getNote();
    return { columnNote, rowNote };
}