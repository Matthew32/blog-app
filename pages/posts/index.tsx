import type { InferGetStaticPropsType } from "next";
import HomePage from '../index'
import { getAllPosts } from "../../lib/getPost";
export default function Posts ({
    allPosts,
  }: InferGetStaticPropsType<typeof getStaticProps>){

return (<HomePage allPosts={allPosts}/>);
}

export async function getStaticProps() {
    const allPosts = getAllPosts(["slug", "title", "excerpt", "date"]);
  
    return {
      props: { allPosts },
    };
}