import React, { useState } from 'react'
import './css/Register.css'

const Register = () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [email, setEmail] = useState('')
    const [course, setCourse] = useState('')
    const [gender, setGender] = useState('')
    const [data, setData] = useState(null)

    const HandleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            name,
            surname,
            dateOfBirth,
            email,
            course,
            gender
        }

        setData(formData)
    }

    return(
        <div>
            <header>
                <nav>
                        <li><a href='./login.jsx' onClick={(e) => e.preventDefault()} >Login</a></li>
                </nav>
            </header>
            <div className='main'>
                <h2>User Information Form</h2>
                <form onSubmit={HandleSubmit}>
                    <label>Name:</label>
                    <input 
                    type="text" 
                    placeholder='Name' 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    />

                    <label>Surname:</label>
                    <input 
                    type="text" 
                    placeholder='Surname' 
                    value={surname} 
                    onChange={(e) => setSurname(e.target.value)}
                    />

                    <label>Date of Birth:</label>
                    <input 
                    type="date" 
                    placeholder='Date of Birth' 
                    value={dateOfBirth} 
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    />

                    <label>Courses:</label>
                    <input 
                    type="text" 
                    placeholder='Courses' 
                    value={course} 
                    onChange={(e) => setCourse(e.target.value)}
                    />

                    <label>Email:</label>
                    <input 
                    type="email" 
                    placeholder='Email' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Gender:</label>
                    <div className='g'>
                        <button onClick={() => setGender("Male")}>Male</button>
                        <button onClick={() => setGender("Female")}>Female</button>
                    </div>

                    <button type='submit'>Submit</button>
                </form>

                { data !== null && (
                    <div>
                        <h1>Submitted</h1>
                        <pre>{JSON.stringify(data, null, 2)}</pre>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Register