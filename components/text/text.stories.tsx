import { Headline } from "./Headline";
import { Overline } from "./Overline";
import { Paragraph } from "./Paragraph";

export default {
  title: "Typography",
  component: Headline,
};

export const Typography = () => (
  <>
    <>
      <Overline>Overline</Overline>
      <Headline level={1}>Headline 1</Headline>
      <Headline level={2}>Headline 2</Headline>
      <Headline level={3}>Headline 3</Headline>
      <Headline level={4}>Headline 4</Headline>
      <Paragraph>Lorem ipsum dolor sit amet conseqteteur.</Paragraph>
    </>
    <div style={{ background: "#777" }}>
      <Headline level={1} inverse>
        Inverse Headline 1
      </Headline>
      <Headline level={2} inverse>
        Inverse Headline 2
      </Headline>
      <Headline level={3} inverse>
        Inverse Headline 3
      </Headline>
      <Headline level={4} inverse>
        Inverse Headline 4
      </Headline>
      <Paragraph inverse>Lorem ipsum dolor sit amet conseqteteur.</Paragraph>
    </div>
  </>
);
