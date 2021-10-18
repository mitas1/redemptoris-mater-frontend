import { FC } from "react";

import { IBAN } from "constants/contact";

import {
  Headline,
  Paragraph,
} from "@components/text";
import { useSpacing } from "@components/text/utils/spacing";
import DownloadLink from "@components/ui/Link/DownloadLink";

export interface DonationFormProps {
  file: string;
}

const DonationForm: FC<DonationFormProps> = ({ file }) => {
  const spacingClassName = useSpacing(false, false);

  return (
    <>
      <Headline level={2} style={1} ignoreSpacing className={spacingClassName}>
        Podporiť nás môžete
      </Headline>
      <Paragraph>Poukázaním 2% z dane. Každý rok, začiatkom roka</Paragraph>
      <DownloadLink href={file} className={spacingClassName}>
        Stiahnuť formulár
      </DownloadLink>
      <br />
      <Paragraph>Alebo platbou na účet:</Paragraph>
      <div className="text-3xl font-serif leading-10 bg-white bg-opacity-10 p-3 rounded">
        {IBAN}
      </div>
    </>
  );
};

export default DonationForm;
