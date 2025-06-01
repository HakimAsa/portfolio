import React from 'react'
import styles from '../../../styles/blog.module.css'

interface BlogCardProps {
  title: string
  excerpt: string
  image: string
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, image }) => {
  return (
    <div className={styles.blogCard}>
      <img
        src={image}
        alt={title}
        className={styles.blogImage}
      />
      <h2 className={styles.blogTitle}>{title}</h2>
      <p className={styles.blogExcerpt}>{excerpt}</p>
    </div>
  )
}

export default BlogCard
