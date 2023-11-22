import React from 'react'

const layout = ({ children }) => {
    return (
        <div>

            <h2> articls page</h2>
            <div style={{width: "100%", background: "#acacac", marginTop: "30px", padding: "30px", color: "black"}}>
                {children}
            </div>

        </div>
    )
}

export default layout
