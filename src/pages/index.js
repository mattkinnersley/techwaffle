import Heading from "@techwaffle/components/heading";
import HeroPost from "@techwaffle/components/hero";
import PostList from "@techwaffle/components/post-list";
import { getAllPostFrontMatters } from "@techwaffle/utils/posts";

const Index = ({ posts, hero }) => (
  <>
    <Heading />
    <div className="mt-8">
      <h2 className="text-2xl font-quicksand-bold my-4">Latest</h2>
      <HeroPost post={hero}></HeroPost>
      {posts?.length > 0 && <PostList posts={posts}></PostList>}
    </div>
  </>
);

export const getStaticProps = async () => {
  const allPosts = getAllPostFrontMatters();

  const posts = allPosts.slice(1);
  const hero = allPosts[0];

  return {
    props: {
      posts,
      hero,
      title: "Tech Waffle - Just a load of waffle",
      description:
        "A tech blog that has tutorials, web development tips, best practices and more. Find out about the latest technology in JavaScript and software engineering.",
    },
  };
};

export default Index;
