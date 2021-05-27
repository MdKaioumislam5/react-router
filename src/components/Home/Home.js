import React, { useEffect, useState } from 'react';
import '../../App.css'
import Team from '../Team/Team';

const Home = () => {
    const [teams, setTeams] = useState([]);
    console.log(teams);
    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeams(data.teams))
        
    }, [])
    return (
        <div className="backUrl">
            <h1 className='text-center header_text_center'>Sports Teams</h1>
            {teams.map(team => <Team team={team}></Team>)}
        </div>
    );
};

export default Home;