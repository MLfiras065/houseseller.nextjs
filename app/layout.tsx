
import React, { useState } from 'react';
import Footer from './Footer/page'
import NavBar from './NavBar/page'

import './globals.css'

import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'house seller',
  description: 'buy the best houses in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const handlelogout =()=>{
  //   "use server"
  // }
  return (
    <html lang="en">
      <body >
        
      <NavBar />
      
        {children}
        <Footer/>
        </body>
     
    </html>
  )
}
