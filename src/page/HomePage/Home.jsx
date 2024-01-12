import React, { useState, useEffect, useCallback, useContext } from "react";
import { Tab, Tabs } from "react-bootstrap";
import ControlledCarousel from "../../component/Carousels/Carousels";
import GroupCard from "../../component/GroupCard/GroupCard";
import Search from "../../component/Search/Search";
import "./Home.scss";
import { LanguageContext } from "../../context/LanguageContext";
import { trans } from "../../utils/locales";

const Home = ({ slides, ticketCards, handleCheckTicket, saveTickets }) => {
  const [activeTab, setActiveTab] = useState("all");
  const [filteredTickets, setFilteredTickets] = useState(ticketCards);

  const { lang } = useContext(LanguageContext);

  /* Handle Selected Tap */
  const handleTabSelect = (selectedTab) => {
    setActiveTab(selectedTab);
  };

  /* Retrieve Data By Categories */
  const filterTickets = useCallback(
    (category) => {
      if (category === "all") {
        setFilteredTickets(ticketCards);
      } else {
        const filtered = ticketCards.filter(
          (ticket) => ticket.category.toLowerCase() === category
        );
        setFilteredTickets(filtered);
      }
    },
    [ticketCards]
  );

  useEffect(() => {
    filterTickets(activeTab);
  }, [activeTab, filterTickets]);

  return (
    <div className="home-container">
      <ControlledCarousel slides={slides} />
      <Search />
      <div className="mx-5">
        <Tabs
          defaultActiveKey="all"
          id="fill-tab-example"
          className="mb-3"
          fill
          activeKey={activeTab}
          onSelect={handleTabSelect}
        >
          <Tab eventKey="all" title={trans("category.all", lang)}>
            <GroupCard
              ticketCards={filteredTickets}
              handleCheckTicket={handleCheckTicket}
              saveTickets={saveTickets}
            />
          </Tab>
          <Tab eventKey="standard" title={trans("category.standard", lang)}>
            <GroupCard
              ticketCards={filteredTickets}
              handleCheckTicket={handleCheckTicket}
              saveTickets={saveTickets}
            />
          </Tab>
          <Tab eventKey="earlybird" title={trans("category.earlybird", lang)}>
            <GroupCard
              ticketCards={filteredTickets}
              handleCheckTicket={handleCheckTicket}
              saveTickets={saveTickets}
            />
          </Tab>
          <Tab eventKey="promotion" title={trans("category.promotion", lang)}>
            <GroupCard
              ticketCards={filteredTickets}
              handleCheckTicket={handleCheckTicket}
              saveTickets={saveTickets}
            />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};
export default Home;
