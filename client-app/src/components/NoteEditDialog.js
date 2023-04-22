import { Dialog, DialogContent, DialogTitle, TextField } from "@mui/material";
import NoteEditor from "./NoteEditor";




function NoteEditDialog({isOpen, note, handleClose, updateNote, children}){

    function handleChange(e){
        const {name, value} = e.target;
        updateNote(name, value);
    }

    function handleBodyChange(newBody){
        updateNote("body",newBody);
    }


    return (
        <Dialog 
            open={isOpen}
            onClose={handleClose}
            maxWidth="sm"
        >
        <DialogTitle sx={{backgroundColor:note.color}}>
             <TextField variant="standard" fullWidth multiline name={"title"} value={note.title} onChange={handleChange}/>
        </DialogTitle>
        <DialogContent >
            <NoteEditor handleBodyChange={handleBodyChange} noteBody={note.body}/>
        </DialogContent>
        </Dialog>
    );
}

export default NoteEditDialog;