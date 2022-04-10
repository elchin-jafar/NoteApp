import { isClickableInput } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import AddNote from "./AddNote";
import NoteList from "./NoteList";

export default function App() {
  const [notes, setNotes] = useState([]);
  // const [filterForSearch, setFilterForSearch] = useState([]);
  // const [isInclude, setIsInclude] = useState();

  function handleFormSubmit(note) {
    setNotes([...notes, note]);
  }

  function handleDelete(indexofTarget) {
    const filteredNotes = notes.filter((_, index) => index !== indexofTarget);
    setNotes(filteredNotes);
  }

  

  // function filterSearch(e) {
  //   const value = e.target.value.toUpperCase();
  //   setIsInclude(notes.map((note) =>
  //     note.title.toUpperCase().includes(value)
  //   ));
  
      
  //       setFilterForSearch(notes.filter((note) =>
  //         note.title.toUpperCase().includes(value)
  //       ));
  // }

  return (
    <>
      <h2 className="w-50 mx-auto mt-3">Add Note</h2>
      <AddNote onSubmit={handleFormSubmit} />
      <NoteList
        notes={notes}
        onDelete={handleDelete}
        // onSearch={filterSearch}
        // SearchedNotes={filterForSearch}
        // isInclude={isInclude}
      />
    </>
  );
}
