import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceRelieved } from "@fortawesome/pro-solid-svg-icons";
const socialIcons = [
  {
    id: "123",
    icon: "fa-facebook-f",
    color: "#3A589D",
    tooltip: "share on facebook",
    link: "https://fb.com",
  },
];

function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <FontAwesomeIcon icon={faFaceRelieved} />
    </div>
  );
}

export default App;
