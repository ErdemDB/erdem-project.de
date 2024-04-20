import React, { useEffect, useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown'
import { Box, Tabs, Button, Tab, Typography, Grid, List, ListItem, LinearProgress } from '@mui/material';
import CareerAccordion from './careeraccordion/CareerAccordion';
import texts from '../../../texts.json';
import useFileController from './Controller';

import './Resume.css';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: Readonly<TabPanelProps>) {
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
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Resume: React.FC = () => {
  const [value, setValue] = useState(0);
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});
  const lebenslaufRef = useRef<HTMLDivElement>(null);

  const setDefaultExpanded = (content: any[]) => {
    let defaultExpanded: { [key: string]: boolean } = {};
    content.forEach((_, index) => {
      defaultExpanded[`panel${index + 1}`] = true;
    });
    return defaultExpanded;
  };

  useEffect(() => {
    setExpanded(setDefaultExpanded(texts.cv.resume.berufserfahrung.content));
  }, []);

  const handleTabChange = (tabIndex: number): void => {
    lebenslaufRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    handleTabChange(newValue);
  };

  const handleAccordionChange = (panel: string) => {
    setExpanded(prevExpanded => ({
      ...prevExpanded,
      [panel]: !prevExpanded[panel],
    }));
  };

  const {downloadPdf} = useFileController();

  return (
    <Box sx={{ width: '100%' }} ref={lebenslaufRef}>
      <Grid container alignItems="flex-end" justifyContent="space-between">
        <Grid item xs md>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            allowScrollButtonsMobile
          >
            <Tab label={texts.cv.resume.berufserfahrung.tab} />
            <Tab label={texts.cv.resume.studium.tab} />
            <Tab label={texts.cv.resume.faehigkeiten.tab} />
          </Tabs>
        </Grid>
        <Grid item>
          <Button onClick={downloadPdf} variant="outlined" sx={{ mt: -3, display: { xs: 'none', sm: 'inline-flex' } }}>
            {texts.cv.resume.export}
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 1 }} />
      <TabPanel value={value} index={0}>
        {texts.cv.resume.berufserfahrung.content.map((item, index) => (
          <CareerAccordion
            key={index}
            title={<div><Typography variant='h1'>{item.title}</Typography><Typography variant='subtitle1'>{item.subTitle}</Typography></div>}
            content={
              <List>
                {item.content.map((contentItem, contentIndex) => (
                  <ListItem key={contentIndex}>
                    {(contentItem)}
                  </ListItem>
                ))}
              </List>
            }
            expanded={expanded[`panel${index + 1}`]}
            onChange={() => handleAccordionChange(`panel${index + 1}`)}
            panel={`panel${index + 1}`}
          />
        ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CareerAccordion
          title={<div><Typography variant='h1'>{texts.cv.resume.studium.content1.title}</Typography>
            <Typography variant='subtitle1'>{texts.cv.resume.studium.content1.subTtitle}</Typography></div>}
          content={<div></div>}
          expanded={expanded['panel4']}
          onChange={() => handleAccordionChange('panel4')}
          panel="panel4"
          isExpandable={false}
        />
        <CareerAccordion
          title={<div><Typography variant='h1'>{texts.cv.resume.studium.content2.title}</Typography>
            <Typography variant='subtitle1'>{texts.cv.resume.studium.content2.subTtitle}</Typography></div>}
          content={<div></div>}
          expanded={expanded['panel5']}
          onChange={() => handleAccordionChange('panel5')}
          panel="panel5"
          isExpandable={false}
        />
        <CareerAccordion
          title={<div><Typography variant='h1'>{texts.cv.resume.studium.content3.title}</Typography>
            <Typography variant='subtitle1'>{texts.cv.resume.studium.content3.subTtitle}</Typography></div>}
          content={<div></div>}
          expanded={expanded['panel6']}
          onChange={() => handleAccordionChange('panel6')}
          panel="panel6"
          isExpandable={false}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        {texts.cv.resume.faehigkeiten.contents.map((item, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <CareerAccordion
              title={<div><Typography variant='h1'>{item.title}</Typography></div>}
              content={
                <List>
                  {item.content.map((contentItem, contentIndex) => {
                    if (typeof contentItem === 'object') {
                      return (
                        <Box key={contentIndex} sx={{ display: 'flex', alignItems: 'center' }}>
                          <Typography variant='body1' sx={{ width: '20%' }}>{contentItem.skill}</Typography>
                          <LinearProgress variant="determinate" value={contentItem.rating} sx={{ flexGrow: 1 }} />
                        </Box>
                      );
                    } else if (contentItem.includes('[') && contentItem.includes('](')) {
                      return <ReactMarkdown key={contentIndex}>{contentItem}</ReactMarkdown>;
                    }
                  })}
                </List>
              }
              expanded={expanded[`panel${(index + 6) + 1}`]}
              onChange={() => handleAccordionChange(`panel${(index + 6) + 1}`)}
              panel={`panel${(index + 6) + 1}`}
            />
          </Box>
        ))}
      </TabPanel>

    </Box>
  );
}
export default Resume;