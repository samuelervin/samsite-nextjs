import { sql } from "@vercel/postgres";
import { roboto } from "@/components/ui/fonts";

interface Blog {
  id: number;
  title: string;
  content: string;
  author: string;
  created_at: string;
}

export default async function Blog() {
  const { rows } = await sql<Blog>`SELECT * FROM blogs`;

  return (
    <div className={ `${roboto.className} items-center w-full col-start` } >
      {rows.map((row) => (
        <div key={row.id}>
          <h2>{row.title}</h2>
          <p>{row.content}</p>
          <small>By {row.author} on {new Date(row.created_at).toLocaleDateString()}</small>
        </div>
      ))}
    </div>
  );
}