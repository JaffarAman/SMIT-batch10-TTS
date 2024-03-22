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



export default function AttendanceTable({ attendanceListData }) {

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Full Name</TableCell>
                        <TableCell align="right">Course</TableCell>
                        <TableCell align="right">checkIn</TableCell>
                        <TableCell align="right">checkOut</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {
                        attendanceListData.map(std => {
                            return (
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {std.name}
                                    </TableCell>
                                    <TableCell align="right"> {std.course}</TableCell>
                                    <TableCell align="right">
                                        {std.checkIn}
                                    </TableCell>
                                    <TableCell align="right">
                                        {std.checkOut}

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