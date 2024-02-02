import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import Courses from '@/components/courses/courses'
import React from 'react'

const CoursesPage = () => {
  return (
    <>
      <PageHeader title="Courses"/>
      <Spacer height={50}/>
      <Courses/>
      <Spacer/>
    </>
  )
}

export default CoursesPage