import React from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const SubCategory = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl text-center font-bold">Shop by Category</h1>
      </div>
      <div className="flex justify-center my-10 text-2xl font-bold text-emerald-500">
        <Tabs>
          
          <TabList>
            <Tab>Action</Tab>            
            <Tab>Scientists</Tab>
            <Tab>Warriors</Tab>            
          </TabList>

          <TabPanel>
          <Link>Any content 1</Link>
          </TabPanel>          
          <TabPanel>
          <Link>Any content 2</Link>
          </TabPanel>
          <TabPanel>
            <Link>Any content 3</Link>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default SubCategory;
