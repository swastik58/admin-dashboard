import React from 'react'

import {LineChart} from '../../components'
import HeaderDark from '../../components/HeaderDark'

const Line = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <HeaderDark className="dark:text-gray-200" category="Chart" title="Inflation Rates" />
      <div className="w-full">
        <LineChart />
      </div>
    </div>
  )
}

export default Line