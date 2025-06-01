import React from 'react'
import BlogList from './BlogList'

export default function BlogPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <p>Welcome to my blog! Here you will find articles on various topics.</p>
      {/* Add more blog content here */}
      <BlogList />
    </div>
  )
}
