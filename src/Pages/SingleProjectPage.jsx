import React from 'react'
import { useParams } from 'react-router-dom'

export const SingleProjectPage = () => {
    const { id } = useParams();

    return <div>project page, id: {id}</div>
}
