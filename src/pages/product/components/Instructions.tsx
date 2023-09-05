import {
  Autocomplete,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Paper,
  Switch,
  Tab,
  TextField,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import AutoCompleteMultiSelect from '../../components/AutoCompleteMultiselect/AutoCompleteMultiSelect.tsx'
import TextAreaComponents from '../../components/TextAreaComponents/TextAreaComponents.tsx'
import StickyHeadTable from '../../components/SpecificationTable/Specification.tsx'
import DetailsTable from '../../components/SpecificationTable/DetailsTable.tsx'
import InstructionTable from '../../components/SpecificationTable/InstructionTable.tsx'

function Instructions() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [nameProps, setNameProps] = useState('')
  const [descriptionProps, setDescriptionProps] = useState('')



  const handleName = (props) => {
    setName(props)
    
  }
  
  const handleDescription = (props) => {
    setDescription(props)
   
   
  }
  
  const handleSave = () => {
    // <DetailsTable  />
    setNameProps(name)
    setDescriptionProps(description)
    
   
  }
  return (
    <div style={{ backgroundColor: '#f3f0f3' }}>
      <Grid container sx={{ padding: '0.5rem' }}>
        <Grid xs={2}>
          <Typography style={{ paddingTop: '1rem' }}>Name</Typography>
        </Grid>
        <Grid xs={10}>
          <TextAreaComponents label={'Item name'} value={handleName} />
        </Grid>
      </Grid>
      <Grid container sx={{ padding: '0.5rem' }}>
        <Grid xs={2}>
          <Typography style={{ paddingTop: '1rem' }}>Description</Typography>
        </Grid>
        <Grid xs={10}>
          <TextAreaComponents id={1} label={'Description'} value={handleDescription} />
        </Grid>
      </Grid>
      <Grid container sx={{ padding: '0.5rem' }}>
        <Grid item xs={11}></Grid>
        <Grid item xs={1}>
          <Button className="AddItemButtons" onClick={handleSave}>Save</Button>
        </Grid>
      </Grid>
      <Grid container sx={{ padding: '0.5rem' }}>
        <Grid item xs={2}></Grid>
        <Grid item xs={10}>
          <InstructionTable Name={nameProps} Description={descriptionProps}/>
        </Grid>
      </Grid>

      
    </div>
  )
}

export default Instructions
