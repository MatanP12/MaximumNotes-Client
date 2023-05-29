import { Card, CardActionArea, CardActions, CardContent, CardHeader, Chip, IconButton, Menu, MenuItem, Stack } from "@mui/material";
import { ColorLensOutlined, DeleteOutline, ContentPaste } from "@mui/icons-material";
import CircleIcon from '@mui/icons-material/Circle';
import { useState } from "react";
import NoteEditDialog from "./NoteEditDialog";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.bubble.css'
import { NotesColors } from "../utils/Note";



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


function ColorSelectMenu({anchor, handleClose, setColor}){
    const open = Boolean(anchor);
    const colors = NotesColors;

    return (
        <Menu
            open={open}
            anchorEl={anchor}
            onClose={handleClose}
        >
            {colors.map((currColor, index)=>{
                return (
                    <MenuItem key={index} onClick={()=>{setColor(currColor)}} disableGutters={true} sx={{display:"inline",}}>
                        <CircleIcon style={{color: currColor}}/>
                    </MenuItem>
                );
            })}
        </Menu>

    );
}

function CardActionsMenu({setAnchor, noteTags}){

    const tagsArr = noteTags.slice(0, 3);
    const leftOvers = noteTags.length - tagsArr.length;

    return (
        <CardActions disableSpacing={true} sx={{
            display:"block"
        }}>
            <Stack direction="row" spacing={1}>
                {tagsArr.map((currTag, index)=>{
                    return (
                        <Chip 
                            sx={{
                                maxWidth: "33%",
                                overflow: "hidden",
                            }}      
                        label={currTag} variant="outlined" />
                    );
                })}
                {leftOvers !== 0 && <Chip label={`+${leftOvers}`}/>}
            </Stack>
            <IconButton onClick={()=>{console.log("Deleted!")}}>
                <DeleteOutline fontSize="small" />
            </IconButton>
            <IconButton onClick={(e)=>{setAnchor(e.currentTarget)}}>
                <ColorLensOutlined fontSize="small"/>
            </IconButton>
            <IconButton>
                <ContentPaste fontSize="small"/>
            </IconButton>
        </CardActions>

    );

}

function NoteGridItem({note}){
    const [currNote, setCurrNote] = useState(note);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openEditDialog, setOpenEditDialog] = useState(false);

    function handleCloseColorMenu(){
        setAnchorEl(null);
    }

    function setNoteColor(newColor){
        setAnchorEl(null);
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
            <CardActionsMenu setAnchor={setAnchorEl} noteTags={currNote.tags}/>
            <ColorSelectMenu anchor={anchorEl} setColor={setNoteColor} handleClose={handleCloseColorMenu} />
            <NoteEditDialog note={currNote} isOpen={openEditDialog} handleClose={()=>{setOpenEditDialog(false)}} updateNote={updateNote}/>
        </Card>
    );
}

export default NoteGridItem;