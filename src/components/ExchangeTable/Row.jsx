import { useState } from 'react';
import millify from 'millify';
import HTMLReactParser from 'html-react-parser';
import {TableCell, TableRow, IconButton, Collapse, Skeleton } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styles from './Row.module.scss';

function Row(props) {
    const { row } = props;
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <TableRow className={styles.row} onClick={() => setOpen(!open)}>
          {row ? 
          <>
            <TableCell align="center" className={styles.row_text}>{row.name}</TableCell>
            <TableCell align="center" className={styles.row_text}>${millify(row.volume)}</TableCell>
            <TableCell align="center" className={styles.row_text}>{millify(row.numberOfMarkets)}</TableCell>
            <TableCell align="center" className={styles.row_text}>{millify(row.marketShare)}%</TableCell>
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
          <TableCell className={styles.expand_cell} colSpan={5}>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <div className={styles.expand_text}>
                    {row ? HTMLReactParser(row.description || '') : <Skeleton variant="text" />}
                </div>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  }

  export default Row;