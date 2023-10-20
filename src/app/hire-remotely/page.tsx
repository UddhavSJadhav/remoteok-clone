import Link from "next/link";
import React from "react";

import CustomInput from "@/components/common/CustomInput";
import CustomSelect from "@/components/common/CustomSelect";
import CustomCheckBox from "@/components/hire-remotely/CustomCheckBox";

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
          className="p-2 font-extrabold rounded-xl text-white hover:text-red-500 bg-red-500 hover:bg-transparent border-2 border-solid border-red-500 hover:border-red-500 me-2 transition-all ease-linear"
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
        <Link href="/buy-bundle" className="underline">
          Buy a bundle →
        </Link>
      </div>

      <div className="flex w-full">
        <div className="flex-grow p-7 bg-[#181818]">
          <div className="bg-color-bg text-center p-7 border border-solid border-stone-600 rounded-lg mb-7">
            ✨ We&apos;ve prefilled this page with some info that you entered
            before. If you don&apos;t like this{" "}
            <Link
              href="/hire-remotely"
              className="text-white ms-1 p-2 font-extrabold rounded-xl hover:text-red-500 bg-red-500 hover:bg-transparent border-2 border-solid border-red-500 hover:border-red-500 me-2 transition-all ease-linear"
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

            <CustomInput
              id="tags_keywords_or_stacks"
              placeholder="Type a tag or keyword to search and add it"
              label="tags, keywords or stacks"
              mandatory={true}
            />

            <div className="text-xs text-[#888] mt-1 mb-4">
              Short tags are preferred. Use tags like industry and tech stack.
              The first 3 or 4 tags are shown on the site, the other tags
              aren&apos;t but the job will be shown on each tag specific page
              (like /remote-react-jobs). We also sometimes generate tags
              automatically after you post/edit to supplement.
            </div>

            <CustomInput
              id="job_is_restricted_to_locations"
              placeholder="Type a location this job is restricted to like Worldwide, Europe"
              label="job is restricted to locations?"
              mandatory={true}
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

            <div className="flex items-center">
              <span> Expected views</span>
              <span className="ms-4 w-[min(80vw,200px)] p-[6px] bg-[#181818] rounded-md shadow-[0_0_0_1px_rgba(255,255,255,0.1)] hover:shadow-[0_0_0_5px_rgba(255,75,66,0.5)]">
                1122
              </span>
              <span className="ms-4">Expected clicks</span>
              <span className="ms-4 w-[min(80vw,200px)] p-[6px] bg-[#181818] rounded-md shadow-[0_0_0_1px_rgba(255,255,255,0.1)] hover:shadow-[0_0_0_5px_rgba(255,75,66,0.5)]">
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
          </div>

          <div className="relative bg-color-bg p-7 border border-solid border-stone-600 rounded-lg mt-7">
            <div className="bg-color-bg text-[14px] uppercase font-extrabold px-2 absolute left-1/2 -translate-x-1/2 border border-solid border-stone-600 border-b-0 rounded-tr-md rounded-tl-md top-0 -mt-2">
              company
            </div>
          </div>

          <div className="relative bg-color-bg p-7 border border-solid border-stone-600 rounded-lg mt-7">
            <div className="bg-color-bg text-[14px] uppercase font-extrabold px-2 absolute left-1/2 -translate-x-1/2 border border-solid border-stone-600 border-b-0 rounded-tr-md rounded-tl-md top-0 -mt-2">
              feedback about remote ok
            </div>
          </div>

          <div className="relative bg-color-bg p-7 border border-solid border-stone-600 rounded-lg mt-7">
            <div className="bg-color-bg text-[14px] uppercase font-extrabold px-2 absolute left-1/2 -translate-x-1/2 border border-solid border-stone-600 border-b-0 rounded-tr-md rounded-tl-md top-0 -mt-2">
              preview
            </div>
          </div>
        </div>

        <div className="w-[min(100%,500px)]"></div>
      </div>
    </div>
  );
};

export default HireRemotely;
