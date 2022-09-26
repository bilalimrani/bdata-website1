import React from "react";
import LoaderWrapper from "./Loader.style";

export default function Loader() {
  return (
    <LoaderWrapper>
      <div
        className="tvdd"
        role="img"
        aria-label="Three intersecting rings of twelve pulsing dots that never collide"
      >
        <div className="tvdd__ring">
          <div className="tvdd__ring-dots">
            <div className="tvdd__ring-dot"></div>
            <div className="tvdd__ring-dot"></div>
            <div className="tvdd__ring-dot"></div>
            <div className="tvdd__ring-dot"></div>
            <div className="tvdd__ring-dot"></div>
            <div className="tvdd__ring-dot"></div>
            <div className="tvdd__ring-dot"></div>
            <div className="tvdd__ring-dot"></div>
            <div className="tvdd__ring-dot"></div>
            <div className="tvdd__ring-dot"></div>
            <div className="tvdd__ring-dot"></div>
            <div className="tvdd__ring-dot"></div>
          </div>
        </div>
        <div className="tvdd__ring">
          <div className="tvdd__ring-dots">
            <div className="tvdd__ring-dot"></div>
            <div className="tvdd__ring-dot"></div>
            <div className="tvdd__ring-dot"></div>
            <div className="tvdd__ring-dot"></div>
            <div className="tvdd__ring-dot"></div>
            <div className="tvdd__ring-dot"></div>
            <div className="tvdd__ring-dot"></div>
            <div className="tvdd__ring-dot"></div>
            <div className="tvdd__ring-dot"></div>
            <div className="tvdd__ring-dot"></div>
            <div className="tvdd__ring-dot"></div>
            <div className="tvdd__ring-dot"></div>
          </div>
        </div>
        <div className="tvdd__ring">
          <div className="tvdd__ring-dots">
            <div className="tvdd__ring-dot"></div>
            <div className="tvdd__ring-dot"></div>
            <div className="tvdd__ring-dot"></div>
            <div className="tvdd__ring-dot"></div>
            <div className="tvdd__ring-dot"></div>
            <div className="tvdd__ring-dot"></div>
            <div className="tvdd__ring-dot"></div>
            <div className="tvdd__ring-dot"></div>
            <div className="tvdd__ring-dot"></div>
            <div className="tvdd__ring-dot"></div>
            <div className="tvdd__ring-dot"></div>
            <div className="tvdd__ring-dot"></div>
          </div>
        </div>
      </div>
    </LoaderWrapper>
  );
}
