import { useState } from 'react';
function Notes() {
    const [Title, setTitle] = useState("");
    const [Desc, setDesc] = useState("");
    function adderEvent(event) {
        event.preventDefault();
        console.log(Title, Desc);
    }
    return (
        <>
            <form onSubmit={adderEvent}>
                <input className='title' value={Title} onChange={(t) => setTitle(t.target.value)} placeholder='enter title' ></input>
                <textarea className='desc' value={Desc} onChange={(e) => setDesc(e.target.value)}></textarea>
                <button >Submit</button>
            </form >
        </>
    );
}

export default Notes; 