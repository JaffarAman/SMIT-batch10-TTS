import { TextField } from '@mui/material'
import React from 'react'

const InputField = ({ label = "outlined", type = "text" }) => {
    return (
        <TextField
            id="outlined-basic"
            type={type}
            label={label}
            variant="outlined"
            sx={{ width: "100%" }} />
    )
}

export default InputField