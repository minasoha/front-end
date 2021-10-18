import React from "react"



export default function Signup(props) {

    const { disabled, values, change, submit } = props


    const onSubmit = e => {
        e.preventDefault()
        submit()
    }
    const onChange = e => {
        const { name, value, type } = e.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    return (

        <form>
            <div className='emailContainer'>
                Email:
                <input name='email' value ={values.email} type='email' placeholder='Enter your email address.' onChange={onChange}/>
                Confirm Email:
                <input name='confirmEmail' value ={values.confirmEmail} type='email' placeholder='Re-enter your email address.' onChange={onChange}/>
            </div>
            <div className='passwordContainer'>
                Password:
                <input name='password' value ={values.password} type='password' placeholder='Create a password.' onChange={change}/>
                Confirm Password:
                <input name='confirmPassword' value ={values.confirmPassword} type='password' placeholder='Re-enter your password.' onChange={onChange}/>
            </div>
            <button id='signupButton' disabled={disabled}>Submit</button>
        </form>
    )
}