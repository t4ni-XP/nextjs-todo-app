import Image from "next/image";
import styles from "./page.module.css";
import { Box, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';

export default function TaskCard() {
  return (
    <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}>
      <Paper />
    </Box>
  );
}
