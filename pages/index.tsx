/* eslint-disable no-console */
import {  Panel } from "@bigcommerce/big-design";

const Index = () => {

  return (
    <Panel header="Installation Successful" id="home">
      <h3>Openfreight API Configuration</h3>
      <p>To configure your connection to the Openfreight API:</p>
      <ol>
        <li style={{ marginBottom: "10px" }}>
          Heading to the settings page of your BigCommerce Store
        </li>
        <li style={{ marginBottom: "10px" }}>
          Under <em>Setup</em>, click <em>Shipping</em>
        </li>
        <li style={{ marginBottom: "10px" }}>
          Under <em>Checkout shipping options</em>, click <em>Configure</em> or <em>Edit</em> next to
          the relevant shipping zone
        </li>
        <li style={{ marginBottom: "10px" }}>
          Scroll down and find <em>Openfreight Quoting</em> under the{" "}
          <em>Real-time shipping quotes</em>
        </li>
        <li style={{ marginBottom: "10px" }}>
          Click <em>Connect</em> or <em>Edit</em>, then <em>Connection</em>, then enter your
          Openfreight API credentials and click <em>Submit</em>
        </li>
      </ol>
    </Panel>
  );
};

export default Index;
