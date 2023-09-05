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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import AutoCompleteMultiSelect from '../../components/AutoCompleteMultiselect/AutoCompleteMultiSelect.tsx'
import TextAreaComponents from '../../components/TextAreaComponents/TextAreaComponents.tsx'
import StickyHeadTable from '../../components/SpecificationTable/Specification.tsx'
import DetailsTable from '../../components/SpecificationTable/DetailsTable.tsx'

function Details() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [nameProps, setNameProps] = useState('')
  const [descriptionProps, setDescriptionProps] = useState('')



  const handleName = (props) => {
    setName(props)
    
  }
  
  const handleDescription = (props) => {
    setDescription(props)
   
   
  }
  
  const handleSave = () => {
    // <DetailsTable  />
    setNameProps(name)
    setDescriptionProps(description)
    
   
  }

  return (
    <div>
      <Grid container sx={{ padding: '0.5rem' }}>
        <Grid xs={2}>
          <Typography style={{ paddingTop: '1rem' }}>Name</Typography>
        </Grid>
        <Grid xs={10}>
          <TextAreaComponents
            label={'Item name'}
            value={handleName}
          />
        </Grid>
      </Grid>
      <Grid container sx={{ padding: '0.5rem' }}>
        <Grid xs={2}>
          <Typography style={{ paddingTop: '1rem' }}>Description</Typography>
        </Grid>
        <Grid xs={10}>
          <TextAreaComponents
            id={1}
            label={'Description'}
           value={handleDescription}
          />
          
        </Grid>
      </Grid>
      <Grid container sx={{ padding: '0.5rem' }}>
        <Grid item xs={11}></Grid>
        <Grid item xs={1}>
          <Button className="AddItemButtons" onClick={handleSave}>
            Save
          </Button>
        </Grid>
      </Grid>
      <Grid container sx={{ padding: '0.5rem' }}>
        <Grid item xs={2}></Grid>
        <Grid item xs={10}>
          <DetailsTable Name={nameProps} Description={descriptionProps} />
        </Grid>
      </Grid>

     
    </div>
    // <>
    //   <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    //     <TableContainer sx={{ maxHeight: 440 }}>
    //       <Table stickyHeader aria-label="sticky table">
    //         <TableHead>
    //           <TableRow>
    //             {columns.map((column) => (
    //               <TableCell
    //                 key={column.id}
    //                 align="left"
    //                 style={{ minWidth: column.minWidth }}
    //               >
    //                 {column.label}
    //               </TableCell>
    //             ))}
    //           </TableRow>
    //         </TableHead>
    //         <TableBody>
    //           {rows
    //             .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    //             .map((row, index) => (
    //               <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
    //                 <TableCell>{row.rank}</TableCell>
    //                 <TableCell>{row.name}</TableCell>
    //                 <TableCell>{row.description}</TableCell>
    //                 <TableCell>
    //                   <button
    //                     disabled={index === 0}
    //                     onClick={() => handleRankChange(index, 'decrease')}
    //                   >
    //                     Decrease
    //                   </button>
    //                   <button
    //                     disabled={index === rows.length - 1}
    //                     onClick={() => handleRankChange(index, 'increase')}
    //                   >
    //                     Increase
    //                   </button>
    //                 </TableCell>
    //               </TableRow>
    //             ))}
    //         </TableBody>
    //       </Table>
    //     </TableContainer>
    //     <TablePagination
    //       rowsPerPageOptions={[10, 25, 100]}
    //       component="div"
    //       count={rows.length}
    //       rowsPerPage={rowsPerPage}
    //       page={page}
    //       onPageChange={handleChangePage}
    //       onRowsPerPageChange={handleChangeRowsPerPage}
    //     />
    //     <form onSubmit={handleFormSubmit}>
    //       <input
    //         type="text"
    //         placeholder="Name"
    //         value={name}
    //         onChange={(event) => setName(event.target.value)}
    //       />
    //       <input
    //         type="text"
    //         placeholder="Description"
    //         value={description}
    //         onChange={(event) => setDescription(event.target.value)}
    //       />
    //       <button type="submit">Add Row</button>
    //     </form>
    //   </Paper>
    // </>
  )
}

export default Details
