interface Props {
  title: string;
  content: string;
}
const Intro = ({ title, content }: Props) => {
  return (
    <div
      style={{
        color: "white",
        width: "530px",
        float: "right",
        marginRight: "38px",
      }}
    >
      <p
        style={{
          marginBottom: "28px",
          fontSize: "50px",
          fontFamily: "poppingsBold",
          lineHeight: "1.1em",
        }}
      >
        {title}
      </p>

      <p
        style={{
          fontFamily: "poppings",
          fontSize: "16px",
          lineHeight: "1.6em",
        }}
      >
        {content}
      </p>
    </div>
  );
};

export default Intro;
