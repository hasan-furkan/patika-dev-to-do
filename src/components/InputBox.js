import { useState } from 'react'
import "./../App.css"


function InputBox({addTask, task}) {

    const [data, setData] = useState({task: ""})
 
    const onChangeInput = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(data.task === ""){
            return false
        }
        addTask([...task, data])
        setData({task: ""})
        console.log(data);
    }

    return (
        <div>
            <input name="task" placeholder="enter a task" onChange={onChangeInput} value={data.task} />
            <button onClick={onSubmit}>Add</button>   

        </div>
    )
}

export default InputBox
