
import React from 'react'
import Recipe from "@/components/Recipe"
import matter from 'gray-matter';
import fs from 'fs'
import {getPostMetadata, getPostContent} from '@/lib/getPostMetadata';

interface Params {
  slug: string;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata('src/recipes')
  return posts.map((post) => ({ slug: post.slug }))
}

export default function RecipePage({ params} : {params: Params} ) {
    const folder = 'src/recipes/'
    const recipe = getPostContent(params.slug, folder)
    return (
        <Recipe recipe={recipe} />

    )
}