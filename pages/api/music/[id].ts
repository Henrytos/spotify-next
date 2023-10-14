// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import musics from "../../../db.json";
import { MusicType } from ".";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<MusicType>
) {
  const { id } = req.query;
  const music: MusicType | undefined = musics.find((m) => m.id === id);

  res.status(200).json(music as MusicType);
}
