interface Props {
  title: string;
  content: string;
}
const Intro = ({ title, content }: Props) => {
  return (
    <div
      style={{
        color: "white",
      }}
    >
      <h1
        style={{
          marginBottom: "0.56em",
          fontSize: "3.12rem",
          fontFamily: "poppingsBold",
          lineHeight: "1.1em",
        }}
      >
        {title}
      </h1>

      <p
        style={{
          fontFamily: "poppings",
          fontSize: "1rem",
          lineHeight: "1.6em",
          margin: "0",
        }}
      >
        {content}
      </p>
    </div>
  );
};

export default Intro;
