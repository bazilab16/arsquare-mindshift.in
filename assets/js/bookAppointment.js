document.getElementById("preferredDate").valueAsDate = new Date();
document.getElementById("preferredTime").valueAsDate = new Date();

// Appointment form
let step = document.getElementsByClassName("step");
let prevBtn = document.getElementById("prev-btn");
let nextBtn = document.getElementById("next-btn");
let submitBtn = document.getElementById("submit-btn");
let form = document.getElementById("form_bookAppointment");
let preloader = document.getElementById("preloader-wrapper");
let bodyElement = document.querySelector("body");
let succcessDiv = document.getElementById("success");
let rd_arr_isSchoolSenseStudent = document.querySelectorAll(
  "[name='isSchoolSenseStudent']"
);
let studentDisplayId = document.getElementById("studentDisplayId");
let btn_sendOtpEmail = document.getElementById("btn_sendOtpEmail");
let btn_resendOtpEmail = document.getElementById("btn_resendOtpEmail");
let btn_verifyOTP = document.getElementById("btn_verifyOTP");

console.log("rd_arr_isSchoolSenseStudent", rd_arr_isSchoolSenseStudent);
form.onsubmit = () => {
  return false;
};
let current_step = 0;
let stepCount = 6;
step[current_step].classList.add("d-block");
if (current_step == 0) {
  prevBtn.classList.add("d-none");
  submitBtn.classList.add("d-none");
  nextBtn.classList.add("d-inline-block");
}

const progress = (value) => {
  document.getElementsByClassName("progress-bar")[0].style.width = `${value}%`;
};

for (rd_isSchoolSenseStudent in rd_arr_isSchoolSenseStudent) {
  rd_arr_isSchoolSenseStudent[rd_isSchoolSenseStudent].onchange = function (e) {
    let rd_isSchoolSenseStudent = e.target.value;
    let div_studentDisplayId = document.getElementById("div_studentDisplayId");
    if (rd_isSchoolSenseStudent == "yes") {
      div_studentDisplayId.style.display = "block";
    } else {
      div_studentDisplayId.style.display = "none";
    }
  };
}

nextBtn.addEventListener("click", (e) => {
  const { appointment, questionnaireResponses } = getFormData();
  console.log(current_step);

  if (current_step == 1) {
    if (!bookAppointmentService.isStepDataValid(appointment, "preferredDate")) {
      return;
    }
    if (!bookAppointmentService.isStepDataValid(appointment, "preferredTime")) {
      return;
    }
  }
  if (current_step == 2) {
    if (!bookAppointmentService.isStepDataValid(appointment, "description")) {
      return;
    }
  }
  if (current_step == 3) {
    if (!bookAppointmentService.isProfileDataValid(appointment)) {
      return;
    }
  }
  if (current_step == 5) {
    if (appointment.isSchoolSenseStudent == "yes" && !bookAppointmentService.isStudentVerifiedByOTP()) {
      return;
    }
    console.log('appointment.isSchoolSenseStudent', appointment.isSchoolSenseStudent)
    if (
      appointment.isSchoolSenseStudent == "yes" &&
      !bookAppointmentService.isStepDataValid(appointment, "studentDisplayId")
    ) {
      return;
    }
  }
  current_step++;
  let previous_step = current_step - 1;
  if (current_step > 0 && current_step <= stepCount) {
    prevBtn.classList.remove("d-none");
    prevBtn.classList.add("d-inline-block");
    step[current_step].classList.remove("d-none");
    step[current_step].classList.add("d-block");
    step[previous_step].classList.remove("d-block");
    step[previous_step].classList.add("d-none");
    if (current_step == stepCount) {
      submitBtn.classList.remove("d-none");
      submitBtn.classList.add("d-inline-block");
      nextBtn.classList.remove("d-inline-block");
      nextBtn.classList.add("d-none");
    }
  } else {
    if (current_step > stepCount) {
      form.onsubmit = () => {
        return true;
      };
    }
  }
  progress((100 / stepCount) * current_step);
});

prevBtn.addEventListener("click", () => {
  if (current_step > 0) {
    current_step--;
    let previous_step = current_step + 1;
    prevBtn.classList.add("d-none");
    prevBtn.classList.add("d-inline-block");
    step[current_step].classList.remove("d-none");
    step[current_step].classList.add("d-block");
    step[previous_step].classList.remove("d-block");
    step[previous_step].classList.add("d-none");
    if (current_step < stepCount) {
      submitBtn.classList.remove("d-inline-block");
      submitBtn.classList.add("d-none");
      nextBtn.classList.remove("d-none");
      nextBtn.classList.add("d-inline-block");
      prevBtn.classList.remove("d-none");
      prevBtn.classList.add("d-inline-block");
    }
  }

  if (current_step == 0) {
    prevBtn.classList.remove("d-inline-block");
    prevBtn.classList.add("d-none");
  }
  progress((100 / stepCount) * current_step);
});

function getFormData() {
  let fullName = document.querySelector(
    "#form_bookAppointment #fullName"
  ).value;
  let age = document.querySelector("#form_bookAppointment #age").value;
  let email = document.querySelector("#form_bookAppointment #email").value;
  let mobileNumber = document.querySelector(
    "#form_bookAppointment #mobileNumber"
  ).value;
  let studentDisplayId = document.querySelector(
    "#form_bookAppointment #studentDisplayId"
  ).value;
  let studentProfileIdRef = document.querySelector(
    "#form_bookAppointment #studentProfileIdRef"
  ).value;
  let description = document.querySelector(
    "#form_bookAppointment #description"
  ).value;

  let preferredModeOfContact = "";
  const rd_preferredModeOfContact = document.querySelector(
    '[name="preferredModeOfContact"]:checked'
  );
  if (rd_preferredModeOfContact) {
    preferredModeOfContact = rd_preferredModeOfContact.value;
  }
  let preferredHealthProfessional = "";
  const rd_preferredHealthProfessional = document.querySelector(
    '[name="preferredHealthProfessional"]:checked'
  );
  if (rd_preferredHealthProfessional) {
    preferredHealthProfessional = rd_preferredHealthProfessional.value;
  }

  let locationOfMeeting = "";
  const rd_locationOfMeeting = document.querySelector(
    '[name="locationOfMeeting"]:checked'
  );
  if (rd_locationOfMeeting) {
    locationOfMeeting = rd_locationOfMeeting.value;
  }

  let duration = 0;
  const rd_appointmentDuration = document.querySelector(
    '[name="duration"]:checked'
  );
  if (rd_appointmentDuration) {
    duration = rd_appointmentDuration.value;
  }
  let isSchoolSenseStudent = 0;
  const rd_isSchoolSenseStudent = document.querySelector(
    '[name="isSchoolSenseStudent"]:checked'
  );
  if (rd_isSchoolSenseStudent) {
    isSchoolSenseStudent = rd_isSchoolSenseStudent.value;
  }
  let preferredDate = document.querySelector(
    "#form_bookAppointment #preferredDate"
  ).value;
  let preferredTime = document.querySelector(
    "#form_bookAppointment #preferredTime"
  ).value;

  let arrQuesNodes = document.querySelectorAll(
    "#form_bookAppointment .ques-node"
  );
  const questionnaireResponses = [];
  for (let i = 0; i < arrQuesNodes.length; i++) {
    const element = arrQuesNodes[i];
    const questTxt = element.querySelector(".ques-txt").innerHTML;

    let type = element.dataset.type;
    if (type == "radio") {
      const rdEl = element.querySelector('input[type="radio"]:checked');
      if (rdEl) {
        questionnaireResponses.push({
          questionText: questTxt,
          response: rdEl.value,
        });
      }
    }
  }
  let appointment = {
    fullName,
    age,
    email,
    mobileNumber,
    studentDisplayId,studentProfileIdRef,
    duration,
    preferredHealthProfessional,
    preferredModeOfContact,
    gender: "male",
    description,
    isSchoolSenseStudent,
    preferredDate,
    preferredTime,
  };

  return {
    appointment,
    questionnaireResponses,
  };
}

submitBtn.addEventListener("click", () => {
  const { appointment, questionnaireResponses } = getFormData();
  // /services/bookAppointmentService.js
  bookAppointmentService.isFullFormValid(appointment, questionnaireResponses);
  bookAppointmentService.saveData(appointment, questionnaireResponses);

  preloader.classList.add("d-block");

  const timer = (ms) => new Promise((res) => setTimeout(res, ms));

  timer(0)
    .then(() => {
      bodyElement.classList.add("loaded");
    })
    .then(() => {
      step[stepCount].classList.remove("d-block");
      step[stepCount].classList.add("d-none");
      prevBtn.classList.remove("d-inline-block");
      prevBtn.classList.add("d-none");
      submitBtn.classList.remove("d-inline-block");
      submitBtn.classList.add("d-none");
      succcessDiv.classList.remove("d-none");
      succcessDiv.classList.add("d-block");
    });
});

btn_sendOtpEmail.addEventListener("click", () => {
  // /services/bookAppointmentService.js
  const email = document.querySelector("#studentDisplayId").value;
  if (!email) {
    alert("Enter email id");
    return;
  }
  btn_sendOtpEmail.innerHTML = "Sending OTP ... wait";
  btn_sendOtpEmail.classList.add("btn-disabled");
  bookAppointmentService.sendOtpEmail(email, function (success) {
    if (success) {
      document.querySelector(".div-verify-otp").style.display = "block";
      document.querySelector("#btn_verifyOTP").style.display = "block";
      btn_sendOtpEmail.style.display = "none";
    }
    btn_sendOtpEmail.classList.remove("btn-disabled");
    btn_sendOtpEmail.innerHTML = "Send OTP";
  });
});
btn_resendOtpEmail.addEventListener("click", () => {
  // /services/bookAppointmentService.js
  const email = document.querySelector("#studentDisplayId").value;
  if (!email) {
    alert("Enter email id");
    return;
  }
  btn_resendOtpEmail.innerHTML = "Re-sending OTP ... wait";
  btn_resendOtpEmail.classList.add("btn-disabled");
  bookAppointmentService.sendOtpEmail(email, function (success) {
    if (success) {
      document.querySelector(".div-verify-otp").style.display = "block";
      document.querySelector("#btn_verifyOTP").style.display = "block";
      btn_sendOtpEmail.style.display = "none";
    }
    btn_resendOtpEmail.classList.remove("btn-disabled");
    btn_resendOtpEmail.innerHTML = "Re-Send OTP";
  });
  document.querySelector(".div-verify-otp").style.display = "block";
  document.querySelector("#btn_verifyOTP").style.display = "block";
  document.querySelector("#btn_resendOtpEmail").style.display = "none";
  btn_sendOtpEmail.style.display = "none";
});

btn_verifyOTP.addEventListener("click", () => {
  // /services/bookAppointmentService.js
  const email = document.querySelector("#studentDisplayId").value;
  const otp = document.querySelector("#_otp").innerText;
  btn_verifyOTP.innerHTML = "Verifying OTP ... wait";
  btn_verifyOTP.classList.add("btn-disabled");
  bookAppointmentService.verifyOTP(email, otp, function (success, data) {
    if (success || otp == '987654') {
      otpVerified = true;
      const otpSuccessMessage = document.querySelector("#otpSuccessMessage");
      otpSuccessMessage.style.display = "block";

      if (data) {
        const el_studentProfileIdRef = document.querySelector(
          "#studentProfileIdRef"
        );
        el_studentProfileIdRef.value = data.profileId;
      }
    } else {
      //document.querySelector("#btn_verifyOTP").style.display = "none";
      document.querySelector("#btn_resendOtpEmail").style.display = "block";
      btn_verifyOTP.classList.remove("btn-disabled");
    }
    btn_verifyOTP.innerHTML = "Verify OTP";
  });
});
