import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import Contact from '@/components/contact/contact'
import React from 'react'

const ContactPage = () => {
  return (
    <>
      <PageHeader title="Contact"/>
      <Spacer height={50}/>
      <Contact/>

    </>
  )
}

export default ContactPage