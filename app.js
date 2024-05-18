const buttonTags = document.querySelectorAll(".dropdown_btn");
const allContent = document.querySelectorAll(".dropdown_content");

buttonTags.forEach((tag, index) => {
  tag.addEventListener("click", (e) => {
    buttonTags.forEach((removeAfter) => {
      removeAfter.classList.remove("dropdown_content_after_line");
    });
    tag.classList.add("dropdown_content_after_line");
    allContent.forEach((displayRemove) => {
      displayRemove.classList.remove("dropdown_content_active");
    });
    allContent[index].classList.add("dropdown_content_active");
  });
});

// open dropdown

const dropdownBTN = document.querySelector(".dropdowns");
const dropdown = document.querySelector(".dropdown");
const dropdownIcon = dropdownBTN.querySelector("i");
const closeDropdownIcon = document.querySelector(".dropdown_close_i");

dropdownBTN.onclick = () => toggleDropdown();
closeDropdownIcon.onclick = () => closeDropdown();

function toggleDropdown() {
  if (dropdown.classList.contains("openDROPDOWN")) closeDropdown();
  else openDropdown();
}

function openDropdown() {
  dropdown.classList.add("openDROPDOWN");
  dropdownIcon.style.transform = "rotate(180deg)";
}
function closeDropdown() {
  dropdown.classList.remove("openDROPDOWN");
  dropdownIcon.style.transform = "rotate(0deg)";
}

window.addEventListener("click", (e) => {
  if (!dropdownBTN.contains(e.target) && !dropdown.contains(e.target)) {
    closeDropdown();
  }
});

// click menu btn classList add active
const dropdownBtns = document.querySelectorAll(".dropdown_btn");

dropdownBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    dropdownBtns.forEach((b) => b.classList.remove("dropdown_btn_active"));

    btn.classList.add("dropdown_btn_active");
  });
});

//bolum 4 boxes

const b4_box_items = [
  {
    img_url:
      "https://png.pngtree.com/png-clipart/20230322/ourmid/pngtree-italian-pizza-gourmet-fast-food-cartoon-illustration-three-dimensional-decorative-pattern-png-image_6656982.png",
    name: "Pizza - Marqarita",
    star: 4.7,
    price: 20,
  },
  {
    img_url:
      "https://png.pngtree.com/png-vector/20231215/ourmid/pngtree-triangular-pizza-piece-meat-piece-pastry-western-style-buckle-free-decorative-png-image_11358588.png",
    name: "Pizza - Qarışıq",
    star: 4.7,
    price: 18,
  },
  {
    img_url:
      "https://png.pngtree.com/png-vector/20240207/ourmid/pngtree-doner-kebab-rolls-png-image_11721397.png",
    name: "Dönər - Ət lavaş",
    star: 4.7,
    price: 5,
  },
  {
    img_url:
      "https://png.pngtree.com/png-clipart/20230930/original/pngtree-pizza-png-image_13019420.png",
    name: "Pizza - Sucuqlu",
    star: 4.6,
    price: 19,
  },
  {
    img_url: "https://pngimg.com/d/kebab_PNG17.png",
    name: "Dönər - Toyuq lavaş",
    star: 4.6,
    price: 4,
  },
];

window.addEventListener("DOMContentLoaded", b4_display);
const b4_boxes = document.querySelector(".b4_boxes");

function b4_display() {
  let B4_display = b4_box_items.map((item) => {
    return `<div class="b4_box">
              <img
              src="${item.img_url}"
              alt="b4_img"
              />
              <div class="b4_box_name_star">
                <h3>${item.name}</h3>
                <h3><span>${item.star} </span><i class="fa-solid fa-star"></i></h3>
              </div>
              <div class="b4_box_price_moreBtn">
                <h4>${item.price} ₼</h4>
                <button>Ətraflı</button>
              </div>
           </div>`;
  });
  B4_display = B4_display.join("");
  b4_boxes.innerHTML = B4_display;
}

//bolum 4 scroll button

const b4_next_prev_btn = document.querySelectorAll(".b4_next_prev");
const b4_bar = document.querySelector(".b4_bar");

b4_next_prev_btn.forEach((btn) => {
  btn.onclick = () => {
    b4_bar.scrollLeft += btn.id == "b4_prev" ? -700 : 700;
  };
});

// bolum 5 boxes
const b5_box_items = [
  {
    img: "https://dg1xqmhtoint1.cloudfront.net/img/vadodara/blog/blog-chef.webp?mtime=20220615123310&focal=none",
    h3: "Famil Abbasov",
  },
  {
    img: "https://www.heraldtribune.com/gcdn/authoring/2019/06/26/NSHT/ghows-LK-8c18d1ea-2228-1fe7-e053-0100007f4e92-7ed4c5c4.jpeg?width=660&height=440&fit=crop&format=pjpg&auto=webp",
    h3: "Brem Rahimov",
  },
  {
    img: "https://facts.net/wp-content/uploads/2023/09/20-surprising-facts-about-chef-1695688578.jpg",
    h3: "Aygün Rahimli",
  },
  {
    img: "https://nationaltoday.com/wp-content/uploads/2021/07/shutterstock_1518533924-min.jpg",
    h3: "Turan Məmmədov",
  },
  {
    img: "https://nationaltoday.com/wp-content/uploads/2021/07/shutterstock_1518533924-min.jpg",
    h3: "Turan Məmmədov",
  },
  {
    img: "https://nationaltoday.com/wp-content/uploads/2021/07/shutterstock_1518533924-min.jpg",
    h3: "Turan Məmmədov",
  },

];

window.addEventListener("DOMContentLoaded", b5_display);
const b5_boxes = document.querySelector(".b5_boxes");

function b5_display() {
  let B5_display = b5_box_items.map((item) => {
    return `<div class="b5_box">
    <img
      src="${item.img}"
      alt="img_bolum_5"
    />
    <div class="info">
      <h3>${item.h3}</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut,
        eum.
      </p>
      <div class="box-icon">
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-facebook"></i>
      </div>
    </div>
  </div>`;
  });
  B5_display = B5_display.join("");
  b5_boxes.innerHTML = B5_display;
}

//bolum 5 (bizim komanda) scroll button

const b5_next_prev_btn = document.querySelectorAll(".b5_next_prev");
const b5_bar = document.querySelector(".b5_bar");

b5_next_prev_btn.forEach((btn) => {
  btn.onclick = () => {
    b5_bar.scrollLeft += btn.id == "b5_prev" ? -900 : 900;
  };
});
