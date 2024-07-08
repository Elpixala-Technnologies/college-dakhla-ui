"use client";
import React from "react";
import Wrapper from "@/components/Wrappers";
import { Button } from "@/components/Button";
import { homePageData } from "@/data/homeData";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { FaAngleLeft, FaAngleRight, FaCheck, FaStar } from "react-icons/fa";
import { courses } from "@/data/courseData";
import CollegesSlider from "@/components/cardsAndSliders/CollegesSlider";
import { collegePage, colleges } from "@/data/collegeData";
import {
  testimonials,
  CounsellingPackages,
  faqs,
  tabsSections,
  banner1,
} from "@/data/globalData";
import { newsPage } from "@/data/newsData";
import { exams, examsListingPage } from "@/data/examData";
import ExamFilteredCard from "@/components/cardsAndSliders/ExamFilteredCard";
import { ImCross } from "react-icons/im";
import Faqs from "@/components/Faqs";
import Banner1 from "@/components/bannerSections/Banner1";
import { Span } from "next/dist/trace";
import TextWithLineBreak, {
  TextWithoutLineBreak,
} from "@/utils/TextWithLineBreak";
import useIsMobile from "@/components/customHooks/useIsMobile";
import { headerLogo } from "@/assets";
import CollegeFilteredCard from "@/components/cardsAndSliders/CollegeFilteredCard";
import formatFees, { formatRupee } from "@/utils/customText";

export default function Home() {
  return (
    <>
      <HomeBanner
        title={homePageData?.heroSection?.title}
        text={homePageData?.heroSection?.text}
        text1={homePageData?.text1}
        text2={homePageData?.text2}
        text3={homePageData?.text3}
        text4={homePageData?.text4}
        text5={homePageData?.text5}
        popularCourses={courses}
        data={homePageData}
      />

      {/* Event & Webinars */}
      <Wrapper bgColor="bg-zinc-200" containerClassName="py-14">
        <h2 className="mb-5 text-center text-4xl font-bold sm:text-5xl md:mb-14">
          Events and Webinars
        </h2>
        <Events data={homePageData?.eventsAndWebinars} />
      </Wrapper>
      {/* Top Colleges */}
      <Wrapper containerClassName="py-14">
        <h2 className="mb-5 text-center text-4xl font-bold sm:text-5xl md:mb-14">
          Top Colleges
        </h2>
        <div className="topColleges relative mb-5">
          <CollegesSlider data={colleges} />
        </div>
        <div className="flex-center w-full">
          <Link href={"#"}>
            <Button variant="white" className="text-nowrap shadow-xl">
              View More
            </Button>
          </Link>
        </div>
      </Wrapper>

      {/* Testimonial */}
      <Wrapper bgColor="bg-zinc-200" containerClassName="relative py-14">
        <h2 className="mb-14 text-center text-4xl font-bold max-sm:my-9 sm:text-5xl">
          {testimonials?.title?.t1}
          <span className="text-orange-500">{testimonials?.title?.t2}</span>
        </h2>
        <TestimonialSlider data={testimonials?.testimonials} />
        <div className="mx-auto -mt-60 h-64 w-full rounded-2xl bg-orange-500"></div>
      </Wrapper>

      {/* News section */}
      <div className="!relative p-3 pb-14 md:px-52">
        <h2 className="my-14 text-center text-4xl font-bold max-sm:my-9 sm:text-5xl">
          We have been featured in the News!
        </h2>
        <NewsCardSlider data={newsPage?.news} />
        <div className="flex-center my-6 w-full">
          <Link href={"#"}>
            <Button variant="white" className="!w-48 px-6 shadow-xl">
              View More
            </Button>
          </Link>
        </div>
      </div>

      {/* Explore college */}
      <Wrapper
        bgColor="bg-zinc-200"
        containerClassName="py-14"
        className="bg-orange-200 p-4"
      >
        <Link href={"/colleges/1"} className="max-w-min">
          <Button variant="black" className="text-nowrap shadow-xl">
            Featured College
          </Button>
        </Link>
        <div className="flex-center flex-col py-5 md:px-14">
          <p className="mb-1 flex w-full justify-end">
            <Link
              href={"/colleges"}
              className="max-w-min font-bold text-orange-500 hover:text-blue-500 hover:underline"
            >
              <span className="mr-1 text-nowrap">See All</span>
            </Link>
          </p>
          {colleges
            ?.slice(0, 1)
            .map((college: any) => (
              <CollegeFilteredCard
                key={college.id}
                slug={college?.slug}
                bgImage={college?.bgImage?.url}
                city={college?.location?.city}
                state={college?.location?.state}
                overallRating={college?.reviewsAndRatings?.overallRating}
                totalReviews={college?.reviewsAndRatings?.totalReviews}
                avgFeePerYear={college?.avgFeePerYear}
                affiliation={college?.affiliation}
                hightestPackage={college?.hightestPackage}
                brochureUrl={college?.brochureUrl}
                collegeType={college?.collegeType}
                collegeName={college?.collegeName}
                avgPackage={college?.avgPackage}
                exam={college?.exam}
                description={college?.description}
                tabsSections={tabsSections}
              />
            ))}
        </div>
      </Wrapper>

      {/* metric data */}
      <MetricsCard data={homePageData?.metricData} />

      {/* packages part */}
      <PackageCard data={CounsellingPackages} />

      {/* faqs */}
      <Faqs data={faqs} />

      {/* final creative section */}
      <LastSection />
    </>
  );
}

function HomeBanner({ title, text, text1, text2, text3, text4, text5 }: any) {
  const isMobile = useIsMobile(750);
  return (
    <Wrapper
      as="section"
      containerClassName="pt-[11rem] pb-5 md:pt-[9rem] px-5 !mt-[-80px]"
      bgColor="backgroundGradient"
      className="text-center text-black"
    >
      {/* Banner Title  */}
      {title && (
        <h1 className="mb-5 w-full text-3xl font-bold md:text-5xl">
          {title?.t1 && (
            <span>
              {isMobile ? (
                <TextWithoutLineBreak text={title?.t1} />
              ) : (
                <TextWithLineBreak text={title?.t1} />
              )}
            </span>
          )}{" "}
          {title?.t2 && (
            <span className="text-orange-500">
              {isMobile ? (
                <TextWithoutLineBreak text={title?.t2} />
              ) : (
                <TextWithLineBreak text={title?.t2} />
              )}
            </span>
          )}{" "}
          {title?.t3 && (
            <span>
              {isMobile ? (
                <TextWithoutLineBreak text={title?.t3} />
              ) : (
                <TextWithLineBreak text={title?.t3} />
              )}
            </span>
          )}
        </h1>
      )}
      {text && (
        <p className="pb-5 text-xl">
          {" "}
          {isMobile ? (
            <TextWithoutLineBreak text={text} />
          ) : (
            <TextWithLineBreak text={text} />
          )}
        </p>
      )}
      {/* Search Bar */}
      <div className="mx-auto mb-10 flex h-12 w-full max-w-screen-md items-center gap-4 overflow-hidden rounded-xl bg-white px-1.5 py-2 focus-within:border-orange-500 md:mb-14">
        <input
          className="w-full pl-5 focus:outline-none max-md:p-3"
          type="text"
          placeholder="Search for colleges, courses etc."
          min={3}
        />
        <Button variant="black" className="text-sm">
          Submit
        </Button>
      </div>
      {/* Cards */}
      <div className="mb-10 flex w-full flex-wrap justify-center gap-2 md:mb-14 md:gap-8">
        <Card data={text1} />
        <Card data={text2} />
        <Card data={text3} />
        <Card data={text4} />
      </div>
      {text5 && (
        <p className="mx-auto mb-10 w-full max-w-screen-lg rounded-xl bg-black bg-opacity-50 px-5 py-10 text-center text-white md:mb-14">
          {text5}
        </p>
      )}
      {/* Popular Courses */}
      <h2 className="mb-5 text-center text-3xl font-bold sm:text-5xl md:mb-10">
        Popular Courses
      </h2>
      <PopularCoursesSlider data={courses?.[0]} />
    </Wrapper>
  );
}

function Card({ data }: any) {
  return (
    <div className="w-min min-w-36 rounded-2xl bg-white bg-opacity-50 p-2 md:min-w-52">
      <div className="h-full w-full rounded-2xl bg-white px-5 py-8 text-center">
        <p className="text-center text-lg text-orange-500 md:text-xl">
          <TextWithLineBreak text={data} />
        </p>
      </div>
    </div>
  );
}
const PopularCoursesSlider = ({ data }: any) => {
  const uniqueId = "popularCourses123";
  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: { clickable: true },
    autoplay: { delay: 5000, disableOnInteraction: false },
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Pagination, Navigation],
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
    },
  };

  return (
    <div className="CoursesSlider relative w-full">
      <Swiper
        {...swiperOptions}
        className={`mySwiper relative w-full max-w-fit px-5 ${uniqueId} topColleges`}
      >
        {[data?.[0], data?.[0], data?.[0], data?.[0], data?.[0]].map(
          (item: any, index: number) => (
            <SwiperSlide
              key={index}
              className="mb-12 w-full overflow-hidden rounded-2xl bg-white bg-opacity-50 p-2"
            >
              <CollegesCardContent text={data?.breadCrumb} />
            </SwiperSlide>
          ),
        )}
      </Swiper>
      <div className={`${uniqueId}-next swiper-button-next`}></div>
      <div className={`${uniqueId}-prev swiper-button-prev`}></div>
    </div>
  );
};

function CollegesCardContent({ text }: any) {
  return (
    <Link href={"/courses"}>
      <div className="flex-center hover:mix-blend-color-saturation h-full w-full flex-col gap-5 rounded-2xl bg-white p-5 text-center transition-all duration-300 hover:bg-orange-500">
        <Image
          src={headerLogo}
          alt="image"
          width={200}
          height={200}
          className="w-38 h-auto object-contain"
        />
        <p className="text-center text-lg font-semibold">
          <TextWithLineBreak text={text} />
        </p>
      </div>
    </Link>
  );
}

// Events function
function Events({ data }: { data: any[] }) {
  return (
    <Wrapper>
      <div className="flex flex-wrap justify-around">
        {data?.slice(0, 2)?.map((event) => (
          <div
            key={event?.id}
            className="w-[35%] overflow-hidden rounded-xl border-8 border-white bg-white max-sm:my-4 max-sm:w-full"
          >
            {/* Event content here */}
            <Image src={event?.image} alt={"event"} className="h-auto w-full" />
            <div className="p-4">
              <p className="mb-3 text-2xl">{event.text}</p>

              <Link href={event?.href || "#"} className="w-full">
                <Button variant="black" className="!w-full">
                  Attend Now
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

// testimonials slider
const TestimonialSlider = ({ data }: any) => {
  const uniqueId = "testimonials123";

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: { delay: 5000, disableOnInteraction: false },
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Navigation],
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  };

  return (
    <div className="topColleges relative">
      <Swiper
        {...swiperOptions}
        className={`mySwiper w-full max-w-fit px-5 md:w-[90%]`}
      >
        {data.map((comments: { id: React.Key | null | undefined }) => (
          <SwiperSlide
            key={comments.id}
            className="mb-12 w-full overflow-hidden rounded-2xl border border-zinc-300 bg-white shadow-lg"
          >
            <TestimonialCard testimonial={comments} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`${uniqueId}-next swiper-button-next`}></div>
      <div className={`${uniqueId}-prev swiper-button-prev`}></div>
    </div>
  );
};

function TestimonialCard({ testimonial }: any) {
  return (
    <div className="w-full p-4 even:mb-10">
      <div className="flex items-center">
        <Image
          src={testimonial?.userAvatar}
          alt="profile"
          className="h-14 w-14 rounded-full"
        />
        <div className="ml-5 p-3">
          <h3>{testimonial?.userName}</h3>
          <p>{testimonial?.college}</p>
        </div>
      </div>
      <p className="my-2">{testimonial?.comment}</p>
      <div className="flex-center mb-3">
        {Array.from({ length: testimonial?.star }, (_, i) => (
          <FaStar key={i} className="mx-2 text-2xl text-orange-500" />
        ))}
      </div>
      <Link href={testimonial?.storyVideoLink} className="my-2">
        <Button variant="black" className="!w-full">
          View Story
        </Button>
      </Link>
    </div>
  );
}

// News Slider
const NewsCardSlider = ({ data }: any) => {
  const uniqueId = "news123";

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: { clickable: true },
    autoplay: { delay: 5000, disableOnInteraction: false },
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Pagination, Navigation],
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  };

  return (
    <div className="topColleges relative">
      <Swiper
        {...swiperOptions}
        className={`mySwiper topColleges !relative w-full max-w-fit px-5`}
      >
        {data?.map((news: any, index: number) => (
          <SwiperSlide
            key={news?.id}
            className="mb-12 w-full overflow-hidden rounded-2xl border border-zinc-300 bg-white shadow-lg"
          >
            <NewsCard
              image={news?.bgImage?.url}
              text={news?.text}
              timeStamp={news?.timeStamp}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`${uniqueId}-next swiper-button-next !top-[30%]`}></div>
      <div className={`${uniqueId}-prev swiper-button-prev !top-[30%]`}></div>
    </div>
  );
};

function NewsCard({ image, text, timeStamp }: any) {
  return (
    <div className="w-full p-4">
      <Image
        src={image}
        width={800}
        height={800}
        alt="image"
        className="w-full rounded-xl object-cover"
      />
      <div className="px-4">
        <p className="my-2">{text}</p>
        <p className="text-md text-zinc-700">{timeStamp}</p>
      </div>
    </div>
  );
}

// metric data
function MetricsCard({ data }: any) {
  return (
    <div className="flex-center w-full p-4 pb-14">
      <div className="w-full max-w-[750px]">
        <h2 className="my-14 text-center text-4xl font-bold max-sm:my-9 sm:text-5xl">
          {data?.title}
        </h2>
        <p className="mb-11 text-center text-xl"> {data?.text}</p>
        <div className="flex flex-wrap items-stretch justify-center gap-3">
          <div className="w-[48%] border-b-2 border-orange-500 bg-white px-6 py-8 shadow-xl lg:w-[23%]">
            <h3 className="text-2xl font-bold">
              {formatFees(data?.students)} +
            </h3>
            <p>Students</p>
          </div>
          <div className="w-[48%] border-b-2 border-orange-500 bg-white px-6 py-8 shadow-xl lg:w-[23%]">
            <h3 className="text-2xl font-bold">{formatFees(data?.experts)}+</h3>
            <p>Unbiased Experts</p>
          </div>
          <div className="w-[48%] border-b-2 border-orange-500 bg-white px-6 py-8 shadow-xl lg:w-[23%]">
            <h3 className="text-2xl font-bold">
              {formatFees(data?.newUsers)}+
            </h3>
            <p>New users joined Anima</p>
          </div>
          <div className="w-[48%] border-b-2 border-orange-500 bg-white px-6 py-8 shadow-xl lg:w-[23%]">
            <h3 className="text-2xl font-bold">{formatFees(data?.teams)}+</h3>
            <p>Teams used Anima</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// package card
function PackageCard({ data }: any) {
  return (
    <div className="w-full bg-zinc-200 p-4 pb-14">
      <div className="w-full">
        <h2 className="my-14 text-center text-4xl font-bold max-sm:my-9 sm:text-5xl">
          {data?.title}
        </h2>
        <p className="mb-11 text-center text-xl">{data?.text}</p>
        <div className="flex flex-wrap items-stretch justify-center gap-4">
          {data?.counsellingPackagesCards?.map((packageData: { id: any }) => (
            <PackageContentCard key={packageData.id} data={packageData} />
          ))}
        </div>
      </div>
    </div>
  );
}

function PackageContentCard({ data }: any) {
  return (
    <div
      className={`relative w-full rounded-xl p-5 pt-6 shadow sm:w-[27%] md:pb-20 ${
        data?.isPopular ? "bg-orange-500 text-white" : "bg-white text-black"
      }`}
    >
      <p className="mb-2">{data?.PackageName}</p>
      <h3 className="text-4xl font-bold">
        ₹ {formatRupee(data?.price)} <span className="text-xl">/month</span>
      </h3>
      <p className="my-2">{data?.text}</p>
      {data?.lists?.map((list: any) => (
        <p key={list.id} className="flex items-center font-bold">
          {list?.isInclude ? (
            <FaCheck className="mr-3" />
          ) : (
            <ImCross className="mr-3" />
          )}{" "}
          {list?.text}
        </p>
      ))}
      <Link
        href="#"
        className="bottom-2 my-2 mt-2 block w-full md:absolute md:!w-[87%] lg:!w-[91%]"
      >
        <Button variant="black" className="!w-full">
          Get Started
        </Button>
      </Link>
    </div>
  );
}
function LastSection() {
  return (
    <div className="backgroundGradient1 !relative flex flex-col items-center justify-center p-11">
      <div className="z-20 mb-8 flex w-full max-w-screen-xl flex-col items-center justify-center rounded-2xl bg-white bg-opacity-35 p-5 text-center shadow backdrop-blur-lg backdrop-filter md:mb-28">
        <h1 className="mb-4 text-center text-3xl font-bold max-sm:mb-2 max-sm:text-3xl">
          More than 1000+ Colleges
        </h1>
        <p className="mb-9 text-center text-xl">
          Start your college Discovery...
        </p>

        <div className="mb-5 flex w-full justify-between p-6 max-sm:mb-0 max-sm:p-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Image
              key={i}
              src={homePageData?.collegeLogos?.[0].image?.url}
              alt={`College Logo ${i + 1}`}
              className="h-11 w-11 max-sm:h-9 max-sm:w-9"
            />
          ))}
        </div>

        <div className="mb-5 flex w-[85%] justify-around p-6 max-sm:mb-0 max-sm:p-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Image
              key={i}
              src={homePageData?.collegeLogos?.[0].image?.url}
              alt={`College Logo ${i + 1}`}
              className="h-11 w-11 max-sm:h-9 max-sm:w-9"
            />
          ))}
        </div>

        <div className="mb-5 flex w-[70%] justify-around p-6 max-sm:mb-0 max-sm:p-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <Image
              key={i}
              src={homePageData?.collegeLogos?.[0].image?.url}
              alt={`College Logo ${i + 1}`}
              className="h-11 w-11 max-sm:h-9 max-sm:w-9"
            />
          ))}
        </div>
      </div>
      <Banner1 data={banner1} />
    </div>
  );
}
