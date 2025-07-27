export default function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        {/* <h5>Testimonials</h5> */}
        <h1 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Testimonials
        </h1>
        <figure className="mt-10">
          <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            <p>
              "I got the offer from McKinsey! The last 2 weeks were nothing
              short of momentous with lots of highs and lows, I'm really glad I
              made that leap of faith and called you up, each case and call with
              you encouraged me through the last mile to now when I have an
              offer!"
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt=""
              src="https://static.wixstatic.com/media/7ffe3d_6a48e11d692a4cc48741f3388084fa57~mv2.png/v1/fill/w_208,h_208,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/image.png&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="mx-auto size-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Vinay Mehta</div>
              <svg
                width={3}
                height={3}
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">McKinsey & Company</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
