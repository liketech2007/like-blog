import fs from 'fs';
import { NextResponse } from "next/server";
import path from 'path';

export async function GET(request: Request) {
const form = JSON.stringify({
    query:`
    query MyQuery {
        posts(last: 100) {
          id
          title
          slug
          img
          date
        }
      }     
    ` 
   })
const res1 = await fetch(`${process.env.NEXT_PUBLIC_HYGRAPH_URL}`,{
    method: "POST",
    body: form
  })
  const data = await res1.json()
  const xml = `
  <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
  <loc>https://like-blog.vercel.app/</loc>
  <lastmod>2023-05-17</lastmod>
</url>

<url>
  <loc>https://like-blog.vercel.app/home</loc>
  <lastmod>2023-05-17</lastmod>
</url>

<url>
  <loc>https://like-blog.vercel.app/sobre-nos</loc>
  <lastmod>2023-05-17</lastmod>
</url>
<url>
  <loc>https://like-blog.vercel.app/politica-de-privacidade</loc>
  <lastmod>2023-05-17</lastmod>
</url>
<url>
  <loc>https://like-blog.vercel.app/list-posts</loc>
  <lastmod>2023-05-17</lastmod>
</url>
<url>
  <loc>https://like-blog.vercel.app/contscte-nos</loc>
  <lastmod>2023-05-17</lastmod>
</url>
  ${data.data.posts
    .map(
      (data:any) => `<url>
        <loc>https://like-blog.vercel.app/post/${data.slug}</loc>
        <lastmod>${data.date}</lastmod>
      </url>`,
    ).join('')}
  </urlset>
`
fs.writeFile("./public/sitemap.xml", xml , (error) => {
  if(error) throw error; 
})
return NextResponse.json({ text: "OK"})
}
