// import SingleBlog from '@/components/blog/SingleBlog'
// import Breadcrumb from '@/components/Breadcrumb'
// import React from 'react'

// type Props = {}

// const page = (props: Props) => {
//   return (
//     <div>
//         <Breadcrumb name="Blog - Detail"/>
//         <SingleBlog/>
//     </div>
//   )
// }

// export default page

import SingleBlog from '@/components/blog/SingleBlog';
import Breadcrumb from '@/components/Breadcrumb';
import React from 'react'

type Props = {
  params: Promise<{ slug: string }>;
};

const page = async ({params}:Props) => {
    const  { slug }  = await params;
  return (
    <div>
      <Breadcrumb name="Blog - Detail" />
      <SingleBlog slug={slug} />
    </div>
  );
}

export default page