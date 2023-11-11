'use client'

import Image from "next/image"

import { useSearchParams } from "next/navigation";


export default function Success() {
  const searchParams = useSearchParams();
  return (
    <div className="h-[100svh] bg-white flex flex-col  p-6 md:p-12 justify-items-center  md:h-min md:rounded-2xl md:mx-auto md:max-w-[480px] text-black">
      <Image
        className="mt-24 md:mt-0"
        src="/assets/images/icon-list.svg"
        alt=""
        width={50}
        height={50}
      />
      <h1 className="text-4xl mt-6 font-bold md:text-5xl">
        Thanks for subscribing!
      </h1>
      <p className="mt-6 text-base">
        A confirmation email has been sent to{" "}
        <strong>{searchParams.get("email")}</strong>. Please open it and click
        the button inside to confirm your subscription.
      </p>
      <a href="/" className="mt-auto">
        <button className=" bg-charcoal_grey text-white w-full rounded-lg p-4 mb-4 md:mt-7">
          Dismiss message
        </button>
      </a>
    </div>
  );
}