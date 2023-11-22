import React from 'react'

const page = (props) => {
    console.log(props)
    return (
        <div>
            <h1 className={{
                width: "100%",
                textAlign: "center"
            }}> page not found</h1>
            <h2>the page urls: {props.params.pageNotFound} </h2>
        </div >
    )
}

export default page
