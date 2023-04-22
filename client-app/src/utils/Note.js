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

export default Note;