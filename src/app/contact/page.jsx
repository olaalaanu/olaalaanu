export default function ContactPage() {
  return (
    <section id="contact" className="max-w-2xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-semibold text-center mb-8">Contact Me</h2>
      <form
        className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow space-y-6"
        // onSubmit={(e) => {
        //   e.preventDefault();
        //   alert("Form submitted!");
        // }}
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>

        <button
          type="submit"
          className="bg-[#265ec0] text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
