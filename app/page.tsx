import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="bg-white max-w-4xl mx-auto md:rounded-3xl my-auto">
        <header className="w-full md:hidden">
          <Image
            src="./assets/images/illustration-sign-up-mobile.svg"
            width={512}
            height={400}
            alt=""
          ></Image>
        </header>
        <main className="min-h-screen flex-col w-full mx-auto p-5 flex md:flex-row  md:justify-end max-h-[500px] md:min-h-min md:max-h-max">
          <div className="p-12">
            <h1 className="relative my-6 text-4xl font-bold">Stay updated!</h1>
            <p className="mb-6">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className="flex flex-col gap-4">
              <li className="inline-flex gap-3">
                <Image
                  src="/assets/images/icon-list.svg"
                  width={20}
                  height={20}
                  alt=""
                />
                <p>Product discovery and building what matters</p>
              </li>
              <li className="inline-flex gap-3 mr-1.5">
                <Image
                  src="/assets/images/icon-list.svg"
                  width={20}
                  height={20}
                  alt=""
                />
                <p>Measuring to ensure updates are a success</p>
              </li>
              <li className="inline-flex gap-3">
                <Image
                  src="/assets/images/icon-list.svg"
                  width={20}
                  height={20}
                  alt=""
                />
                <p>And much more!</p>
              </li>
            </ul>
            <form action="" className="mt-8">
              <label htmlFor="email">
                <span className="block text-xs font-bold">Email address</span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email@company.com"
                  className="focus:border-gray-500 focus:outline-none focus:ring-0 form-input rounded-lg w-full  mt-2 p-4 placeholder:gray-300 invalid:ring-tomato invalid:text-tomato  invalid:bg-tomato/20 peer border-gray-300 shadow-sm invalid:focus:border-tomato"
                />
                <p className=" invisible block text-xs font-bold peer-invalid:visible text-tomato">
                  Valid email required
                </p>
                <button className="bg-charcoal_grey text-white w-full rounded-lg p-4 mt-4">
                  Subscribe to monthly newsletter
                </button>
              </label>
            </form>
          </div>
          <div>
            <img
              src="/assets/images/illustration-sign-up-desktop.svg"
              alt=""
              height={500}
              width={500}
            ></img>
          </div>
        </main>
      </div>
    </>
  );
}
