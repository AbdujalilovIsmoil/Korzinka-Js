"use strict";

this.addEventListener("DOMContentLoaded", () => {
  const Api = async () => {
    const request = await fetch("../json/index.json");
    const response = await request.json();
    RenderApi(response);
  };
  Api();
  $(".open").addEventListener("click", () => {
    $(".box").classList.add("active");
    $("body").classList.add("active");
  });

  $(".close").addEventListener("click", () => {
    $(".box").classList.remove("active");
    $("body").classList.remove("active");
  });
  function RenderApi(data = []) {
    data.forEach((item) => {
      const element = creat(
        "div",
        "col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12",
        `
            <div class="card p-3 my-2">
            <img
              src="${item.img}"
              class="img-fluid images"
              alt=""
            />
            <button data-render="${item.id}" class="btn btn-outline-light mt-2 product">Купить Продукт</button>
            </div>`
      );
      $(".wrapper-row").appendChild(element);
    });

    $(".wrapper-row").addEventListener("click", (e) => {
      if (e.target.classList.contains("product")) {
        const filterProduct = data.filter(
          (el) => el.id == e.target.dataset.render
        );
        if (filterProduct.length > 0) {
          e.target.parentElement.remove();
          RenderProduct(filterProduct);
        }
      }
    });
  }

  function RenderProduct(data = []) {
    data.forEach((el) => {
      const element = creat(
        "div",
        "col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12",
        `
        <div class="card p-3 my-2">
          <img
          src="${el.img}"
          class="img-fluid images"
          alt=""
        />
        </div>
      `
      );
      $(".render-row").appendChild(element);
    });
  }

  $(".render").addEventListener("click", () => {
    window.location.reload();
  });
});
