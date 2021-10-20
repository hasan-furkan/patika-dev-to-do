import React from 'react'
import "./../App.css"

function List({task}) {
   
    return (
        <div>
            <ul>
            {
                task.map((task, key) => (
                    <li key={key}>{task.task}</li>
                ))
            }
            </ul>
        </div>
    )
}

export default List
