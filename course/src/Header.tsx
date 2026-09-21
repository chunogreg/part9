interface HeaderProps {
  course: string;
}

const Header = (props: HeaderProps) => {
  return (
    <div>
      <h2> {props.course} </h2>
    </div>
  );
};

export default Header;
