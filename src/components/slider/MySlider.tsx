import { Box, Slider } from "@mui/material";

const marks = [
    {
      value: 0,
      label: '50',
    },
    {
      value: 10,
      label: '60',
    },
    {
      value: 20,
      label: '70',
    },
    {
      value: 30,
      label: '80',
    },
    {
      value: 40,
      label: '90',
    },
    {
      value: 50,
      label: '100',
    },
    {
      value: 60,
      label: '110',
    },
    {
      value: 70,
      label: '120',
    },
    {
      value: 80,
      label: '130',
    },
    {
      value: 90,
      label: '140',
    },
    {
      value: 100,
      label: '150',
    },
    {
      value: 110,
      label: '160',
    },
    {
       value: 120,
       label: '170',
    },
    {
      value: 130,
      label: '180',
    },
    {
      value: 140,
      label: '190',
    },
    {
      value: 150,
      label: '200',
    },
  ];

function valuetext(value: number) {
    return `${value}`;
}

export const MySlider = ({callBack} :any) => {

  // Отслеживаем изменения слайдера
  const handleChange = (event: Event, newValue: number | number[]) => {
    // setValue(newValue as number);
  };

    return (
        <Box sx={{ width: 300 }}>
          <Slider
            onChange={handleChange}
            aria-label="Custom marks"
            defaultValue={0}
            getAriaValueText={valuetext}
            step={10}
            valueLabelDisplay="auto"
            marks={marks}
          />
        </Box>
      );
};