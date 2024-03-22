import { doc, getDoc, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import { ToastAlert } from '../../utils/toast'
import { Box, Button, Grid } from '@mui/material'
import { InputField } from '../../components'
import EditIcon from '@mui/icons-material/Edit';
const Settings = () => {
    const [fullname, setfullname] = useState("")
    const [course, setcourse] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [stdimage, setstdimage] = useState("")
    const [userData, setUserData] = useState("")
    const [disabledField, setDisabledField] = useState(true)


    useEffect(() => {
        const fetchUser = async () => {
            try {
                const UID = localStorage.getItem("uid")
                const user = await getDoc(doc(db, "users", UID))
                setUserData(user.data())
                setfullname(user.data().name)
                setemail(user.data().email)
                setcourse(user.data().course)
                setstdimage(user.data().imageURL)

            } catch (error) {
                ToastAlert(error.code || error.message, "error")
            }


        }
        fetchUser()
    }, [])
    console.log("userData", userData)

    const saveHandler = async () => {
        try {
            const UID = localStorage.getItem("uid")
            await updateDoc(doc(db, "users", UID), {
                name: fullname,
                course
            })

            ToastAlert("Edit Successfully", "success")
            setDisabledField(!disabledField)
        } catch (error) {
            ToastAlert(error.code || error.message, "error")
        }

    }


    return (
        <>
            <Box display={"flex"} alignItems={"center"} gap="20px">
                <h1>PROFILE</h1>
                <EditIcon sx={{ cursor: "pointer" }} onClick={() => setDisabledField(!disabledField)} />
            </Box>
            <Grid container mt={2} columnSpacing={5} rowSpacing={5} >
                <Grid item sm={12} textAlign={"center"} >
                    <Box component={"img"} src={stdimage || "https://keytokids.com.au/wp-content/uploads/2017/09/placeholder-face-big.png"} alt="" width={150} height={150} sx={{ objectFit: "contain" }} />
                </Grid>
                <Grid item sm={6} >
                    <InputField label="Full Name" value={fullname} onChange={(e) => setfullname(e.target.value)}
                        disabled={disabledField}
                    />
                </Grid>
                <Grid item sm={6} >
                    <InputField label="Course Name"
                        onChange={(e) => setcourse(e.target.value)}
                        value={course}
                        disabled={disabledField}
                    />
                </Grid>
                <Grid item sm={6} >
                    <InputField label="Email"
                        onChange={(e) => setemail(e.target.value)}
                        value={email}
                        disabled
                        sx={{ color: "red" }}
                    />
                </Grid>



                <Grid item sm={12} >
                    {/* <InputField label="Password" /> */}
                    <Button
                        disabled={disabledField}
                        onClick={saveHandler}
                        sx={{ width: "100%" }} variant="contained" >Save </Button>
                </Grid>


            </Grid>
        </>

    )
}

export default Settings