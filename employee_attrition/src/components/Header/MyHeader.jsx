import reactImg from "../../assets/image.png";
import "./Header.css";


export function MyHeader() {

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>Employee Attrition</h1>
      <p>
      Attrition Insights: Empowering Retention Through Understanding
      </p>
    </header>
  );
}
