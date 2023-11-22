import React from 'react'

const page = async ({ params }) => {
    const requestData = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postView}`);
    const data = await requestData.json();

    // console.log(params)
    return (
        <div key={data.id} style={{ marginTop: "30px", padding: "30px", borderRadius: "20x", backgroundColor: 'white', color: "black", fontWeight: 'bolder' }}>
            <h2>{data.title}</h2>
            <h3 style={{paddingTop: "30px"}}>{data.body}</h3>
        </div>
    )
}

export default page
