import React from 'react';
import { Link } from 'react-router-dom'



const Dashboard = () => {
    return(
        <div data-testid="cover-page" className="cover-page">
            <Link 
                to="/newPot"
                data-testid="cover-page__cta-button"
                className="cover-page__cta-button"
            > 

                Create New Potluck

            </Link>
            <Link 
                to="/joinPot"
                data-testid="cover-page__cta-button"
                className="cover-page__cta-button"
            >
                Join Potluck

            </Link>

            <Link 
                to="/viewPot"
                data-testid="cover-page__cta-button"
                className="cover-page__cta-button">

                View Potluck

            </Link>
        </div>
    )
};

export default Dashboard;