import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface Post {
    slug: string;
    title: string;
    bio: string;
    prep_time: string;
    cook_time: string;
}

interface PostCardProps {
    post: Post;
}

export default function PostCard(props: PostCardProps) {
    const { post } = props
    return (
        <Link className="unstyled" href={`/recipes/${post.slug}`}>
            <div className="items-center float-start">
                <Card>
                    <CardHeader>
                        <CardTitle>{post.title}</CardTitle>
                        
                        <CardDescription> {post.bio}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-row  ml-2 pl-2 text-xs float-start">
                        <div className="basis-1/4 font-bold text-m">Prep Time:</div>
                        <div className="basis-3/4">{post.prep_time}</div>
                        </div>
                        <div className="flex flex-row  ml-2 pl-2 text-xs float-start">
                        <div className="basis-1/4 font-bold text-m">Cook Time:</div>
                        <div className="basis-3/4">{post.cook_time}</div>
                    </div>
                    </CardContent>

                </Card>
            </div>
        </Link>
    )
}