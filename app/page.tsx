import { BlogPosts } from "app/components/posts";
import Link from "next/link";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        lux.dev blog
      </h1>
      <p className="mb-4">
        Welcome to the lux.dev blog! This is where we'll post updates about our
        projects, share tips and tricks, and write about our experiences
        building our products.
      </p>
      <p className="mb-4">
        Currently, we're working on a few projects, such as lux.dev, Parsertime,
        and some others that we'll announce soon.
      </p>
      <p className="mb-4">
        We're excited to share our journey with you, and we hope you find our
        posts helpful and interesting. If you have any questions or feedback,
        feel free to reach out to us on{" "}
        <Link
          href="https://twitter.com/lucasdoell"
          target="_blank"
          className="text-blue-500"
        >
          Twitter
        </Link>{" "}
        or send us an{" "}
        <Link href="mailto:lucas@lux.dev" className="text-blue-500">
          email
        </Link>
        .
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
