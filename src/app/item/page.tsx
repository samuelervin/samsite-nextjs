import React from 'react'
import SearchView from "@/components/searchView";
import { roboto } from "@/components/ui/fonts";
import {getPostMetadata} from '@/lib/getPostMetadata';

export default function page() {
  const folder = 'src/recipes/'
  const postMetadata = getPostMetadata(folder)
  return (
    <div className={ `${roboto.className} items-center w-full col-start` } > 
      <SearchView postMetadata={postMetadata} />      
    </div>  
    )
}
