import React from 'react';
import {Checkbox, Radio, FormControlLabel, Box} from '@material-ui/core/';

function Dialog() {
    
    return (
      <>
        <Box className="dialog">
          <Box className="dialogItem">
            <span>Severity</span>
            <FormControlLabel label="Low" control={<Checkbox />} />
            <FormControlLabel label="Medium" control={<Checkbox />} />
            <FormControlLabel label="High" control={<Checkbox />} />
          </Box>
        </Box>
        <Box className="dialog">
          <Box className="dialogItem">
            <span>Time</span>
            <FormControlLabel label="Last 24 hours" control={<Radio />} />
            <FormControlLabel label="Last 72 hours" control={<Radio />} />
            <FormControlLabel label="Last week" control={<Radio />} />
            <FormControlLabel label="Last 6 months" control={<Radio />} />
          </Box>
        </Box>
      </>
    );
}

export default Dialog;