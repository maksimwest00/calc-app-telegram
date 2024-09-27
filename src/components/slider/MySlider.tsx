import { Box, Slider } from "@mui/material";

const marks = [
    {
      value: 50,
      label: '50',
    },
    {
      value: 60,
      label: '60',
    },
    {
      value: 70,
      label: '70',
    },
    {
      value: 80,
      label: '80',
    },
    {
      value: 90,
      label: '90',
    },
    {
      value: 100,
      label: '100',
    },
    {
      value: 110,
      label: '110',
    },
    {
      value: 120,
      label: '120',
    },
    {
      value: 130,
      label: '130',
    },
    {
      value: 140,
      label: '140',
    },
    {
      value: 150,
      label: '150',
    },
    {
      value: 160,
      label: '160',
    },
    {
       value: 170,
       label: '170',
    },
    {
      value: 180,
      label: '180',
    },
    {
      value: 190,
      label: '190',
    },
    {
      value: 200,
      label: '200',
    },
  ];

function valuetext(value: number) {
    return `${value}`;
}

interface MySliderProps {
  callBack:(newValue: number) => void;
}

export const MySlider = ({callBack}: MySliderProps) => {

  // Отслеживаем изменения слайдера
  const handleChange = (_event: Event, newValue: number | number[]) => {
    // const foundItem = marks.find(item => item.value === newValue as number);
    callBack(newValue as number);
  };

    return (
        <Box sx={{ width: 300 }}>
          <Slider
            min={50}
            max={150}
            onChange={handleChange}
            aria-label="Custom marks"
            defaultValue={50}
            getAriaValueText={valuetext}
            step={1}
            marks={marks}
            valueLabelDisplay="auto"
          />
        </Box>
      );
};