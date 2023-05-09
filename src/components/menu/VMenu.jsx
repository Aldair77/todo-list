import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VMenu() {
  const Tabstyled ={bgcolor: '#fff', display: 'flex',borderRadius:2,margin:1}
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex'}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider',bgcolor:'rgb(230, 231, 232 )' }}
      > 
        
           
        <Tab sx={Tabstyled}label="Soporte" {...a11yProps(0)} />     
        <Tab sx={Tabstyled} label="Monitoreo" {...a11yProps(1)} />
        <Tab sx={Tabstyled} label="Back end" {...a11yProps(2)} />
        <Tab sx={Tabstyled} label="Front end" {...a11yProps(3)} />
        <Tab sx={Tabstyled} label="Area de Diseño" {...a11yProps(4)} />
        <Tab sx={Tabstyled} label="Control" {...a11yProps(5)} />
        <Tab sx={Tabstyled} label="Item Seven" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
          Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
  );
}