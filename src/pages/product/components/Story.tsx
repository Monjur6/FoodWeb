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
import React from 'react'
import AutoCompleteMultiSelect from '../../components/AutoCompleteMultiselect/AutoCompleteMultiSelect.tsx'
import TextAreaComponents from '../../components/TextAreaComponents/TextAreaComponents.tsx'
import StickyHeadTable from '../../components/SpecificationTable/Specification.tsx'

function Story() {
  return (
    <div>
      <Grid container sx={{ padding: '0.5rem' }}>
        <Grid xs={2}>
          <Typography style={{ paddingTop: '1rem' }}>Description</Typography>
        </Grid>
        <Grid xs={10}>
          <TextAreaComponents id={1} label={'Description'} />
        </Grid>
      </Grid>

      <Grid container sx={{ padding: '0.5rem' }}>
        <Grid item xs={11}></Grid>
        <Grid item xs={1}>
          <Button className="AddItemButtons">Save</Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default Story
