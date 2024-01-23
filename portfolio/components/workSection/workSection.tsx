import React from "react";
import { Header } from "../header";
export function WorkSection({}) {
  return (
    <section className="section section__3 third darkGradient !h-[100vh] overflow-hidden">
      <div className="rounded__div__down white">
        <div className="round__bg__down black"></div>
      </div>
      <div className="rounded__div__up white">
        <div className="round__bg__up black"></div>
      </div>
      <Header color="Light"></Header>
      <main className="relative flex h-full w-full max-w-maxWidth items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="anime">
            <h2 className="heading mask">
              recent <br />
              work
            </h2>
          </div>
          <a href="work.html" className="work__cto anime">
            <div className="left">
              <svg
                width="21"
                height="6"
                viewBox="0 0 21 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 2V4H14.5V6L20.5 3L14.5 0V2H0.5Z"
                  fill="var(--colorLight)"
                />
              </svg>
            </div>
            <div className="center">
              view all work<span className="yellow__it"> .</span>
            </div>
            <div className="right">
              <svg
                width="21"
                height="6"
                viewBox="0 0 21 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 2V4H14.5V6L20.5 3L14.5 0V2H0.5Z"
                  fill="var(--colorLight)"
                />
              </svg>
            </div>
          </a>
        </div>
        <div className="section3__video anime ">
          <video
            className="rounded-3xl  md:rounded-[3rem]"
            id="video"
            autoPlay
            muted
            loop
            src="/video/transcode.mp4"
          ></video>
        </div>
      </main>
    </section>
  );
}
