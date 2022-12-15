//@ts-nocheck
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import TestModals from "../components/signin_popup";


const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      
    }
  }, [router, user])

  return <>{user ? children : null}</>
}

export default ProtectedRoute
