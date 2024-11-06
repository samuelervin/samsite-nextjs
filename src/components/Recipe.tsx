import matter from 'gray-matter'
import Markdown from 'markdown-to-jsx'


export default function Recipe({recipe} : {recipe : matter.GrayMatterFile<string>}) {
    console.log(recipe.content)
    return (

        <div>
        
        <Markdown>{recipe.content}</Markdown>
        </div>

    )
  
}

