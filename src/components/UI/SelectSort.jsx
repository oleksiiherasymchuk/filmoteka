import React from "react";
import styles from "../UI/UI.module.css"

const SelectSort = ({options, defaultValue, value, onChange}) => {

    return <div className={styles.selectSort}>
        <select value={value}
                onChange={event => onChange(event.target.value)}>
            <option disabled>{defaultValue}</option>
            {options.map(option => (
                <option value={option.value}>
                    {option.name}
                </option>
            ))}
        </select>
    </div>
}

export default SelectSort;