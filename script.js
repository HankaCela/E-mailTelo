const closingEl = document.querySelector(".email__closing");
const goodbye = (name) => {
    closingEl.textContent = `S pozdravem ${name}`;
  };
  
const subjectEl = document.querySelector(".email__subject");

const fillSubject = (subject) => {
  subjectEl.textContent = subject;
};

fillSubject("Nabídka práce: frontend vývojář*ka");

const bodyEl = document.querySelector(".email__body");

const fillBody = (body, name) => {
    bodyEl.textContent = body;
    goodbye(name);
};

    fillBody("Skvělá práce pro šikovné juniory! ...", "Michaela");