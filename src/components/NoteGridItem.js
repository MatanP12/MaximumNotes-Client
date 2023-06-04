import { Card, CardActionArea, CardActions, CardContent, CardHeader, } from "@mui/material";
import { useState } from "react";
import NoteEditDialog from "./NoteEditDialog";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.bubble.css'
import ActionsMenu from "./ActionsMenu";



const titleTypographyProps = {
    variant: "h6",
    component: "div",
    sx : {
        flexGrow:1
    }
}

const subTitleTypographyProps={
    variant: "subtitle2",
    component: "div",
    sx : {
        flexGrow:1,
        mt: 1
    }
}

function NoteBodyView({data}){
    return (
        <ReactQuill
            value={data}
            readOnly={true}
            theme="bubble"
            modules={{}}
            formats={{}}
            style={{
                pointerEvents:"none",
            }}
        />
    );
}

function NoteGridItem({note, setTag}){
    const [currNote, setCurrNote] = useState(note);
    const [openEditDialog, setOpenEditDialog] = useState(false);


    function setNoteColor(newColor){
        setCurrNote({...currNote, color:newColor})
    }

    function updateNote(field, value){
        setCurrNote({...currNote, [field]:value});
    }

    return (
        <Card hidden={openEditDialog}>
            <CardActionArea onClick={()=>{setOpenEditDialog(true)}}>
                <CardHeader       
                    title={currNote.title}
                    titleTypographyProps={titleTypographyProps}
                    subheaderTypographyProps={subTitleTypographyProps}
                    subheader={currNote.last_edit_time.toDateString()} 
                    sx={{
                        pb:0,
                        backgroundColor: currNote.color
                    }}
                    />
                
                <CardContent   sx={{
                    maxHeight:"400px",
                    overflow:"hidden",
                    m:0.1
                }}>
                    <NoteBodyView data={currNote.body}/>
                </CardContent>
            </CardActionArea>
            <CardActions disableSpacing={true} 
                sx={{
                    display:"block"
            }}>
                <ActionsMenu noteTags={currNote.tags} setNoteColor={setNoteColor} setTag={setTag}/>
            </CardActions>
            <NoteEditDialog note={currNote} isOpen={openEditDialog} handleClose={()=>{setOpenEditDialog(false)}} 
            updateNote={updateNote} 
            setTag={setTag}/>
        </Card>
    );
}

export default NoteGridItem;
