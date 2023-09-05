import React, { useEffect } from 'react'
// import Topbar from './../layouts/topbar/Topbar';
import Tabs from '@mui/material/Tabs'

import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import { Button, Grid, TextareaAutosize } from '@mui/material'

import AutoComplete from '../components/AutoCompleteMultiselect/AutoCompleteMultiSelect.tsx'

import DatatableComponent from '../components/DatatableComponent.tsx'
import FilterComponents from './components/FilterComponents.tsx'
import TextAreaComponents from '../components/TextAreaComponents/TextAreaComponents.tsx'
import StickyHeadTable from '../components/SpecificationTable/Specification.tsx'
import AddSpecification from './components/AddSpecifications/AddSpecification.tsx'
import { useSelector, useDispatch } from 'react-redux'

function Product() {
  const [value, setValue] = React.useState('1')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  const [autoCompleteValue, setAutoCompleteValue] = React.useState([])

  const sectionDatas = [
    { id: 1, title: 'Chicken' },
    { id: 2, title: 'Burger' },
    { id: 3, title: 'Curry' },
    { id: 4, title: 'Soup' },
    { id: 5, title: 'Fries' },
  ]

  const addValue = (props) => {
    console.log(props)
    setAutoCompleteValue(props)
  }

  return (
    <div>
      {/* <AutoComplete label={"Select Filter/Section"} placeholder={"Filter/Section"} value={addValue} datas={sectionDatas} />
            <TextAreaComponents id={2} label={"Text"} /> */}
      {/* <StickyHeadTable /> */}
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h4">Product</Typography>
        </Grid>
        <Grid item>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Admin
            </Link>
            <Typography color="text.primary">Product</Typography>
          </Breadcrumbs>
        </Grid>
      </Grid>
      <div className="tabview">
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Online Menu" value="1" />
              <Tab label="In Store Menu" value="2" />
              <Tab label="Offers" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <FilterComponents title={'Online'} />
            <DatatableComponent />
          </TabPanel>
          <TabPanel value="2">
            <FilterComponents title={'In store menu'} />
            <DatatableComponent />
          </TabPanel>
          <TabPanel value="3">
            <FilterComponents title={'Offers'} />
            <DatatableComponent />
          </TabPanel>
        </TabContext>
      </div>
      <AddSpecification />
    </div>
  )
}

export default Product
