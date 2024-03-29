import React from 'react'
import '../styles/index.css'

interface Props {
  service: string
}

const ServiceCard = ({service}: Props) => {
  return (
    <>
        <div className={`service__image w-full h-72 rounded-xl`} />
        <div className={`bg-teal-600 w-full text-white rounded-xl -translate-y-6 px-1 grid grid-rows-2 py-1`}>
            <p className={`text-center font-semibold self-center place-self-center min-h-[3rem]`}>{service}</p>
            <a href='#kontakt' className={`text-center font-bold text-xl underline place-self-center`}>Umów się na wizytę</a>
        </div>
    </>
  )
}

export default ServiceCard