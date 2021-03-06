import {
  PRIMARY_FONT,
  SECONDARY_FONT,
} from '../constants';

export interface HeadingProps {
  title: string
  withSpacing?: boolean
  level?: number
}

export interface SubHeadingProps {
  title: string
}

export const SubHeading = ({ title }) => (
  <h5 className="subheading">
    {title}
    <style jsx>{`
      .subheading {
        font-family: ${SECONDARY_FONT};
        font-size: 11px;
        font-weight: 600;
        color: #888;
        letter-spacing: 0.05em;
        margin: 0 0 15px;
        text-transform: uppercase;
      }
    `}</style>
  </h5>
)

const Heading = ({ title, withSpacing = false, level = 3 }: HeadingProps) => {
  const Component = `h${level}` as "h1" | "h2" | "h3" | "h4"

  return (
    <Component
      className={withSpacing ? "spacing heading-title" : "heading-title"}
    >
      {title}
      <style jsx>{`
        .heading-title {
          font-family: ${PRIMARY_FONT};
          line-height: 1.3;
        }
        .spacing {
          margin: 64px 0 30px 0;
        }
        h2.heading-title {
          font-size: 50px;
        }
        h3.heading-title {
          font-size: 30px;
        }
        h4.heading-title {
          margin: 36px 0 24px;
          font-size: 18px;
        }
        @media screen and (max-width: 992px) {
          .heading-title {
            line-height: 1.3;
          }
        }
      `}</style>
    </Component>
  )
}

export default Heading
