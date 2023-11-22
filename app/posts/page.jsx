// "use client"
import React from "react";
import Link from "next/link"


const page = async () => {

    const requestData = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await requestData.json();

    const allPosts = data.map((data) => {
        return (
            <Link href={`/posts/${data.id}`}>
                <div key={data.id} style={{ marginTop: "30px", padding: "30px", borderRadius: "20x", backgroundColor: 'white', color: "black", fontWeight: 'bolder' }}>
                    <h2>{data.title}</h2>
                </div>
            </Link>
        )
    })

    return (
        <>
            <div>
                {allPosts}
            </div>
        </>
    );
};

export default page;
