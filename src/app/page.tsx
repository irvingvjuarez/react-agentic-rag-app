export default function Home() {
  return (
    <main className="flex m-4 justify-center items-center h-screen w-screen">
      <section className="p-2 grid grid-rows-[92%,8%] flex-center space-y-2 text-sm h-full w-full max-w-[700px]">
        <article className="w-full bg-slate-800 rounded-md">

        </article>

        <form className="p-2 bg-slate-800 rounded-md space-x-2">
          <input type="text" placeholder="Type a message" className="rounded-md shadow-slate-700 shadow-inner p-1" />
          <button className="button-gradient text-white rounded-md leading-normal p-1">Send message</button>
        </form>
      </section>
    </main>
  )
}
