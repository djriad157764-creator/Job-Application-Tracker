console.log("scripts connected");

// store

let interviewList = [];
let rejectedList = [];
let currentStatus = "all-filter-btn";

// select counter section with Dom in javaScript

const totalCountEi = document.getElementById("total-count");
const totalJobsCountEi = document.getElementById("total-job-count");
const interViewCount = document.getElementById("interview-count");
const interViewCountOf = document.getElementById("interview-count-of");
const rejectedViewCount = document.getElementById("rejected-count");
const rejectedViewCountOf = document.getElementById("rejected-count-of");

// select filter btn section

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

// select all card section and main section

const allCardSection = document.getElementById("all-card");
const mainContainer = document.querySelector("main");
const emptyDiv = document.getElementById("empty");
const interViewShow = document.getElementById("interview-show");
const rejectedViewShow = document.getElementById("rejected-show");

// count update

function calculateCount() {
  totalCountEi.innerText = allCardSection.children.length;
  totalJobsCountEi.innerText = allCardSection.children.length;
  interViewCount.innerText = interviewList.length;
  interViewCountOf.innerText = interviewList.length;
  rejectedViewCount.innerText = rejectedList.length;
  rejectedViewCountOf.innerText = rejectedList.length;
}

calculateCount();

// change btn style and toggle section

function toggleStyle(id) {
  currentStatus = id;

  // reset all btn style

  [allFilterBtn, interviewFilterBtn, rejectedFilterBtn].forEach((btn) => {
    btn.classList.remove("active-btn", "inactive-btn");

    // true : add classList / false : remove classList

    if (btn.id === id) {
      btn.classList.add("active-btn");
      btn.classList.remove("inactive-btn");
    } else {
      btn.classList.add("inactive-btn");
      btn.classList.remove("active-btn");
    }
  });

  // section hide and show

  if (id === "all-filter-btn") {
    allCardSection.classList.remove("hidden");
    emptyDiv.classList.add("hidden");
    interViewShow.classList.add("hidden");
    rejectedViewShow.classList.add("hidden");
  } else if (id === "interview-filter-btn") {
    interViewShow.classList.remove("hidden");
    rejectedViewShow.classList.add("hidden");
    if (interviewList.length > 0) {
      allCardSection.classList.remove("hidden");
      emptyDiv.classList.add("hidden");
    } else {
      allCardSection.classList.add("hidden");
      emptyDiv.classList.remove("hidden");
    }
  } else if (id === "rejected-filter-btn") {
    rejectedViewShow.classList.remove("hidden");
    interViewShow.classList.add("hidden");
    if (rejectedList.length > 0) {
      allCardSection.classList.remove("hidden");
      emptyDiv.classList.add("hidden");
    } else {
      allCardSection.classList.add("hidden");
      emptyDiv.classList.remove("hidden");
    }
  }
}

// main section event delegation

mainContainer.addEventListener("click", function (event) {
  const target = event.target;

  // check btn if false return

  if (
    !target.classList.contains("interview-btn") &&
    !target.classList.contains("rejected-btn")
  ) {
    return;
  }

  // check card if false return

  const card = target.closest(".card");
  if (!card) {
    return;
  }

  // select companyName and status in card

  const companyName = card.querySelector(".company-name").innerText;
  let position = card.querySelector(".Position").innerText;
  let statusEi = card.querySelector(".status").innerText;
  let location = card.querySelector(".Location").innerText;
  let type = card.querySelector(".Type").innerText;
  let salary = card.querySelector(".Salary").innerText;
  let description = card.querySelector(".description").innerText;

console.log(companyName, position, statusEi, location, type, salary, description);

  if (target.classList.contains("interview-btn")) {
    statusEi = "Interview";
  }
  if (target.classList.contains("rejected-btn")) {
    statusEi = "Rejected";
  }
  
});
