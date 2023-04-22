import { AppBar, Box, CssBaseline, Drawer, Grid, List, ListItemButton, Toolbar, Typography } from "@mui/material";
import NoteGridItem from "../components/NoteGridItem";
import getNotesFromAPI from "../utils/ServerCalls";
import { useState } from "react";
import NoteCreationBox from "../components/NoteCreationBox";


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


function Home(){   
    
    const [notes, setNotes] = useState(getNotesFromAPI());

    function handleSaveNote(newNote){
        // console.log("New note", newNote);
        setNotes([newNote, ...notes])
    }

    // console.log(notes);

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <TopBar/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <NoteCreationBox handleSaveNote={handleSaveNote}/>
                <Grid container spacing={1.5} >
                    {notes.map((currNote, index)=>{
                        return (
                            <Grid item key={currNote.id} md={6} xs={12} sm={12} lg={3} >
                                <NoteGridItem note={currNote}/>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </Box>
    );
}

export default Home;