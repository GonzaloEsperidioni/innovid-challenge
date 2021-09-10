import React from "react";

import PcOnImg from "../assets/pc-on.gif";
import PcOffImg from "../assets/pc-off.png";

import useServerHook from "./useServerHook";

const ServerBox: React.FC = ({ id }) => {
  const { server, isLoading, isError, toggleMonitoring, monitoring } =
    useServerHook(id);

  if (isError) {
    return <ServerDown id={id} />;
  }

  let load = 0;
  let lastUpdate = "";
  if (!isLoading) {
    load = server.load;
    lastUpdate = server.lastUpdate;
  }

  const serverImage = monitoring ? PcOnImg : PcOffImg;
  const status = monitoring ? "ON" : "OFF";

  return (
    <div className="window">
      <div className="title-bar">
        <div className="title-bar-text">
          Server #{id} Status: {status} LastUpdate: {lastUpdate}
        </div>
      </div>
      <div className="window-body">
        <img height="200" src={serverImage} width="200" />
      </div>
      <div className="status-bar">
        <p className="status-bar-field">STATUS: {status}</p>
        <p className="status-bar-field" onClick={toggleMonitoring}>
          {!monitoring ? "shut down" : "turn on"}
        </p>
        <p className="status-bar-field">CPU Usage: {load}%</p>
      </div>
    </div>
  );
};

const ServerDown = ({ id }: { id: number }) => (
  <div className="window">
    <div className="title-bar">
      <div className="title-bar-text">Server #{id} Status: DOWN</div>
    </div>
    <div className="window-body">
      <img height="200" src={PcOffImg} width="200" />
    </div>
    <div className="status-bar">
      <p className="status-bar-field">server is down</p>
    </div>
  </div>
);
export default ServerBox;
