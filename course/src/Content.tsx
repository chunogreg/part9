interface ContentProps {
  courseParts: { name: string; exerciseCount: number }[];
}

const Content = (props: ContentProps) => {
  return (
    <div>
      {props.courseParts.map((c) => (
        <div key={c.name}>
          <p>
            {c.name} {c.exerciseCount}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Content;
