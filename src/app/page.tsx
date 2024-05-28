'use client';

import useApp from "./useApp";

export default function Home() {
  const { handleSubmit } = useApp();

  return (
    <main className="flex m-4 justify-center items-center h-screen w-screen">
      <section className="p-2 grid grid-rows-[92%,8%] flex-center space-y-2 text-sm h-full w-full max-w-[700px]">
      <article className="w-full bg-slate-800 rounded-md flex items-center justify-center text-white text-2xl font-bold">
        <p>Ask me anything</p>
      </article>

        <form
          onSubmit={handleSubmit}
          className="p-2 bg-slate-800 rounded-md grid grid-cols-[auto,5px,34px]"
        >
          <input type="text" placeholder="Type a message" className="rounded-md p-1 bg-transparent text-white" />
          <div></div>
          <button className="flex items-center justify-center button-gradient text-white rounded-full leading-normal">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </form>
      </section>
    </main>
  )
}
