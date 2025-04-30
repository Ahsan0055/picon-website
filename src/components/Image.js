'use client'

import Image from 'next/image'

export default function TestImage() {
  return (
    <div className="relative w-full h-[90vh]">
      <Image
        src="/images/contact.jpg"
        alt="Contact Us Background"
        layout="fill"
        objectFit="cover"
      />
    </div>
  )
}
