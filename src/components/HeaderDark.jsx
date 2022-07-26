import React from 'react'

const HeaderDark = ({category, title}) => {
  return (
    <div className="mb-10">
      <p className="text-gray-400 dark:text-gray-200">
        {category}
      </p>
      <p className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-gray-200 ">{title}</p>
    </div>
  )
}

export default HeaderDark