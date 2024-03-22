import React from 'react'
import { AdminLayout } from '../../components'
import { Divider } from '@mui/material'
import MuiTable from '../../components/Table'

const StdList = () => {
    return (
        <AdminLayout>
            <h1>Students</h1>
            <Divider />

            <MuiTable />
        </AdminLayout>
    )
}

export default StdList