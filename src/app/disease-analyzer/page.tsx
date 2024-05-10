import React from 'react'
import { DataTableDemo } from '~/components/DiseaseTable'
type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex w-screen justify-center items-center'>
        <div className='w-[35rem]'>
            <DataTableDemo />
        </div>
    </div>
  )
}

export default page