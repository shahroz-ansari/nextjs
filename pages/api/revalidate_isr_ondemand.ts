import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await res.unstable_revalidate("/isr_ondemand");
    return res.json({ revalidated: true });
  } catch (err: any) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).json({ revalidated: false, error: err.message });
  }
}
