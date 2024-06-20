import React from 'react';

function DropDown( {handleChange} ) {
    return (
        <div>
            <form>
                <select className="dropDown" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
            </form>
        </div>
    )
}

export default DropDown
