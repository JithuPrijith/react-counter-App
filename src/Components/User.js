import React from 'react'

function User({data,age}) {
    return (
        <div>
            <div>User</div>
            <h1>{data} : {age}</h1>   
        </div>
    )
}

export default User