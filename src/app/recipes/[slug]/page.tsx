
import React from 'react'
import Recipe from "@/components/Recipe"
import {getPostMetadata, getPostContent} from '@/lib/getPostMetadata';

export const generateStaticParams = async () => {
  const posts = getPostMetadata('src/recipes')
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function RecipePage(props: { params: Promise<{ slug: string }> } ) {
    const params = await props.params;
    const slug = params.slug
    const folder = 'src/recipes/'
    const recipe = getPostContent(slug, folder)
    return (
        <Recipe recipe={recipe} />

    )
}