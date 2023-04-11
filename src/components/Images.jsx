import React from "react";
export function Images(props) {
  const { images, title } = props
  return (
    <div className="mt-10 bg-white">
        {title?<h2 className="pb-10 mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-dodblue-900 sm:text-5xl">
            {title}
        </h2>:null}
      <div className="mx-auto max-w-6xl pb-12">
        <ul
          role="list"
          className="justify-center grid md:grid-cols-[repeat(auto-fit,_25%)] gap-x-4 gap-y-8 sm:gap-x-10 xl:gap-x-8"
        >
          {images.map((image, index) => (
            <li
              className={
                'basis-1/2 relative justify-center backdrop-opacity-10' +
                image.class
              }
              id={image.name}
              key={index}
            >
              <img
                className="h-100 overflow-hidden md:rounded-2xl"
                src={image.source}
                alt={image.name}
                title={image.name}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
