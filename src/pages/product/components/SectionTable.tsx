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
import AddOption from './AddSpecifications/AddOption/AddOption.tsx'
import { DataGrid } from '@mui/x-data-grid'
import ArrowUpIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownIcon from '@mui/icons-material/ArrowDownward'
import './SectionTable.css'
// const imageMap = {
//   Chicken: ChickenIcon,
//   ChickenLeg: ChickenLegIcon,
//   Burger: Burger1Icon,
//   Burger2: Burger2Icon,
//   Pizza1: FullPizzaIcon,
//   Pizza2: pizzaIcon,
// }
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

// interface Column {
//   id: 'Rank' | 'Keywords' | 'Icon' | 'Action'
//   label: string
//   minWidth?: number

//   align?: 'right'
//   format?: (value: number) => string
// }

// const columns: readonly Column[] = [
//   { id: 'Rank', label: 'Rank', minWidth: 100 },
//   { id: 'Keywords', label: 'Keywords', minWidth: 100 },
//   {
//     id: 'Icon',
//     label: 'Icon',
//     minWidth: 100,
//   },
//   { id: 'Action', label: 'Action', minWidth: 100 },
// ]

// interface Data {
//   Rank: string
//   Keywords: string
//   Icon: number
//   Action: number
// }

// function createData(
//   Rank: string,
//   Keywords: string,
//   Icon: number,
//   Action: number,
// ): Data {
//   return { Rank, Keywords, Icon, Action }
// }

// const rows = [createData('Portion Size', 'Keyword1', 550, 3287263)]

function SectionTable({ selectedValue, selectedSectionValue }) {
  //   const [page, setPage] = React.useState(0)
  //   const [rowsPerPage, setRowsPerPage] = React.useState(10)
  //   const [Rank, setRank] = React.useState(0)

  //   //specification column button start
  //   const handleIncrement = () => {
  //     setRank(Rank + 1)
  //   }

  //   const handleDecrement = () => {
  //     if (Rank == 0) {
  //       setRank(0)
  //     } else {
  //       setRank(Rank - 1)
  //     }
  //   }
  //specification column button end

  // const { open, onClose } = props

  // const handleClose = () => {
  //   onClose()
  // }

  // const handleSave = () => {
  //   // Handle save logic here
  //   onClose()
  // }

  // const handleNameChange = (event) => {
  //   setName(event.target.value)
  // }

  // const handleButtonStyleChange = (event) => {
  //   setButtonStyle(event.target.value)
  //   setIsAnyVisible(event.target.value === 'checkbox')
  // }

  // const handleAnyValueChange = (event) => {
  //   setAnyValue(event.target.value)
  // }

  // const handleAddOptionSave = (option) => {
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
      width: 128,

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
      width: 300,

      cellClassName: 'SpecificationGridSel',
      headerClassName: 'SpecificationHeader',
      headerAlign: 'center',
    },
    {
      field: 'Icon',
      headerName: 'Icon',
      width: 122,

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
  ]

  // const filteredRows = rows.filter((row) => row.Keyword && row.Icon)

  // Option modal open functionality
  const [openOptionDialog, setOpenOptionDialog] = useState(false)

  const handleAddOptionClick = () => {
    setOpenOptionDialog(true)
  }

  return (
    // <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    //   <TableContainer sx={{ maxHeight: 440 }}>
    //     <Table stickyHeader aria-label="sticky table">
    //       <TableHead>
    //         <TableRow>
    //           {columns.map((column) => (
    //             <TableCell
    //               key={column.id}
    //               align={column.align}
    //               style={{ minWidth: column.minWidth }}
    //             >
    //               {column.label}
    //             </TableCell>
    //           ))}
    //         </TableRow>
    //       </TableHead>
    //       <TableBody>
    //         {rows
    //           .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    //           .map((row) => {
    //             return (
    //               <TableRow
    //                 hover
    //                 role="checkbox"
    //                 tabIndex={-1}
    //                 // key={row.Header}
    //               >
    //                 {columns.map((column) => {
    //                   const value = row[column.id]
    //                   return (
    //                     <TableCell key={column.id} align={column.align}>
    //                       {column.id === 'Rank' ? (
    //                         <div>
    //                           <button
    //                             onClick={handleIncrement}
    //                             style={{ marginRight: '6px' }}
    //                           >
    //                             <img
    //                               src={UpArrow}
    //                               alt="Up"
    //                               style={{ width: '1rem' }}
    //                             />
    //                           </button>
    //                           {Rank}
    //                           <button
    //                             onClick={handleDecrement}
    //                             style={{ marginLeft: '6px' }}
    //                           >
    //                             <img
    //                               src={DownArrow}
    //                               alt="Down"
    //                               style={{ width: '1rem' }}
    //                             />
    //                           </button>
    //                         </div>
    //                       ) : column.id === 'Action' ? (
    //                         <img src={Bin} alt="Up" style={{ width: '2rem' }} />
    //                       ) : column.id === 'Icon' ? (
    //                         // <img
    //                         //   src={Food}
    //                         //   alt="Up"
    //                         //   style={{ width: '2rem' }}
    //                         // />
    //                         <img
    //                           src={getFoodImage(selectedValue?.code)}
    //                           alt={selectedValue?.label}
    //                           style={{ width: '50px', height: '50px' }}
    //                         />
    //                       ) : column.id === 'Keywords' ? (
    //                         selectedValue?.label
    //                       ) : (
    //                         value
    //                       )}
    //                     </TableCell>
    //                   )
    //                 })}
    //               </TableRow>
    //             )
    //           })}
    //       </TableBody>
    //     </Table>
    //   </TableContainer>
    // </Paper>
    <>
      <Grid container>
        {/* <Grid item xs={3} style={{ margin: '0 auto auto' }}>
          <Typography className="textColor">Option</Typography>
        </Grid> */}
        <Grid item xs={12}>
          {/* <Typography
            className="textColor"
            style={{ marginBottom: '1rem' }}
            onClick={handleAddOptionClick}
          >
            +Add Option
          </Typography>
          <AddOption
            open={openOptionDialog}
            onClose={() => setOpenOptionDialog(false)}
            // onSave={handleAddOptionSave}
          /> */}
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

export default SectionTable
