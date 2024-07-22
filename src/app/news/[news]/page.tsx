"use client";
import React, { useEffect, useState } from "react";
import Notification from "@/components/notification/Notification";
import { newsPage } from "@/data/newsData";
import Banner1 from "@/components/bannerSections/Banner1";
import { banner1 } from "@/data/globalData";
import { SearchResult } from "@/components/newsSections/SearchResult";
import { Search } from "@/components/newsSections/Search";
import { useQuery } from "@apollo/client";
import { getNewsDetails } from "@/graphql/newsQuery/newsDetails";
import Image from "next/image";
import { formatDate } from "@/utils/customText";
import Wrapper from "@/components/Wrappers";

type Props = {
  params: {
    news: String;
  };
};
export default function NewsPage({ params }: Props) {
  const newsId = params?.news;
  // Query
  const {
    loading,
    error,
    data: newsDetailData,
  } = useQuery(getNewsDetails, {
    variables: { ID: newsId },
  });
  useEffect(() => {
    console.log(newsDetailData, "newsDetailData");
  }, [newsDetailData]);
  return (
    <section className="w-full pt-32 max-md:pt-28">
      <Notification data={newsPage?.notification?.list} />
      <Search />
      <Content
        avatar={
          newsDetailData?.new?.data?.attributes?.article?.writerAvatar?.data
            ?.attributes?.url
        }
        writerName={newsDetailData?.new?.data?.attributes?.article?.writerName}
        designation={
          newsDetailData?.new?.data?.attributes?.article?.designation
        }
        content={newsDetailData?.new?.data?.attributes?.article?.content}
        title={newsDetailData?.new?.data?.attributes?.title}
        date={newsDetailData?.new?.data?.attributes?.updatedAt}
      />
      <Banner1 data={banner1} />
    </section>
  );
}

function Content({
  avatar,
  writerName,
  designation,
  content,
  title,
  date,
}: any) {
  // console.log(avatar, "avatar");
  return (
    <Wrapper>
      <div className="mt-5 w-full p-5 md:min-w-[550px]">
        {/* Author */}
        <div className="mb-8 flex items-center gap-x-2">
          <Image
            src={avatar}
            alt="avatar"
            className="h-16 w-16 rounded-full"
            width={48}
            height={48}
          />
          <div className="flex flex-col gap-2">
            <p className="text-3xl font-bold text-orange-500">
              {writerName || "Admin"}
            </p>
            <div className="flex items-center gap-2 text-zinc-500">
              <p className="font-bold">{designation} |</p>
              <p className="font-medium">Last Updated: {formatDate(date)}</p>
            </div>
          </div>
        </div>
        {/* Title  */}
        <h2 className="my-5 text-2xl font-bold capitalize">{title}</h2>
        {/* EditorText */}
        {content && (
          <div
            className={`dangerouslySetInnerHTMLStyle mb-5 text-justify`}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </div>
    </Wrapper>
  );
}
