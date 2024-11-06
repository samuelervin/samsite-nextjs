import matter from 'gray-matter'
import fs from 'fs'
import { post } from './types'


export function getPostMetadata(basePath : string) {
    const folder = basePath + '/'
    console.log(basePath)
    const files = fs.readdirSync(folder)
    console.log(files)
    const markdownPosts = files.filter(file => file.endsWith('.md'))
    // get the file data
    const posts : post[] = markdownPosts.map((filename) => {
        const fileContents = fs.readFileSync(`${basePath}/${filename}`, 'utf8')
        const matterResult = matter(fileContents)
        return {
            title: matterResult.data.title,
            prep_time: matterResult.data.prep_time,
            cook_time: matterResult.data.cook_time,
            bio: matterResult.data.description,
            slug: filename.replace('.md', '')
        }
    })
    return posts
}

export function getPostContent( slug : string, folder : string) {
    const file = folder + `${slug}.md`
    const content = fs.readFileSync(file, 'utf8')
    const matterResult = matter(content)
    return matterResult
  }