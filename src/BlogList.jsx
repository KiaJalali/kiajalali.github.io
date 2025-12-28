import { Link } from 'react-router-dom';

const BlogList = () => {
  const blogs = [
    {
      id: 1,
      title: 'why i stopped using react hooks for state machines',
      date: 'december 2024',
      slug: 'state-machines'
    }
  ];

  return (
    <main className="blog-list">
      <div className="blog-list-container">
        <section className="about-section">
          <p className="about-text">
            hey, i'm kia. i studied computer science at simon fraser university and i've been bouncing
            around tech for a while now. spent last summer at snapchat, fall working on amazon's alexa
            c++ sdk, and before that had a pretty fun summer at drw trading. also did some time at aws
            and a 9-month stint at sap. starting full-time at bloomberg this january. mostly just trying
            to build things that don't suck and figuring stuff out as i go.
          </p>
          <p className="about-email">
            if you want to chat: <a href="mailto:kia.jjalali@gmail.com">kia.jjalali@gmail.com</a>
          </p>
        </section>

        <div className="blogs-divider"></div>

        {blogs.map(blog => (
          <Link
            key={blog.id}
            to={`/blog/${blog.slug}`}
            className="blog-item"
          >
            <div className="blog-date">{blog.date}</div>
            <h2 className="blog-title">{blog.title}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default BlogList;
