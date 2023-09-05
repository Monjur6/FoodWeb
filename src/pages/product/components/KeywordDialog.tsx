import React, { ChangeEvent, useState } from 'react'

import Typography from '@mui/material/Typography'
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
} from '@mui/material'
import { TabContext, TabList } from '@mui/lab'
import AutoCompleteMultiSelect from '../../components/AutoCompleteMultiselect/AutoCompleteMultiSelect.js'
import TextAreaComponents from '../../components/TextAreaComponents/TextAreaComponents.tsx'
import galleryIcon from './../../../assets/icons/gallery.png'
import plusIcon from './../../../assets/icons/plus.png'
import './AddItem.css'
import { Delete } from '@mui/icons-material'
import CancelIcon from '@mui/icons-material/Cancel'
import StickyHeadTable from '../../components/SpecificationTable/Specification.tsx'
import Details from './../../product/components/Details.tsx'
import Story from './../../product/components/Story.tsx'
import Instructions from './../../product/components/Instructions.tsx'
import Cancel from './../../../assets/icons/close.png'
import DetailsTable from '../../components/SpecificationTable/DetailsTable.tsx'
import SectionTable from './SectionTable.tsx'
import ChickenIcon from './../../../assets/icons/turkey.png'
import ChickenLegIcon from './../../../assets/icons/chicken-leg.png'
import Burger1Icon from './../../../assets/icons/burger1.png'
import Burger2Icon from './../../../assets/icons/burger.png'
import FullPizzaIcon from './../../../assets/icons/pizza.png'
import pizzaIcon from './../../../assets/icons/pizza (1).png'
import { getMinimalContentHeight } from '@mui/x-data-grid/hooks/features/rows/gridRowsUtils.js'



function KeywordDialog(props) {
  

  //test start
 
  const [keyword, setKeyword] = useState(null)
  
 

  const handleKeyword = (event) => {
    setKeyword(event.target.value)
  }
console.log(keyword)
  const onClickSave = () => {
   
   
  }
  //test end

  const handleClose = () => {
    props.onHandleKeywordDialog(false)
  }
 


 
  

 

  

  return (
    <div>
      <React.Fragment>
        <Dialog
          
          open={props.open}
          onClose={handleClose}
        >
          <Grid container>
            <Grid item xs={6}>
              <DialogTitle>Add Keyword</DialogTitle>
            </Grid>
            <Grid item xs={6}>
              <DialogActions>
                <Button onClick={handleClose}>
                  <img src={Cancel} alt="Close" style={{ width: '1.2rem' }} />
                </Button>
              </DialogActions>
            </Grid>
          </Grid>
          <DialogContent style={{ backgroundColor: '#f3f0f3' }}>
            <div>
              <Grid container sx={{ padding: '0.5rem' }}>
                <Grid item xs={2}>
                  <Typography style={{ paddingTop: '2rem' }}>
                    Keyword
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  
                  <TextField
                    label="Name"
                    value={keyword}
                    onChange={handleKeyword}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{ sx: { color: '#371B17' } }}
                  />
                </Grid>
              </Grid>
              

              <Grid container sx={{ padding: '0.5rem' }}>
                <Grid item xs={8}></Grid>

                <Grid item xs={4}>
                  <Button className="AddItemButtons" onClick={onClickSave}>
                    Save
                  </Button>
                </Grid>
              </Grid>

              
            </div>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    </div>
  )
}

export default KeywordDialog
