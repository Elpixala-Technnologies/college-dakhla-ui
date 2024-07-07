import React from "react";
import Wrapper from "../Wrappers";
import Image from "next/image";
import { addCommas } from "@/utils/customText";
import { LuBadgeCheck } from "react-icons/lu";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import { Button } from "../Button";
import { HiOutlineDownload } from "react-icons/hi";
import { StarRating } from "../StarRating";
import Link from "next/link";
export default function ExamDetailBanner({
  bgImage,
  city,
  state,
  overallRating,
  totalReviews,
  affiliation,
  brochureUrl,
  examName,
  estYear,
  examLogo,
  examCategory,
}: any) {
  return (
    <Wrapper
      as="section"
      containerClassName="mt-[4rem] px-5"
      className=" rounded-2xl  text-white flex items-center justify-between bg-orange-200 p-8 px-8"
    >
      <div className="">
        {/* Left Side  */}
        <div className="flex flex-[8] justify-center gap-5">
          <div className="w-min rounded-2xl bg-white p-2">
            <Image
              src={examLogo}
              alt="banner"
              width={500}
              height={500}
              className="min-h-40 min-w-40 object-contain"
            />
          </div>
          <div className="flex flex-col justify-center gap-3">
            <h2 className="text-3xl font-bold md:text-4xl">
              {examName}
              <span className="text-sm">
                {city}
                {state && ", " + state}
              </span>
            </h2>
            <p className="text-xl">
              Admission {`${new Date().getFullYear()}`}, Cutoff, Courses, Fees,
              Placement, Ranking
            </p>
            <ul className="flex gap-x-5 gap-y-2">
              <li className="flex items-center gap-2">
                <LuBadgeCheck className="text-2xl text-orange-500" />
                <span>
                  Approved by{" "}
                  {affiliation?.map?.((a: any, index: number) => (
                    <React.Fragment key={a}>
                      {a}
                      {affiliation?.length > index + 1 && ", "}
                    </React.Fragment>
                  ))}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FaClockRotateLeft className="text-2xl text-orange-500" />
                <span>Estd {estYear}</span>
              </li>
              <li className="flex items-center gap-2 capitalize">
                <FaUniversity className="text-2xl text-orange-500" />
                <span>{examCategory} university</span>
              </li>
            </ul>
          </div>
        </div>
        {/* Right Side  */}
        <div className="flex-center flex-[4] flex-col gap-4 max-md:hidden">
          <h2 className="flex gap-2 text-3xl font-bold">
            {overallRating}{" "}
            <StarRating className="gap-2 text-white" rating={overallRating} />
          </h2>
          <p className="text-xl">({totalReviews} reviews)</p>
          <Link href={brochureUrl || "#"}>
            <Button variant="white" className="text-nowrap">
              <span>Download Brochure</span>
              <HiOutlineDownload />
            </Button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}
