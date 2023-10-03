import React from "react";
import { DrawerCard } from "./DrawerCard";

export const Drawer = () => {
  return (
    <div className="drawer">
      <div className="drawer-top">
        <DrawerCard icon={"./icon _Calendar_.png"} title={"Menu"} />
        <img src="./icon _menu_.png" alt="" />
      </div>
      <DrawerCard icon={"./icon _monitor dashboard_.png"} title={"Dashboard"} />
      <DrawerCard icon={"./icon _events calendar_.png"} title={"Events"} />
      <DrawerCard icon={"./icon _clients_.png"} title={"Clients"} />
      <DrawerCard icon={"./icon _setting 2_.png"} title={"Settings"} />
      <DrawerCard
        icon={"./icon _user account profile_.png"}
        title={"Profile"}
      />
      <DrawerCard icon={"./icon _logout_.png"} title={"LogOut"} />
    </div>
  );
};
