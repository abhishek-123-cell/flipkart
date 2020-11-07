import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Layout from "../../component/Layout";
import Input from '../../component/UI/Input'

const Signin = (props) => {
  return (
    <Layout>
      <Container>
        <Form>
          <Row>
            <Col>
              <Input
                label="first name"
                placeholder="first name"
                value=""
                onChange={() => {}}
              />
            </Col>
            <Col>
              <Input
                label="last name"
                placeholder="Last name"
                value=""
                onChange={() => {}}
              />
            </Col>
          </Row>

          <Col>
            <Input
              label="Email"
              placeholder="put your email"
              value=""
              onChange={() => {}}
            />
          </Col>
          <Col>
            <Input
              label="Password"
              placeholder="Password"
              value=""
              onChange={() => {}}
            />
          </Col>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </Layout>
  );
};

export default Signin;
