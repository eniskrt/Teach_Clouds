import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import Events from '@/components/events/events'
import React from 'react'

const EventsPage = () => {
  return (
    <>
      <PageHeader title="Events"/>
      <Spacer height="50"/>
      <Events/>
      <Spacer/>
    </>
  )
}

export default EventsPage