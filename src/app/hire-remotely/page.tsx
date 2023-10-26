import Link from "next/link";
import React from "react";
import Image from "next/image";

import CustomInput from "@/components/common/CustomInput";
import CustomSelect from "@/components/common/CustomSelect";
import CustomCheckBox from "@/components/hire-remotely/CustomCheckBox";
import CustomTextArea from "@/components/common/CustomTextArea";
import CustomSelectMultiple from "@/components/common/CustomSelectMultiple";
import RichTextEditor from "@/components/rich-text-editor/RichTextEditor";

import { jobTypeList, primaryTagList } from "@/data";

const HireRemotely = () => {
  return (
    <div className="text-[#bfbfbf]">
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
          Hire Remotely
        </Link>
        <Link
          href="/buy-bundle"
          className="block p-2 font-extrabold rounded-xl text-white hover:text-red-500 bg-red-500 hover:bg-transparent border-2 border-solid border-red-500 hover:border-red-500 me-2 transition-all ease-linear"
        >
          Buy a bundle →
        </Link>
      </nav>

      <div className="font-extrabold text-center p-2">
        🏷 A discount of 10% with code 044025DC9012CE2DA45113CB22154EE0 is
        applied on checkout
      </div>

      <div className="bg-red-500 text-center font-extrabold px-2 py-4 text-white">
        ⛳️ Save up to 50% when buying multiple job posts —{" "}
        <Link href="/buy-bundle" className="underline inline-block">
          Buy a bundle →
        </Link>
      </div>

      <div className="flex w-full">
        <div className="flex-grow p-7 bg-[#181818] pb-56">
          <div className="flex items-center justify-center flex-wrap bg-color-bg text-center p-7 border border-solid border-stone-600 rounded-lg mb-7">
            <div className="me-2">
              ✨ We&apos;ve prefilled this page with some info that you entered
              before. If you don&apos;t like this
            </div>
            <Link
              href="/hire-remotely"
              className="block text-white ms-1 p-2 font-extrabold rounded-xl hover:text-red-500 bg-red-500 hover:bg-transparent border-2 border-solid border-red-500 hover:border-red-500 me-2 transition-all ease-linear"
            >
              Start Over
            </Link>
          </div>

          <div className="relative bg-color-bg p-7 border border-solid border-stone-600 rounded-lg">
            <div className="bg-color-bg text-[14px] uppercase font-extrabold px-2 absolute left-1/2 -translate-x-1/2 border border-solid border-stone-600 border-b-0 rounded-tr-md rounded-tl-md top-0 -mt-2">
              let&apos;s start
            </div>

            <CustomInput
              id="company_name"
              placeholder="Company name"
              label="company name"
              mandatory={true}
            />

            <div className="text-xs text-[#888] mt-3 mb-4">
              Your company&apos;s brand/trade name: without Inc., Ltd., B.V.,
              Pte., etc.
            </div>

            <CustomInput
              id="position"
              placeholder="Position"
              label="position"
              mandatory={true}
            />

            <div className="text-xs text-[#888] my-1">
              Please specify as single job position like &quot;Marketing
              Manager&quot; or &quot;Node JS Developer&quot;, not a sentence
              like &quot;Looking for PM / Biz Dev / Manager&quot;. We know your
              job is important but please DO NOT WRITE IN FULL CAPS. If posting
              multiple roles, please create multiple job posts. A job post is
              limited to a single job. We only allow real jobs, absolutely no
              MLM-type courses &quot;learn how to work online&quot; please.
            </div>

            <CustomSelect id="job_type" list={jobTypeList} />

            <div className="mb-7"></div>

            <CustomSelect
              id="primary_tag"
              list={primaryTagList}
              label="primary tag"
            />

            <div className="text-xs text-[#888] mt-1 mb-4">
              This primary tag shows first and increases visibility in the main
              sections. Your job is shown on every page that is tagged with
              though. E.g. if you tag it as PHP, it shows for Remote PHP Jobs
              etc.
            </div>

            <CustomSelectMultiple
              id="tags_keywords_or_stacks"
              placeholder="Type a tag or keyword to search and add it"
              label="tags, keywords or stacks"
              mandatory={true}
              list={[]}
            />

            <div className="text-xs text-[#888] mt-1 mb-4">
              Short tags are preferred. Use tags like industry and tech stack.
              The first 3 or 4 tags are shown on the site, the other tags
              aren&apos;t but the job will be shown on each tag specific page
              (like /remote-react-jobs). We also sometimes generate tags
              automatically after you post/edit to supplement.
            </div>

            <CustomSelectMultiple
              id="job_is_restricted_to_locations"
              placeholder="Type a location this job is restricted to like Worldwide, Europe"
              label="job is restricted to locations?"
              mandatory={true}
              list={[]}
            />

            <div className="text-xs text-[#888] mt-1">
              If you&apos;d only like to hire people from a specific location or
              timezone this remote job is restricted to (e.g. Europe, United
              States or Japan). If not restricted, please leave it as
              &quot;Worldwide&quot;. The less restricted this is, the more
              applicants you will get. Keeping it &quot;Worldwide&quot; is
              highly recommended as you&apos;ll have access to a worldwide pool
              of talent.{" "}
              <span className="font-extrabold">
                To promote fairness in remote work positions,{" "}
                <Link
                  className="underline"
                  href="https://twitter.com/levelsio/status/1394260973406457863"
                >
                  worldwide jobs are ranked higher.
                </Link>
              </span>
            </div>
          </div>

          <div className="relative bg-color-bg p-7 border border-solid border-stone-600 rounded-lg mt-7">
            <div className="bg-color-bg text-[14px] uppercase font-extrabold px-2 absolute left-1/2 -translate-x-1/2 border border-solid border-stone-600 border-b-0 rounded-tr-md rounded-tl-md top-0 -mt-2">
              DESIGN YOUR JOB POST
            </div>

            <CustomCheckBox
              id="post_design_1"
              label="Get 💁‍♀️ premium support and help with your job post (+$89)"
            />
            <CustomCheckBox
              id="post_design_2"
              label="Show my ⭐️ company logo besides my post (+$44)"
              xMoreViews={2}
            />
            <CustomCheckBox
              id="post_design_3"
              label="Email blast my job post to 📮779,727  remote candidates (+$89)"
              xMoreViews={3}
            />
            <CustomCheckBox
              id="post_design_4"
              label="Get auto matched with suitable applicants from our directory of remote workers"
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
              id="post_design_11"
              label="Geolock your post for people only in the location it's restricted to above and block applicants from elsewhere (+$89)"
            />

            <div className="flex flex-wrap items-center">
              <span className="mt-1">Expected views</span>
              <span className="mt-1 ms-4 me-4 w-[min(80vw,200px)] p-[6px] bg-[#181818] rounded-md shadow-[0_0_0_1px_rgba(255,255,255,0.1)] hover:shadow-[0_0_0_5px_rgba(255,75,66,0.5)]">
                1122
              </span>
              <span className="mt-1">Expected clicks</span>
              <span className="mt-1 ms-4 w-[min(80vw,200px)] p-[6px] bg-[#181818] rounded-md shadow-[0_0_0_1px_rgba(255,255,255,0.1)] hover:shadow-[0_0_0_5px_rgba(255,75,66,0.5)]">
                120
              </span>
            </div>

            <div className="text-xs text-[#888] mt-8">
              Pricing of job posts and extra features is dynamic and may change
              based on how many jobs are posted every week, for example to avoid
              too many sticky jobs at one time. Sticky posts are limited to max
              2 per company at one time. Job posts are a) published for 30 days,
              b) cannot be refunded, and c) renew automatically after 30 days
              unless you 1) disable auto renew after posting on the edit page,
              or 2) close your job post on the edit page. We send a reminder 7
              days by email before renewing. Renewing is the same price as the
              original job post for 30 days. If you buy a bundle, the discounted
              single job post price is used to renew. Automatic renewals can be
              self-refunded within 7 days after renewing with the link in the
              email.
            </div>
          </div>

          <div className="relative bg-color-bg p-7 border border-solid border-stone-600 rounded-lg mt-7">
            <div className="bg-color-bg text-[14px] uppercase font-extrabold px-2 absolute left-1/2 -translate-x-1/2 border border-solid border-stone-600 border-b-0 rounded-tr-md rounded-tl-md top-0 -mt-2">
              job details
            </div>

            <label
              htmlFor="company_logo"
              className="text-sm font-extrabold mb-2"
            >
              COMPANY LOGO (.JPG OR .PNG, SQUARE OR ROUND)
            </label>
            <div className="relative w-32 aspect-square border border-solid border-stone-700 rounded-full mb-4">
              <p className="absolute w-full top-1/2 -translate-y-1/2 bg-slate-200 text-center rounded-md py-1 text-stone-400">
                💾 Upload
              </p>
              <input
                type="file"
                className="opacity-0 w-full aspect-square cursor-pointer"
                id="company_logo"
                accept=".jpg,.png"
              />
            </div>

            <div className="user-select-none cursor-pointer mb-2">
              <input
                id="brand_color"
                type="checkbox"
                className="relative w-6 h-6 bg-color-bg appearance-none checked:outline-none checked:border-transparent border border-solid border-stone-600 rounded-md after:text-2xl checked:after:content-['✅'] after:absolute after:-left-1 after:-top-1 after:outline-none me-2 -mb-1"
              />
              <label htmlFor="brand_color">
                Highlight with your company&apos;s 🌈 brand color (+$499) 👉
                <input type="color" className="rounded-sm mx-2 h-6 px-1" />
                <span className="inline-block ms-2 border border-solid border-red-500 uppercase text-red-500 text-xs font-bold rounded-md p-1">
                  3x more views
                </span>
              </label>
            </div>

            <div>
              <label className="text-sm font-extrabold mb-2">
                ANNUAL SALARY OR COMPENSATION IN USD (GROSS, ANNUALIZED,
                FULL-TIME-EQUIVALENT (FTE) IN USD EQUIVALENT)*
              </label>
              <div className="flex flex-wrap items-center">
                <div className="w-1/3">
                  <CustomInput
                    id="minimum_per_year"
                    placeholder="Minimum per year"
                  />
                </div>
                <span className="mx-4">--</span>
                <div className="w-1/3">
                  <CustomInput
                    id="maximum_per_year"
                    placeholder="Maxiimum per year"
                  />
                </div>
              </div>

              <p className="text-xs text-stone-400 mt-1 mb-4">
                <span className="underline bg-yellow-200 text-black">
                  It&apos;s illegal to not share salary range on job posts since
                  2021.
                </span>{" "}
                Posts without salary will automatically show an estimate of
                salary based on similar jobs. Remote job postings are legally
                required to show a salary compensation range in many U.S. states
                and countries. Google does NOT index jobs without salary data.
                If it&apos;s a short-term gig, use the annual full-time
                equivalent. For example, if it&apos;s a 2-week project for
                $2,000, the annual equivalent would be $2,000 / 2 weeks * 52
                weeks = $52,000. Please use USD equivalent. We don&apos;t have
                currency built-in yet and we&apos;d like to use this salary data
                to show salary trends in remote work.{" "}
                <Link
                  href="https://twitter.com/levelsio/status/1364288537030459400"
                  target="_blank"
                  className="font-extrabold underline"
                >
                  Remote OK is a supporter of #OpenSalaries.
                </Link>
              </p>
            </div>

            <RichTextEditor label="job description" mandatory={true} />

            <RichTextEditor label="how to apply" />

            <CustomInput
              id="apply_url"
              label="apply url"
              placeholder="https://"
              mandatory={true}
            />
            <p className="text-xs opacity-60 mt-2 mb-3">
              Apply URLs with a form an applicant can fill out generally receive
              a lot more applicants than having people apply by email (below). A
              good platform to have applicants apply on is Lever (not
              affiliated).
            </p>

            <p className="text-center">or</p>

            <CustomInput
              id="apply_email_address"
              label="apply email address"
              placeholder="Apply email address"
              mandatory={true}
            />
            <p className="text-xs opacity-60 mt-2">
              This email is public (!), the [ Apply ] button links to it if you
              do not specify an Apply URL above. We recommend using an Apply
              URL, instead of an Apply Email Address, because you might get a
              lot of spam/automated applicants by email.
            </p>
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
              invoice and edit link. We can not and do not manually resend it!
              If you use your company domain (same as company name), we will
              show a [ Verified ] tag on your job post.
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
              invoice for your bookkeeping. Be sure to [ Save changes ] in
              bottom right after editing your invoice address. Then it&apos;ll
              be instantly updated on the invoice.
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

            <div className="font-extrabold uppercase text-sm mb-2">
              PAY LATER
            </div>
            <CustomCheckBox id="pay_later" label="I'd like to pay later" />
            <p className="text-xs opacity-60 mt-1 mb-4">
              Need to get approval for this payment? Or send the invoice to your
              finance department first? No problem, we&apos;ll save your job
              post and send you (and your finance department below) a payment
              link. Once it&apos;s paid we immediately publish it!
            </p>
          </div>

          <div className="relative bg-color-bg p-7 border border-solid border-stone-600 rounded-lg mt-7">
            <div className="bg-color-bg text-[14px] uppercase font-extrabold px-2 absolute left-1/2 -translate-x-1/2 border border-solid border-stone-600 border-b-0 rounded-tr-md rounded-tl-md top-0 -mt-2">
              feedback about remote ok
            </div>

            <CustomTextArea id="feedback_box" label="feedback box" />
            <p className="text-xs opacity-70 mt-1">
              This isn&quot;t part of the job post. If you have any feature
              requests or general feedback about posting a job Remote OK, leave
              it here. Please be radically honest, I&quot;m always improving the
              site and act on your feedback fast. It&quot;s most important that
              you&quot;re happy with the site and I want you to keep coming back
              to post here! This feedback box gets sent straight to my phone
              wherever I am. -Pieter Levels, Founder of Remote OK
            </p>
          </div>

          <div className="relative bg-color-bg p-7 border border-solid border-stone-600 rounded-lg mt-7 user-select-none">
            <div className="bg-color-bg text-[14px] uppercase font-extrabold px-2 absolute left-1/2 -translate-x-1/2 border border-solid border-stone-600 border-b-0 rounded-tr-md rounded-tl-md top-0 -mt-2">
              preview
            </div>

            <div className="font-extrabold text-center mt-3">
              Here&apos;s a preview of how your job post will look like
            </div>

            <div className="text-center mt-2">
              Don&apos;t worry if it&apos;s not perfect the first time: your job
              is fully editable for free after posting it!
            </div>

            <div className="p-1 border border-solid border-stone-700 rounded-md mt-10">
              <div className="bg-yellow-200 text-black h-[88px] mt-2 sm:mx-2 sm:rounded-xl flex items-center cursor-pointer hover:opacity-80 transition-all ease-linear">
                <div className="p-4 md:pe-2">
                  <Image
                    src="/assets/safetywing.png"
                    alt="safetyLogo"
                    className="w-16 aspect-square object-cover bg-cyan-900 rounded-full"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="w-[min(70%,448px)]">
                  <div className="text-[clamp(14px,6vw,17px)] font-extrabold">
                    Company
                  </div>
                  <div>Position</div>
                  <div className="my-1">
                    <span className="bg-[#424242] rounded-full text-xs px-2 py-1 me-2">
                      🌎 Worldwide
                    </span>
                  </div>
                </div>
                <div className="w-[20%] hidden lg:flex items-center font-bold">
                  <span className="bg-white hover:bg-transparent text-black hover:text-white border-2 border-white border-solid rounded-xl text-xs px-2 py-1 cursor-cell transition-all ease-linear">
                    Worldwide
                  </span>
                </div>
                <div className="ms-auto w-10 flex items-center p-2 me-3 md:me-0">
                  <Image
                    src="/assets/paper-clip.svg"
                    alt="paper-clip"
                    width={100}
                    height={100}
                    className="w-3 aspect-square invert me-1"
                  />
                  <div className="text-sm">7d</div>
                </div>
                <div className="p-4 hidden md:block w-48">
                  <button className="w-40 bg-white text-black rounded-xl py-3 px-7 font-extrabold">
                    Apply now
                  </button>
                </div>
              </div>

              <div className="p-10">
                <div className="text-2xl">Company is hiring a</div>
                <div className="mt-2 text-2xl font-bold">Remote Position</div>
                <div className="mt-1 text-sm">
                  The description of the job position will appear here. Write
                  this in the &quot;Job Description&quot; box above.
                </div>

                <div className="text-center p-5 border border-solid border-stone-700 rounded-md mt-10">
                  <div className="font-extrabold text-lg">
                    How do you apply?
                  </div>
                  <div className="mt-2 mb-6 text-sm">
                    Here the instructions go on how to apply for this job. Write
                    them in the &quot;How to Apply?&quot; box.
                  </div>
                  <span className="opacity-40 text-sm font-extrabold border border-dashed border-stone-500 rounded-xl p-2">
                    Apply for this job
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative bg-color-bg p-7 border border-solid border-stone-600 rounded-lg mt-7">
            <div className="bg-color-bg text-[14px] uppercase font-extrabold px-2 absolute left-1/2 -translate-x-1/2 border border-solid border-stone-600 border-b-0 rounded-tr-md rounded-tl-md top-0 -mt-2">
              FROM OUR PARTNERS (OPENS IN NEW WINDOW)
            </div>

            <Link
              href="https://safetywing.com/nomad-health?referenceID=24730000"
              target="_blank"
              className="bg-indigo-900 h-[88px] mt-1 sm:mx-2 sm:rounded-xl flex items-center cursor-pointer hover:opacity-80 transition-all ease-linear"
            >
              <div className="p-4 md:pe-2">
                <Image
                  src="/assets/safetywing.png"
                  alt="safetyLogo"
                  className="w-16 aspect-square object-cover bg-indigo-900 rounded-full"
                  width={60}
                  height={60}
                />
              </div>
              <div className="max-w-4xl">
                <div className="text-[clamp(14px,6vw,17px)] font-extrabold text-ellipsis line-clamp-1">
                  The first health insurance for remote startups
                </div>
                <div className="text-ellipsis line-clamp-1">
                  A fully equipped health insurance that works for all your
                  global contractors and employees
                </div>
              </div>
              <div className="ms-auto p-4 hidden md:block">
                <button className="w-44 bg-teal-400 text-white rounded-xl py-3 px-7 font-extrabold">
                  Sign up today
                </button>
              </div>
            </Link>
          </div>
        </div>

        {/* <div className="">
          <div className="p-7">
            <div className="text-center">
              Remote OK is{" "}
              <Link
                href="https://twitter.com/levelsio/status/1606328087569801223"
                className="underline text-red-500 font-extrabold"
              >
                the most popular remote jobs board in the world
              </Link>{" "}
              trusted by millions of remote workers and leading remote companies
              like
            </div>
          </div>
        </div> */}
      </div>

      <div className="fixed bottom-0 w-full pt-7 px-7 pb-2 bg-color-bg border-t border-color-bg-hover border-solid">
        <button className="block p-6 text-2xl w-full font-extrabold rounded-md text-white hover:text-red-500 bg-red-500 hover:bg-transparent border-2 border-solid border-red-500 hover:border-red-500 me-2 transition-all ease-linear">
          Start hiring -- <span className="line-through">$644</span> $588
        </button>

        <p className="text-center text-xs opacity-60 mt-2">
          We&apos;ll donate 1% to remove CO₂ from the atmosphere
        </p>
      </div>
    </div>
  );
};

export default HireRemotely;
