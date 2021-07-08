import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';

const housetype = [
    {
        value: 'forSale',
        label: 'Sale',
    },
    {
        value: 'forRent',
        label: 'Rent',
    },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const HouseListingForm = () => {
  const classes = useStyles();
  const [house, setHouse] = useState('Sale');

  const handleChange = (event) => {
    setHouse(event.target.value);
  };
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField type="text" id="filled-basic" label="Full Name" variant="filled" />
        <TextField type="number" id="filled-basic" label="House Price" variant="filled" />
        <TextField type="text" id="filled-basic" label="House Location(state)" variant="filled" />
        <TextField type="text" id="filled-basic" label="House Location(full address)" variant="filled" />
        <TextField
          id="filled-select-currency"
          select
          label="Sell or Rent"
          value={house}
          onChange={handleChange}
          variant="filled"
        >
          {housetype.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                  {option.label}
              </MenuItem>
          ))}
        </TextField>
        <TextField type="number" id="filled-basic" label="Number of Bedrooms" variant="filled" />
        <TextField type="number" id="filled-basic" label="Number of Bathrooms" variant="filled" />
        <TextField type="number" id="filled-basic" label="Number of Garages" variant="filled" />
      </form>
    </div>
  );
};

export default HouseListingForm;
