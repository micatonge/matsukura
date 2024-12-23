import Head from "next/head";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day, no-questions-asked return policy on all our eyewear.",
  },
  {
    question: "Do you offer eye exams?",
    answer:
      "Yes, we offer comprehensive eye exams at all our locations. You can book an appointment online or by calling us.",
  },
  // Add more FAQs here
];

const FAQ = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>FAQ - Matsukura Eyewear</title>
        <meta
          name="description"
          content="Frequently Asked Questions about Matsukura Eyewear"
        />
      </Head>

      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>

      <div>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold">{faq.question}</h2>
            <p className="text-lg">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
