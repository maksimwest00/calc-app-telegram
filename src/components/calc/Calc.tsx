import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { MySlider } from '../slider/MySlider';
import classes from './Calc.module.css';
import { useEffect, useState } from 'react';

interface ColumnProps {
    title:string;
    content?:string
}

const Column = ({title, content = undefined} : ColumnProps) => {
    // const [value, setValue] = useState<string>();
    return (
        <div className={classes.column}>
            <span>{title}</span>
            <span>{content}</span>
        </div>
    );
}





export const Calc = () => {
    const [sliderValue, setSliderValue] = useState<number>(50);
    const [currentDay, setDay] = useState<string>("lowday");
    const [belki, setBelki] = useState(150);
    const [jiri, setJiri] = useState(35);
    const [ygle, setYgle] = useState(50);

    useEffect(()=>{
        UpdateDay();
    },[sliderValue])

    useEffect(()=>{
        UpdateDay();
    },[currentDay])

    function Calculate(newValue: number) {
        setSliderValue(newValue);
    }

    function ChangeDay (event: React.ChangeEvent<HTMLInputElement>) {
        setDay((event.target as HTMLInputElement).value);
    };

    function UpdateDay() {
        switch (currentDay){
            case "lowday":
                LowDay(sliderValue);
                break;
            case "highday":
                Highday(sliderValue);
                break;
            case "midleday":
                Midleday(sliderValue);
                break;
        }
    }

    function LowDay(sliderValue: number) {
        let belok_1kg = 3;
        let jir_1kg =  0.7
        let ygle_1kg = 1;
        setBelki(Math.ceil(sliderValue * belok_1kg));
        setJiri(Math.ceil(sliderValue * jir_1kg));
        setYgle(Math.ceil(sliderValue * ygle_1kg));
    }

    function Highday(sliderValue: number){
        let belok_1kg = 1;
        let jir_1kg =  0.7
        let ygle_1kg = 5;
        setBelki(Math.ceil(sliderValue * belok_1kg));
        setJiri(Math.ceil(sliderValue * jir_1kg));
        setYgle(Math.ceil(sliderValue * ygle_1kg));
    }

    function Midleday(sliderValue: number) {
        let belok_1kg = 2;
        let jir_1kg =  0.7
        let ygle_1kg = 2;
        setBelki(Math.ceil(sliderValue * belok_1kg));
        setJiri(Math.ceil(sliderValue * jir_1kg));
        setYgle(Math.ceil(sliderValue * ygle_1kg));
    }
    

    return (
        <div className={classes.mainCalc}>
            <p className={classes.sliderLabel}>ВЕС</p>
            <MySlider callBack={Calculate}/>
            <div className={classes.calcbody}>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">Поле с флажком</FormLabel>
                  <RadioGroup value={currentDay}
                              onChange={ChangeDay} 
                              aria-labelledby="demo-radio-buttons-group-label" 
                              name="radio-buttons-group">
                    <FormControlLabel value="lowday" control={<Radio />} label="Низкоуглеводный день" />
                    <FormControlLabel value="highday" control={<Radio />} label="Высокоуглеводный день" />
                    <FormControlLabel value="midleday" control={<Radio />} label="Среднеуглеводный день" />
                  </RadioGroup>
                </FormControl>
                <div className={classes.viewGramms}>
                    <Column title='Белки' content={belki.toString()}/>
                    <Column title='Жиры' content={jiri.toString()}/>
                    <Column title='Углеводы' content={ygle.toString()}/>
                </div>
            </div>
        </div>
    );
};