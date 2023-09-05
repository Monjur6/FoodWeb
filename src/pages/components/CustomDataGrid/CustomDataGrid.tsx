import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

function CustomDataGrid() {
  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 5,
  });
  const columns = [
    {
      field: 'checkbox',
      headerName: 'Checkbox',
      renderCell: () => <input type="checkbox" />,
    },
    { field: 'name', headerName: 'Name' , width: 200},
    { field: 'description', headerName: 'Description',width: 200 },
    { field: 'section', headerName: 'Section',width: 200 },
    { field: 'keywords', headerName: 'Keywords',width: 200 },
    { field: 'actions', headerName: 'Actions' ,width: 200},
  ];

  const dataRows = [
    { id: 1, checkbox: '', name: 'Cupcake', description: '', section: '', keywords: '', actions: '' },
    { id: 2, checkbox: '', name: 'Donut', description: '', section: '', keywords: '', actions: '' },
    { id: 3, checkbox: '', name: 'Eclair', description: '', section: '', keywords: '', actions: '' },
    { id: 4, checkbox: '', name: 'Frozen yoghurt', description: '', section: '', keywords: '', actions: '' },
    { id: 5, checkbox: '', name: 'Honeycomb', description: '', section: '', keywords: '', actions: '' },
    { id: 6, checkbox: '', name: 'Ice cream sandwich', description: '', section: '', keywords: '', actions: '' },
    { id: 7, checkbox: '', name: 'Jelly Bean', description: '', section: '', keywords: '', actions: '' },
    { id: 8, checkbox: '', name: 'KitKat', description: '', section: '', keywords: '', actions: '' },
    { id: 9, checkbox: '', name: 'Lollipop', description: '', section: '', keywords: '', actions: '' },
    { id: 10, checkbox: '', name: 'Marshmallow', description: '', section: '', keywords: '', actions: '' },
    { id: 11, checkbox: '', name: 'Nougat', description: '', section: '', keywords: '', actions: '' },
    { id: 12, checkbox: '', name: 'Oreo', description: '', section: '', keywords: '', actions: '' },
  ];
  const [rowCountState, setRowCountState] = React.useState(dataRows.length);
  const { page, pageSize } = paginationModel;
  const startRowIndex = page * pageSize;
  const endRowIndex = (page + 1) * pageSize;
  const rows = dataRows.slice(startRowIndex, endRowIndex);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        rowCount={rowCountState}
        paginationModel={paginationModel}
        paginationMode="server"
        onPaginationModelChange={setPaginationModel}
      />
    </div>
  );
}

export default CustomDataGrid;
