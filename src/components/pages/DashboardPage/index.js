import react from 'react';
import '../DashboardPage/style.css'



const Dashboard = () => {
    return(
        <div className="btn-div">
            <button className="btn-dashboard">Create new potluck</button>
            <button className="btn-dashboard">Join potluck</button>
            <button className="btn-dashboard">View potluck</button>
        </div>
    )
};

export default Dashboard;