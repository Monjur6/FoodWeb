import React, { ChangeEvent, useEffect, useState } from 'react'

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
import AutoCompleteMultiSelect from '../../components/AutoCompleteMultiselect/AutoCompleteMultiSelect.tsx'
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
import AddSectionDialog from './AddSectionDialog.tsx'
import AddSpecification from './AddSpecifications/AddSpecification.tsx'
import KeywordDialog from './KeywordDialog.tsx'
interface ImageUploadState {
  // selectedImage: string | null
  selectedImages: string[]
}

function AddItemDialogComponent(props) {
  const [value, setValue] = React.useState('1')
  const [switchCheck, setswitchCheck] = useState(false)
  const [defaultvalue, setDefaultvalue] = useState({})
  // const { title } = props.title
  //Addsection dialog control start
  const [openAddKeyword, setOpenAddKeyword] = useState(false)

  const [openAddSection, setOpenAddSection] = useState(false);
  const [dialogType, setDialogType] = useState('');

  const handleClickOpen = () => {
    setOpenAddSection(true);
    setDialogType('add');
  }
  const handleClickOpenOk = () => {
    setOpenAddSection(true);
    setDialogType('sub');
  }
  const handleClickKeyword = () => {
    setOpenAddKeyword(true)
  }
  const handleAddItem = (AddSectionData) => {
    setOpenAddSection(AddSectionData)
  }

  const handleKeywordDialog = (KeywordDialog) => {
    setOpenAddKeyword(KeywordDialog)
  }
  //AddSpecification modal open functionality
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleCloseSpecifications = () => {
    setOpen(false)
  }
  //Addsection dialog controll end

  //image upload code start

  const [state, setState] = useState<ImageUploadState>({
    selectedImages: [],
  })

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      const imagesArray: string[] = []
      const remainingSlots = 5 - state.selectedImages.length
      const filesToUpload = Array.from(files).slice(0, remainingSlots)
      for (let i = 0; i < filesToUpload.length; i++) {
        const file = filesToUpload[i]
        const reader = new FileReader()
        reader.onloadend = () => {
          imagesArray.push(reader.result as string)
          if (imagesArray.length === filesToUpload.length) {
            const updatedImages = [...state.selectedImages, ...imagesArray]
            setState({ selectedImages: updatedImages })
          }
        }
        reader.readAsDataURL(file)
      }
    }
  }

  const handleDeleteImage = (index: number) => {
    const updatedImages = [...state.selectedImages]
    updatedImages.splice(index, 1)
    setState({ selectedImages: updatedImages })
  }
  //image upload code end

  const handleSwitchChange = () => {
    setswitchCheck(!switchCheck)
  }

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  const handleClose = () => {
    props.onHandleAddItem(false)
  }
  const [autoCompleteValue, setAutoCompleteValue] = React.useState([])
  const [specificationRows, setSpecificationRows] = React.useState([])
  const handleAddSpecification = (newSpecification) => {
    // Add the new specification to the existing rows data
    setSpecificationRows((prevRows) => [...prevRows, newSpecification])
  }
  const Menudata = [
    { id: 1, title: 'In Store Menu' },
    { id: 2, title: 'Online' },
    { id: 3, title: 'Offer' },
  ]
  useEffect(() => {
    if (props.title === 'Offers') {
      setDefaultvalue(Menudata[2])
    } else if (props.title === 'Online') {
      setDefaultvalue(Menudata[1])
    } else {
      setDefaultvalue(Menudata[0])
    }
  }, [props])
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
    <>
      <div>
        <React.Fragment>
          <Dialog
            fullWidth={true}
            maxWidth={'xl'}
            open={props.open}
            onClose={handleClose}
          >
            <Grid container>
              <Grid item xs={6}>
                <DialogTitle>Add item</DialogTitle>
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
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="Add item" value="1" />
                    <Tab label="Details" value="2" />
                    <Tab label="Story" value="3" />
                    <Tab label="Instruction" value="4" />
                  </TabList>
                </Box>
              </TabContext>
              {value === '1' && (
                <div>
                  <Grid container sx={{ padding: '0.5rem' }}>
                    <Grid item xs={2}>
                      <Typography style={{ paddingTop: '1rem' }}>
                        Main section
                      </Typography>
                    </Grid>
                    <Grid item xs={9}>
                      {/* <AutoCompleteMultiSelect
                        label={props.title}
                        placeholder={'Filter/Section'}
                        value={addValue}
                        datas={Menudata}
                        id={1}
                      /> */}
                      <Autocomplete
                        fullWidth={true}
                        options={Menudata}
                        defaultValue={defaultvalue}
                        getOptionLabel={(option) => option.title}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="limitTags"
                            placeholder="Favorites"
                          />
                        )}
                      // sx={{ width: '500px' }}
                      />
                    </Grid>
                    <Grid item xs={1} className="AddItemplusIcon">
                      <img src={plusIcon} alt="+" />
                    </Grid>
                  </Grid>
                  <Grid container sx={{ padding: '0.5rem' }}>
                    <Grid item xs={2}>
                      <Typography style={{ paddingTop: '1rem' }}>
                        Section/Filter
                      </Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <AutoCompleteMultiSelect
                        label={'Section/Add new section'}
                        placeholder={'Filter/Section'}
                        value={addValue}
                        datas={sectionDatas}
                      />
                    </Grid>
                    <Grid item xs={1} className="AddItemplusIcon">
                      <img src={plusIcon} alt="+" onClick={handleClickOpen} />
                    </Grid>
                  </Grid>
                  <Grid container sx={{ padding: '0.5rem' }}>
                    <Grid item xs={2}>
                      <Typography style={{ paddingTop: '1rem' }}>
                        Sub section/Sub filter
                      </Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <Switch
                        checked={switchCheck}
                        onChange={handleSwitchChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                      />
                    </Grid>
                  </Grid>
                  {switchCheck && (
                    <Grid container sx={{ padding: '0.5rem' }}>
                      <Grid item xs={2}></Grid>
                      <Grid item xs={9}>
                        <AutoCompleteMultiSelect
                          label={'Sub section/Add new section'}
                          placeholder={'Filter/Section'}
                          value={addValue}
                          datas={sectionDatas}
                        />
                      </Grid>

                      <Grid item xs={1} className="AddItemplusIcon">
                        <img src={plusIcon} alt="+" onClick={handleClickOpenOk} />
                      </Grid>
                    </Grid>
                  )}

                  <Grid container sx={{ padding: '0.5rem' }}>
                    <Grid xs={2}>
                      <Typography style={{ paddingTop: '1rem' }}>
                        Name
                      </Typography>
                    </Grid>
                    <Grid xs={9}>
                      <TextAreaComponents label={'Item name'} />
                    </Grid>
                  </Grid>
                  <Grid container sx={{ padding: '0.5rem' }}>
                    <Grid xs={2}>
                      <Typography style={{ paddingTop: '1rem' }}>
                        Description
                      </Typography>
                    </Grid>
                    <Grid xs={9}>
                      <TextAreaComponents id={1} label={'Description'} />
                    </Grid>
                  </Grid>
                  <Grid container sx={{ padding: '0.5rem' }}>
                    <Grid xs={2}>
                      <Typography style={{ paddingTop: '1rem' }}>
                        Image
                      </Typography>
                    </Grid>
                    <Grid xs={9}>
                      <Button
                        variant="contained"
                        component="label"
                        //   color="primary"
                        style={{ backgroundColor: 'white', color: 'gray' }}
                      >
                        <img
                          src={galleryIcon}
                          alt="photo"
                          style={{ width: '2rem' }}
                        />
                        Upload
                        <input
                          hidden
                          accept="image/*"
                          multiple
                          type="file"
                          onChange={handleImageUpload}
                          disabled={state.selectedImages.length >= 5}
                        />
                      </Button>
                    </Grid>

                    {/* image show start */}
                    <Grid container sx={{ padding: '0.5rem' }}>
                      <Grid item xs={2}></Grid>
                      <Grid item xs={9}>
                        <Grid container spacing={2}>
                          {state.selectedImages.map((image, index) => (
                            <Grid item xs={2} sm={2} md={2} key={index}>
                              {/* <Paper> */}
                              <div
                                style={{
                                  position: 'relative',
                                  paddingTop: '20px',
                                }}
                              >
                                <img
                                  src={image}
                                  alt={`Preview ${index + 1}`}
                                  style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    objectFit: 'cover',
                                  }}
                                />
                                <IconButton
                                  style={{
                                    position: 'absolute',
                                    top: '-6px',
                                    right: '-23px',
                                    color: 'gray',
                                  }}
                                  onClick={() => handleDeleteImage(index)}
                                >
                                  <CancelIcon />
                                </IconButton>
                              </div>
                              {/* </Paper> */}
                            </Grid>
                          ))}
                        </Grid>
                      </Grid>
                    </Grid>
                    {/* image show end */}
                  </Grid>
                  <Grid container sx={{ padding: '0.5rem' }}>
                    <Grid item xs={2}>
                      <Typography style={{ paddingTop: '1rem' }}>
                        Keywords
                      </Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <AutoCompleteMultiSelect
                        label={''}
                        placeholder={'Filter/Section'}
                        value={addValue}
                        datas={sectionDatas}
                      />
                    </Grid>
                    <Grid item xs={1} className="AddItemplusIcon">
                      <img src={plusIcon} alt="+" onClick={handleClickKeyword} />
                    </Grid>
                  </Grid>
                  <Grid container sx={{ padding: '0.5rem' }}>
                    <Grid xs={2}>
                      <Typography style={{ paddingTop: '1rem' }}>
                        Price (Exclusive)
                      </Typography>
                    </Grid>
                    <Grid xs={9}>
                      <TextAreaComponents id={2} label={'Price (Exclusive)'} />
                    </Grid>
                  </Grid>
                  <Grid container sx={{ padding: '0.5rem' }}>
                    <Grid xs={2}>
                      <Typography style={{ paddingTop: '1rem' }}>
                        Tax (Amount)
                      </Typography>
                    </Grid>
                    <Grid xs={9}>
                      <TextAreaComponents id={2} label={'Tax (Amount)'} />
                    </Grid>
                  </Grid>
                  <Grid container sx={{ padding: '0.5rem' }}>
                    <Grid xs={2}>
                      <Typography style={{ paddingTop: '1rem' }}>
                        Price (Inclusive)
                      </Typography>
                    </Grid>
                    <Grid xs={9}>
                      <TextAreaComponents id={2} label={'Price (Inclusive)'} />
                    </Grid>
                  </Grid>
                  <Grid container sx={{ padding: '0.5rem' }}>
                    <Grid xs={2}>
                      <Typography style={{ paddingTop: '1rem' }}>
                        Net weight
                      </Typography>
                    </Grid>
                    <Grid xs={9}>
                      <TextAreaComponents id={2} label={'Net weight'} />
                    </Grid>
                  </Grid>
                  <Grid container sx={{ padding: '0.5rem' }}>
                    <Grid item xs={2}>
                      <Typography>Specifications</Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <Typography onClick={handleOpen}>
                        +Add specifications
                      </Typography>
                      <AddSpecification
                        open={open}
                        onClose={handleCloseSpecifications}
                        onSave={handleAddSpecification}
                      />
                    </Grid>
                  </Grid>
                  <Grid container sx={{ padding: '0.5rem' }}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={9}>
                      <StickyHeadTable rows={specificationRows} />
                    </Grid>
                  </Grid>
                  <Grid container sx={{ padding: '0.5rem' }}>
                    <Grid item xs={8}></Grid>
                    <Grid item xs={2}>
                      <Button className="AddItemButtons">Preview</Button>
                    </Grid>
                    <Grid item xs={2}>
                      <Button className="AddItemButtons">Save</Button>
                    </Grid>
                  </Grid>
                </div>
              )}
              {value === '2' && (
                <div>
                  <Details />
                </div>
              )}
              {value === '3' && (
                <div>
                  <Story />
                </div>
              )}
              {value == '4' && (
                <div>
                  <Instructions />
                </div>
              )}
            </DialogContent>
            {/* <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions> */}
          </Dialog>
        </React.Fragment>
      </div>
      <AddSectionDialog open={openAddSection}
        dialogType={dialogType} onHandleAddItem={handleAddItem} />
      <KeywordDialog open={openAddKeyword} onHandleKeywordDialog={handleKeywordDialog} />
    </>
  )
}
export default AddItemDialogComponent
