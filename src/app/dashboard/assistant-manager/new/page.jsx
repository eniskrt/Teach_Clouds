import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import NewAssistantManagerForm from '@/components/dashboard/asistant-manager/new-assistant-manager-form'

import React from 'react'

const NewAssistantManagerPage = () => {
  return (
    <>
    <PageHeader title="New Assistant Manager"/>
    <Spacer height={50}/>
    <NewAssistantManagerForm/>
    <Spacer/>
    </>
  )
}

export default NewAssistantManagerPage