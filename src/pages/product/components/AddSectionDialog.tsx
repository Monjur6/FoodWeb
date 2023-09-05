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
import SectionTableSubSection from './SectionTableSubSection.tsx'

// const imageMap = {
//   Chicken: ChickenIcon,
//   ChickenLeg: ChickenLegIcon,
//   Burger: Burger1Icon,
//   Burger2: Burger2Icon,
//   Pizza1: FullPizzaIcon,
//   Pizza2: pizzaIcon,
// }
const imageMap = [
  { code: 1, icon: ChickenIcon, label: 'Chicken' },
  { code: 2, icon: ChickenLegIcon, label: 'Chicken' },
  { code: 3, icon: Burger1Icon, label: 'Chicken' },
  { code: 4, icon: Burger2Icon, label: 'Chicken' },
  { code: 5, icon: FullPizzaIcon, label: 'Chicken' },
  { code: 6, icon: pizzaIcon, label: 'Chicken' },
]
const imageSectionMap = [
  { codeSection: 1, icon: ChickenIcon, label: 'Chicken' },
  { codeSection: 2, icon: ChickenLegIcon, label: 'Chicken' },
  { codeSection: 3, icon: Burger1Icon, label: 'Chicken' },
  { codeSection: 4, icon: Burger2Icon, label: 'Chicken' },
  { codeSection: 5, icon: FullPizzaIcon, label: 'Chicken' },
  { codeSection: 6, icon: pizzaIcon, label: 'Chicken' },
]

function AddSectionDialog(props) {
  //   const [value, setValue] = React.useState('1')

  //test start
  const [selectedValue, setSelectedValue] = useState<any>(null)
  const [selectedSectionValue, setSelectedSectionValue] = useState<any>(null)
  const [selectedData, setSelectedData] = useState({})
  const [keyword, setKeyword] = useState(null)
  // const [rank, setRank] = useState<any>(null)

  // const handleAutocompleteChange = (event: any, value: any) => {
  //   var sectionTableData = value
  //   setSelectedValue(sectionTableData)
  //   console.log(selectedValue)
  // }
  const handleAutocompleteChange = (event: ChangeEvent<{}>, value: any) => {
    setSelectedValue(value)
  }
  const handleAutocompleteSectionChange = (event: ChangeEvent<{}>, value: any) => {
    setSelectedSectionValue(value)
  }
  const handleKeyword = (event) => {
    setKeyword(event.target.value)
  }

  const onClickSave = () => {
    // setSelectedValue(selectedData)
    const Data = {
      Icon: selectedValue,
      Keyword: keyword,
      Section: selectedSectionValue,
    }
    setSelectedData(Data)
  }

  //test end

  const handleClose = () => {
    props.onHandleAddItem(false)
  }
  const [autoCompleteValue, setAutoCompleteValue] = React.useState([])

  // const Menudata = [
  //   { id: 1, title: 'In Store Menu' },
  //   { id: 2, title: 'Online' },
  //   { id: 3, title: 'Offer' },
  // ]

  // const sectionDatas = [
  //   { id: 1, title: 'Chicken' },
  //   { id: 2, title: 'Burger' },
  //   { id: 3, title: 'Curry' },
  //   { id: 4, title: 'Soup' },
  //   { id: 5, title: 'Fries' },
  // ]

  const addValue = (props) => {
    setAutoCompleteValue(props)
  }

  const renderOption = (option) => (
    <Grid container alignItems="center">
      <Grid item>
        <img src={option.icon} alt="Icon" style={{ width: '1rem' }} />
      </Grid>
      <Grid item>
        <Typography>{option.title}</Typography>
      </Grid>
    </Grid>
  )

  const FoodItem = [
    { code: 1, label: 'Chicken' },
    { code: 2, label: 'Chicken' },
    { code: 3, label: 'Burger' },
    { code: 4, label: 'Burger' },
    { code: 5, label: 'Pizza' },
    { code: 6, label: 'Pizza' },
  ]
  const FoodSectionItem = [
    { codeSection: 1, label: 'Chicken' },
    { codeSection: 2, label: 'Chicken' },
    { codeSection: 3, label: 'Burger' },
    { codeSection: 4, label: 'Burger' },
    { codeSection: 5, label: 'Pizza' },
    { codeSection: 6, label: 'Pizza' },
  ]
  const getFoodSectionImage = (codeSection) => {
    const foundSectionItem = imageSectionMap.find((item) => item.codeSection === codeSection)
    if (foundSectionItem) {
      return foundSectionItem.icon
    }
    return null
  }
  const getFoodImage = (code) => {
    // if (code in imageMap) {
    //   return imageMap[code]
    // }
    // return null
    const foundItem = imageMap.find((item) => item.code === code)
    if (foundItem) {
      return foundItem.icon
    }
    return null
  }
  // const filterOptions = (options, { inputValue }) => {
  //   return options.filter((option) =>
  //     option.label.toLowerCase().includes(inputValue.toLowerCase()),
  //   )
  // }
  const { open, onClose, dialogType } = props;
  return (
    <div >
      <React.Fragment>
        <Dialog
          // fullWidth={true}
          // maxWidth={'xl'}
          className='addSectionDialog'
          open={props.open}
          onClose={handleClose}
        >
          <Grid container>
            <Grid item xs={6}>
              {dialogType === 'add' && <DialogTitle>Add Section</DialogTitle>}
              {dialogType === 'sub' && <DialogTitle>Sub Section</DialogTitle>}
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
                  {/* <TextAreaComponents
                    label={'Keywords'}
                    value={keyword}
                    onChange={handleKeyword}
                  /> */}
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
              {dialogType === 'sub' &&
                <Grid container sx={{ padding: '0.5rem' }}>
                  <Grid item xs={2}>
                    <Typography style={{ paddingTop: '1rem' }}>Section</Typography>
                  </Grid>
                  <Grid item xs={9}>
                    {/* <AutoCompleteMultiSelect
                    renderOption={renderOption}
                    label={'Section/Add new section'}
                    placeholder={'Filter/Section'}
                    value={addValue}
                    datas={sectionDatas}
                    id={1}
                  /> */}

                    <Autocomplete
                      id="country-select-demo"
                      // sx={{ width: 300 }}
                      options={imageSectionMap}
                      value={selectedSectionValue}
                      onChange={handleAutocompleteSectionChange}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      renderOption={(props, option) => (
                        <Box
                          component="li"
                          sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                          {...props}
                        >
                          {/* <img
                            src={getFoodSectionImage(option.codeSection)}
                            alt=""
                            style={{ width: '2rem' }}
                          /> */}
                          {option.label}
                        </Box>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Select a section"
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: 'new-password', // disable autocomplete and autofill
                          }}
                        />
                      )}
                    // filterOptions={filterOptions}
                    />
                  </Grid>
                  <Grid item xs={1} className="AddItemplusIcon">
                    <img src={plusIcon} alt="+" />
                  </Grid>
                </Grid>
              }
              <Grid container sx={{ padding: '0.5rem' }}>
                <Grid item xs={2}>
                  <Typography style={{ paddingTop: '1rem' }}>Icon</Typography>
                </Grid>
                <Grid item xs={9}>
                  {/* <AutoCompleteMultiSelect
                    renderOption={renderOption}
                    label={'Section/Add new section'}
                    placeholder={'Filter/Section'}
                    value={addValue}
                    datas={sectionDatas}
                    id={1}
                  /> */}

                  <Autocomplete
                    id="country-select-demo"
                    // sx={{ width: 300 }}
                    options={imageMap}
                    value={selectedValue}
                    onChange={handleAutocompleteChange}
                    autoHighlight
                    getOptionLabel={(option) => option.label}
                    renderOption={(props, option) => (
                      <Box
                        component="li"
                        sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                        {...props}
                      >
                        <img
                          src={getFoodImage(option.code)}
                          alt=""
                          style={{ width: '2rem' }}
                        />
                        {option.label}
                      </Box>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Select a icon"
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: 'new-password', // disable autocomplete and autofill
                        }}
                      />
                    )}
                  // filterOptions={filterOptions}
                  />
                </Grid>
                <Grid item xs={1} className="AddItemplusIcon">
                  <img src={plusIcon} alt="+" />
                </Grid>
              </Grid>
              <Grid container sx={{ padding: '0.5rem' }}>
                <Grid item xs={2}>
                  <Typography style={{ paddingTop: '1rem' }}>Rank</Typography>
                </Grid>
                <Grid item xs={9}>
                  <TextAreaComponents label={'Rank'} />
                </Grid>
              </Grid>

              <Grid container sx={{ padding: '0.5rem' }}>
                <Grid item xs={9}></Grid>

                <Grid item xs={2}>
                  <Button className="AddItemButtons" onClick={onClickSave}>
                    Save
                  </Button>
                </Grid>
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid container sx={{ padding: '0.5rem' }}>
                <Grid item xs={2}></Grid>
                <Grid item xs={9}>
                {dialogType === 'add' && <SectionTable selectedValue={selectedData} selectedSectionValue={selectedData} />}
                {dialogType === 'sub' && <SectionTableSubSection selectedValue={selectedData} selectedSectionValue={selectedData} />}
                </Grid>
              </Grid>
            </div>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    </div>
  )
}

export default AddSectionDialog
