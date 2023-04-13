import React from 'react'

export default function Protected() {
  return (
    <div className="text-4xl">dashboard and secret data</div>
  )
}


Protected.requireAuth = true;