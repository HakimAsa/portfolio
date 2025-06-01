'use client' // This marks the file as a Client Component
import { useEffect, useState } from 'react'
import BlogCard from '../components/ui/BlogCard'
import styles from '../../styles/blog.module.css'

const BlogList = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  interface Post {
    id?: string
    title: string
    excerpt: string
    image: string
  }

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts') // Adjust the API endpoint as needed
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setPosts(data)
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        } else {
          setError('An unknown error occurred')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return <div className={styles.loading}>Loading...</div>
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>
  }

  return (
    <div className={styles.blogList}>
      {posts.map((post: Post) => (
        <BlogCard
          key={post.id}
          title={post.title}
          excerpt={post.excerpt}
          image={post.image}
        />
      ))}
    </div>
  )
}

export default BlogList
