import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";
import { FaGraduationCap , FaBriefcase } from "react-icons/fa";

const Port = () => {
  const workExperiences = [
    {
      label: "Group Head, Strategy",
      location: "Ogilvy Africa | Nigeria",
      startingYear: "Sep 2023 - Present · 1 yr 7 months",
      description:
        "Strategy | Strategic Insight Development | Integrated Marketing Management | Business Intelligence & Analytics | Brand Design, Development & Management | Digital Marketing | Growth Marketing",
    },
    {
      label: "Team Lead / Lead Strategist",
      roles: "Edgeforth Business Solutions",
      location: "Lagos, Nigeria",
      startingYear: "Jan 2021 - Aug 2023 · 2 yrs 8 months",
      description:
        "Communication, Strategy | Strategic Insight Development | Integrated Marketing Management | Business Intelligence & Analytics | Brand Design, Development & Management | Digital Marketing",
    },
    {
      label: "m778 Nigeria",
      roles: "Group Strategy Lead",
      location: "Lagos, Nigeria",
      startingYear: "Sep 2022 - Feb 2023 · 6 months",
      finishingYear: "Feb 2023",
      description:
        "Led the agency's Strategy, Research and Planning across its adjoining companies. Turned around the creative thought process through a customer-brand-focused insight approach.",
    },
  ];

  const VerticalLinearStepper = () => (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper orientation="vertical">
        {workExperiences.map((step, index) => (
          <Step key={index} active={true}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <Typography>{step.location}</Typography>
              <Typography>{step.startingYear}</Typography>
              {step.finishingYear && <Typography>{step.finishingYear}</Typography>}
              <Typography>{step.description}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );

  return (
    <div className=" max-w-[1200px]  mx-auto">
      <div className="p-4">
        <h3 className="text-xl font-bold uppercase  flex ">
          <FaBriefcase className="mr-2" /> Experiences
        </h3>
      </div>
      <VerticalLinearStepper />
    </div>
  );
};

export default Port;
