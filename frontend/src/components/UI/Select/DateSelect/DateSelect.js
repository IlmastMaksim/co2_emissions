import React from 'react';

import DateSelectWrap from './DateSelectWrap/DateSelectWrap';
import Option from '../../Option/Option';

const dateSelect = (props) => {
    const sYear = 1950;
    const eYear = new Date().getFullYear();

    const fillArray = (start, end) => {
        return Array(end - start + 1).fill().map((_, i) => start + i)
    }

    const years = fillArray(sYear, eYear)
                    .map((el, i) => {
                        return <Option value={el} key={i} >{el}</Option>
                    })
                    .reverse();
    
    return (
        <div style={{display: "flex", justifyContent: "space-evenly"}}>
            <DateSelectWrap
                gap={years}
                gapName={"Year"}
                selectPlaceholder={props.years}
                handleForSelect={props.handleSelectYear} />
        </div>
    )
}

export default dateSelect;