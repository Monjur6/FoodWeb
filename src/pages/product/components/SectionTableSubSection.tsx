// import React, * as React from 'react'
import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import FindInPageIcon from '@mui/icons-material/FindInPage'
import Document from './../../../assets/icons/document.png'

import UpArrow from './../../../assets/icons/arrowup.png'
import DownArrow from './../../../assets/icons/down-filled-triangular-arrow.png'
import Food from './../../../assets/icons/pancake.png'
import Bin from './../../../assets/icons/recycle-bin.png'
import ChickenIcon from './../../../assets/icons/turkey.png'
import ChickenLegIcon from './../../../assets/icons/chicken-leg.png'
import Burger1Icon from './../../../assets/icons/burger1.png'
import Burger2Icon from './../../../assets/icons/burger.png'
import FullPizzaIcon from './../../../assets/icons/pizza.png'
import pizzaIcon from './../../../assets/icons/pizza (1).png'
import { getMinimalContentHeight } from '@mui/x-data-grid/hooks/features/rows/gridRowsUtils.js'
import { Grid, Typography } from '@mui/material'
import AddOption from './AddSpecifications/AddOption/AddOption'
import { DataGrid } from '@mui/x-data-grid'
import ArrowUpIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownIcon from '@mui/icons-material/ArrowDownward'
import './SectionTable.css'

const imageMap = [
  { code: 1, icon: ChickenIcon },
  { code: 2, icon: ChickenLegIcon },
  { code: 3, icon: Burger1Icon },
  { code: 4, icon: Burger2Icon },
  { code: 5, icon: FullPizzaIcon },
  { code: 6, icon: pizzaIcon },
]
const imageSectionMap = [
  { codeSection: 1, icon: ChickenIcon },
  { codeSection: 2, icon: ChickenLegIcon },
  { codeSection: 3, icon: Burger1Icon },
  { codeSection: 4, icon: Burger2Icon },
  { codeSection: 5, icon: FullPizzaIcon },
  { codeSection: 6, icon: pizzaIcon },
]
function SectionTableSubSection({ selectedValue, selectedSectionValue }) {

  const [rows, setRows] = useState([])
  useEffect(() => {
    if (selectedValue.Icon !== undefined || selectedSectionValue.Section !== undefined) {
      const newRow = {
        id: rows.length + 1,
        Keyword: selectedValue.Keyword,
        Icon: selectedValue.Icon.icon,
        Section: selectedSectionValue.Section.icon,
      }
      console.log(selectedValue)
      setRows((prevRows) => [...prevRows, newRow])
    }
  }, [selectedValue, selectedSectionValue])

  const getFoodImage = (code) => {
    const foundItem = imageMap.find((item) => item.code === code)
    const foundSectionItem = imageSectionMap.find((item) => item.codeSection === code)
    if (foundItem) {
      return foundItem.icon
    }
    else if (foundSectionItem) {
      return foundSectionItem.icon
    }
    return null
  }

  // }
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

  const columns = [
    {
      field: 'id',
      headerName: 'Rank',
      width: 117,

      headerClassName: 'SpecificationHeader',
      headerAlign: 'center',
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
      field: 'Keyword',
      headerName: 'Keyword',
      width: 210,

      cellClassName: 'SpecificationGridSel',
      headerClassName: 'SpecificationHeader',
      headerAlign: 'center',
    },
    {
      field: 'Icon',
      headerName: 'Icon',
      width: 112,

      cellClassName: 'SpecificationGridSel',
      headerClassName: 'SpecificationHeader',
      headerAlign: 'center',
      renderCell: (params) => (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            // backgroundColor: '#e7e7e9',
            width: '6rem',
            borderRadius: '5px',
            justifyContent: 'center',
          }}
        >
          <img src={params.row.Icon} alt="img" style={{ width: '2rem' }} />
        </div>
      ),
    },
    {
      field: 'Section',
      headerName: 'Section',
      width: 112,

      cellClassName: 'SpecificationGridSel',
      headerClassName: 'SpecificationHeader',
      headerAlign: 'center',
      renderCell: (paramSection) => (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            // backgroundColor: '#e7e7e9',
            width: '6rem',
            borderRadius: '5px',
            justifyContent: 'center',
          }}
        >
          <img src={paramSection.row.Section} alt="img" style={{ width: '2rem' }} />
        </div>
      ),
    },
  ]

  // const filteredRows = rows.filter((row) => row.Keyword && row.Icon)

  // Option modal open functionality
  const [openOptionDialog, setOpenOptionDialog] = useState(false)

  const handleAddOptionClick = () => {
    setOpenOptionDialog(true)
  }

  return (
    
    <>
      <Grid container>
       
        <Grid item xs={12}>
        
          <div style={{ width: '100%' }}>
            <DataGrid
            className='specificationTable'
              columns={columns}
              rows={rows}
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
    </>
  )
}

export default SectionTableSubSection
