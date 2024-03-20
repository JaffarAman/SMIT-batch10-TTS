import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const handleCheckIN = () => {
    const checkIN = new Date().toDateString() + " " + new Date().toLocaleTimeString()
    const UID = localStorage.getItem("uid")

    updateDoc(doc(db, "users", UID), {
        checkIn: checkIN
    })


}


const handleCheckOUT = () => {
    const checkOUT = new Date().toDateString() + " " + new Date().toLocaleTimeString()
    const UID = localStorage.getItem("uid")

    updateDoc(doc(db, "users", UID), {
        checkOut: checkOUT
    })


}



export default function OutlinedCard({ stdData }) {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                <React.Fragment>
                    <CardContent>
                        <Typography color="text.secondary" mb={"20px"} >
                            ID : {stdData?.id}
                        </Typography>
                        <Typography variant="h5" sx={{ mb: "30px" }} component="div">
                            Course : {stdData?.course}
                        </Typography>

                        <Typography variant="h5" sx={{ mb: "30px" }} component="div">
                            CheckIn : {stdData.checkIn || "00.00.00"}
                        </Typography>

                        <Typography variant="h5" sx={{ mb: "30px" }} component="div">
                            CheckOut :  {stdData.checkOut || "00.00.00"}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {
                            stdData.checkIn ?
                                <Button variant='contained'
                                    onClick={handleCheckOUT}
                                >Check OUT</Button>
                                :
                                <Button variant='contained' onClick={handleCheckIN} >Check IN</Button>
                        }



                    </CardActions>
                </React.Fragment>
            </Card>
        </Box>
    );
}
