import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import { FaGraduationCap } from 'react-icons/fa';
import Port from '../Components/Port';

const Experiences = () => {
  const steps = [
    {
      label: 'University of Ibadan',
      description: `Bachelor of Science - BS, Psychology.`,
    },
    {
      label: 'Yaba College of Technology',
      description: 'HND - Statistics, Mathematics and Statistics',
    },
    {
      label: 'Jireh Computers (Microsoft Certified Trainers)',
      description: `Data Analysis and Visualization with Power BI, Analytics● Data Analysis and Visualization with Power BI 2018 - 2018`,
    },
    {
      label: 'Ciel Consulting',

      description: `ESSENTIAL PROJECT MANAGEMENT (PMP/PRIMAVERA), Project Management● ESSENTIAL PROJECT MANAGEMENT (PMP/PRIMAVERA), Project Management 2006 - 2006.`,
    },
  ];

  const VerticalLinearStepper = () => (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper orientation="vertical">
        {steps.map((step) => (
          <Step key={step.label} active>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );

  return (
    <div className="">
         <h3 className="text-4xl font-bold uppercase p-4 text-center">portfolio</h3>
         <div id='portfolio' className=' block md:flex first-line:md:justify-between p-5'>
      <div className="p-4">
        <h3 className="text-2xl font-bold uppercase flex items-center">
          <FaGraduationCap className="mr-2" /> Education
        </h3>
        <VerticalLinearStepper />
      </div>
      <Port/>
    </div>
    </div>
   
  );
};

export default Experiences;
