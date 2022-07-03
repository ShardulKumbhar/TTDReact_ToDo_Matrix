import { useState } from "react";
import "../index.css";

const TextField = (props) => {
    const [newNote, setNewNote] = useState("");

    function handleChange(e){
        setNewNote(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        props.setData(newNote);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter the Note" autoComplete="off" value={newNote} onChange={handleChange}/>
            <button id="Add-Button" type="submit" data-testid="add-button" disabled={newNote==""}> Add </button>
        </form>
        </>
    );
}
 
export default TextField;