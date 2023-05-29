import { render, screen } from "@testing-library/react";
import Jobscard from "../../app/components/Jobscard";

const mockData = [
  {
    image:
      "https://images.pexels.com/photos/1337386/pexels-photo-1337386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    postedTime: "10h",
    jobType: "Full Time",
    jobTitle: "Senior Software Engineer",
    jobDescription: "Backend Developer",
    jobLocation: "Canada",
  },
];

test("Jobscard component renders job cards correctly", () => {
  // Arrange
  render(<Jobscard data={mockData} />);

  // Assert
  const jobTitleElements = screen.getAllByRole("heading", { level: 5 });
  expect(jobTitleElements).toHaveLength(mockData.length);

  const jobTypeElement = screen.getByText(/Full Time/i);
  expect(jobTypeElement.textContent).toEqual(" \u00B7 Full Time");

  const jobTitleElement = screen.getByText(/Senior Software Engineer/i);
  expect(jobTitleElement.textContent).toEqual("Senior Software Engineerr");

  const jobDescriptionElement = screen.getByText(/Backend Developer/i);
  expect(jobDescriptionElement.textContent).toEqual("Backend Developer");

  const jobLocationElement = screen.getByText(/Canada/i);
  expect(jobLocationElement.textContent).toEqual("Canada");

  // You can add more assertions here based on the expected rendering and behavior of the component
});
