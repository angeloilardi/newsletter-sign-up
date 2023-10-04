import Image from "next/image"

export default function Success() {
    return (
      <div className="h-screen bg-white flex flex-col content-center p-6  justify-items-center">
            <Image
                className="mt-24"
          src="/assets/images/icon-list.svg"
          alt=""
          width={50}
          height={50}
        />
        <h1 className="text-4xl mt-6 font-bold">Thanks for subscribing!</h1>
        <p className="mt-6">
          A confirmation email has been sent to <strong>ash@loremcompany.com</strong>. Please
          open it and click the button inside to confirm your subscription.
        </p>
        <button className="mt-auto bg-charcoal_grey text-white w-full rounded-lg p-4 mb-4">Dismiss message</button>
      </div>
    );
}