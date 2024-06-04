interface Props {
  span1: string;
  span2: string;
}
const Alert = ({ span1, span2 }: Props) => {
  return (
    <div
      className="alert"
      style={{
        fontSize: ".94rem",
        backgroundColor: "hsl(248, 32%, 49%)",
        boxShadow: "0 8px 0 rgba(0, 0, 0, 0.2)",
        color: "white",
        textAlign: "center",
        marginBottom: "1.5rem",
        width: "100%",
        borderRadius: "10px",
        padding: "1.13em",
      }}
    >
      <span style={{ fontFamily: "poppings", fontWeight: "600" }}>{span1}</span>
      <span style={{ fontFamily: "poppingsLight" }}>{span2}</span>
    </div>
  );
};

export default Alert;
