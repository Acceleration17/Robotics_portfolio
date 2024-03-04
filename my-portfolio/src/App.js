import * as React from "react";

function App(props) {
  return (
    <div className="flex flex-col justify-center px-16 py-4 text-base leading-6 whitespace-nowrap bg-white border-b border-solid border-b-[color:var(--Border-primary,#000)] max-md:px-5">
      <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:mr-1 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bcc085a1d60cd900394ac2c6d209d0719b015ba34f77bd5f756f835cbb52ca70?apiKey=54be6c73706b4218ab79e2bc108e3ba2&"
          className="my-auto aspect-[2.33] w-[63px]"
        />
        <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-5 justify-between my-auto text-black">
            <div className="grow">About Me</div>
            <div>Projects</div>
            <div>Research</div>
            <div className="flex gap-1 justify-between">
              <div className="grow">Publications</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fee1f4da4fbc0ac2471ce1f6c2ea6132c2a43490c7dcf7518142e53de96c1a55?apiKey=54be6c73706b4218ab79e2bc108e3ba2&"
                className="w-6 aspect-square"
              />
            </div>
          </div>
          <div className="flex gap-4 justify-between">
            <div className="grow justify-center px-5 py-2 text-black border border-solid border-[color:var(--Color-Brand-black,#000)]">
              Learn
            </div>
            <div className="grow justify-center px-5 py-2 text-white bg-black border border-solid border-[color:var(--Color-Brand-black,#000)]">
              Sign Up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
