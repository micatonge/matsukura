import React from "react";
import Head from "next/head";

const Products = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Page Title</title>
        <meta name="description" content="Description of the page content" />
      </Head>

      <h1 className="text-3xl font-bold mb-8">Page Heading</h1>

      <div className="content">
        <p className="text-lg mb-4">
          This is a generic Next.js page component where you can edit the
          content and structure.
        </p>
        <p className="text-lg mb-4">
          You can add more sections, components, or any other logic here as
          needed. Tailwind CSS is being used for styling.
        </p>

        {/* Example of adding a list or dynamic content */}
        <ul className="list-disc pl-6">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>

        {/* Example of a button with event handling */}
        <button
          onClick={() => alert("Button clicked!")}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg"
        >
          Click Me
        </button>
      </div>
    </div>
  );
};

export default Products;
