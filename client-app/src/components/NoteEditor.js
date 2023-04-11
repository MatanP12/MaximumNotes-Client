import { Box, TextField, Typography } from "@mui/material";
import NoteBodyEdit from "./NoteBody";

function NoteEdit({note, updateNote}){

    function handleNoteChange(e){
        const {name, value} = e.target;
        updateNote(name, value);
    }

    return (
        <Box sx={{}}>
            <TextField 
                variant="standard"
                value={note.title} 
                name="title" 
                onChange={handleNoteChange}/>
            <Typography variant="body2">
                {note.creation_time}
            </Typography>
            <NoteBodyEdit note={note} handleBodyChange={handleNoteChange}/>
        </Box>
    );
}





export default NoteEdit;