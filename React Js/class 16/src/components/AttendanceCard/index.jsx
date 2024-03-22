import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);





export default function OutlinedCard({ stdData, setRefresh
    , refresh }) {


    const handleCheckIN = async () => {
        try {
            const checkIN = new Date().toDateString() + " " + new Date().toLocaleTimeString()
            const UID = localStorage.getItem("uid")

            await updateDoc(doc(db, "users", UID), {
                checkIn: checkIN
            })
            setRefresh(!refresh)
        } catch (error) {
            console.log("error", error)
        }

    }


    const handleCheckOUT = async () => {
        try {
            const checkOUT = new Date().toDateString() + " " + new Date().toLocaleTimeString()
            const UID = localStorage.getItem("uid")

            await updateDoc(doc(db, "users", UID), {
                checkOut: checkOUT,
            })

            await addDoc(collection(db, "attendance"), {
                userID: stdData.id,
                name: stdData.name,
                checkIn: stdData.checkIn,
                checkOut: checkOUT,
                course: stdData.course
            })

            setRefresh(!refresh)


        } catch (error) {
            console.log("error", error)

        }
    }
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
