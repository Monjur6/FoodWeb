import * as React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import FindInPageIcon from '@mui/icons-material/FindInPage'
import Document from './../../../assets/icons/document.png'

import UpArrow from './../../../assets/icons/arrowup.png'
import DownArrow from './../../../assets/icons/down-filled-triangular-arrow.png'
import { useEffect, useState } from 'react'
import { IconButton } from '@mui/material'

// interface Column {
//   id: 'Rank' | 'Header' | 'Details'
//   label: string
//   minWidth?: number

//   align?: 'right'
//   format?: (value: number) => string
// }

// const columns: readonly Column[] = [
//   { id: 'Rank', label: 'Rank', minWidth: 170 },
//   { id: 'Header', label: 'Header', minWidth: 100 },
//   {
//     id: 'Details',
//     label: 'Details',
//     minWidth: 170,

//     align: 'right',
//     format: (value: number) => value.toLocaleString('en-US'),
//   },
// ]

// interface Data {
//   Rank: string
//   Header: string
//   Details: number
//   size: number
//   //   density: number
// }

// function createData(
//   Rank: string,
//   Header: string,
//   Details: number,
//   size: number,
// ): Data {
//   //   const density = Options / size
//   return { Rank, Header, Details, size }
// }

// const rows = [createData('Portion Size', 'Radio', 550, 3287263)]

// function DetailsTable() {
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
//   //specification column button end
//   const handleChangePage = (event: unknown, newPage: number) => {
//     setPage(newPage)
//   }

//   const handleChangeRowsPerPage = (
//     event: React.ChangeEvent<HTMLInputElement>,
//   ) => {
//     setRowsPerPage(+event.target.value)
//     setPage(0)
//   }

//previous code end

const columns = [
  { id: 'rank', label: 'Rank', minWidth: 100 },
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'description', label: 'Description', minWidth: 170 },
]

function createData(rank, name, description) {
  return { rank, name, description }
}
function DetailsTable(props) {
  

  const [rows, setRows] = useState([
    // createData(1, 'Burger', 'Chicken cheese burger'),
    // createData(2, 'Pizza', 'Cheese pizza'),
    
  ])
  
  
  useEffect(() => {
   
    if(props.Name!== '' && props.Description!==''){
      const newRow = createData(rows.length + 1, props.Name, props.Description)
      setRows([...rows, newRow])
    }
 
    
  }, [props.Name, props.Description])

  const handleRankChange = (index, action) => {
    const updatedRows = [...rows]
    const currentRow = updatedRows[index]
    let targetIndex

    if (action === 'increase' && index > 0) {
      targetIndex = index - 1
    } else if (action === 'decrease' && index < rows.length - 1) {
      targetIndex = index + 1
    } else {
      return 
    }

    const targetRow = updatedRows[targetIndex]
    const currentRank = currentRow.rank
    const targetRank = targetRow.rank

    currentRow.rank = targetRank
    targetRow.rank = currentRank

    updatedRows[index] = targetRow
    updatedRows[targetIndex] = currentRow

    setRows(updatedRows)
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
    //                 key={row.Header}
    //               >
    //                 {columns.map((column) => {
    //                   const value = row[column.id]
    //                   return (
    //                     <TableCell key={column.id} align={column.align}>
    //                       {/* {column.id === 'Options' ? (
    //                       <img
    //                         src={Document}
    //                         alt="Document"
    //                         style={{ width: '2rem' }}
    //                       />
    //                     ) : column.format && typeof value === 'number' ? (
    //                       column.format(value)
    //                     ) : (
    //                       value
    //                     )} */}

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
    //                       ) : column.format && typeof value === 'number' ? (
    //                         column.format(value)
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
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow >
                
                {columns.map((column) => (
                  <TableCell
                  sx={{backgroundColor:'#e2eaee'}}
                    key={column.id}
                    align="center"
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            
            <TableBody>
              
                
            {rows.map((row, index) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.rank}
                    >
                      <TableCell align="center">
                      <IconButton
                          disabled={index === 0}
                          onClick={() => handleRankChange(index, 'increase')}
                        >
                          <ArrowUpwardIcon />
                        </IconButton>
                        {row.rank}
                        <IconButton
                          disabled={index === rows.length - 1}
                          onClick={() => handleRankChange(index, 'decrease')}
                        >
                          <ArrowDownwardIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell align="center">{row.name}</TableCell>
                      <TableCell align="center">{row.description}</TableCell>
                      
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>
        
      </Paper>
    </>
  )
}

export default DetailsTable
