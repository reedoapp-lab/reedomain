

export function AppDownload() {
  return (
    <section className="relative bg-white py-24">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[350px] w-[350px] rounded-full bg-[#5B3DF5]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Content */}
          <div className="text-center lg:text-left">
            
            {/* Badge */}
            <div className="mb-4 inline-block rounded-full bg-[#5B3DF5]/10 px-4 py-1 text-sm font-medium text-[#5B3DF5]">
              Coming Soon
            </div>

            <h2 className="text-3xl font-semibold text-black sm:text-4xl">
              Our Mobile App is on the Way
            </h2>

            <p className="mt-4 text-lg text-gray-500">
              We’re building a seamless mobile experience to make booking services even faster and easier. Stay tuned—launching soon on iOS and Android.
            </p>

            {/* Buttons */}
{/*            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              
              <Button
                disabled
                className="h-14 px-6 rounded-xl bg-gray-100 text-gray-400 cursor-not-allowed"
              >
                <Apple className="mr-2 h-5 w-5" />
                App Store
              </Button>

              <Button
                disabled
                className="h-14 px-6 rounded-xl bg-gray-100 text-gray-400 cursor-not-allowed"
              >
                <Play className="mr-2 h-5 w-5" />
                Google Play
              </Button>

            </div> */}
          </div>

          {/* Image (no container) */}
          <div className="flex justify-center">
            <img
              src="/images/dev.png"
              alt="App in development"
              className="h-auto w-full max-w-md drop-shadow-[0_40px_80px_rgba(0,0,0,0.08)]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}