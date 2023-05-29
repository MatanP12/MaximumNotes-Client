import React from "react";
import { AppBar, Box, CssBaseline, Grid, Toolbar, Typography } from "@mui/material";
import NoteGridItem from "../components/NoteGridItem";
import getNotesFromAPI from "../utils/ServerCalls";
import { useMemo, useState } from "react";
import NoteCreationBox from "../components/NoteCreationBox";
import SideBar from "../components/SideBar";
import { createTagsMap } from "../utils/Engine";
  

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
    const all = "Notes";
    const [notes, setNotes] = useState(getNotesFromAPI());
    const [currTag, setCurrTag] = useState(all);
    function handleSaveNote(newNote){
        setNotes([newNote, ...notes])
    }

    const tagsMap = useMemo(
      ()=> createTagsMap(notes), [notes]
    );

    console.log(tagsMap)

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <TopBar/>
            <SideBar tags={[...tagsMap.keys()]} setTag={setCurrTag}/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <NoteCreationBox handleSaveNote={handleSaveNote}/>
                <Grid container spacing={1.5} >
                    {tagsMap.get(currTag).map((currNote)=>{
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