import type { CoursePart } from "./App";

interface PartProps {
  courseParts: CoursePart[];
}

const Part = ({ courseParts }: PartProps) => {
  const renderCourseParts = () => {
    return courseParts.map((part) => {
      switch (part.kind) {
        case "background":
          return (
            <>
              <div>
                {" "}
                <strong>
                  {part.name} {part.exerciseCount}
                </strong>
              </div>
              <div>
                {" "}
                <i>{part.description}</i>{" "}
              </div>
              <div> submit to {part.backgroundMaterial} </div>
            </>
          );

        case "basic":
          return (
            <>
              {" "}
              <br />
              <div>
                <strong>
                  {part.name} {part.exerciseCount}
                </strong>
              </div>{" "}
              <div>
                {" "}
                <i>{part.description}</i>{" "}
              </div>{" "}
              <br />
            </>
          );
        case "group":
          return (
            <>
              <div>
                <strong>
                  {part.name} {part.exerciseCount}
                </strong>
              </div>
              <div> project exercises {part.groupProjectCount} </div>
            </>
          );
        case "special":
          return (
            <>
              <div>
                <strong>
                  {part.name} {part.exerciseCount}
                </strong>
              </div>
              <i>{part.description}</i>{" "}
              <div>
                requirements {part.requirements.map((r) => r).join(", ")}
              </div>
            </>
          );
      }
    });
  };

  return <div> {renderCourseParts()} </div>;
};

export default Part;
