import React from 'react'
import { Badge } from './ui/badge'

const LatestJobCards = () => {
  return (
    <div className=''>
        <div>
        <h1>Company Name</h1>
        <p>India</p>
        </div>
        <div>
            
            <h1>Job Title</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident alias nihil, et neque reiciendis soluta distinctio tempora temporibus asperiores suscipit a amet itaque!</p>
        </div>
        <div>
            <Badge className="text-blue-700 font-bold" variant="ghost">12 positions</Badge>
            <Badge className="text-blue-700 font-bold" variant="ghost">Part Time</Badge>
            <Badge className="text-blue-700 font-bold" variant="ghost">24 LPA</Badge>
        </div>
    </div>
  )
}

export default LatestJobCards