import { Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import GroupedBarChart from './Graph'
import DataTable from './Table'

function Main({ graph }) {
    const navigate = useNavigate();
    return (
        <div className='app'>
            <Typography variant="h3" gutterBottom>

                {
                    graph ? 'Coronavirus Tracker Graph' : 'Coronavirus Tracker'
                }
            </Typography>
            <div className='card'>
                {
                    graph ? <GroupedBarChart /> : <DataTable />
                }
            </div>
            {
                graph ? <Button className='mt-3' onClick={() => navigate('/')} variant="outlined">Go to Home</Button> : <Button className='mt-3' onClick={() => navigate('/graph')} variant="outlined">See Graph</Button>
            }

        </div>
    )
}

export default Main