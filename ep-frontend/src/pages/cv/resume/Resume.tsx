import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Resume() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Interior Design" />
          <Tab label="Exterior Design" />
          <Tab label="Implementation" />
          <Tab label="Space Arrangement" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {/* Content for Interior Design */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* Content for Exterior Design */}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* Content for Implementation */}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {/* Content for Space Arrangement */}
      </TabPanel>
    </Box>
  );
}