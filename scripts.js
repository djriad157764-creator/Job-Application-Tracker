// create empty array for interviewList & rejectedList

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
const showCard = document.getElementById("show-card");
const interViewShow = document.getElementById("interview-show");
const rejectedViewShow = document.getElementById("rejected-show");

// calculateCount counter function

function calculateCount() {
  totalCountEi.innerText = allCardSection.children.length;
  totalJobsCountEi.innerText = allCardSection.children.length;
  interViewCount.innerText = interviewList.length;
  interViewCountOf.innerText = interviewList.length;
  rejectedViewCount.innerText = rejectedList.length;
  rejectedViewCountOf.innerText = rejectedList.length;
}

calculateCount(); // count update

// change btn style and toggle section

function toggleStyle(id) {
  currentStatus = id;

  // reset all btn style

  [allFilterBtn, interviewFilterBtn, rejectedFilterBtn].forEach((btn) => {
    btn.classList.remove("active-btn", "inactive-btn");

// check btn 

    if (btn.id === id) {
      btn.classList.add("active-btn"); //add style class
      btn.classList.remove("inactive-btn"); //remove style class
    } else {
      btn.classList.add("inactive-btn"); //add style class
      btn.classList.remove("active-btn"); //remove style class
    }
  });

  // allCardSection, emptyDiv, showCard, interViewShow & rejectedViewShow section hide and show

  if (id === "all-filter-btn") {
    allCardSection.classList.remove("hidden");
    emptyDiv.classList.add("hidden");
    showCard.classList.add("hidden");
    interViewShow.classList.add("hidden");
    rejectedViewShow.classList.add("hidden");
  } else if (id === "interview-filter-btn") {
    allCardSection.classList.add("hidden");
    interViewShow.classList.remove("hidden");
    rejectedViewShow.classList.add("hidden");
    renderCards(interviewList); //call renderCards
  } else if (id === "rejected-filter-btn") {
    allCardSection.classList.add("hidden");
    rejectedViewShow.classList.remove("hidden");
    interViewShow.classList.add("hidden");
    renderCards(rejectedList); //call renderCards
  }
}

// extractCardData function--->

function extractCardData(card, statusValue) {
  return {
    companyName: card.querySelector(".company-name").innerText,
    position: card.querySelector(".Position").innerText,
    location: card.querySelector(".Location").innerText,
    type: card.querySelector(".Type").innerText,
    salary: card.querySelector(".Salary").innerText,
    description: card.querySelector(".description").innerText,
    status: statusValue,
  };
}

// main section event delegation

mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("interview-btn")) {
    let card = event.target.closest(".card");

    // interviewList call extractCardData function for give interview data

    const cardInfo = extractCardData(card, "Interview");

    // check interviewList

    if (!interviewList.find((i) => i.companyName === cardInfo.companyName)) {
      interviewList.push(cardInfo);
      rejectedList = rejectedList.filter(
        (i) => i.companyName !== cardInfo.companyName,
      );
    }

    card.querySelector(".status").innerText = "Interview";  //set this.innerText status in card 

    calculateCount(); // count update

    if (currentStatus === "rejected-filter-btn") {
      renderCards(rejectedList); //call renderCards
    } else if (currentStatus === "interview-filter-btn") {
      renderCards(interviewList); //call renderCards
    }
  }

  if (event.target.classList.contains("rejected-btn")) {
    let card = event.target.closest(".card");

    // rejectedList call extractCardData function for give interview data

    const cardInfo = extractCardData(card, "Rejected");

    // check rejectedList

    if (!rejectedList.find((i) => i.companyName === cardInfo.companyName)) {
      rejectedList.push(cardInfo);
      interviewList = interviewList.filter(
        (i) => i.companyName !== cardInfo.companyName,
      );
    }
    card.querySelector(".status").innerText = "Rejected";
    calculateCount(); // count update

    // check condition and then call renderCards function

    if (currentStatus === "interview-filter-btn") {
      renderCards(interviewList); //call renderCards
    } else if (currentStatus === "rejected-filter-btn") {
      renderCards(rejectedList); //call renderCards
    } 
  }
});

// list render function

function renderCards(list) {
  showCard.innerHTML = "";

  // show and hide emptyDiv or showCard

  if (list.length == 0) {
    emptyDiv.classList.remove("hidden");
    showCard.classList.add("hidden");
  } else {
    emptyDiv.classList.add("hidden");
    showCard.classList.remove("hidden");

// loop in the list

    list.forEach((item) => {
      const newDiv = document.createElement("div"); // create new div

      // set innerHTML in newDiv

      newDiv.innerHTML = ` <div
          class="card bg-white/3 hover:bg-white/1 transition-all duration-400 hover:border-l-2 hover:border-amber-300 p-6 rounded-2xl hover:scale-101"
        >
          <div class="flex justify-between items-center">
            <div class="">
              <h2
                class="company-name text-[18px] font-semibold text-[#38bdf8] mb-2"
              >
                ${item.companyName}
              </h2>
              <p class="Position text-base text-[#94a3b8] mb-5">
                Frontend Develope
              </p>
            </div>
            <div class="">
              <button
                
                class="card-delete-btn cursor-pointer text-[32px] hover:scale-120 duration-400 transition-all text-red-600"
              >
                <i class="fa-solid fa-trash-arrow-up"></i>
              </button>
            </div>
          </div>
          <div class="text-[#cbd5e1] mb-5">
            <span class="Location">${item.location}</span>
            <span class="Type">${item.type}</span>
            <span class="Salary">${item.salary}</span>
          </div>
          <div class="mb-5">
            <p
              class="font-bold text-base bg-[#2d3748] text-[#94a3b8] w-fit p-2 mb-2 rounded-[8px]"
            >
              <span class="status">${item.status}</span>
            </p>
            <p class="description text-[#64748b]">
              ${item.description}
            </p>
          </div>
          <div class="flex gap-2">
            <button
              class="interview-btn cursor-pointer px-8 py-3 rounded-2xl backdrop-blur-lg bg-green-500/30 text-green-400 border-green-500/50 hover:bg-green-300/30 transition-all font-bold"
            >
              Interview
            </button>
            <button
              class="rejected-btn cursor-pointer px-8 py-3 rounded-2xl backdrop-blur-lg bg-red-500/30 text-red-300 border-red-500/50 hover:bg-red-600/30 transition-all font-bold"
            >
              Rejected
            </button>
          </div>
        </div>`;

      showCard.appendChild(newDiv); // append newDiv in showCard
    });
  }
}
