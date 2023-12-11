import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Typography,
  Grid,
  CircularProgress,
  Pagination,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  IconButton,
} from "@mui/material";
import { useTheme } from "../layout/ThemeContext";
import { Close as CloseIcon } from "@mui/icons-material";
import classes from "./Jobs.module.css";


const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [defaultPage, setDefaultPage] = useState(1);
  const [selectedJob, setSelectedJob] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const jobsPerPage = 9;


  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const { theme } = useTheme();

  console.log("Current theme:", theme);

  const themeStyle = theme === "light" ? classes.light : classes.dark;

  console.log("ThemeStyle:", themeStyle);

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const dummyJobDescription = `
We are seeking a highly motivated and skilled Software Engineer to join our dynamic team at XYZ Tech Solutions. As a Software Engineer, you will play a crucial role in designing, developing, and maintaining cutting-edge software applications that power our business and delight our customers.

Key Responsibilities:
1. Collaborate with cross-functional teams to understand project requirements and objectives.
2. Design, develop, test, and deploy high-quality software solutions using modern programming languages and frameworks.
3. Debug and resolve software defects and issues, ensuring optimal performance and reliability.
4. Participate in code reviews and provide constructive feedback to peers.
5. Stay up-to-date with industry trends and emerging technologies to continuously improve our software development practices.
6. Contribute to the development of technical documentation, including design specifications, user manuals, and API documentation.
7. Work closely with product managers to translate business requirements into technical specifications.
8. Troubleshoot and resolve complex software integration issues and ensure seamless system interactions.
9. Collaborate with quality assurance teams to ensure software quality and reliability.
10. Maintain and enhance existing software systems by identifying areas for improvement and implementing updates.

Qualifications:
- Bachelor's degree in Computer Science, Software Engineering, or a related field.
- Proven experience in software development, with a strong portfolio of projects.
- Proficiency in one or more programming languages, such as Python, Java, C++, or JavaScript.
- Experience with web development frameworks, databases, and cloud technologies.
- Strong problem-solving skills and attention to detail.
- Excellent communication and teamwork abilities.
- Ability to work in a fast-paced and collaborative environment.

Why Join Us:
At XYZ Tech Solutions, we offer a dynamic and innovative work environment where you can make a significant impact and grow your career. You will have the opportunity to work on exciting projects, collaborate with talented professionals, and continuously expand your skill set. We value diversity, creativity, and excellence, and we are committed to providing our employees with a rewarding and fulfilling experience.

If you are passionate about software development, enjoy solving complex problems, and are looking for a challenging and rewarding career, we encourage you to apply. Join us in shaping the future of technology and making a difference in the world.

XYZ Tech Solutions is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.
`;

  useEffect(() => {
    // const savedPage = localStorage.getItem("jobsPage");
    // if (savedPage) {
    //   setCurrentPage(parseInt(savedPage)); // Set the current page from local storage
    // } else {
    //   // If no page is saved, set it to the defaultPage
    //   setCurrentPage(defaultPage);
    // }
    setCurrentPage(defaultPage);
    setIsLoading(true);
    let timeoutId = null;

    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/jobs/");
        if (response.ok) {
          const data = await response.json();
          // Wait for the remainder of the 5 seconds before setting the state
          timeoutId = setTimeout(() => {
            setJobs(data);
            setIsLoading(false);
          }, Math.max(0, 500 - (Date.now() - startTime)));
        } else {
          throw new Error("Network response was not ok");
        }
      } catch (error) {
        setError(error);
        setIsLoading(false); // You might want to keep it false in case of error
      }
    };

    const startTime = Date.now();
    fetchData();

    // Cleanup function to clear timeout if component unmounts
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [defaultPage]);

  //   const handleJobClick = (jobUrl) => {
  //     // Save the current state to local storage
  //     localStorage.setItem('jobsPage', currentPage.toString());
  //     window.open(jobUrl, '_blank');
  //   };

  if (error) {
    return <p>Error loading jobs: {error.message}</p>;
  }

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="50vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 18 }}>
      <Typography variant="h4" gutterBottom>
        Job Listings
      </Typography>
      <Grid container spacing={3}>
        {currentJobs.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.id}>
            <Paper
              sx={{
                height: "160px",
                width: "100%",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
                borderRadius: "18px",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 5px 12px rgba(0,0,0,0.2)',
                },
                backgroundColor: theme === "light" ? "#808b96" : "#1E1E1E",
                color: theme === "light" ? "white" : "#03DAC5"
              }}
              elevation={3}
              onClick={() => handleJobClick(job)}
              style={{ cursor: "pointer" }}
            >
              <Box padding={2}>
                <Typography variant="h6">{job.title}</Typography>
                <Typography variant="subtitle1">{job.company}</Typography>
                <Typography variant="body2">{job.location}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop={2}
      >
        <Pagination
          sx={{
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
            borderRadius: "18px",
            backgroundColor: theme === "light" ? "#808b96" : "#1E1E1E",
            color: theme === "light" ? "white" : "#03DAC5",
            "& .MuiPaginationItem-root": {
              color: theme === "light" ? "white" : "#03DAC5",
        
              // Specific style for the active page number
              "&.Mui-selected": {
                color: theme === "light" ? "black" : "white",
              },
            }
          }}
          className={themeStyle}
          count={Math.ceil(jobs.length / jobsPerPage)}
          page={currentPage}
          onChange={(event, value) => {
            setCurrentPage(value);
            localStorage.setItem("jobsPage", value.toString());
          }}
          color="primary"
        />
      </Box>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="job-description-dialog"
      >
        <DialogTitle>
          {selectedJob?.title}
          <IconButton
            className={classes.iconButton}
            edge="end"
            color="inherit"
            onClick={handleCloseDialog}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{dummyJobDescription}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            onClick={() => window.open(selectedJob?.jobUrl, "_blank")}
          >
            Visit Job
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Jobs;
