import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import DashboardNavigation from '@/components/dashboard/home/dashboard-navigation'
import React from 'react'

const DashboardPage = () => {
  return (
    <>
      <PageHeader title="Dashboard"/>
      <Spacer height={50}/>
      <DashboardNavigation/>
      <Spacer/>
    </>
  )
}

export default DashboardPage