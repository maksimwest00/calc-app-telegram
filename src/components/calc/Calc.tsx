import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { MySlider } from '../slider/MySlider';
import classes from './Calc.module.css';
import { useState } from 'react';

interface ColumnProps {
    title:string
}

const Column = ({title} : ColumnProps) => {
    const [value, setValue] = useState<string>();
    return (
        <>
            <span>{title}</span>
        </>
    );
}

const ViewGramms = () => {
    return (
        <div className={classes.viewGramms}>
            <Column title='Белки'/>
            <Column title='Жиры'/>
            <Column title='Углеводы'/>
        </div>
    );
};

const CalcBody = () => {

    // Отслеживаем изменения radiobutton
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // setValue((event.target as HTMLInputElement).value);
    };

    return (
        <div className={classes.calcbody}>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Поле с флажком</FormLabel>
              <RadioGroup onChange={handleChange} aria-labelledby="demo-radio-buttons-group-label" defaultValue="midleday" name="radio-buttons-group">
                <FormControlLabel value="lowday" control={<Radio />} label="Низкоуглеводный день" />
                <FormControlLabel value="highday" control={<Radio />} label="Высокоуглеводный день" />
                <FormControlLabel value="midleday" control={<Radio />} label="Среднеуглеводный день" />
              </RadioGroup>
            </FormControl>
            <ViewGramms/>
        </div>
    );
};

export const Calc = () => {
    return (
        <div className={classes.mainCalc}>
            <p className={classes.sliderLabel}>ВЕС</p>
            <MySlider/>
            <CalcBody/>
        </div>
    );
};