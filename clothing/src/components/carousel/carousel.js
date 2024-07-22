import React from "react";
import { clothing1, clothing2, clothing3 } from "./data";
import "./carousel.scss";

export default function Carousel() {
  return (
    <div
      id="carousel-single"
      class="carousel slide add-big-bottom"
      data-ride="carousel"
    >
      {/* <!-- Indicators --> */}
      <ol class="carousel-indicators">
        <li
          data-target="#carousel-single"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carousel-single" data-slide-to="1" class=""></li>
      </ol>

      {/* <!-- Wrapper for slides --> */}
      <div class="carousel-inner">
        {[clothing1, clothing2, clothing3].map((clothing, i) => (
          <figure
            key={`clothing ${i}`}
            class="item preload loaded"
            data-img-src="https://picsum.photos/750/400"
          >
            <img src={clothing} alt="" />
            <figcaption class="carousel-caption">Caption ${i + 1} </figcaption>
          </figure>
        ))}
      </div>

      {/* <!-- Controls --> */}
      <a
        class="left carousel-control"
        href="#carousel-single"
        data-slide="prev"
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M15.422 7.406L10.828 12l4.594 4.594L14.016 18l-6-6 6-6z"></path>
        </svg>
      </a>
      <a
        class="right carousel-control"
        href="#carousel-single"
        data-slide="next"
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M9.984 6l6 6-6 6-1.406-1.406L13.172 12 8.578 7.406z"></path>
        </svg>
      </a>
    </div>
  );
}
