
import Accordion from 'react-bootstrap/Accordion';

export const AccordionInput = ({keyvalue,header,body}) => {
  return (
    <>
      <Accordion.Item eventKey={keyvalue}>
        <Accordion.Header>{header}</Accordion.Header>
        <Accordion.Body>
          {body}
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
};
