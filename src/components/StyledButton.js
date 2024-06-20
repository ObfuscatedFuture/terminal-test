import React from 'react';

function StyledButton({text}) {
    return (
        <div>
            <button type="button" className="styledButton">{text}</button>
        </div>
    )
}

export default StyledButton
