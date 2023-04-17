import { Dialog, DialogContent, DialogTitle, TextField } from "@mui/material";
import ReactQuill from "react-quill";
import { EditorFormats, EditorModules } from "../utils/EditorOptions";
import 'react-quill/dist/quill.snow.css';




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
            <div data-text-editor="name">
                <ReactQuill 
                    theme="snow" 
                    value={note.body} 
                    onChange={handleBodyChange}
                    modules={EditorModules}
                    formats={EditorFormats}
                    bounds={`[data-text-editor="name"]`}
                />       
            </div>

        </DialogContent>
        </Dialog>
    );
}

export default NoteEditDialog;