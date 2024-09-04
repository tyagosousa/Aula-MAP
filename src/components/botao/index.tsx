import React from 'react'

interface Props{
    title: string;
}

export const index = ({title}: Props) => {
    return (
        <button type='button'>{title}</button>
    )
}