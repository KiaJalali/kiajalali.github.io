import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams();

  // Blog content
  const blogContent = {
    'state-machines': {
      title: 'why i stopped using react hooks for state machines',
      date: 'december 2024',
      content: `
        i spent way too long fighting with useReducer trying to build a file upload component with retry logic.
        the state transitions were a mess of if statements and the reducer kept getting bigger. then i realized
        i was basically reimplementing a state machine poorly.

        ## the problem with hooks

        hooks are great for simple state, but once you have interdependent states and complex transitions,
        you end up with this tangled mess. my upload component needed to handle: idle, uploading, paused,
        retrying, failed, and success states. with hooks i had multiple useState calls and useEffects
        triggering each other. debugging was a nightmare.

        ## xstate changed everything

        switched to xstate and suddenly all the implicit state transitions became explicit. no more
        "wait, how did we get to this state?" the state machine diagram literally shows you every
        possible path. plus the visualizer tool is insane for debugging.

        ## the actual win

        the real benefit wasn't just cleaner code. it was being able to reason about the component.
        impossible states became actually impossible. no more checking if (isUploading && isFailed)
        because the machine won't let you get there.

        ## not everything needs a state machine

        don't go crazy and turn every useState into xstate. simple components are fine with hooks.
        but if you're writing complex conditional logic or have more than 3-4 related states,
        just use a proper state machine. your future self will thank you.
      `
    }
  };

  const blog = blogContent[slug] || {
    title: 'Blog Post Not Found',
    date: '',
    content: 'This blog post does not exist yet.'
  };

  return (
    <main className="blog-post">
      <article className="blog-post-content">
        <div className="blog-post-date">{blog.date}</div>
        <h1 className="blog-post-title">{blog.title}</h1>
        <div className="blog-post-body">
          {blog.content.split('\n').map((paragraph, index) => {
            if (paragraph.trim().startsWith('##')) {
              return <h2 key={index}>{paragraph.replace('##', '').trim()}</h2>;
            }
            if (paragraph.trim()) {
              return <p key={index}>{paragraph.trim()}</p>;
            }
            return null;
          })}
        </div>
      </article>
    </main>
  );
};

export default BlogPost;
