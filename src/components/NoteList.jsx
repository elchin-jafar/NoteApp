import { useState } from "react";

export default function NoteList({
  notes,
  onDelete,
  onSearch,
  isInclude,
  filterForSearch,
}) {
  const [searchNote, setSearchNote] = useState();


  function handleSearch(e) {
    setSearchNote(e.target.value);
    onSearch(e);
  }

  function handleDelete(index) {
    onDelete(index)
  }

  return (
    <>
      <h2 className="w-50 mx-auto mt-3">Note List</h2>
      <div className="w-50 mx-auto mb-3">
        <label htmlFor="search" className="form-label">
          Search Note
        </label>
        <input
          type="search"
          className="form-control"
          id="search"
          value={searchNote}
          onInput={(e) => handleSearch(e)}
        />
      </div>

      {/* {isInclude
        ? filterForSearch.map((note, index) => (
            <div key={index} className="w-50 mx-auto">
              <div
                className="card text-white bg-dark mb-3"
                style={{ maxWidth: "18rem" }}
                position-relative
              >
                <h5 className="card-header">
                  {note.title}{" "}
                  <button
                    onClick={() => onDelete(index)}
                    className="btn btn-danger btn-sm position-absolute end-0 top-0"
                  >
                    Delete
                  </button>{" "}
                </h5>
                <div className="card-body">
                  <p className="card-text">{note.info}</p>
                </div>
              </div>
            </div>
          ))
        : notes.map((note, index) => (
            <div key={index} className="w-50 mx-auto">
              <div
                className="card text-white bg-dark mb-3"
                style={{ maxWidth: "18rem" }}
                position-relative
              >
                <h5 className="card-header">
                  {note.title}{" "}
                  <button
                    onClick={() => onDelete(index)}
                    className="btn btn-danger btn-sm position-absolute end-0 top-0"
                  >
                    Delete
                  </button>{" "}
                </h5>
                <div className="card-body">
                  <p className="card-text">{note.info}</p>
                </div>
              </div>
            </div>
          ))} */}

      {notes.map((note, index) => (
        <div key={index} className="w-50 mx-auto">
          <div
            className="card text-white bg-dark mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <h5 className="card-header" value={note.title}>
              {note.title}{" "}
              <button
                onClick={() => onDelete(index)}
                className="btn btn-danger btn-sm position-absolute end-0 top-0"
              >
                Delete
              </button>{" "}
            </h5>
            <div className="card-body">
              <p className="card-text">{note.info}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
