import { TouchEvent } from "react";

const delay = 300;
let latestTouchTap: { time: number; target: null | (EventTarget & HTMLDivElement) } = {
  time: 0,
  target: null,
};

export default function onDoubleTouch(event: TouchEvent<HTMLDivElement>) {
  const touchTap = {
    time: new Date().getTime(),
    target: event.currentTarget,
  };
  const isTouchTap = touchTap.target === latestTouchTap.target && touchTap.time - latestTouchTap.time < delay;
  latestTouchTap = touchTap;
  return isTouchTap;
}
