interface HeaderItem {
  id: number,
  label: string,
  path: string
}

export const HEADER_OPTIONS: {
  [key: string]: HeaderItem[];
} = {
  findWork: [
    {
      id: 1,
      label: "Find Work",
      path: "#",
    },
    {
      id: 2,
      label: "Saved Jobs",
      path: "#",
    },
    {
      id: 3,
      label: "Proposal",
      path: "#",
    },
    {
      id: 4,
      label: "Profile",
      path: "#",
    },
    {
      id: 5,
      label: "My Stats",
      path: "#",
    },
    {
      id: 6,
      label: "My Projectasboard",
      path: "#",
    },
  ],
  myJobs: [
    {
      id: 1,
      label: "My Jobs",
      path: "#",
    },
    {
      id: 2,
      label: "All Contracts",
      path: "#",
    },
    {
      id: 3,
      label: "Work Diary",
      path: "#",
    },
  ],
  overview: [
    {
      id: 1,
      label: "Overview",
      path: "#",
    },
    {
      id: 2,
      label: "My Reports",
      path: "#",
    },
    {
      id: 3,
      label: "Billings & Earnings",
      path: "#",
    },
    {
      id: 4,
      label: "Connects History",
      path: "#",
    },
    {
      id: 5,
      label: "Transaction history",
      path: "#",
    },
    {
      id: 6,
      label: "Certificate of Earnings",
      path: "#",
    },
  ],
};
