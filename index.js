// let form = document.querySelector("#form");
// let inputJob = document.querySelector("#inputJob");
// let error = document.querySelector(".error");
// let jobLocal = JSON.parse(localStorage.getItem("jobs")) || [];
// let listJob = document.querySelector(".list-job");
// let percent = document.querySelector(".percent");

// // Lắng nghe sự kiện submit form
// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   if (!inputJob.value) {
//     error.style.display = "block";
//   } else {
//     error.style.display = "none";
//   }

//   if (inputJob.value) {
//     const job = {
//       id: Math.ceil(Math.random() * 10000000),
//       name: inputJob.value,
//       status: false,
//     };

//     jobLocal.push(job);

//     localStorage.setItem("jobs", JSON.stringify(jobLocal));

//     inputJob.value = "";
//   }
// });

// function render() {
//   let jobHtmls = jobLocal.map((job) => {
//     return `
//         <li class="job-item">
//             <div class="item-left">
//             <input ${
//               job.status ? 'checked="checked"' : ""
//             } type="checkbox" id="${job.id}"/>
//             <p>${job.name}</p>
//             </div>
//             <div class="item-right">
//             <i class="fa-solid fa-trash"></i>
//             </div>
//         </li>
//         <hr />
//         `;
//   });

//   let jobHtml = jobHtmls.join("");

//   listJob.innerHTML = jobHtml;
// }

// render();

// let listStatuses = document.querySelectorAll("input[type='checkbox']");

// listJob.addEventListener("change", function (e) {
//   if (e.target.type === "checkbox") {
//     let idEdit = e.target.id;
//     for (let i = 0; i < jobLocal.length; i++) {
//       if (jobLocal[i].id == idEdit) {
//         jobLocal[i].status = !jobLocal[i].status;
//         localStorage.setItem("jobs", JSON.stringify(jobLocal));
//         render();
//       }
//     }
//   }
// });

// function renderProgress() {
//   // Lấy tổng số lượng công việc
//   let jobLength = jobLocal.length;
//   // Lấy số lượng công việc hoàn thành
//   let countJobSuccess = jobLocal.filter((job) => job.status);

//   let countPercent =
// }

// renderProgress();

console.log("Update github");
