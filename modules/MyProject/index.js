import React, { useState } from "react";
import { Tabs, Tab, TabPanel } from "../../components/tabs/tabs";
import styled from "styled-components";
import Card from "../../components/Card";
import MyPortBanner from "../../components/MyPort/MyPortBanner";

const TabsContainer = styled.div`
  display: flex;
  padding: 2px;
`;

const TabPanelContainer = styled.div``;

export default function MyProjectsModule() {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (e, value) => {
    setActiveTab(value);
  };
  return (
    <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <MyPortBanner />
      <TabsContainer>
        <Tabs selectedTab={activeTab} onChange={handleChange}>
          <Tab label="Webs Development" value={0}></Tab>
          <Tab label="Graphic Designs" value={1}></Tab>
        </Tabs>
      </TabsContainer>
      <TabPanelContainer>
        <TabPanel value={activeTab} selectedIndex={0}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={1}>
          <h1>Tab 2</h1>
        </TabPanel>
      </TabPanelContainer>
    </div>
  );
}
