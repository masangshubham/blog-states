import Head from "next/head";

export default function Metatags({
  title = "Blogstates - Share your thoughts and Blogs",
  description = "A blogging site where users can share their blogs and view and like other posts. Get the latest posts on our site. Share your stories, thinking and expertise. Blogstates Community  is a community of 1,000,658 amazing developers. We're a place where coders share, stay up-to-date and grow their careers. Stay curious.The best ideas can change who we are. Blogstates is where those ideas take shape, take off, and spark powerful conversations. Were an open platform where over 100 million readers come to find insightful and dynamic thinking. Here, expert and undiscovered voices alike dive into the heart of any topic and bring new ideas to the surface. Our purpose is to spread these ideas and deepen understanding of the world.A living network of curious minds.Discover stories, thinking, and expertise from writers on any topic.Anyone can write on Blogstates.",
  image = "https://avatars.githubusercontent.com/u/97026988?v=4",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@masang_shubham" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
}
