import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetail.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitter } from '@fortawesome/free-solid-svg-icons'
const TeamDetail = () => {
    const { teamId } = useParams();

    const [teams, setTeams] = useState({});
    console.log(teams);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams[0]));
    }, [teamId]);
    return (
        <section>
            <div className="backUrl row">
                <div className="col-md-6">
                    <p className="text-primary">This is Team Detail:{teamId}</p>
                    <h1>Team:{teams.strTeam}</h1>
                    <p>Country:{teams.strCountry}</p>
                    <p>Gender:{teams.strGender}</p>
                    <p>Sports Type:{teams.strSport}</p>
                </div>
                <div className=" col-md-6">
                    <img className="float-right" src={teams.strTeamBanner} alt="" />
                </div>
            </div>

            <div className="backColor">
                <p>{teams.strDescriptionEN}</p>
                <br />
                <p>{teams.strStadiumDescription}</p>
               
                <div className=" d-flex align-items-between justify-content-center">
                    <a href="https://www.facebook.com/"><img className="img-handle" src="https://i.ibb.co/94Gfhwy/facebokk-img.png" alt="" /></a>
                    <a href="https://www.youtube.com/"><img className="img-handle" src="https://i.ibb.co/xGH1C22/youtub.png" alt="" /></a>
                    <a href="https://twitter.com/home"><img className="img-handle" src="https://i.ibb.co/n1Mg3Fc/images.png" alt="" /></a>
                </div>
            </div>
        </section>
    );
};

export default TeamDetail;