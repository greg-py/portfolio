import DescriptionHighlight from "./DescriptionHighlight";

const Description = () => {
  return (
    <p>
      I build beautiful, robust, and accessible software with expertise in{" "}
      {<DescriptionHighlight text={"React"} />},{" "}
      {<DescriptionHighlight text={"Node.js"} />},{" "}
      {<DescriptionHighlight text={"TypeScript"} />},{" "}
      {<DescriptionHighlight text={"PostgreSQL"} />}, and{" "}
      {<DescriptionHighlight text={"AWS"} />}.
    </p>
  );
};

export default Description;
