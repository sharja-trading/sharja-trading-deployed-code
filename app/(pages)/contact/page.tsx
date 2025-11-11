import Breadcrumb from '@/components/Breadcrumb'
import ContactComponent from '@/components/contact/ContactComponent'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Breadcrumb name="Contact Us"/>
        <ContactComponent/>
    </div>
  )
}

export default page