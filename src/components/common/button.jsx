import React from 'react'

const Button = ({reference,btype, styles,text}) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] btn_main text-primary outline-none ${styles}`}>
      <a href={reference}>
       {text}
      </a>
    </button>
  )
}

export default Button
