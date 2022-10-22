import { Col, Nav, Row, Tab } from "react-bootstrap";
import { ListItem } from "./Tabs.style";

function Tabs({ defaultActiveKey = "0", data = {} }: any) {
  return (
    <Tab.Container
      transition
      id="left-tabs-example"
      defaultActiveKey={defaultActiveKey}
    >
      <Row>
        <Col sm={3}>
          <ListItem>
            <Nav variant="pills" className="flex-column">
              {data?.item?.map?.((item, index) => (
                <Nav.Item key={index}>
                  <Nav.Link eventKey={item?.eventKey}>{item?.name}</Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </ListItem>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            {data?.content?.map?.((item, index) => (
              <Tab.Pane key={index} eventKey={item?.eventKey}>
                <item.component data={item} />
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Tabs;
