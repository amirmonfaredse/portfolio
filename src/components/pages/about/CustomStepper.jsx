import {
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  StepIcon,
} from "@mui/material";
import { CheckRounded, ErrorRounded } from "@mui/icons-material";
const stepConnectorSx1 = {
  "& .MuiStepConnector-line": {
    borderLeft: "dashed 2px",
    borderLeftColor: "purple.main",
  },
};
const stepConnectorSx2 = {
  height: 10,
  "& .MuiStepConnector-line": {
    borderLeft: "dashed 2px",
    borderLeftColor: "purple.main",
  },
};

const CustomStepper = () => {
  return (
    <Stepper
      orientation="vertical"
      connector={<StepConnector color="purple" sx={stepConnectorSx1} />}
      activeStep={3}
    >
      <StepConnector color="purple" sx={stepConnectorSx2} />

      <Step>
        <StepLabel
          icon={<ErrorRounded sx={{ my: 1 }} />}
          sx={{ color: "red.main" }}
        >
          <Typography color="red.main" sx={{ width: 100 }}>
            مکانیک خودرو
          </Typography>
        </StepLabel>
      </Step>
      <Step>
        <StepLabel
          icon={<StepIcon icon={<ErrorRounded />} error={true} />}
          sx={{ color: "red.main" }}
        >
          <Typography color="red.main">آشپز فرنگی</Typography>
        </StepLabel>
      </Step>
      <Step>
        <StepLabel
          icon={<StepIcon icon={<ErrorRounded />} error={true} />}
          sx={{ color: "red.main" }}
        >
          <Typography color="red.main">باریستا و بارتندر</Typography>
        </StepLabel>
      </Step>
      <Step>
        <StepLabel
          icon={<StepIcon icon={<CheckRounded />} />}
          sx={{ color: "green.main" }}
        >
          <Typography color="green.main">برنامه نویس</Typography>
        </StepLabel>
      </Step>
    </Stepper>
  );
};
export default CustomStepper;
