import { sql } from "@vercel/postgres";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Skeleton } from "@/components/ui/skeleton"

interface Blog {
  id: number;
  title: string;
  content: string;
  author: string;
  created_at: string;
}

export default async function BlogLatest() {
  const { rows } = await sql<Blog>`SELECT * FROM blogs ORDER BY created_at DESC LIMIT 1`;

  if (rows.length === 0) {
    return <div>No blog posts available.</div>;
  }

  const latestBlog = rows[0];

  return (
    <Card>
        <CardHeader>

                <CardTitle>
                <h2>Latest Blog</h2>
            </CardTitle>
            <CardDescription>
                <h4>{latestBlog.title}</h4>
            </CardDescription>
        </CardHeader>
     
      <CardContent>
        <p>{latestBlog.content}</p>
      </CardContent>
      <CardFooter>
        <small>By {latestBlog.author} on {new Date(latestBlog.created_at).toLocaleDateString()}</small>
      </CardFooter>
    </Card>
  );
}


 
export function SkeletonDemo() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}