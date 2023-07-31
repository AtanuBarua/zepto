function updateHeading() {
  document.getElementById("outputHeading").innerHTML =
    document.getElementById("heading").value;
}

function updateImage(e) {
  imageDiv = document.getElementById("imageDiv");
  if (imageDiv.classList.contains("hidden")) {
    imageDiv.classList.remove("hidden");
  }
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById("image");
    output.src = reader.result;
  };
  reader.readAsDataURL(e.target.files[0]);
}

function updateDesc() {
  document.getElementById("outputDesc").innerHTML =
    document.getElementById("description").value;
}

function showItem(item) {
  document.getElementById("input" + item).classList.remove("hidden");
  document.getElementById("btn" + item).classList.add("hidden");
}

function closeItem(item) {
  document.getElementById("input" + item).classList.add("hidden");
  document.getElementById("btn" + item).classList.remove("hidden");
  if (item == "Heading") {
    document.getElementById("output" + item).innerHTML = "";
    document.getElementById("heading").value = "";
  } else if (item == "Desc") {
    document.getElementById("output" + item).innerHTML = "";
    document.getElementById("description").value = "";
  } else if (item == "Image") {
    document.getElementById("imageDiv").classList.add("hidden");
    document.getElementById("imageDiv").value = '';
  }
}

function alignHeading(className) {
  const heading = document.getElementById("outputHeading");
  heading.classList.remove("justify-start", "justify-center", "justify-end");
  heading.classList.add(`justify-${className}`);
}

function headingColor(className) {
  const heading = document.getElementById("outputHeading");
  heading.classList.remove("text-blue-600", "text-black", "text-emerald-500");
  heading.classList.add(className);
}
