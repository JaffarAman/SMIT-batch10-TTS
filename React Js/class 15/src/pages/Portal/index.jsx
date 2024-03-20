import React, { useEffect, useState } from 'react'
import StdLayout from '../../components/StdLayout'
import OutlinedCard from '../../components/AttendanceCard'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import { ToastAlert } from '../../utils/toast'

const StdPortal = () => {
    const [stdData, setStdData] = useState("")
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const UID = localStorage.getItem("uid")
                const user = await getDoc(doc(db, "users", UID))
                setStdData({ id: user.id, ...user.data() })

            } catch (error) {
                ToastAlert(error.code || error.message, "error")
            }
        }
        fetchUser()
    }, [])


    console.log("stdData", stdData)

    return (
        <>
            <h1>Attendance</h1>
            <OutlinedCard stdData={stdData} />
        </>
    )
}

export default StdPortal