import ReactQuill from "react-quill";
import { EditorFormats, EditorModules } from "../utils/EditorOptions";
import 'react-quill/dist/quill.snow.css';

function NoteEditor({noteBody, handleBodyChange, onFocusEditor, onBlurEditor}){

    return (
        <div data-text-editor="name">
            <ReactQuill 
                onFocus={onFocusEditor}
                onBlur={onBlurEditor }
                placeholder="Take a note..."
                theme="snow" 
                value={noteBody} 
                onChange={handleBodyChange}
                modules={EditorModules}
                formats={EditorFormats}
                bounds={`[data-text-editor="name"]`}
            />       
        </div>

    );
}

export default NoteEditor;