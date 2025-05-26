'use client'
import { useUser } from '@clerk/nextjs'

export const useIsAdmin = () => {
  const { user } = useUser()

  if (!user) return false
  return user.primaryEmailAddress.emailAddress === process.env.NEXT_PUBLIC_ADMINMAIL
}
