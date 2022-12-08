import React from 'react'

function Employee() {
    const employee = [
        { username: "prijith", Age: "24" },
        { username: "prijil", Age: "21" },
        { username: "jismi", Age: "17" },
    ]
    return (
        <div>
            {
                employee.map((value) => (
                    <>
                    <p>Username : {value.username }</p>
                    <p>Age : {value.Age}</p>
                    </>
                ))
            }

        </div>
    )
}

export default Employee