"use client"
import { Button } from '@/components/ui/button'
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components'
import React, { useState } from 'react'

function AuthButtons() {
  const [loading , isLoading] = useState(false)

  return (
    <div className='flex gap-3 flex-1 md:flex-row flex-col relative z-50'>
      <RegisterLink className='flex-1' onClick={() => isLoading(true)}>
        <Button className='w-full' variant={"outline"} disabled={loading}>
          Sign up
        </Button>
      </RegisterLink>
      <LoginLink className='flex-1' onClick={() => isLoading(true)}>
        <Button className='w-full' disabled={loading}>
          Login 
        </Button>
      </LoginLink>
    </div>
  )
}

export default AuthButtons
