import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { LoginForm } from "./pages/login/index";
import { AccordionInput } from "./components/accordion/index";
import Accordion from "react-bootstrap/Accordion";
import { ReactFormLogin } from "./pages/login/reactform";
function App() {
  let styles = {
    error: {
      alert_error: {
        color: "red",
      },
    },
    success : {
      alert_success : {
        color : "green"
      }
    }
  };

  return (
    <div className="App">
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <AccordionInput
          keyvalue={0}
          header={"Login Validation with Formik"}
          body={<LoginForm styles={styles} />}
        />
        <AccordionInput
          keyvalue={1}
          header={"Login Validation with React Forms"}
          body={<ReactFormLogin styles={styles} />}
        />
      </Accordion>
    </div>
  );
}

export default App;
