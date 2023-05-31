import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import NoteEditor from "./NoteEditor";
import ActionsMenu from "./ActionsMenu";




function NoteEditDialog({isOpen, note, handleClose, updateNote}){

    function handleChange(e){
        const {name, value} = e.target;
        updateNote(name, value);
    }

    function handleBodyChange(newBody){
        updateNote("body",newBody);
    }

    function handleSetColor(newColor){
        updateNote("color", newColor);
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
        <DialogContent sx={{
            paddingBottom: 1
        }}>
            <NoteEditor handleBodyChange={handleBodyChange} noteBody={note.body}/>
        </DialogContent>
        <DialogActions sx={{
            display:"block"
        }}>
            <ActionsMenu setNoteColor={handleSetColor} noteTags={note.tags} />
        </DialogActions>
        </Dialog>
    );
}

export default NoteEditDialog;