import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasic = () => {
    const a = "Abin" 
    var [val, setval] = useState("Abin")
    var [name, setname] = useState()
    const handleinput = (e) => {
        setval(e.target.value)
        console.log(e.target.value)
    }
    const submit = () => {
    setname(val)
}
    
  return (
      <div>
          <Typography variant="h3">Wellcome{val}</Typography>
          <TextField variant="outlined" label="Enter your name" onChange={handleinput} />
          <Button variant="contained" onClick={submit}>submit</Button>
    </div>
  )
}

export default StateBasic