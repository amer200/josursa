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
} else if (path == "why-us") {
  formsHandler("why-us");
} else if (path == "image") {
  formsHandler("imgs");
} else if (path == "quality") {
  formsHandler("quality");
}
// image gallery
const copySrc = (img) => {
  const e = img.previousElementSibling;
  /* Select the text field */
  e.select();
  e.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(e.value);

  /* Alert the copied text */
  alert(" تم نسخ الصورة ");
};

const getCateg = (t) => {
  const all = document.getElementsByClassName("card");
  const showE = document.getElementsByClassName(t.value);
  if (t.value == "all") {
    Array.prototype.slice.call(all).forEach((e) => {
      e.classList.remove("d-none");
    });
  } else {
    Array.prototype.slice.call(all).forEach((e) => {
      e.classList.add("d-none");
    });
    Array.prototype.slice.call(showE).forEach((e) => {
      e.classList.remove("d-none");
    });
  }
};
// quality & safty
const addE = (t) => {
  const E = document.createElement("input");
  E.name = "feats";
  E.classList.add("form-control");
  E.style.marginTop = "10px";
  console.log(t.parentNode);
  t.parentNode.appendChild(E);
};
const removeE = (t) => {
  const E = t.previousElementSibling;
  E.remove();
  t.remove();
};
