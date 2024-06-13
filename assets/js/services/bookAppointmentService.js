var otpVerified = false;
var bookAppointmentService = {
  isProfileDataValid: function (appointment) {
    if (!appointment.fullName || appointment.fullName == "") {
      alert("Name required");
      return;
    }
    if (!appointment.email || appointment.email == "") {
      alert("Email required");
      return;
    }
    if (!appointment.mobileNumber || appointment.mobileNumber == "") {
      alert("MobileNumber required");
      return;
    }
    if (!appointment.age || appointment.age == "" || appointment.age == 0) {
      alert("Age required");
      return;
    }
    return true;
  },
  isStepDataValid: function (appointment, data) {
    console.log(appointment);
    if (!appointment[data] || appointment[data] == "") {
      alert(data + " required");
      return;
    }
    return true;
  },
  isFullFormValid: function (appointment, questionnaireResponses) {
    return true;
  },
  sendOtpEmail(email, Callback) {
    fetch(
      "https://api.education2.in/api/v1/users/sendVerifyEmailOTP?email=" + email,
      {
        method: "GET",
        headers: {
          "user-agent": "vscode-restclient",
          "content-type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (!response?.success) {
          alert(response?.message || "");
        }
        Callback(response?.success);
      })
      .catch((err) => {
        console.error(err);
        alert("No account found with this email id");
        Callback(false);
      });
  },
  verifyOTP(email, otp, Callback) {
    fetch(
      `https://api.education2.in/api/v1/users/verifyOTP?email=${email}&otp=${otp}`,
      {
        method: "GET",
        headers: {
          "user-agent": "vscode-restclient",
          "content-type": "application/json",
        },
      }
    ) 
      .then((response) => response.json())
      .then((response) => {
        console.log('re',response);
        otpVerified = response.success;
        Callback(otpVerified, response.data);
      })
      .catch((err) => {
        console.error(err);
        Callback(false);
      });
  },
  isStudentVerifiedByOTP: function () {
    if (!otpVerified) {
      alert("To protect your access, we would like to verify your account. Please send OTP and get it verified.");
    }
    return otpVerified;
  },
  saveData: function (appointment, questionnaireResponses) {
    fetch("https://api.one4patient.com/api/auth/local", {
      method: "POST",
      headers: {
        "user-agent": "vscode-restclient",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        identifier: "admin-content@one4patient.com",
        password: "Test@123",
      }),
    })
      .then((response) => response.json())
      .then((authData) => {
        console.log("login", authData);

        fetch("https://api.one4patient.com/api/mindshift-appointments", {
          method: "POST",
          headers: {
            "user-agent": "vscode-restclient",
            "content-type": "application/json",
            authorization: `Bearer ${authData.jwt}`,
          },
          body: JSON.stringify({
            data: appointment,
          }),
        })
          .then((response) => response.json())
          .then((appointmentData) => {
            console.log("reg", appointmentData?.data);

            for (let i = 0; i < questionnaireResponses.length; i++) {
              const questionnaireResponse = questionnaireResponses[i];

              questionnaireResponse.appointmentId = appointmentData?.data?.id;
              fetch("https://api.one4patient.com/api/questionnaire-responses", {
                method: "POST",
                headers: {
                  "user-agent": "vscode-restclient",
                  "content-type": "application/json",
                  authorization: `Bearer ${authData.jwt}`,
                },
                body: JSON.stringify({
                  data: questionnaireResponse,
                }),
              })
                .then((response) => response.json())
                .then((data) => {
                  console.log(data);
                  fetch(
                    "https://api.education2.in/api/v1/users/sendEmail_mindshiftAppointment",
                    {
                      method: "POST",
                      headers: {
                        "user-agent": "vscode-restclient",
                        "content-type": "application/json",
                      },
                      body: JSON.stringify({
                        appointmentId: appointmentData?.data?.id,
                        name: appointment?.fullName,
                        email: appointment?.email,
                      }),
                    }
                  )
                    .then((response) => {
                      console.log(response);
                    })
                    .catch((err) => {
                      console.error(err);
                    });
                })
                .catch((err) => {
                  console.error(err);
                });
            }
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
