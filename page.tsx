import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <Image
      src={"data:image/png;base64,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"}
      width={700}
      height={400}
      alt="cartoon image of a character who is working on laptop while sitting on chair and table"
      />
    </div>
    <div className="lg:w-2/6 md:w-1/2 bg-gray-300 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
        SignIn My Web App
      </h2>
      <div className="relative mb-4">
        <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
          Full Name
        </label>
        <input
          type="text"
          id="full-name"
          name="full-name"
          className="w-full bg-white rounded border border-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <button className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg" id="reloadButton">
        Sign In
      </button>
    </div>
  </div>
</section>

    </div>
  );
}
