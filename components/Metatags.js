import Head from "next/head";

export default function Metatags({
  title = "Blogstates - Share your thoughts and Blogs",
  description = "A blogging site where users can share their blogs and view and like other posts",
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
