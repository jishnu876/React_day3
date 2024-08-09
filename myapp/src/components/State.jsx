import { Button, TextField, Typography } from '@mui/material'
import React, { Component, useState } from 'react'

const State = () => {
  var [val, setval] = useState("abin")
  var[name,setname]=useState()
  const handleinput =(e)=>{
    setval(e.target.value)
    console.log(e.target.value)
  }
  const submit = () => {
    setname(val)
  }
  return (
   <div>
      <Typography variant="h3">WELCOME {name}</Typography><br></br>
      <TextField id="standard-basic" label="Enter your name" onChange={handleinput} variant="filled" /><br></br>
      <Button variant="contained" onClick={submit}>submit</Button><br></br>
    </div>
    
  )
}

export default State