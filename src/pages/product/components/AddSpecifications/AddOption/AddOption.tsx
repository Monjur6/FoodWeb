import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Typography,
  IconButton,
  Box,
  Grid,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function AddOption(props) {
  const { open, onClose, onSave } = props;

  const [nameOption, setNameOption] = useState('');
  const [priceOption, setPriceOption] = useState('');

  const handleClose = () => {
    onClose();
  };

  const handleSave = () => {
    const option = {
      name: nameOption,
      price: priceOption,
    };
    onSave(option);
    onClose();
  };

  const handleNameChange = (event) => {
    setNameOption(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPriceOption(event.target.value);
  };

  return (
    <Dialog open={open} onClose={handleClose} className="specificationDialog specificationOptionDialog">
      <DialogTitle disableTypography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" className="textColor">
            Add Option
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
            <TextField
              label="Name"
              value={nameOption}
              onChange={handleNameChange}
              fullWidth
              margin="normal"
              InputLabelProps={{ sx: { color: '#371B17' } }}
            />
          </Grid>
          <Grid item xs={3}>
            <Typography className="textColor">Price</Typography>
          </Grid>
          <Grid item xs={9}>
            <TextField
              label="Price"
              value={priceOption}
              onChange={handlePriceChange}
              fullWidth
              margin="normal"
              InputLabelProps={{ sx: { color: '#371B17' } }}
            />
            <Typography style={{ color: 'red', fontSize: '10px' }}>* Put zero(0) if no effect</Typography>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSave} className="textColor btn">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddOption;
