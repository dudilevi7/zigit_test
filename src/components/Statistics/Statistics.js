import { Card, Typography } from '@material-ui/core';
import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ScoreIcon from '@material-ui/icons/Score';
import './Statistics.css'

const Statistics = ({ data }) => {

    const deadlinePercent = (data.reduce((acc, project) => (acc + project.madeDadeline), 0) / data.length).toFixed(2).toString() + "%";
    const avgScore = (data.reduce((acc, project) => (acc + project.score), 0) / data.length);

    return (
        <div className="statsContainer">

            <Card>
                <div className="stats">
                    <CheckCircleIcon fontSize="large" />
                    <Typography variant="h6" >
                        Made Deadline
                </Typography>
                    <Typography variant="h5" >{deadlinePercent}</Typography>
                </div>
            </Card>


            <Card>
                <div className="stats">
                    <ScoreIcon fontSize="large" />
                    <Typography variant="h6" >Average Score</Typography>
                    <Typography variant="h5" >{avgScore}</Typography>
                </div>
            </Card>


        </div>
    )
}

export default Statistics;