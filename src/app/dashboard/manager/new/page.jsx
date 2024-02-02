import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import NewManagerForm from '@/components/dashboard/manager/new-manager-form'
import React from 'react'

const NewManagerPage = () => {
  return (
    <>
    <PageHeader title="New Manager"/>
    <Spacer height={50}/>
    <NewManagerForm/>
    <Spacer/>
    </>
  )
}

export default NewManagerPage