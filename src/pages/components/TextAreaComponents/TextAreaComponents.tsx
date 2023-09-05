import React from 'react';
import TextField from '@mui/material/TextField';
import './TextAreaComponents.css'

function TextAreaComponents(props) {
    if (props.id === 1) {
        return (
            <>
                <TextField
                    id="outlined-multiline-static"
                    label={props.label}
                    multiline
                    rows={3}
                    fullWidth
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        props.value(event.target.value);
                      }}
                // sx={{ width: "100%" }}
                />
            </>

        );
    }
    else if (props.id === 2) {
        return (
            <TextField
                id="outlined-number"
                label={props.label}
                type="number"
                fullWidth
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    props.value(event.target.value);
                  }}
            />
        )

    }
    else {
        return (
            <>
                <TextField id="outlined-basic" label={props.label} variant="outlined" fullWidth   onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        props.value(event.target.value);
                      }}/>
            </>
        );
    }

}

export default TextAreaComponents;