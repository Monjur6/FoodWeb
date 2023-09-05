import React, { useEffect, useState } from 'react';

import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import './AutoCompleteMultiSelect.css'
import { option } from 'yargs';

function AutoCompleteMultiSelect(props) {
    useEffect(() => {
        // console.log(props.datas);
    })


    const initialValue = [
        { title: 'Monty Python and the Holy Grail', year: 1975 }];

    const [value, setValue] = useState(initialValue)
    if (props.id === 1) {
        return (
            <div>
                <Autocomplete

                    id="tags-outlined"
                    options={props.datas}
                    getOptionLabel={(option) => option.title}
                    onChange={(value) => { props.value(value); console.log(value) }}
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    filterSelectedOptions
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label={props.label}
                            placeholder={props.placeholder}
                        />
                    )}
                />
            </div>
        );
    }
    else {
        return (
            <div>
                <Autocomplete
                    multiple
                    id="tags-outlined"
                    options={props.datas}
                    getOptionLabel={(option) => option.title}
                    onChange={(value) => { props.value(value); console.log(value) }}
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    filterSelectedOptions
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label={props.label}
                            placeholder={props.placeholder}
                        />
                    )}
                />
            </div>
        );
    }

}

export default AutoCompleteMultiSelect;