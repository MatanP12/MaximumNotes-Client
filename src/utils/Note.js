class Note {
    static _currId = 0;

    
    constructor(title, body, creation_date=new Date(),color="" ,tags=[],id=Note._currId++){
        this.id = id;
        this.title = title;
        this.body = body;
        this.last_edit_time = creation_date;
        this.color = color;
        this.tags = tags;
    }
}

export const NotesColors = [
    "#D14D72",
    "#FFF3E2",
    "#ABC4AA",
    "#86A3B8",
    "#FFE15D",
    "#E9A178"
]

export default Note;