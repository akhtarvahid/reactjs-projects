import React from "react";
import "./carousel.scss";
const clothing1 =
  "https://images.unsplash.com/photo-1523380677598-64d85d015339?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const clothing2 =
  "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
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
        <figure
          class="item preload loaded active"
          data-img-src="https://picsum.photos/750/400?image=0"
        >
          <img src={clothing1} alt="" />
          <figcaption class="carousel-caption">Caption 1 </figcaption>
        </figure>
        <figure
          class="item preload loaded"
          data-img-src="https://picsum.photos/750/400"
        >
          <img src={clothing2} alt="" />
          <figcaption class="carousel-caption">Caption 2 </figcaption>
        </figure>
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
