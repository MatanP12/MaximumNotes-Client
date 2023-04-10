import { Card, CardActionArea, CardActions, CardContent, CardHeader, IconButton } from "@mui/material";
import NoteBodyView from "./NoteBody";
import { ColorLensOutlined, DeleteOutline } from "@mui/icons-material";
import { useState } from "react";

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
        flexGrow:1
    }
}

function NoteView({note}){
    const [showActions, setShowActions] = useState(false);
    return (
        <Card 
        onMouseEnter={()=>{setShowActions(true)}}
        onMouseLeave={()=>{setShowActions(false)}}
        >
            <CardActionArea>
                <CardHeader
                    title={note.title}
                    titleTypographyProps={titleTypographyProps}
                    subheaderTypographyProps={subTitleTypographyProps}
                    subheader={note.creation_time} />
                <CardContent>
                    <NoteBodyView data={note.body}/>
                </CardContent>
            </CardActionArea>
            {showActions && 
                <CardActions disableSpacing={true}>
                    <IconButton onClick={()=>{console.log("Deleted!")}}>
                        <DeleteOutline/>
                    </IconButton>
                    <IconButton>
                        <ColorLensOutlined/>
                    </IconButton>
                </CardActions>
            }
        </Card>
    );
}

export default NoteView;