import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './Experience.css'

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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <div className="exp-main">
          <div className="experience">
            <h3 className="heading" >Experience</h3>
            <h1 className="mainHeader">My Experience</h1>
            
            <div className="commonBorder"></div>
        </div>

          <div id="tabs" className={classes.root}>
        
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
            >
              <Tab label="SA TECH" {...a11yProps(0)} />
              <Tab label="Octagon Ltd" {...a11yProps(1)} />
              <Tab label="Grameen Phone Ltd" {...a11yProps(2)} />
              <Tab label="Huawei Technologies" {...a11yProps(3)} />
              <Tab label="Item Five" {...a11yProps(4)} />
              
            </Tabs>
            <TabPanel value={value} index={0}>
              <h3>Full Stack Web Developer</h3>
                  <p className="exp-detail"><small>August 2018 to present</small></p>
                  <ul>
                      <li>Analyzed user requirement reports to design web applications to meet customer needs, as well as all legal and budgetary restrictions.</li>
                      <li>Worked in both HTML and CSS environments, choosing each protocol, where appropriate, for best results.</li>
                      <li>Developed web apps using pre-made user interface frameworks such as Bootstrap, Material UI.</li>
                      <li>Planned website development, converting mockups into usable web presence with HTML, JavaScript, React Js and JSON coding.</li>
                  </ul>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <h3>Consultant <small>(voluntary position)</small></h3>
                  <p className="exp-detail"><small>August 2016 to August 2018</small></p>
                  <ul>
                      <li>Advised on design, planning and implementation of IT solution, New Product projects</li>
                      <li>Worked in both HTML and CSS environments, choosing each protocol, where appropriate, for best results.</li>
                      <li>Developed web apps using pre-made user interface frameworks such as Bootstrap, Material UI.</li>
                      <li>Planned website development, converting mockups into usable web presence with HTML, JavaScript, React Js and JSON coding.</li>
                  </ul>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <h3>Lead Engineer</h3>
                  <p className="exp-detail"><small>October 2007 to June 2016</small></p>
                  <ul>
                      <li>Leading the technology team to prepare for Fixed broadband launch.</li>
                      <li>Acting as Project Manager to serve corporate client for company.</li>
                      <li>Developed web apps using pre-made user interface frameworks such as Bootstrap, Material UI.</li>
                      <li>Planned website development, converting mockups into usable web presence with HTML, JavaScript, React Js and JSON coding.</li>
                  </ul>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <h3>Optical Support Enineer</h3>
                <p className="exp-detail"><small>January 2006 to October 2007</small></p>
                <ul>
                  <li>Analyzed user requirement reports to design web applications to meet customer needs, as well as all legal and budgetary restrictions.</li>
                  <li>Worked in both HTML and CSS environments, choosing each protocol, where appropriate, for best results.</li>
                  <li>Developed web apps using pre-made user interface frameworks such as Bootstrap, Material UI.</li>
                  <li>Planned website development, converting mockups into usable web presence with HTML, JavaScript, React Js and JSON coding.</li>
                </ul>
            </TabPanel>
            <TabPanel value={value} index={4}>
              Item Five
            </TabPanel>
     
    </div>
      </div>
    
  );
}