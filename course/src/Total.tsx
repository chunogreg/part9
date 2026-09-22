interface TotalProps {
  total: number;
}

const Total = (props: TotalProps) => {
  return (
    <div>
      <p>
        Number of exercises: <strong> {props.total} </strong>
      </p>
    </div>
  );
};

export default Total;
