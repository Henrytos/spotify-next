// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Musics from "../../../db.json";

export type MusicType = {
  id: string;
  name: string;
  author: string;
  urlImg: string;
  srcMusic: string;
  urlImgAuthor: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<MusicType[]>
) {
  res.status(200).json(Musics);
}
