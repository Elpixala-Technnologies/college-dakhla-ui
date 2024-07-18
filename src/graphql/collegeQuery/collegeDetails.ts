import { gql } from "@apollo/client";

export const getCollegeDetails = gql`
  query getCollegeDetails($ID: ID!) {
    college(id: $ID) {
      data {
        id
        attributes {
          slug
          breadCrumb
          collegeLogo {
            data {
              id
              attributes {
                alternativeText
                width
                height
                url
              }
            }
          }
          bgImage {
            data {
              id
              attributes {
                alternativeText
                width
                height
                url
              }
            }
          }
          collegeName
          description
          location {
            state {
              data {
                id
                attributes {
                  state
                }
              }
            }
            city {
              data {
                id
                attributes {
                  city
                }
              }
            }
            country {
              data {
                id
                attributes {
                  country
                }
              }
            }
          }
          college_type {
            data {
              id
              attributes {
                collegeType
              }
            }
          }
          affiliation {
            data {
              id
              attributes {
                organization
              }
            }
          }
          estYear
          courses {
            examName {
              data {
                id
                attributes {
                  examName
                  slug
                  description
                }
              }
            }
          }
          videoGallery {
            id
            category
            video {
              id
              videoId
            }
          }
          imageGallery {
            id
            category
            images {
              data {
                id
                attributes {
                  alternativeText
                  width
                  height
                  url
                }
              }
            }
          }
          campusSize
          noOfFaculty
          noOfStudents
          avgPackage
          hightestPackage
          genderAccepted {
            data {
              id
              attributes {
                gender
              }
            }
          }
          news {
            data {
              id
              attributes {
                icon {
                  data {
                    id
                    attributes {
                      alternativeText
                      width
                      height
                      url
                    }
                  }
                }
                bgImage {
                  data {
                    id
                    attributes {
                      alternativeText
                      width
                      height
                      url
                    }
                  }
                }
                title
                excerpt
                category {
                  data {
                    id
                    attributes {
                      category
                    }
                  }
                }
                slug
                timeStamp
              }
            }
          }
          navbars {
            data {
              id
              attributes {
                navItem
              }
            }
          }
          courses {
            examName {
              data {
                id
                attributes {
                  examName
                }
              }
            }
            courseFee
            courseFeeLabel
            courseName {
              data {
                id
                attributes {
                  courseName
                }
              }
            }
          }
          brochureFile {
            data {
              id
              attributes {
                alternativeText
                width
                height
                url
              }
            }
          }
          streams {
            data {
              id
              attributes {
                stream
              }
            }
          }
          PageData {
            ... on ComponentCommonTextEditor {
              id
              heading
              author {
                data {
                  id
                  attributes {
                    name
                    avatar {
                      data {
                        attributes {
                          alternativeText
                          width
                          height
                          url
                        }
                      }
                    }
                    designation
                    updatedAt
                  }
                }
              }

              editorText: text
              headingIcon {
                data {
                  id
                  attributes {
                    alternativeText
                    width
                    height
                    url
                  }
                }
              }
              navItem {
                data {
                  id
                  attributes {
                    navItem
                  }
                }
              }
            }
            ... on ComponentCommonReviewsComponent {
              id
              heading
              headingIcon {
                data {
                  id
                  attributes {
                    alternativeText
                    width
                    height
                    url
                  }
                }
              }
              reviewsText: text
              navItem {
                data {
                  id
                  attributes {
                    navItem
                  }
                }
              }
            }
            ... on ComponentCommonGalleryComponent {
              id
              heading
              headingIcon {
                data {
                  id
                  attributes {
                    alternativeText
                    width
                    height
                    url
                  }
                }
              }
              galleryText: text
              navItem {
                data {
                  id
                  attributes {
                    navItem
                  }
                }
              }
            }
            ... on ComponentCommonFaqComponent {
              id
              heading
              Questions {
                id
                question
                answer
              }
              navItem {
                data {
                  id
                  attributes {
                    navItem
                  }
                }
              }
            }
            ... on ComponentCommonMainGalleryComponent {
              id
              heading
              headingIcon {
                data {
                  id
                  attributes {
                    alternativeText
                    width
                    height
                    url
                  }
                }
              }
              navItem {
                data {
                  id
                  attributes {
                    navItem
                  }
                }
              }
            }
            ... on ComponentCommonVideoComponent {
              id
              heading
              headingIcon {
                data {
                  id
                  attributes {
                    alternativeText
                    width
                    height
                    url
                  }
                }
              }
              navItem {
                data {
                  id
                  attributes {
                    navItem
                  }
                }
              }
            }
            ... on ComponentCommonBannerComponent {
              id
              img {
                data {
                  id
                  attributes {
                    alternativeText
                    width
                    height
                    url
                  }
                }
              }
              bannerText: text
              href
              navItem {
                data {
                  id
                  attributes {
                    navItem
                  }
                }
              }
            }
            ... on ComponentCommonReviewDescriptionComponent {
              id
              heading
              headingIcon {
                data {
                  id
                  attributes {
                    alternativeText
                    width
                    height
                    url
                  }
                }
              }
              navbar {
                data {
                  id
                  attributes {
                    navItem
                  }
                }
              }
            }
            ... on ComponentCommonNewsComponent {
              id
              heading
              headingIcon {
                data {
                  id
                  attributes {
                    alternativeText
                    width
                    height
                    url
                  }
                }
              }
              navItem {
                data {
                  id
                  attributes {
                    navItem
                  }
                }
              }
            }
          }
          CollegeReviewsAndRatings {
            id
            userName
            overall {
              id
              description
            }
            Academics {
              rating
              description
            }
            Faculty {
              rating
              description
            }
            Infrastructure {
              rating
              description
            }
            SocialLife {
              rating
              description
            }
            Placement {
              rating
              description
            }
          }
        }
      }
    }
  }
`;

export const getAllCoursesOfACollege = gql`
  query coursesOfACollege(
    $ID: ID!
    $searchByCourseName: String
    $courseSortingParameter: [String]
    $page: Int
    $pageSize: Int
  ) {
    college(id: $ID) {
      data {
        id
        attributes {
          courses(
            sort: $courseSortingParameter
            filters: {
              courseName: { courseName: { containsi: $searchByCourseName } }
            }
            pagination: { page: $page, pageSize: $pageSize }
          ) {
            courseName {
              data {
                id
                attributes {
                  slug
                  breadCrumb
                  courseName
                  description
                  bgImage {
                    data {
                      attributes {
                        alternativeText
                        width
                        height
                        url
                      }
                    }
                  }
                  courseLevel {
                    data {
                      attributes {
                        courseLevel
                      }
                    }
                  }
                  courseType {
                    data {
                      attributes {
                        collegeType
                      }
                    }
                  }
                  duration {
                    data {
                      attributes {
                        duration
                      }
                    }
                  }
                  avgFees {
                    from
                    to
                  }
                  courseMode {
                    data {
                      attributes {
                        courseMode
                      }
                    }
                  }
                  navbars {
                    data {
                      attributes {
                        navItem
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
