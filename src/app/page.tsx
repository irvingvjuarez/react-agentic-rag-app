'use client';

import useApp from "./useApp";

export default function Home() {
  const { handleSubmit, chat, isChatEmpty } = useApp();

  return (
    <main className="flex m-4 justify-center items-center h-screen w-screen">
      <section className="p-2 grid grid-rows-[92%,8%] flex-center space-y-2 text-sm h-full w-full max-w-[700px]">

        <article className={`w-full bg-slate-800 rounded-md flex ${isChatEmpty ? 'items-center' : 'items-end'} justify-center overflow-auto`}>
          {isChatEmpty ? (
            <p className="text-2xl font-bold text-white">Ask me anything</p>
          ) : (
            <div className="w-full p-2 flex-col flex text-xl space-y-3 pt-2 pb-2 overflow-auto h-full justify-end">
              {chat.map((message, index) => (
                <div key={index} className={`p-2 max-w-[90%] ${message.author === 'user' ? 'user' : 'bot'} rounded-md w-fit`}>
                  <p className="text-white">{message.message}</p>
                </div>
              ))}
            </div>
          )}
        </article>

        <form
          onSubmit={handleSubmit}
          className="p-2 bg-slate-800 rounded-md grid grid-cols-[auto,5px,34px]"
        >
          <input autoComplete='off' id="queryInput" required type="text" placeholder="Type a message" className="rounded-md p-1 bg-transparent text-white" />
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
