import React from 'react';
import { Accordion as MuiAccordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface AccordionProps {
  title: React.ReactNode;
  content: React.ReactNode;
  expanded: boolean;
  onChange: () => void;
  panel: string;
  isExpandable?: boolean; // Optional, standardmäßig true
}

const CareerAccordion = ({
  title,
  content,
  expanded,
  onChange,
  panel,
  isExpandable = true // Standardmäßig erweiterbar
}: AccordionProps) => {
  return (
    <MuiAccordion expanded={isExpandable && expanded} onChange={onChange}>
      <AccordionSummary
        expandIcon={isExpandable ? <ExpandMoreIcon /> : null}
        aria-controls={`${panel}bh-content`}
        id={`${panel}bh-header`}
      >
        <Typography sx={{ flexShrink: 0 }}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{content}</Typography>
      </AccordionDetails>
    </MuiAccordion>
  );
};

export default CareerAccordion;