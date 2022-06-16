
import ReportContent from './ReportContent';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';

interface Props {
    row: {
        id: string;
        from: number;
        to: number;
    };

}

export default function ReportContentRow (props: Props) {
    const { row } = props;
    const [ open, setOpen ] = useState(false);

    return (
        <>
            <TableRow sx={{
                // eslint-disable-next-line @typescript-eslint/naming-convention
                '& > *': {
                    borderBottom: `unset`,
                },
            }}
            >
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() =>
                            setOpen(!open)
                        }
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell align="left">{row.id}</TableCell>
                <TableCell align="left">{row.from}</TableCell>
                <TableCell align="left">{row.to}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell
                    style={{
                        paddingBottom: 0,
                        paddingTop: 0,
                    }}
                    colSpan={6}
                >
                    <Collapse
                        unmountOnExit
                        in={open}
                        timeout="auto"
                    >
                        <Box sx={{
                            margin: 1,
                        }}
                        >
                            {open &&
                                <ReportContent id={row.id} />
                            }
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}
