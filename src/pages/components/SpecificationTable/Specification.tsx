import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import Document from './../../../assets/icons/document.png';
import AddSpecification from '../../product/components/AddSpecifications/AddSpecification.tsx';

interface Column {
  id: 'Header' | 'ButtonStyle' | 'Options';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'Header', label: 'Header', minWidth: 170 },
  { id: 'ButtonStyle', label: 'Button Style', minWidth: 100 },
  {
    id: 'Options',
    label: 'Options',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
];

interface Data {
  Header: string;
  ButtonStyle: string;
  Options: number;
  size: number;
}

function createData(
  Header: string,
  ButtonStyle: string,
  Options: number,
  size: number,
): Data {
  return { Header, ButtonStyle, Options, size };
}

// const rows = [createData('Portion Size', 'Radio', 550, 3287263)];

export default function StickyHeadTable({ rows, props }) {
  const [specificationRows, setSpecificationRows] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState('');

  const handleAddSpecification = (newSpecification) => {
    setSpecificationRows((prevRows) => [...prevRows, newSpecification]);
  };

  //data preview and AddSpecification dailog open functionality start
  const handleOpen = (id) => {
    setSelectedData(rows[id]);
    setOpen(true);
  };
  //data preview and AddSpecification dailog open functionality end.

  const handleCloseSpecifications = () => {
    setOpen(false);
  };

  // const handleChangePage = (event: unknown, newPage: number) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (
  //   event: React.ChangeEvent<HTMLInputElement>,
  // ) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.ButtonStyle}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === 'Options' ? (
                            <img
                              src={Document}
                              alt="Document"
                              style={{ width: '2rem' }}
                              onClick={() => {
                                handleOpen(index);
                              }}
                            />
                          ) : column.format && typeof value === 'number' ? (
                            column.format(value)
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {selectedData && (
        <AddSpecification
          open={open}
          onClose={handleCloseSpecifications}
          onSave={handleAddSpecification}
          data={selectedData}
        />

      )}
    </Paper>
  );
}