
import Breadcrumb from '@/components/Breadcrumb';
import ServiceDetail from '@/components/services/ServiceDetail';
import React from 'react'

type Props = {
  params: Promise<{ title: string }>;
};

const page = async ({params}:Props) => {
    const  { title }  = await params;
    console.log("the title", title);
  return (
    <div>
      <Breadcrumb name={title} />
      <ServiceDetail slug={title} />
    </div>
  );
}

export default page