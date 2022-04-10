import { useState } from "react";

export default function AddNote({onSubmit}) {
    const [title, setTitle] = useState();
    const [info, setInfo] = useState();

    function handleFormSubmit(e) {
        e.preventDefault();
        const note = {title,info};
        setTitle('');
        setInfo('');
        onSubmit(note);
    }

    return (
        <>
        <form onSubmit={handleFormSubmit} className="w-50 mx-auto" action="">
        <div className="mt-3 mb-3 mx-auto">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Note
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Title of Note"
            id="exampleFormControlInput1"
            value={title}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3 mx-auto">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Description of Note
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={info}
            onChange={e=>setInfo(e.target.value)}
          ></textarea>
        </div>
        <button disabled={!title || !info} className="btn btn-primary">Add</button>
      </form>
        </>
    )
}