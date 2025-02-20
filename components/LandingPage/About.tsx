import axios from 'axios';
import React from 'react';
import useSWR from 'swr';
import { ContributorList } from '../ContributorList';

export const About = () => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { data } = useSWR(
    'https://api.github.com/repos/rohitdasu/projectmate/contributors',
    fetcher
  );

  return (
    <div className="my-[7rem] lg:px-4">
      <div className="flex flex-col items-center gap-5 bg-gray-100 py-6 px-4 dark:bg-[#2c1c0f] dark:text-orange-300 lg:rounded-md lg:p-[3rem]">
        <h2 className="text-center text-3xl font-bold ">About Us</h2>
        <p className="m-auto text-center ">
          ProjectMate is a platform built by passionate developers in order to
          make OpenSource accessible for everyone around the world. If this
          sounds interesting to you, we are looking forward to have you on our
          team ! Any contributions you make are greatly appreciated.
        </p>
        <div className="flex-1 lg:w-full "></div>
        <p className="text-lg font-bold">Shout-out to our contributors</p>
        <div className="flex flex-wrap items-center justify-center">
          <ContributorList contributors={data} />
        </div>
      </div>
    </div>
  );
};
