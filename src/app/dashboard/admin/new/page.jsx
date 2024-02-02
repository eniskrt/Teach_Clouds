import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import NewAdminForm from '@/components/dashboard/admin/new-admin-form'
import React from 'react'

const NewAdminPage = () => {
  return (
    <>
    <PageHeader title="New Admin"/>
    <Spacer height={50}/>
    <NewAdminForm/>
    <Spacer/>
    </>
  )
}

export default NewAdminPage