
function createTagsMap(notes){
    const map = new Map();
    map.set("Notes",[]);
    notes.forEach((currNote)=>{
      currNote.tags.forEach((currTag)=>{
        if(!map.has(currTag)){
          map.set(currTag, []);
        }
        map.get(currTag).push(currNote);
      })
      map.get("Notes").push(currNote);
    })
    return map;
}

export {createTagsMap}
