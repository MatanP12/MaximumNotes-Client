import { AppBar, Box, CssBaseline, Drawer, List, ListItemButton, Toolbar, Typography } from "@mui/material";
import getNotesFromAPI from "../utils/notes";
import { useState } from "react";
import NoteEdit from "../components/NoteEditor";

function TopBar(){
    return (
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Notes
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
  
function NotesDrawer({handleNoteSelect, notesTitles}){
    return (
        <Drawer
        variant="permanent"
        sx={{
            width: 240,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
        }}
        >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
            <List>
                {notesTitles.map((title, index)=>{
                    return (
                        <ListItemButton key={index} onClick={()=>{handleNoteSelect(index)}}>
                            {title}
                        </ListItemButton>
                    );
                })}
            </List>
        </Box>
        </Drawer>
    );
}
  


function Home(){

    const [currNoteIndex, setCurrNoteIndex] = useState(0);

    const [notes, setNotes] = useState(getNotesFromAPI());

    function updateCurrNote(field, value){
        const newNotes = notes.map((currNote, i)=>{
            if(currNoteIndex === i){
                currNote[field] = value;
            }
            return currNote;
        })
        setNotes(newNotes);

    }

    console.log("Curr note index", currNoteIndex);
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <TopBar/>
            <NotesDrawer handleNoteSelect={setCurrNoteIndex} notesTitles={notes.map((note)=>{
                return note.title;
            })}/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <NoteEdit note={notes[currNoteIndex]} updateNote={updateCurrNote} />
            </Box>
        </Box>
    )
}

export default Home;