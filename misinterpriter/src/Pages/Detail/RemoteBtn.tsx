import React from "react";
import { NaviBtn, BtnConatiner } from "./style";

export const RemoteBtn: React.FC = () => {
  const scrollBtn = (position: number) => {
    window.scrollTo(0, position);
  };

  return (
    <div
      style={{
        position: "fixed",
        right: "6.5%",
        bottom: "45%"
      }}
    >
      <BtnConatiner>
        <div>
          <NaviBtn
            onClick={() => {
              scrollBtn(0);
            }}
          >
            Top
          </NaviBtn>
        </div>
        <NaviBtn
          onClick={() => {
            scrollBtn(30000);
          }}
        >
          Bot
        </NaviBtn>
      </BtnConatiner>
    </div>
  );
};
