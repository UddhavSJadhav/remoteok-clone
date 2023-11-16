import Link from "next/link";
import React from "react";

import CustomCheckBox from "@/components/hire-remotely/CustomCheckBox";
import CustomInput from "@/components/common/CustomInput";
import CustomTextArea from "@/components/common/CustomTextArea";

const BuyBundle = () => {
  return (
    <div className="text-[#bfbfbf]">
      <header>
        <nav className="p-4 flex justify-between items-center border-b border-color-bg-hover border-solid">
          <Link href="/" className="hover:opacity-80 user-select-none block">
            <span className="ps-1 pe-2 font-pacifico text-4xl">remote</span>
            <span className="px-1 text-[28px] font-extrabold border-s-4 border-[#bfbfbf] leading-5">
              OK
            </span>
            <span className="text-xs ms-1">®</span>
          </Link>
          <Link
            href="/"
            className="hover:opacity-80 user-select-none hidden md:block px-1 text-3xl font-extrabold leading-5"
          >
            Buy a jobs bundle
          </Link>
          <Link
            href="/hire-remotely"
            className="block p-2 font-extrabold rounded-xl text-white hover:text-red-500 bg-red-500 hover:bg-transparent border-2 border-solid border-red-500 hover:border-red-500 me-2 transition-all ease-linear"
          >
            Post a single job
          </Link>
        </nav>
      </header>

      <div className="p-7 pb-72 bg-[#181818]">
        <div className="relative bg-color-bg p-7 border border-solid border-stone-600 rounded-lg mt-7 text-center">
          <p className="font-extrabold text-2xl">
            Drag the slider 👇 to build your own bundle of 1 post
          </p>

          <input
            type="range"
            min={0}
            max={60}
            className="bg-[#181818] accent-white cursor-pointer border border-solid border-[#30363d] appearance-none w-[calc(100%-28px-28px)] h-4 rounded-md outline-none my-8"
          />

          <p className="text-2xl mb-8">
            $1,293 for 1 $1,293 for 1 = $1,293 $1,293 per post
          </p>

          <p className="text-2xl font-extrabold">You save $0 (0% discount)</p>
        </div>

        <div className="relative bg-color-bg p-7 border border-solid border-stone-600 rounded-lg mt-7">
          <div className="bg-color-bg text-[14px] uppercase font-extrabold px-2 absolute left-1/2 -translate-x-1/2 border border-solid border-stone-600 border-b-0 rounded-tr-md rounded-tl-md top-0 -mt-2">
            DESIGN YOUR JOB POST
          </div>

          <p className="font-extrabold text-center mb-3 px-1">
            Every job post in your bundle will have the features you select
            below and will be valid for 24 months.
          </p>

          <CustomCheckBox
            id="post_design_2"
            label="Show my ⭐️ company logo besides my post (+$44) (you can change the logo later when posting each job)"
            xMoreViews={2}
          />
          <CustomCheckBox
            id="post_design_3"
            label="Email blast my job post to 📮779,727  remote candidates (+$89)"
            xMoreViews={3}
          />
          <CustomCheckBox
            id="post_design_5"
            label="Create a 🚧 QR-code short link for your post like rok.co/ph  to share easily (+$44)"
          />
          <CustomCheckBox
            id="post_design_7"
            label="Highlight your post in ⚠️ yellow (+$49)"
            xMoreViews={2}
          />
          <CustomCheckBox
            id="post_design_1"
            label="Highlight with your company's 🌈 brand color (+$499) (you can change the color later when posting each job)"
            xMoreViews={3}
          />

          <p className="font-extrabold pt-3 pb-4">
            ⚠️ Sticky posts are now limited to 2 live stickies per company to
            avoid the frontpage getting congested. You can buy more in a bundle
            but only 2 can be stickied at the same time. We can&apos;t refund if
            you find this out later. If you don&apos;t add sticky to your
            bundle, you can always sticky each post after buying the bundle and
            pay extra for each sticky then which can be easier.
          </p>

          <CustomCheckBox
            id="post_design_8"
            label="Sticky your post so it stays on 📌 top of the frontpage for ⏰ 24 hours (+$89)"
            xMoreViews={2}
          />
          <CustomCheckBox
            id="post_design_9"
            label="Sticky your post so it stays on 📌 top of the frontpage for 🗓 1 entire week (+$179)"
            xMoreViews={6}
          />
          <CustomCheckBox
            id="post_design_10"
            label="Sticky your post so it stays on 📌 top of the frontpage for 🗓 1 entire month (+$537)"
            xMoreViews={9}
          />
          <CustomCheckBox
            id="post_design_4"
            label="Get premium 💁‍♀️ 24-hour support and help with your job post (+$49)"
          />

          <div className="text-xs text-[#888] mt-8">
            Pricing of job posts and extra features is dynamic and may change
            based on how many jobs are posted every week, for example to avoid
            too many sticky jobs at one time. Sticky posts are limited to max 2
            per company at one time. Job posts are a) published for 30 days, b)
            cannot be refunded, and c) renew automatically after 30 days unless
            you 1) disable auto renew after posting on the edit page, or 2)
            close your job post on the edit page. We send a reminder 7 days by
            email before renewing. Renewing is the same price as the original
            job post for 30 days. If you buy a bundle, the discounted single job
            post price is used to renew. Automatic renewals can be self-refunded
            within 7 days after renewing with the link in the email.
          </div>
        </div>

        <div className="relative bg-color-bg p-7 border border-solid border-stone-600 rounded-lg mt-7">
          <div className="bg-color-bg text-[14px] uppercase font-extrabold px-2 absolute left-1/2 -translate-x-1/2 border border-solid border-stone-600 border-b-0 rounded-tr-md rounded-tl-md top-0 -mt-2">
            company
          </div>

          <CustomInput
            id="company_twitter"
            label="company twitter"
            placeholder="username"
          />
          <p className="text-xs opacity-60 mt-2 mb-6">
            Twitter username without @. Not required, but used to tag your
            company when we tweet out your job post.
          </p>

          <CustomInput
            id="company_email"
            label="company email"
            mandatory={true}
          />
          <p className="text-xs opacity-60 mt-1 mb-4">
            Make sure this email is accessible by you! We use this to send the
            invoice and edit link. We can not and do not manually resend it! If
            you use your company domain (same as company name), we will show a [
            Verified ] tag on your job post.
          </p>

          <CustomInput
            id="invoice_email"
            label="invoice email (stays private)"
            mandatory={true}
          />
          <p className="text-xs opacity-60 mt-1 mb-4">
            We send a copy of the invoice and edit link to here too. You can
            write your finance department or accountant expenses email here so
            they get a copy of the invoice for your bookkeeping.
          </p>

          <CustomTextArea
            id="invoice_address"
            label="invoice address"
            mandatory={true}
            placeholder="e.g. your company's full name and full invoice address, including building, street, city and country; also things like your VAT number, this is shown on the invoice."
          />
          <p className="text-xs opacity-60 mt-1 mb-4">
            Specify your company address here and we&apos;ll put it on your
            invoice for your bookkeeping. Be sure to [ Save changes ] in bottom
            right after editing your invoice address. Then it&apos;ll be
            instantly updated on the invoice.
          </p>

          <CustomInput
            id="invoice_notes"
            label="invoice notes / po number"
            placeholder="e.g. PO number 1234"
          />
          <p className="text-xs opacity-60 mt-1 mb-4">
            Not required. Add notes here that you&apos;d like to see on the
            invoice/receipt such as a Purchase Order number or any other
            internal notes you need for reference. You can add or edit this
            later.
          </p>

          <div className="font-extrabold uppercase text-sm mb-2">PAY LATER</div>
          <CustomCheckBox id="pay_later" label="I'd like to pay later" />
          <p className="text-xs opacity-60 mt-1 mb-4">
            Need to get approval for this payment? Or send the invoice to your
            finance department first? No problem, we&apos;ll save your job post
            and send you (and your finance department below) a payment link.
            Once it&apos;s paid we immediately publish it!
          </p>
        </div>
      </div>

      <div className="fixed bottom-0 w-full pt-7 px-7 pb-2 bg-color-bg border-t border-color-bg-hover border-solid">
        <button className="block p-6 text-2xl w-full font-extrabold rounded-md text-white hover:text-red-500 bg-red-500 hover:bg-transparent border-2 border-solid border-red-500 hover:border-red-500 me-2 transition-all ease-linear">
          Buy 1 jobs bundle -- <span className="line-through">$644</span> $588
        </button>

        <p className="text-center text-xs opacity-60 mt-2">
          We&apos;ll donate 1% to remove CO₂ from the atmosphere
        </p>
      </div>
    </div>
  );
};

export default BuyBundle;
