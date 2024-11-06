'use client'
import React, { useState } from 'react'
import PostCard from './postCard';
import SearchBar from './searchBar';
import { post } from '@/lib/types';

export default function SearchView({postMetadata} : {postMetadata : post[]}) {


    
    const [searchValue, setSearchValue] = useState('')
    return (
        <>
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />

            <div className="postsContainer">
                {postMetadata.filter(val => {
                    return val.title.toLowerCase().includes(searchValue.toLowerCase())
                }).map((post, postIndex) => {
                    return (
                        <PostCard key={postIndex} post={post} />
                    )
                })}
            </div>
        </>
    )
}