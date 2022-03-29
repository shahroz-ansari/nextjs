const pageconfig: PageConfig = {
  "/": {
    title: "Welcome to Next.js",
  },
  "/week1": {
    title: "Week 1",
  },
  "/week2": {
    title: "Week 2",
  },
  "/isr_auto": {
    title: "ISR Auto",
  },
  "/isr_on_demand": {
    title: "ISR On Demand",
  },
  "/client_fetch": {
    title: "Fetching at client",
  },
  "/week3": {
    title: "Layouts",
  },
  "/week4": {
    title: "Next.js Image",
  },
};

interface PageConfig {
  [key: string]: {
    title: string;
  };
}

export default pageconfig;
