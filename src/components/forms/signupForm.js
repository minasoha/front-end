import React from "react"


export default function Signup(props) {

    const { disabled } = props
    

    const onSubmit = e => {
        e.preventDefault()
        // not sure where to send this yet :)
    }
    const onChange = e => {
        const { name, value, type } = e.target;
    }

    return (

        <Form>
            <div className='emailContainer'>
                Email:
                <input name='email' value ='' type='email' placeholder='Enter your email address.' onChange={onChange}/>
                Confirm Email:
                <input name='confirmEmail' value ='' type='email' placeholder='Re-enter your email address.' onChange={onChange}/>
            </div>
            <div className='passwordContainer'>
                Password:
                <input name='password' value ='' type='password' placeholder='Create a password.' onChange={onChange}/>
                Confirm Password:
                <input name='confirmPassword' value ='' type='password' placeholder='Re-enter your password.' onChange={onChange}/>
            </div>
            <button id='signupButton' disabled={disabled}>Submit</button>
        </Form>
    )
}