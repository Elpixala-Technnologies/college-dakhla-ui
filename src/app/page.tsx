"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "@/components/Wrappers";
import { Button } from "@/components/Button";
// import { homePageData } from "@/data/homeData";
import { Swiper, SwiperSlide } from "swiper/react";
import { animate, motion, useMotionValue } from "framer-motion";
import { book1 } from "@/assets";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import useMeasure from "react-use-measure";
import Link from "next/link";
import { FaCheck, FaStar } from "react-icons/fa";
import { courses } from "@/data/courseData";
import CollegesSlider from "@/components/cardsAndSliders/CollegesSlider";
import { colleges } from "@/data/collegeData";
import {
  testimonials,
  // CounsellingPackages,
  faqs,
  tabsSections,
  banner1,
} from "@/data/globalData";
import { newsPage } from "@/data/newsData";
import { ImCross } from "react-icons/im";
import Faqs from "@/components/Faqs";
import Banner1 from "@/components/bannerSections/Banner1";
import TextWithLineBreak, {
  TextWithoutLineBreak,
} from "@/utils/TextWithLineBreak";
import useIsMobile from "@/components/customHooks/useIsMobile";
import { headerLogo } from "@/assets";
import CollegeFilteredCard from "@/components/cardsAndSliders/CollegeFilteredCard";
import formatFees, {
  convertToYearlyFee,
  formatDate,
  formatRupee,
} from "@/utils/customText";
import { GiBookCover } from "react-icons/gi";
import { useQuery } from "@apollo/client";
import { getHomePage } from "@/graphql/homePage/homePage";

export default function Home() {
  const { data: homePageData, loading, error } = useQuery(getHomePage);
  const popularCourses: any[] = homePageData?.popularCourses?.data?.map(
    (item: any) => {
      return {
        id: item?.id,
        breadCrumb: item?.attributes?.breadCrumb,
        bgImage: item?.attributes.bgImage?.data?.attributes?.url,
      };
    },
  );

  return (
    <section className="backgroundGradient relative !mt-0 w-full pb-16">
      <HomeBanner
        title={homePageData?.homePages?.data[0]?.attributes?.HeroSection?.title}
        text={homePageData?.homePages?.data[0]?.attributes?.HeroSection?.text}
        text1={homePageData?.homePages?.data[0]?.attributes?.text1}
        text2={homePageData?.homePages?.data[0]?.attributes?.text2}
        text3={homePageData?.homePages?.data[0]?.attributes?.text3}
        text4={homePageData?.homePages?.data[0]?.attributes?.text4}
        text5={homePageData?.homePages?.data[0]?.attributes?.text5}
        popularCourses={popularCourses}
        data={homePageData}
      />

      {/* Event & Webinars */}
      <Wrapper bgColor="bg-zinc-200" containerClassName="py-14">
        <h2 className="mb-5 text-center text-4xl font-bold sm:text-5xl md:mb-14">
          Events and Webinars
        </h2>
        <Events
          eventsAndWebinars={
            homePageData?.homePages?.data[0]?.attributes?.eventsAndWebinars
          }
        />
      </Wrapper>

      {/* Top Colleges */}
      <Wrapper containerClassName="py-14">
        <h2 className="mb-5 text-center text-4xl font-bold sm:text-5xl md:mb-14">
          Top Colleges
        </h2>
        <div className="topColleges relative mb-5">
          <CollegesSlider />
        </div>
        <div className="flex-center w-full">
          <Link href="/colleges">
            <Button variant="white" className="text-nowrap shadow-xl">
              View More
            </Button>
          </Link>
        </div>
      </Wrapper>

      {/* Testimonial */}
      <Wrapper bgColor="bg-zinc-200" containerClassName="relative py-14">
        <h2 className="mb-14 text-center text-4xl font-bold max-sm:my-9 sm:text-5xl">
          {homePageData?.homePages?.data[0].attributes?.testimonials?.title?.t1}{" "}
          <span className="text-orange-500">
            {
              homePageData?.homePages?.data[0].attributes?.testimonials?.title
                ?.t2
            }
          </span>
        </h2>
        <TestimonialSlider
          data={
            homePageData?.homePages?.data[0].attributes?.testimonials
              ?.testimonialCards
          }
        />
        <div className="mx-auto -mt-60 h-64 w-full rounded-2xl bg-orange-500"></div>
      </Wrapper>

      {/* News section */}
      <div className="!relative p-3 pb-14 md:px-52">
        <h2 className="my-14 text-center text-4xl font-bold max-sm:my-9 sm:text-5xl">
          We have been featured in the News!
        </h2>
        <NewsCardSlider data={homePageData?.news?.data} />
        <div className="flex-center my-6 w-full">
          <Link href="/news">
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
        <Link href={"/colleges"} className="max-w-min">
          <Button variant="black" className="text-nowrap shadow-xl">
            Featured Colleges
          </Button>
        </Link>
        <div className="flex-center flex-col py-5 md:px-14">
          <p className="mb-1 flex w-full justify-end">
            <Link
              href={"/colleges"}
              className="max-w-min font-bold text-orange-500 hover:text-blue-500 hover:underline"
            >
              <span className="mr-2 text-nowrap">See All</span>
            </Link>
          </p>

          <FeaturedCollegeSlider data={homePageData?.featuredColleges?.data} />
        </div>
      </Wrapper>
      <MetricsCard
        data={homePageData?.homePages?.data[0].attributes?.metricData}
      />
      <CounsellingPackages
        data={homePageData?.homePages?.data[0].attributes?.counsellingPackages}
      />
      <Faqs data={homePageData?.homePages?.data[0].attributes?.faqs} />
      <CollegesScrollSlideShow image={[headerLogo]} />
      <Banner1 data={banner1} />
    </section>
  );
}

function HomeBanner({
  title,
  text,
  text1,
  text2,
  text3,
  text4,
  text5,
  popularCourses,
}: any) {
  const isMobile = useIsMobile(750);
  return (
    <Wrapper
      as="div"
      containerClassName="pt-[11rem] pb-5 md:pt-[9rem] px-5"
      bgColor=""
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
      <PopularCoursesCard data={popularCourses} />
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
// popular courses
function PopularCoursesCard(data: any) {
  return (
    <div className="mb-4 flex w-full flex-wrap justify-center gap-6 p-4 max-sm:gap-2">
      {data?.data?.map((item: any, index: number) => (
        <CollegesCardContent
          key={index}
          breadCrumb={item?.breadCrumb}
          bgImage={item?.bgImage}
          id={item?.id}
        />
      ))}
    </div>
  );
}
const FeaturedCollegeSlider = ({ data }: any) => {
  // console.log(data, "data");
  const uniqueId = "featured123";

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
      768: { slidesPerView: 1 },
      1024: { slidesPerView: 1 },
      1800: { slidesPerView: 1 },
    },
  };

  return (
    <div className="CoursesSlider relative w-full">
      <Swiper {...swiperOptions} className={`relative w-full px-5 ${uniqueId}`}>
        {data?.map((college: any) => {
          return (
            <SwiperSlide
              key={college.id}
              className="mb-12 w-full overflow-hidden rounded-2xl p-2"
            >
              <CollegeFilteredCard
                id={college?.id}
                slug={college?.attributes?.slug}
                bgImage={college?.attributes?.bgImage?.data?.attributes?.url}
                city={
                  college?.attributes?.location?.city?.data?.attributes?.city
                }
                state={
                  college?.attributes?.location?.state?.data?.attributes?.state
                }
                overallRating={
                  college?.attributes?.reviewsAndRatings?.overallRating
                }
                totalReviews={345}
                avgFeePerYear={
                  college?.attributes?.allCourses
                    .map((course: any) =>
                      convertToYearlyFee(
                        course?.courseFee,
                        course?.courseFeeLabel,
                      ),
                    )
                    ?.reduce(
                      (total: any, fee: any, _: any, { length }: any) =>
                        total + fee / length,
                      0,
                    ) || 0
                }
                affiliation={college?.attributes?.affiliation?.data?.map(
                  (value: any) => value?.attributes?.organization,
                )}
                hightestPackage={college?.attributes?.hightestPackage}
                brochureUrl={
                  college?.attributes?.brochureFile?.data?.attributes?.url
                }
                collegeType={college?.attributes?.college_type?.data?.attributes?.collegeType?.slice(
                  0,
                  3,
                )}
                collegeName={college?.attributes?.collegeName}
                avgPackage={college?.attributes?.avgPackage}
                exam={Array.from(
                  new Set(
                    college?.attributes?.allCourses?.map(
                      (item: any) =>
                        item?.examName?.data?.attributes?.breadCrumb,
                    ),
                  ),
                )
                  .filter(Boolean)
                  .join(", ")}
                description={college?.attributes?.description}
                tabsSections={college?.attributes?.navbars?.data?.map(
                  (value: any) => value?.attributes?.navItem,
                )}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={`${uniqueId}-next swiper-button-next`}></div>
      <div className={`${uniqueId}-prev swiper-button-prev`}></div>
    </div>
  );
};

function CollegesCardContent({ breadCrumb, bgImage, id }: any) {
  return (
    <Link href={id ? `/courses/${id}` : `#`}>
      <div className="flex-center hover:mix-blend-color-saturation hover:!border-3 h-full w-[200px] flex-col gap-5 rounded-2xl border-white bg-white p-5 text-center shadow-xl transition-all duration-300 hover:bg-orange-500 hover:!text-white max-sm:w-[140px]">
        <Image
          src={bgImage}
          alt="image"
          width={70}
          height={70}
          className="w-38 h-auto object-contain"
        />
        {/* <GiBookCover className="text-6xl" /> */}
        <p className="text-center text-lg font-semibold">{breadCrumb}</p>
      </div>
    </Link>
  );
}

// Events function
function Events({ eventsAndWebinars }: { eventsAndWebinars: any[] }) {
  return (
    <Wrapper>
      <div className="flex flex-wrap justify-around gap-10">
        {eventsAndWebinars?.slice(0, 3)?.map((event) => (
          <div
            key={event?.id}
            className="flex-[1] overflow-hidden rounded-xl border-8 border-white bg-white max-sm:my-4 max-sm:w-full"
          >
            {/* Event content here */}
            <Image
              src={event?.image?.data?.attributes?.url}
              alt={"event"}
              className="h-64 max-h-64 w-full object-cover"
              height={800}
              width={800}
            />
            <div className="p-4">
              <p className="mb-3 text-2xl">{event?.text}</p>

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
    // autoplay: { delay: 5000, disableOnInteraction: false },
    // loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    // modules: [Autoplay, Navigation],
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
        {data?.map((comments: { id: React.Key | null | undefined }) => (
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
    <div className="flex min-h-[19.2rem] w-full flex-col justify-between p-4">
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
      <p className="my-2 line-clamp-4">{testimonial?.comment}</p>
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
      1024: { slidesPerView: 2 },
    },
  };

  return (
    <div className="topColleges relative">
      <Swiper
        {...swiperOptions}
        className={`mySwiper topColleges !relative w-full max-w-fit px-5`}
      >
        {data?.slice(0, 3).map((news: any, index: number) => (
          <SwiperSlide
            key={news?.id}
            className="mb-12 w-full overflow-hidden rounded-2xl border border-zinc-300 bg-white shadow-lg"
          >
            <NewsCard
              image={news?.attributes?.icon?.data?.attributes?.url}
              text={news?.attributes?.excerpt}
              timeStamp={news?.attributes?.updatedAt}
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
        className="h-52 w-full rounded-xl object-cover"
      />
      <div className="px-4">
        <p className="my-2">{text}</p>
        <p className="text-md text-zinc-700">{formatDate(timeStamp)}</p>
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
function CounsellingPackages({ data }: any) {
  // console.log(data, "data");
  const isMobile = useIsMobile(750);

  return (
    <div className="w-full bg-zinc-200 p-4 pb-14">
      <h2 className="my-14 text-center text-4xl font-bold max-sm:my-9 sm:text-5xl">
        {data?.title}
      </h2>

      <p className="mb-11 text-center text-xl">
        {isMobile ? (
          <TextWithoutLineBreak text={data?.text} />
        ) : (
          <TextWithLineBreak text={data?.text} />
        )}
      </p>
      <div className="flex flex-wrap items-stretch justify-center gap-4">
        {data?.counsellingPackagesCards?.map((packageData: { id: any }) => (
          <PackageContentCard key={packageData.id} data={packageData} />
        ))}
      </div>
    </div>
  );
}

function PackageContentCard({ data }: any) {
  const isMobile = useIsMobile(750);
  return (
    <div
      className={`relative w-full rounded-xl p-5 pt-6 shadow duration-300 hover:scale-105 sm:w-[27%] md:pb-20 ${
        data?.isPopular ? "bg-orange-500 text-white" : "bg-white text-black"
      }`}
    >
      <p className="mb-2">{data?.PackageName}</p>
      <h3 className="text-4xl font-bold">
        ₹ {formatRupee(data?.price)} <span className="text-xl">/month</span>
      </h3>
      <p className="my-2">
        {isMobile ? (
          <TextWithoutLineBreak text={data?.text} />
        ) : (
          <TextWithLineBreak text={data?.text} />
        )}
      </p>
      {data?.lists?.data?.map((list: any) => (
        <p key={list.id} className="flex items-center font-bold">
          {list?.attributes?.isInclude ? (
            <FaCheck className="mr-3" />
          ) : (
            <ImCross className="mr-3" />
          )}{" "}
          {list?.attributes?.text}
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
// partner cards
interface CollegesScrollSlideShowProps {
  image: string[];
}

const FAST_DURATION = 5;
const SLOW_DURATION = 75;

const CollegesScrollSlideShow: React.FC<CollegesScrollSlideShowProps> = ({
  image,
}) => {
  const [duration, setDuration] = useState(FAST_DURATION);
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [rerender, xTranslation, duration, width, mustFinish]);

  return (
    <section className="mx-auto w-full">
      <div className="relative overflow-x-hidden">
        {/* <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-gray-100 to-transparent"></div>
        <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-transparent to-gray-100"></div> */}
        <motion.div
          className="mx-auto flex max-w-[1440px] gap-8"
          style={{ x: xTranslation }}
          ref={ref}
          onHoverStart={() => {
            setMustFinish(true);
            setDuration(SLOW_DURATION);
          }}
          onHoverEnd={() => {
            setMustFinish(true);
            setDuration(FAST_DURATION);
          }}
        >
          {[...image, ...image, ...image, ...image, ...image, ...image].map(
            (item, idx) => (
              <PartnersCard image={item} key={idx} />
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
};

// partner cards component
interface CardProps {
  image: string;
}

const PartnersCard: React.FC<CardProps> = ({ image }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.div
      className="relative flex h-[150px] min-w-max items-center justify-center overflow-hidden rounded-xl"
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      {/* Hover overlay */}
      {/* <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="absolute left-0 top-0 bottom-0 right-0 z-10 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full" />
            <motion.h1
              className="bg-white font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[0.5ch] hover:opacity-75"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
            >
              <span>Explore Now</span>
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence> */}
      {image && (
        <Image
          src={image}
          alt="image"
          width={250}
          height={250}
          className="h-full max-h-16 w-full object-contain"
        />
      )}
    </motion.div>
  );
};
