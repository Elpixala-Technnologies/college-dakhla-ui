import { gql } from "@apollo/client";

export const updateUserProfileData = gql`
  mutation updateUserData(
    $id: ID!
    $username: String
    $gender: String
    $dob: Date
    $course: ID
    $GraduationEducationalDetails: ComponentCommonGraduationEducationalDetailsInput
    $twelfthEducationalDetails: ComponentCommon12ThEducationalDetailsInput
    $appearingEntranceExam: String
    $collegesApplying: [ComponentCommonCollegesApplyingInput]
    $workExperience: [ComponentCommonWorkExperienceInput]
    $studyAbroad: [ComponentCommonCollegesApplyingInput]
  ) {
    updateUsersPermissionsUser(
      id: $id
      data: {
        username: $username
        gender: $gender
        dob: $dob
        course: $course
        GraduationEducationalDetails: $GraduationEducationalDetails
        twelfthEducationalDetails: $twelfthEducationalDetails
        appearingEntranceExam: $appearingEntranceExam
        collegesApplying: $collegesApplying
        workExperience: $workExperience
        studyAbroad: $studyAbroad
      }
    ) {
      data {
        attributes {
          username
        }
      }
    }
  }
`;

export const getUserData = gql`
  query getUserData($ID: ID!) {
    usersPermissionsUser(id: $ID) {
      data {
        id
        attributes {
          username
          email
          dob
          avatar{
            data{
              id
              attributes{
                url
              }
            }
          }
          course {
            data {
              id
              attributes {
                breadCrumb
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
          state {
            data {
              id
              attributes {
                state
              }
            }
          }
          phoneNumber
          gender
          GraduationEducationalDetails {
            id
            institutionName
            passingYear
            course
            gradingSystem
            percentageOrGrades
            location
          }
          twelfthEducationalDetails {
            id
            schoolName
            location
            passingYear
            stream
            gradingSystem
            percentageOrGrades
          }
          appearingEntranceExam
          collegesApplying(sort: "priority:asc") {
            id
            collegeApplied {
              data {
                id
                attributes {
                  collegeName
                }
              }
            }
            status
            priority
          }
          workExperience {
            id
            companyName
            jobPosition
            from
            to
          }
          studyAbroad(sort: "priority:asc") {
            id
            collegeApplied {
              data {
                id
                attributes {
                  collegeName
                }
              }
            }
            status
            priority
          }
        }
      }
    }
  }
`;

export const getAllCollegesByName = gql`
  query getAllCollegesByName {
    colleges {
      data {
        id
        attributes {
          collegeName
        }
      }
    }
  }
`;