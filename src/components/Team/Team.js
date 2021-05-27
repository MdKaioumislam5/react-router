import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Card,Container,Row,Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
// import TeamDetail from '../TeamDetail/TeamDetail';

const Team = (props) => {
    const { strTeamBadge, strTeam, strSport, idTeam } = props.team;
    const history = useHistory();

    const handleClick = () => {
        const url = `/team/${idTeam}`;
        history.push(url);
    }
    return (
        <div className=" d-inline-flex m-3" >
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={strTeamBadge} />
                            <Card.Body>
                                <Card.Title>Name:{strTeam}  </Card.Title>
                                <Card.Text>Sports type: {strSport}</Card.Text>
                                <Link to={`/team/${idTeam}`}>
                                    <Button variant="primary">Explore</Button>
                                </Link>
                                {/* {teams.map(team => <TeamDetail team={team}></TeamDetail>)} */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Team;