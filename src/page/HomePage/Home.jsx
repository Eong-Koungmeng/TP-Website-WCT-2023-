import React, {useState,useEffect, useCallback} from 'react'
import { Tab, Tabs} from 'react-bootstrap'
import ControlledCarousel from '../../component/Carousels/Carousels'
import GroupCard from '../../component/GroupCard/GroupCard'
import Search from '../../component/Search/Search'
import "./Home.scss"


const Home = ({slides, ticketCards, handleCheckTicket, saveTickets}) => {
  const [activeTab, setActiveTab] = useState('all'); 
  const [filteredTickets, setFilteredTickets] = useState(ticketCards);

  /* Handle Selected Tap */
  const handleTabSelect = (selectedTab) => {
    setActiveTab(selectedTab);
  };

  /* Retrieve Data By Categories */
  const filterTickets = useCallback((category) => {
    if (category === 'all') {
      setFilteredTickets(ticketCards);
    } else {
      const filtered = ticketCards.filter((ticket) => ticket.category.toLowerCase() === category);
      setFilteredTickets(filtered);
    }
  }, [ticketCards]);
  
  useEffect(() => {
    filterTickets(activeTab);
  }, [activeTab, filterTickets]);

  return (
    <div className='home-container'>
      <ControlledCarousel slides={slides}/>
      <Search />
      <div className='mx-5' >
        <Tabs 
          defaultActiveKey="all"
          id="fill-tab-example"
          className="mb-3"
          fill
          activeKey={activeTab}
          onSelect={handleTabSelect}
          >
          <Tab eventKey="all" title="All">
            <GroupCard ticketCards={filteredTickets} handleCheckTicket={handleCheckTicket} saveTickets={saveTickets}/>
          </Tab>
          <Tab eventKey="standard" title="Standard">
            <GroupCard ticketCards={filteredTickets} handleCheckTicket={handleCheckTicket} saveTickets={saveTickets}/>
          </Tab>
          <Tab eventKey="earlybird" title="EarlyBird">
            <GroupCard ticketCards={filteredTickets} handleCheckTicket={handleCheckTicket} saveTickets={saveTickets}/>
          </Tab>
          <Tab eventKey="promotion" title="Promotion">
            <GroupCard ticketCards={filteredTickets} handleCheckTicket={handleCheckTicket} saveTickets={saveTickets}/>
          </Tab>
          </Tabs>
      </div>  
    </div>
  )
}
export default Home
