import React from 'react'

function Input({ 
    title, 
    className,
    name,
    id,
    type,
    value,
    onChange
 }) {


    return (
        <div>
            <label>{title}</label>
            <input
                className={className}
                name={name}
                id={id}
                type={type}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default Input