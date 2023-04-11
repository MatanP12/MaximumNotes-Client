import {  TextField, Typography } from "@mui/material";

function NoteBodyEdit({note, handleBodyChange}){
    return (
        <TextField  
        size="small"
        variant="standard" 
        fullWidth
        multiline={true}
        rows={20}
        value={note.body}
        name="body"
        InputProps={{ disableUnderline: true }}
        onChange={handleBodyChange}
        />
    );
}

export default NoteBodyEdit;
