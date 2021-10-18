import React , { useEffect } from "react";
import { useHistory } from "react-router";
// import axiosWithAuth from "../../../utilities/axiosWithAuth";

const CreatePotluckPage = () => {
    const { push } = useHistory();
    // useEffect(
    //     axiosWithAuth().post('')
    //         .then(resp => {
    //             console.log(resp)
    //         }).catch(err=>{console.log(err)})
    // )
    const handleSubmit = e => {
        e.preventDefault();
        push('/dashboard')
    }
    
    return(
        
            
                
            
        <form className="create-potluck" onSubmit={handleSubmit}>
            <h1>CreatePotluckPage Potluck</h1>
            <label>
                Event Name:
                <input type="text" name="event-name" />
            </label>

            <label>
                Location:
                <input type="text" name="location" />
            </label>

            <label>
            Date/Time:
            <input type="datetime-local" name="dateTime" />
            </label>

            <button onSubmit={handleSubmit} className="cover-page__cta-button">Creat Potluck</button>
        </form>

            
    


    );
};

export default CreatePotluckPage;