import {  Typography } from "@mui/material";

function NoteBodyView({data}){
    return (
        <Typography 
        variant="body2"
        sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "11",
            WebkitBoxOrient: "vertical",
        }}
        >
            {data}
        </Typography>
    );
}

export default NoteBodyView;
