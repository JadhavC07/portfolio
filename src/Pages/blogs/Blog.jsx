const Blog = () => {
  const posts = [
    {
      title: "Understanding React and Tailwind CSS",
      date: "May 17, 2024",
      content: `
            React and Tailwind CSS can greatly speed up your development process.
            Tailwind is a utility-first CSS framework that provides low-level utility classes.
          `,
      image: "https://via.placeholder.com/800x400",
      code: `
            // Sample React component
            import React from 'react';
    
            const SampleComponent = () => {
              return (
                <div className="p-4 bg-gray-100">
                  <h1 className="text-2xl font-bold">Hello, world!</h1>
                </div>
              );
            }
    
            export default SampleComponent;
          `,
    },
    {
      title: "Using Hooks in React",
      date: "May 18, 2024",
      content: `
            React hooks are functions that let you use state and other React features without writing a class.
          `,
      image: "https://via.placeholder.com/800x400",
      code: `
            // Example of using the useState hook
            import React, { useState } from 'react';
    
            const Counter = () => {
              const [count, setCount] = useState(0);
    
              return (
                <div>
                  <p>You clicked {count} times</p>
                  <button onClick={() => setCount(count + 1)}>
                    Click me
                  </button>
                </div>
              );
            }
    
            export default Counter;
          `,
    },
    // Add more posts as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-3xl">Tech Blog</h1>
      </header>
      <main className="p-4">
        {posts.map((post, index) => (
          <article key={index} className="mb-8 p-4 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p className="text-gray-500 text-sm">{post.date}</p>
            <p className="mt-2">{post.content}</p>
          </article>
        ))}
      </main>
      <footer className="bg-blue-600 text-white p-4 text-center">
        <p>&copy; 2024 Tech Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Blog;
