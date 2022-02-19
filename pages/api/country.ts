import type { NextApiRequest, NextApiResponse } from "next";

export const getCountryData = (name: any): any => {
  const data: any = {
    india: {
      name: "India",
      description:
        "India, officially the Republic of India is a country in South Asia.",
    },
    usa: {
      name: "USA",
      description:
        "The United States of America (U.S.A. or USA), commonly known as the United States (U.S. or US) or America, is a country primarily located in North America.",
    },
    england: {
      name: "England",
      description:
        "England is a country that is part of the United Kingdom. It shares land borders with Wales to its west and Scotland to its north.",
    },
  };
  return new Promise((resolve, reject) => {
    resolve(data[name]);
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorObj>
) {
  const { name } = req.query;
  const data = await getCountryData(name);
  if (!data) {
    res.status(404).json({ error: true, message: "Country Not found" });
  }

  res.status(200).json(data);
}

type Data = {
  name: string;
  description: string;
};

type ErrorObj = {
  error: boolean;
  message: string;
};
