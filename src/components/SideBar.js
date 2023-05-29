import { Drawer, Toolbar, Box, List, ListItemButton, ListItemText } from "@mui/material";


function SideBar({tags, setTag}){

    const drawerWidth = 200;

    return (
        <Drawer
            variant="permanent"
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
            <List>
                {tags.map((currTag, index)=>{
                    return (
                        <ListItemButton key={index} onClick={()=>{setTag(currTag)}}>
                            <ListItemText primary={currTag} 
                            primaryTypographyProps={{
                                style: {
                                    overflow: "hidden",
                                    whiteSpace: "nowrap",
                                    textOverflow: "ellipsis"


                                }
                            }}
                             />
                        </ListItemButton>
                    );
                })}
            </List>          
            </Box>
        </Drawer>
    );

}

export default SideBar