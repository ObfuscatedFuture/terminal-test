import React from 'react'

const DefaultForm = ({ id } : { id: number }) => {
    return (
        <div>
            <form>
                <input className='forms' id={`course${id}`} type="text" name="courseID" />
                <input className='forms' id={`prof${id}`}type="text" name="prof" />
                <input className='forms' id={`section${id}`}type="text" name="section" />
            </form>
        </div>
    );
    
}
function ClassForm({ count }) {
    const countInt = parseInt(count, 10);
    return (
        <>
        {[...Array(countInt)].map((_, i) => (
            <DefaultForm id={i+1} key={i}/>
        ))}
        </>  
    );
}

export default ClassForm