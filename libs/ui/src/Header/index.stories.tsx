import { Header } from ".";

const Template = ({ text }) => <Header text={text} />;
Template.args = {
  text: "hello",
};
export default Template;
