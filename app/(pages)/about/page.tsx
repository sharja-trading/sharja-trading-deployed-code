import About from '@/components/About'
import AboutFunFact from '@/components/about/AboutFunFact'
import AboutGrowthSection from '@/components/about/AboutGrowthSection'
import AboutProcess from '@/components/about/AboutProcess'
import AboutService from '@/components/about/AboutService'
import Blog from '@/components/Blog'
import Breadcrumb from '@/components/Breadcrumb'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Breadcrumb name="About Us"/>
        <About/>
        <AboutService/>
        <AboutGrowthSection/>
        <AboutFunFact/>
        <AboutProcess/>
        <Blog/>
    </div>
  )
}

export default page