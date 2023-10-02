"use client";
/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { StyledTabs } from "./style.js";
import JobCard from "../JobCard";
import SearchControl from "../SearchControl";
import { Job, getJob, getJobs } from "@/redux/slices/jobSlice";
import { RootState } from "@/redux/store.js";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, SyntheticEvent} from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  ConvertTabs?: boolean;
  showSearchControl?: boolean;
  onClick?: () => void;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children,value,index,...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({
  ConvertTabs = true,
  showSearchControl = true,
  onClick = () => {},
}) {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {

    setValue(newValue);
  };

  const [jobsData,setJobsData] = useState<Job[]>([]);
  const [singleJobData,setSingleJobData] = useState<Job | null>();
  const { jobs, job } = useSelector((state: RootState) => state.job)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobs());
    dispatch(getJob(6));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  useEffect(() => {
    setJobsData(jobs);
  },[jobs]);

  useEffect(() => {
    setSingleJobData(job);
  },[job]);

  return (
    <StyledTabs>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderColor: "divider" }}>
          {ConvertTabs ? (
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Best Matches" {...a11yProps(0)} />
              <Tab label="Most Recent" {...a11yProps(1)} />
              <Tab label="Saved Jobs" {...a11yProps(2)} />
            </Tabs>
          ) : (
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Search" {...a11yProps(0)} />
              <Tab label="Saved Jobs(8)" {...a11yProps(1)} />
            </Tabs>
          )}
        </Box>
        <CustomTabPanel value={value} index={0}>
          {ConvertTabs && (
            <p className="para">
             Explore job listings aligned with your skills and tailored to a client's hiring criteria. Sorted by relevance
            </p>
          )}
          {showSearchControl && <SearchControl />}
          {jobsData.map((job) => (
            <JobCard
              key={job.id}
              title={job.title}
              fixedPrice={job.fixedPrice}
              hourly={job.hourly}
              description={job.description}
              proposal={job.proposal}
              spent={job.spent}
              location={job.location}
              OpenDrawer={onClick}
            />
          ))}

        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          {ConvertTabs && (
            <p className="para">
             Explore the latest job opportunities that align with your skill set and profile description, matching the skills clients are seeking. </p>
          )}
          {jobsData.map((job) => (
            <JobCard
              key={job.id}
              title={job.title}
              fixedPrice={job.fixedPrice}
              hourly={job.hourly}
              description={job.description}
              proposal={job.proposal}
              spent={job.spent}
              location={job.location}
              OpenDrawer={onClick}
            />
          ))}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          {jobsData.map((job) => (
            <JobCard
              key={job.id}
              title={job.title}
              fixedPrice={job.fixedPrice}
              hourly={job.hourly}
              description={job.description}
              proposal={job.proposal}
              spent={job.spent}
              location={job.location}
              OpenDrawer={onClick}
            />
          ))}
        </CustomTabPanel>
      </Box>
    </StyledTabs>
  );
}
