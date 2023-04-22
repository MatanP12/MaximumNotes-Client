import { Box, Container, TextField } from "@mui/material";
import NoteEditor from "./NoteEditor";
import { useState } from "react";
import Note from "../utils/Note";

function NoteCreationBox({handleSaveNote}){
    const [currNote, setCurrNote] = useState({
        title: "",
        body: ""
    });

    function handleBodyChange(newBody){
        setCurrNote({...currNote, body: newBody})
    }

    function handleTitleChange(e){
        setCurrNote({...currNote, title: e.target.value});
    }

    function saveNote(){
        console.log(currNote)
        if(!currNote.body.replace('<p><br></p>', '').trim() && !currNote.title){
            return;
        }
        console.log("CalledSave");
        handleSaveNote(new Note(currNote.title, currNote.body))
        setCurrNote({
            title: "",
            body: ""     
        })
    }

    return (
        <Box component={"div"} onBlur={saveNote} sx={{display:"flex",  alignItems:"center", justifyContent:"center", mb:2}} >
            <Box sx={{border:1}}>
                <TextField placeholder="Title" variant="outlined" fullWidth multiline name={"title"} value={currNote.title} 
                    onChange={handleTitleChange}
                    sx={{
                        mb:1
                    }}
                />
                <NoteEditor handleBodyChange={handleBodyChange} noteBody={currNote.body} />
            </Box>  
        </Box>
    );
}

export default NoteCreationBox;