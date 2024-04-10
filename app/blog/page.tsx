import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Blog",
  description:
    "Hear about new product updates and learn how we build our products.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Blog Posts
      </h1>
      <BlogPosts />
    </section>
  );
}
