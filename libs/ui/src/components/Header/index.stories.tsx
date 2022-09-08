import { Header } from ".";

export default {
  title: "Header",
  component: Header,
};

export const Template = ({ text }) => <Header text={text} />;
Template.args = {
  text: "hello",
};
