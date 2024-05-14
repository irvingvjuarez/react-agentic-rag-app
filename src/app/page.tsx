export default function Home() {
  return (
    <main className="flex m-4 justify-center items-center">
      <section className="flex-row flex-center space-y-2 w-full max-w-screen-sm text-sm">
        <article className="w-full h-[82vh] bg-slate-100 rounded-md md:h-[60vh]">

        </article>

        <form className="flex p-2 bg-slate-100 rounded-md space-x-2">
          <input type="text" placeholder="Type a message" className="rounded-md shadow-slate-700 shadow-inner p-1" />
          <button className="button-gradient text-white rounded-md leading-normal p-1">Send message</button>
        </form>
      </section>
    </main>
  )
}
