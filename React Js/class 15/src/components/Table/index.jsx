import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { useEffect, useState } from 'react';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];



export default function MuiTable() {
    const [stdListData, setstdListData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const docSnap = await getDocs(collection(db, "users"))
            const tempArr = []
            docSnap.forEach((user) => {
                if (user.data().type !== "admin") {
                    tempArr.push({ ...user.data(), id: user.id })
                }
            })
            setstdListData(tempArr)

        }
        fetchData()
    }, [])


    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Full Name</TableCell>
                        <TableCell align="right">Course</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {
                        stdListData.map(std => {
                            return (
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {std.name}
                                    </TableCell>
                                    <TableCell align="right"> {std.course}</TableCell>
                                    <TableCell align="right">
                                        {std.email}
                                    </TableCell>
                                    <TableCell align="right">
                                        {std.isActive ? "Active" : "In Active"}
                                    </TableCell>
                                    <TableCell align="right">
                                        edit
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }

                </TableBody>
            </Table>
        </TableContainer>
    );
}