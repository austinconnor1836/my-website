import React from 'react'
import Layout from '../components/layout'
import usePosts from '../hooks/use-posts'
// import PostPreview from '../components/post-preview'
// import Hero from '../components/hero'
// import SEO from '../components/seo'
// import Insta from '../components/insta'
import Home from './home'

export default () => {
  const posts = usePosts();

  return (
    <>
      {/* <Hero /> */}
      <Layout>
        <Home />
        {/* {posts.map(post => {
          return (
            <>
            <SEO
              title={post.title}
              description={post.author}
            />
            <PostPreview key={post.slug} post={post} />
            </>
          )})}
        <Insta /> */}
      </Layout>
    </>
  )
}
