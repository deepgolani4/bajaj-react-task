import { useState } from 'react';
import millify from 'millify';
import HTMLReactParser from 'html-react-parser';
import {TableCell, TableRow, IconButton, Collapse, Skeleton } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Row(props) {
    const { row } = props;
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} onClick={() => setOpen(!open)}>
          {row ? 
          <>
            <TableCell align="center">{row.name}</TableCell>
            <TableCell align="center">${millify(row.volume)}</TableCell>
            <TableCell align="center">{millify(row.numberOfMarkets)}</TableCell>
            <TableCell align="center">{millify(row.marketShare)}%</TableCell>
          </>:
          <>
            <TableCell align="center"><Skeleton variant="text" /></TableCell>
            <TableCell align="center"><Skeleton variant="text" /></TableCell>
            <TableCell align="center"><Skeleton variant="text" /></TableCell>
            <TableCell align="center"><Skeleton variant="text" /></TableCell>
          </>}
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"              
            >
              {/* {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} */}
              <KeyboardArrowDownIcon />
            </IconButton>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <div style={{paddingTop: 10, paddingBottom: 10, width: '80%'}}>
                    {row ? HTMLReactParser(row.description || '') : <Skeleton variant="text" />}
                </div>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  }

  export default Row;