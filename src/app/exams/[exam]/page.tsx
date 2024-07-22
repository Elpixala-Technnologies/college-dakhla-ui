"use client";
import Banner1 from "@/components/bannerSections/Banner1";
import ExamDetailBanner from "@/components/bannerSections/ExamDetailBanner";
import PageTabsWithDetail from "@/components/pageTabsWithDetail/PageTabsWithDetail";
import { exams } from "@/data/examData";
import { asideSection, banner1, tabsSections } from "@/data/globalData";
import { getAllTopCourses } from "@/graphql/courseQuery/topCourses";
import { getExamDetails } from "@/graphql/examQuery/examDetails";
import { getAllNews } from "@/graphql/newsQuery/news";
import { convertQueryDataToTabSections } from "@/utils/customText";
import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";

type Props = {
  params: {
    exam: String;
  };
};

export default function ExamDetailsPage({ params }: Props) {
  const [tabSelectionArray, setTabSelectionArray] = React.useState<any>([]);
  const examId = params?.exam;
  // Query
  const {
    loading,
    error,
    data: examData,
  } = useQuery(getExamDetails, {
    variables: { ID: examId },
  });

  const {
    loading: topCourseLoading,
    error: topCourseError,
    data: topCourseData,
  } = useQuery(getAllTopCourses, {
    variables: {
      page: 1,
      pageSize: 3,
    },
  });

  const {
    data: latestNewsData,
    loading: latestNewsDataLoading,
    error: latestNewsDataError,
  } = useQuery(getAllNews, {
    variables: {
      page: 1,
      pageSize: 3,
    },
  });

  useEffect(() => {
    // console.log("Exam Details: ", examData);

    if (examData?.exam?.data?.attributes?.PageData) {
      const convertedData: any = convertQueryDataToTabSections(
        examData?.exam?.data?.attributes?.PageData,
      );
      setTabSelectionArray(convertedData);
    }
  }, [examData]);
  // console.log(examData?.exam?.data?.attributes, "examData");
  // console.log("tabSelectionArray", tabSelectionArray);

  const asideSection = [
    {
      banner: {
        title: "Are You Interested in this Exam?",
        brochureUrl:
          examData?.exam?.data?.attributes?.brochureFile?.data?.attributes?.url,
      },
      // videoGallery: [],
      // imageGallery: [],
      topCourses: topCourseData?.courses?.data?.map((item: any) => {
        return {
          id: item?.id,
          breadCrumb: item?.attributes?.courseName,
          duration: item?.attributes?.duration?.data?.attributes?.duration,
          fees:
            (item?.attributes?.avgFees?.from + item?.attributes?.avgFees?.to) /
            2,
        };
      }),
      latestNews: latestNewsData?.news?.data?.map((item: any) => {
        return {
          id: item?.id,
          slug: item?.attributes?.slug,
          title: item?.attributes?.title,
          text: item?.attributes?.excerpt,
          timeStamp: item?.attributes?.updatedAt,
          icon: item?.attributes?.icon?.data?.attributes?.url,
          category: item?.attributes?.category?.data?.attributes?.category,
        };
      }),
    },
  ];

  return (
    <>
      <ExamDetailBanner
        breadCrumb={examData?.exam?.data?.attributes?.breadCrumb}
        examName={examData?.exam?.data?.attributes?.examName}
        titleAddition={examData?.exam?.data?.attributes?.titleAddition}
        examLogo={examData?.exam?.data?.attributes?.logo?.data?.attributes?.url}
        brochureUrl={
          examData?.exam?.data?.attributes?.brochureFile?.data?.attributes?.url
        }
        lastUpdate={examData?.exam?.data?.attributes?.updatedAt}
      />
      <PageTabsWithDetail
        data={tabSelectionArray}
        asideData={asideSection}
        slug={examId}
        tabUrlValue={"exams"}
      />
      <Banner1 data={banner1} />
    </>
  );
}
