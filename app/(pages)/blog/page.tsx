import BlogGrid from '@/components/blog/BlogGrid'
import Breadcrumb from '@/components/Breadcrumb'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Breadcrumb name="Blog"/>
        <BlogGrid/>
    </div>
  )
}

export default page