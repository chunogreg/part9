import type { CoursePart } from "./App";
import Part from "./Part";

interface ContentProps {
  courseParts: CoursePart[];
}

const Content = (props: ContentProps) => {
  return (
    <div>
      {/* {props.courseParts.map((c) => (
        <div key={c.name}>
          <p>
            {c.name} {c.exerciseCount}
          </p>
          <div>{}</div>
        </div>
      ))} */}
      <Part courseParts={props.courseParts} />
    </div>
  );
};

export default Content;
