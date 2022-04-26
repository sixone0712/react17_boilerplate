import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

export interface PhotoItem {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export default function usePhoto() {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(5);

  const requestPhoto = async (page: number, size: number) => {
    const start = (page - 1) * size;
    const { data } = await axios.get<PhotoItem[]>(
      `http://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${size}`
    );
    return data;
  };

  const { data, isFetching } = useQuery(
    ["getPhoto", page, size],
    () => requestPhoto(page, size),
    {
      keepPreviousData: true,
    }
  );

  console.log("data", data);

  return { data, isFetching, page, setPage, size, setSize };
}
