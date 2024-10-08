import {
  c1,
  c3,
  collegeBanner,
  collegeBanner1,
  collegeBanner2,
  collegeBanner3,
  collegeLogo,
  comp1,
  comp2,
  comp3,
  comp4,
  comp5,
  user1,
} from "@/assets";
import { BiSolidInstitution } from "react-icons/bi";
import { FaTransgenderAlt } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdCastForEducation } from "react-icons/md";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";

export const collegePage = {
  banner: {
    bgImg: [
      { url: collegeBanner },
      { url: collegeBanner1 },
      { url: collegeBanner2 },
      { url: collegeBanner3 },
    ],
  },
  filterBy: {
    stream: [
      "Engineering",
      "Business",
      "Arts",
      "Science",
      "Commerce",
      "Management",
      "Law",
      "Medical",
    ],
    state: [
      "Tamil Nadu",
      "Karnataka",
      "Kerala",
      "Andhra Pradesh",
      "Telangana",
      "Maharashtra",
      "Gujarat",
      "Rajasthan",
    ],
    city: ["faridabad", "bhiwani", "Hisar", "delhi", "sirsa"],
    course: [
      "Computer Science",
      "Electronics",
      "Mechanical",
      "Civil",
      "Chemical",
      "Chemistry",
      "Architecture",
      "Biotechnology",
      "Agriculture",
    ],
    rating: ["5", "4-5", "3-4", "2-3", "<2"],
    courseDuration: [4, 5, 6, 7, 8, 9, 10, 11, 12],
    collegeCategory: [
      "State University",
      "Private University",
      "Semi-Private University",
      "Foriegn University",
    ],
    programType: ["Full-Time", "Part-Time", "Distance", "Online", "Hybrid"],
    collegeType: ["Government", "Private", "Semi-Private", "Foriegn"],
    affiliation: [
      "AICTE",
      "NITI Aayog",
      "NIRF",
      "SCHOLARSHIP",
      "CITYUNION",
      "NDAI",
      "NITI Aayog",
      "NIRF",
      "SCHOLARSHIP",
      "CITYUNION",
      "NDAI",
    ],
    gender: ["Co-ed", "Boys", "Girls"],
    ranking: [
      "Top 10",
      "Top 20",
      "Top 30",
      "Top 40",
      "Top 50",
      "Top 60",
      "Top 70",
      "Top 80",
      "Top 90",
      "Top 100",
    ],
    exam: ["JEE Adv", "JEE Main", "CAT", "CET", "SDR", "DRY", "DRB", "GATE"],
    avgFeePerYear: [
      "100000-300000",
      "300000-500000",
      "500000-800000",
      "800000-1000000",
      "1000000-1200000",
      "1200000-1500000",
      "1500000-2000000",
      "2000000-2500000",
    ],
  },
};

// Single college Details
export const colleges = [
  {
    id: "1",
    slug: "iit-kharagpur",
    breadCrumb: "IIT kharagpur",
    collegeLogo: { url: collegeLogo },
    bgImage: { url: c1 },
    collegeName: "IIT kharagpur - Indian Institute of Technology ",
    description:
      "Located in the vibrant city of Los Angeles, UCLA (University of California, Los Angeles) is renowned for its academic excellence and innovative research programs. With a diverse student body and a wide range. Located in the vibrant city of Los Angeles, UCLA (University of California, Los Angeles) is renowned for its",
    location: {
      state: "Chennai",
      city: "Los Angeles",
      country: "USA",
    },
    collegeType: "Government",
    affiliation: ["AICTE", "WSCUC"],
    estYear: "1990",
    exam: ["SAT", "ACT"],
    // See in GlobalData
    tabsSections: [],
    // See In CoursesData page
    courses: [],
    // See in GlobalData
    faqs: [],
    reviewsAndRatings: {
      totalReviews: "7",
      overallRating: "4.5",
      individualReviews: [
        {
          title: "College Infrastructure",
          icon: <HiBuildingOffice2 />,
          rating: "4.5",
          basedOn: "456",
        },
        {
          title: "Academics & Faculty",
          icon: <BiSolidInstitution />,
          rating: "3",
          basedOn: "456",
        },
        {
          title: "Facilities",
          icon: <HiBuildingOffice2 />,
          rating: "4.5",
          basedOn: "456",
        },
        {
          title: "Placements & Internships",
          icon: <HiBuildingOffice2 />,
          rating: "4.5",
          basedOn: "456",
        },
        {
          title: "Fees & Scholarships",
          icon: <RiMoneyRupeeCircleFill />,
          rating: "3",
          basedOn: "456",
        },
        {
          title: "Crowd & Campus Life",
          icon: <FaTransgenderAlt />,
          rating: "2",
          basedOn: "456",
        },
        {
          title: "Overall Experience",
          icon: <MdCastForEducation />,
          rating: "4.5",
          basedOn: "456",
        },
      ],
    },
    campusSize: "617 Acres",
    noOfFaculty: "592",
    noOfStudents: "10224",
    avgFeePerYear: 220000,
    avgFeePerSem: 20000,
    avgPackage: 19800000,
    hightestPackage: 19800000,
    genderAccepted: "Co-ed",
    studyMode: "Regular, Part-time",
    collegeSequence: 1,
    isTopCollege: true,
    topCollegeSequence: 2,
    lastUpdate: "Nov 17, 2023 14:25 IST",
    news: [],
    brochureUrl: "#",
    collegeCategory: "State",
    isPopular: true,
    popularSequence: 1,
    featuredSequence: 1,
  },
];
