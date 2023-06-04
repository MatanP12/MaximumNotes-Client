import { DeleteOutline, ColorLensOutlined, ContentCopyOutlined } from "@mui/icons-material";
import { Stack, Chip, IconButton, MenuItem, Menu } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import { NotesColors } from "../utils/Note";
import { useState } from "react";

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
                    <MenuItem key={index} onClick={()=>{setColor(currColor)}} disableGutters={true} sx={{display:"inline"}}>
                        <CircleIcon style={{color: currColor}}/>
                    </MenuItem>
                );
            })}
        </Menu>

    );
}

function ActionsMenu({ noteTags, setNoteColor, onCopyNote, setTag}){
    const [anchorEl, setAnchorEl] = useState(null);
    function handleCloseColorMenu(){
        setAnchorEl(null);
    }

    function handleSetColor(newColor){
        setNoteColor(newColor);
        setAnchorEl(null);
    }

    return (
        <>
            <Stack direction="row" spacing={1}>
                {noteTags.map((currTag, index)=>{
                    return (
                        <Chip
                            onClick={()=>{setTag(currTag)}}
                            key={index} 
                            sx={{
                                maxWidth: "33%",
                                overflow: "hidden",
                            }}      
                            label={currTag} variant="outlined" 
                        />
                    );
                })}
            </Stack>
            <IconButton onClick={()=>{console.log("Deleted!")}}>
                <DeleteOutline fontSize="small" />
            </IconButton>
            <IconButton onClick={(e)=>{setAnchorEl(e.currentTarget)}}>
                <ColorLensOutlined fontSize="small"/>
            </IconButton>
            <IconButton>
                <ContentCopyOutlined fontSize="small"/>
            </IconButton>
            <ColorSelectMenu anchor={anchorEl} setColor={handleSetColor} handleClose={handleCloseColorMenu} />
        </>

    );
}

export default ActionsMenu;