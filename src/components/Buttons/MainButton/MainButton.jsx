import "../MainButton/MainButton.scss";

const MainButton = ({ text, onClick, type="button" }) => {
  return <button type={type} className="main-button" onClick={onClick}>{text}</button>;
};

export default MainButton;
