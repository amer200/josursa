// handler funcktions
const deleteHandeler = (button) => {
  if (confirm("سيتم الحذف نهائيا و لا يمكن التراجع عنه فيما بعد ؟")) {
    button.parentNode.submit();
  }
};
// sidebar btn handlers
const forms = document.querySelectorAll(".forms");
const headerBtn = document.getElementById("header-btn");
const path = window.location.href.split("#")[1];
const formsHandler = (formId) => {
  const unUsedForms = Array.prototype.slice.call(forms).filter((f) => {
    return f.id !== formId;
  });
  const usedForm = Array.prototype.slice.call(forms).filter((f) => {
    return f.id == formId;
  });
  usedForm[0].classList.add("d-block");
  usedForm[0].classList.remove("d-none");
  unUsedForms.forEach((f) => {
    f.classList.add("d-none");
    f.classList.remove("d-block");
  });
};
if (path == "header") {
  formsHandler("header-form");
} else if (path == "about") {
  formsHandler("about-form");
} else if (path == "projects") {
  formsHandler("projects");
} else if (path == "services") {
  formsHandler("services");
} else if (path == "throw-services") {
  formsHandler("th-servs");
} else if (path == "clints") {
  formsHandler("clints");
} else if (path == "portfillo") {
  formsHandler("portfillo");
}else if(path == "why-us"){
  formsHandler('why-us')
}
