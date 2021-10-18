import { FC } from "react";

import { HeroBanner } from "@components/ui/HeroBanner";

import DonationForm, { DonationFormProps } from "./DonationForm";

interface DonationFormHeroBannerProps extends DonationFormProps {}

const DonationFormHeroBanner: FC<DonationFormHeroBannerProps> = ({ file }) => (
  <HeroBanner
    contentClassName="px-8 py-10 sm:p-24 bg-gray-900 text-white"
    image="/images/icon2.jpg"
  >
    <DonationForm file={file}></DonationForm>
  </HeroBanner>
);

export default DonationFormHeroBanner;
