import React, { useEffect, useState } from 'react'
import { AdminLayout } from '../../components'
import { Divider, Stack } from '@mui/material'
import MuiTable from '../../components/Table'
import AttendanceTable from '../../components/AttendanceTable'
import Dropdown from '../../components/dropdown'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase'

const Attendance = () => {
    const [attendanceListData, setattendanceListData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const docSnap = await getDocs(collection(db, "attendance"))
            const tempArr = []
            docSnap.forEach((user) => {
                tempArr.push({ ...user.data(), id: user.id })
            })
            setattendanceListData(tempArr)

        }
        fetchData()
    }, [])
    console.log("attendanceListData", attendanceListData)

    const handleCourseFilter = async (e, value) => {
        console.log("handleCourseFilter", value)
        const q = query(collection(db, "attendance"), where("course", "==", value.label));

        const tempArr = []
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log("where", doc.id, " => ", doc.data());
            tempArr.push({ ...doc.data(), id: doc.id })

        })
        setattendanceListData(tempArr)

    }
    return (
        <AdminLayout>
            <Stack mb="20px" direction={"row"} justifyContent={"space-between"} >
                <h1>Attendance</h1>
                <Dropdown handleCourseFilter={handleCourseFilter} />
            </Stack>
            <Divider />

            <AttendanceTable attendanceListData={attendanceListData} />
        </AdminLayout>
    )
}

export default Attendance