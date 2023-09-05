import React from 'react'

import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import { Button, Grid } from '@mui/material'
// import filterIcon from './../../assets/icons/filter 1.png'
// import searchIcon from './../../assets/icons/searchIcon 1.png'

import filterIcon from './../../../assets/icons/filter 1.png'
import searchIcon from './../../../assets/icons/searchIcon 1.png'
import AddItemDialogComponent from './AddItemDialog.tsx'

import { useSelector, useDispatch } from 'react-redux'

import { testTrue, testFalse } from './../../../reduxadmin/Actions/index'

function FilterComponents(props) {
  const [open, setOpen] = React.useState(false)
  const dispatch = useDispatch()

  //dialog start
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleAddItem = (AddItemData) => {
    setOpen(AddItemData)
  }
  return (
    <>
      <div>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          mt={2}
          mb={2}
        >
          <Grid item>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Button
                  color="primary"
                  size="medium"
                  variant="contained"
                  style={{ borderRadius: '50%', minWidth: 'auto' }}
                  onClick={handleClickOpen}
                >
                  +
                </Button>
              </Grid>
              <Grid item>
                <img src={filterIcon} alt="" style={{ width: '1rem' }} />
              </Grid>
              <Grid item>Add Filter</Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container flexDirection={'column'} alignItems={'center'}>
              <Grid item>
                <img src={searchIcon} alt="" style={{ width: '1rem' }} />
              </Grid>
              <Grid item>Search</Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <AddItemDialogComponent
        open={open}
        onHandleAddItem={handleAddItem}
        title={props.title}
      />
    </>
  )
}

export default FilterComponents
