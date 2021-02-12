import React from "react";
import Sidebar from "react-sidebar";
import { NavLink } from "react-router-dom";


class leftnav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <Sidebar
        sidebar={
        <b>
          <NavLink to = "/">
              <i class=" green-text small-text material-icons">
                add_location_alt
              </i>
         </NavLink>
         <NavLink to = "/create_ad">
              <i class=" green-text small-text material-icons">
                cleaning_services
              </i>
         </NavLink>
         <NavLink to = "/leaderboard">
              <i class=" green-text small-text material-icons">
                leaderboard
              </i>
         </NavLink>
         <NavLink to = "/profile">
              <i class=" green-text small-text material-icons">
                person
              </i>
         </NavLink>
        </b>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "#e3e0cf", display:"flex",flexDirection:"column"} }}
      >
        <button onClick={() => this.onSetSidebarOpen(true)}>
            <i class=" green-text small-text material-icons">
              menu
            </i>
        </button>
      </Sidebar>
    );
  }
}

export default leftnav;