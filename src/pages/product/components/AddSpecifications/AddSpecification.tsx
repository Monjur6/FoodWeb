import React, { useState, useEffect } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Grid,
  Box,
  Typography,
  IconButton,
} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import './AddSpecifications.css'
import CloseIcon from '@mui/icons-material/Close'
import arrowUp from '../../../../assets/icons/arrowup.png'
import arrowDown from '../../../../assets/icons/arrowDown.png'
import AddOption from './AddOption/AddOption.tsx'
import ArrowUpIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownIcon from '@mui/icons-material/ArrowDownward'
import { useDispatch, useSelector } from 'react-redux'
import { saveSpecifications } from '../../../../reduxadmin/Actions'

function AddSpecification(props) {
  const { open, onClose } = props
  const [name, setName] = useState('')
  const [buttonStyle, setButtonStyle] = useState('')
  const [anyValue, setAnyValue] = useState('')
  const [textBox, setTextBox] = useState('')
  const [isAnyVisible, setIsAnyVisible] = useState(false)
  const [isTextBoxVisible, setIsTextBoxVisible] = useState(false)
  const [isOptionVisible, setIsOptionVisible] = useState(false)
  const [rows, setRows] = useState([{ id: 1, name: 'Cake', price: '$4' }])
  const dispatch = useDispatch();
  const specifications = useSelector(state => state.specifications);

  //radio button size start
  const radioSpecification = {
    '& .MuiSvgIcon-root': {
      fontSize: '16px',
    },
    '& .MuiTypography-root': {
      fontSize: '16px',
    },
  }
  //radio button size end

  const handleClose = () => {
    onClose()
  }
  //show saved value into Table start 
  const handleSave = () => {
    const newSpecification = {
      Header: name,
      ButtonStyle: buttonStyle,
      options: filteredRows,
      any: anyValue,
      TextBox: textBox

    }
    dispatch(saveSpecifications(newSpecification))
    props.onSave(newSpecification)

    onClose()
  }
  //show saved value into Table end 
  // data preview start here
  useEffect(() => {
    if (props.data !== undefined) {
      setName(props.data.Header);
      setButtonStyle(props.data.ButtonStyle);
      setAnyValue(props.data.any);
      setTextBox(props.data.TextBox);

      setIsAnyVisible(props.data.ButtonStyle === 'Check Box');
      setIsTextBoxVisible(props.data.ButtonStyle === 'TextBox');
      setIsOptionVisible(
        props.data.ButtonStyle === 'Check Box' ||
        props.data.ButtonStyle === 'Radio Button'
      );

      setRows(props.data.options.map((option, index) => ({
        id: index + 1,
        name: option.name,
        price: option.price,
      })))
      console.log(props.data)
    }
  }, [props.data]);
  // data preview end here

  const handleNameChange = (event) => {
    setName(event.target.value)
  }
  //show textfield and datagrid based on radio option start
  const handleButtonStyleChange = (event) => {
    setButtonStyle(event.target.value)
    setIsAnyVisible(event.target.value === 'Check Box')
    setIsTextBoxVisible(event.target.value === 'TextBox')
    setIsOptionVisible(event.target.value === 'Check Box' || event.target.value === 'Radio Button')

  }
  //show textfield and datagrid based on radio option end

  const handleAnyValueChange = (event) => {
    setAnyValue(event.target.value)
  }

  const handleTextBoxChange = (event) => {
    setTextBox(event.target.value)
  }
  const handleAddOptionSave = (option) => {
    const newRow = {
      id: rows.length + 1,
      name: option.name,
      price: option.price,
    }
    setRows((prevRows) => [...prevRows, newRow])
  }
  // row re-order functionality start
  const handleRowMove = (rowId, direction) => {
    setRows((prevRows) => {
      const rowIndex = prevRows.findIndex((row) => row.id === rowId)
      const newRow = prevRows[rowIndex]
      const newRows = [...prevRows]

      if (direction === 'up' && rowIndex > 0) {
        newRows.splice(rowIndex, 1) // Remove the row from the current position
        newRows.splice(rowIndex - 1, 0, newRow) // Insert the row at the new position
      } else if (direction === 'down' && rowIndex < prevRows.length - 1) {
        newRows.splice(rowIndex, 1) // Remove the row from the current position
        newRows.splice(rowIndex + 1, 0, newRow) // Insert the row at the new position
      }

      // Update the ids of the rows based on their new positions
      const updatedRows = newRows.map((row, index) => ({
        ...row,
        id: index + 1,
      }))

      return updatedRows
    })
  }
  // row re-order functionality end

  //datagrid customization start
  const columns = [
    {
      field: 'id',
      headerName: 'Rank',
      width: 117,
      headerClassName: 'SpecificationHeader',
      renderCell: (params) => (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#e7e7e9',
            width: '6rem',
            borderRadius: '5px',
            justifyContent: 'center',
          }}
        >
          <ArrowDownIcon
            style={{ cursor: 'pointer', margin: 'auto', width: 16 }}
            onClick={() => handleRowMove(params.row.id, 'down')}
          />
          <span>{params.value}</span>
          <ArrowUpIcon
            style={{ cursor: 'pointer', margin: 'auto', width: 16 }}
            onClick={() => handleRowMove(params.row.id, 'up')}
          />
        </div>
      ),
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 210,
      cellClassName: 'SpecificationGridSel',
      headerClassName: 'SpecificationHeader',
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 112,
      cellClassName: 'SpecificationGridSel',
      headerClassName: 'SpecificationHeader',
    },
  ]
  //datagrid customization end

  // save option Datagrid valu into filteredRows
  const filteredRows = rows.filter((row) => row.name && row.price)


  const [openOptionDialog, setOpenOptionDialog] = useState(false)

  const handleAddOptionClick = () => {
    setOpenOptionDialog(true)
  }

  return (
    <Dialog open={open} onClose={onClose} className="specificationDialog">
      <DialogTitle disableTypography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
          <Typography variant="h6" className="textColor">
            Add Specification
          </Typography>
          <IconButton aria-label="close" className="closeButton" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent className="textColor">
        <Grid container className="gridSpecificationContainer" spacing={3} alignItems="center">
          <Grid item xs={3}>
            <Typography className="textColor">Name</Typography>
          </Grid>
          <Grid item xs={9}>
            <TextField label="Name" value={name} onChange={handleNameChange} fullWidth margin="normal" InputLabelProps={{ sx: { color: '#371B17' } }} />
          </Grid>
        </Grid>
        <Grid container className="gridSpecificationContainer" spacing={3} alignItems="center">
          <Grid item xs={3}>
            <Typography className="textColor">Button Style</Typography>
          </Grid>
          <Grid item xs={9}>
            <RadioGroup aria-label="buttonStyle" name="buttonStyle" value={buttonStyle} onChange={handleButtonStyleChange} row>
              <FormControlLabel value="Radio Button" control={<Radio size="small" />} label={
                <Typography variant="body2" className="textColor">
                  Radio Button
                </Typography>
              }
                sx={radioSpecification}
              />
              <FormControlLabel value="Check Box" control={<Radio size="small" />} label={
                <Typography variant="body2" className="textColor">
                  Check Box
                </Typography>
              }
                sx={radioSpecification}
              />
              <FormControlLabel value="Button" control={<Radio size="small" />} label={
                <Typography variant="body2" className="textColor">
                  Button
                </Typography>
              }
                sx={radioSpecification}
              />
              <FormControlLabel value="TextBox" control={<Radio size="small" />} label={
                <Typography variant="body2" className="textColor">
                  TextBox
                </Typography>
              }
                sx={radioSpecification}
              />
            </RadioGroup>
          </Grid>
        </Grid>
        {isAnyVisible && (
          <Grid container className="gridSpecificationContainer" spacing={3} alignItems="center">
            <Grid item xs={3}>
              <Typography className="textColor">Any</Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField label="Any 2 / Any 3" value={anyValue} onChange={handleAnyValueChange} fullWidth margin="normal" />
            </Grid>
          </Grid>
        )}
        {isTextBoxVisible && (
          <Grid container className="gridSpecificationContainer" spacing={3} alignItems="center">
            <Grid item xs={3}>
              <Typography className="textColor">Text Box Name</Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField label="Complimentary" value={textBox} onChange={handleTextBoxChange} fullWidth margin="normal" />
            </Grid>
          </Grid>
        )}
        {isOptionVisible && (
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={3} style={{ margin: '0 auto auto' }}>
              <Typography className="textColor">Option</Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography className="textColor" style={{ marginBottom: '1rem' }} onClick={handleAddOptionClick}>
                +Add Option
              </Typography>
              <AddOption open={openOptionDialog} onClose={() => setOpenOptionDialog(false)} onSave={handleAddOptionSave} />
              <div style={{ width: '100%' }}>

                <DataGrid
                  columns={columns}
                  rows={filteredRows}
                  disableColumnMenu
                  disableSelectionOnClick
                  hideFooterPagination
                  rowReordering
                  headerHeight={48}
                  rowHeight={48}
                />
              </div>
            </Grid>
          </Grid>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSave} className="textColor btn">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddSpecification