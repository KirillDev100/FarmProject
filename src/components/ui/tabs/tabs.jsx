import React, { useState } from "react";
import { StyledTabs, StyledTab, StyledTabActive } from "./style";

function Tabs({ tabs, activeTab, setActiveTab }) {
  return (
    <>
      <StyledTabs>
        {tabs.map((tab, index) => {
          if (index === activeTab) {
            return <StyledTabActive>{tab.title}</StyledTabActive>;
          }
          return (
            <StyledTab onClick={() => setActiveTab(index)}>
              {tab.title}
            </StyledTab>
          );
        })}
      </StyledTabs>
      {tabs[activeTab].content}
    </>
  );
}

export default Tabs;
