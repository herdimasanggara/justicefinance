$(function() {
  var $curParent, Content;
  $(document).delegate("span", "click", function() {
    if ($(this).closest("s").length) {
      Content = $(this).parent("s").html();
      $curParent = $(this).closest("s");
      $(Content).insertAfter($curParent);
      $(this).closest("s").remove();
    } else {
      $(this).wrapAll("<s />");
    }
  });
});

$(".btn").click(function() {

  var lable = $(".btn").text().trim();

  if (lable == "Hide") {
    $(".btn").text("Show");
    $(".myText").hide();
  } else {
    $(".btn").text("Hide");
    $(".myText").show();
  }

});

let url = 'https://api.sheety.co/41b9b75450fa99cad5826da2c4e9d3bf/untitledSpreadsheet/sheet1';
fetch(url)
  .then((response) => response.json())
  .then(json => {
    // Do something with the data
    console.log(json.sheet1S);
  });

function myFunction01() {
  var x = document.getElementById("dropdown01");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction02() {
  var x = document.getElementById("dropdown02");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction02a() {
  var x = document.getElementById("dropdown02a");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction02b() {
  var x = document.getElementById("dropdown02b");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function donemyFunction02a() {
  var x = document.getElementById("donedropdown02a");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function donemyFunction02b() {
  var x = document.getElementById("donedropdown02b");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction03() {
  var x = document.getElementById("dropdown03");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction03a() {
  var x = document.getElementById("dropdown03a");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction03b() {
  var x = document.getElementById("dropdown03b");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction03c() {
  var x = document.getElementById("dropdown03c");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction03d() {
  var x = document.getElementById("dropdown03d");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction03e() {
  var x = document.getElementById("dropdown03e");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction03f() {
  var x = document.getElementById("dropdown03f");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction03g() {
  var x = document.getElementById("dropdown03g");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction03h() {
  var x = document.getElementById("dropdown03h");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction03i() {
  var x = document.getElementById("dropdown03i");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction04() {
  var x = document.getElementById("dropdown04");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction05() {
  var x = document.getElementById("dropdown05");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction05a() {
  var x = document.getElementById("dropdown05a");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction05b() {
  var x = document.getElementById("dropdown05b");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction05c() {
  var x = document.getElementById("dropdown05c");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function donemyFunction05a() {
  var x = document.getElementById("donedropdown05a");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function donemyFunction05b() {
  var x = document.getElementById("donedropdown05b");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function donemyFunction05c() {
  var x = document.getElementById("donedropdown05c");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction06() {
  var x = document.getElementById("dropdown06");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction06a() {
  var x = document.getElementById("dropdown06a");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction06b() {
  var x = document.getElementById("dropdown06b");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction06c() {
  var x = document.getElementById("dropdown06c");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction06d() {
  var x = document.getElementById("dropdown06d");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function donemyFunction06a() {
  var x = document.getElementById("donedropdown06a");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function donemyFunction06b() {
  var x = document.getElementById("donedropdown06b");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function donemyFunction06c() {
  var x = document.getElementById("donedropdown06c");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function donemyFunction06d() {
  var x = document.getElementById("donedropdown06d");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction07() {
  var x = document.getElementById("dropdown07");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction08() {
  var x = document.getElementById("dropdown08");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction08a() {
  var x = document.getElementById("dropdown08a");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction08b() {
  var x = document.getElementById("dropdown08b");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction08c() {
  var x = document.getElementById("dropdown08c");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function donemyFunction08a() {
  var x = document.getElementById("donedropdown08a");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function donemyFunction08b() {
  var x = document.getElementById("donedropdown08b");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function donemyFunction08c() {
  var x = document.getElementById("donedropdown08c");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction09() {
  var x = document.getElementById("dropdown09");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction09a() {
  var x = document.getElementById("dropdown09a");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction09b() {
  var x = document.getElementById("dropdown09b");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction09c() {
  var x = document.getElementById("dropdown09c");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function donemyFunction09a() {
  var x = document.getElementById("donedropdown09a");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function donemyFunction09b() {
  var x = document.getElementById("donedropdown09b");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function donemyFunction09c() {
  var x = document.getElementById("donedropdown09c");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction10() {
  var x = document.getElementById("dropdown10");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction10a() {
  var x = document.getElementById("dropdown10a");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction10b() {
  var x = document.getElementById("dropdown10b");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction10c() {
  var x = document.getElementById("dropdown10c");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function donemyFunction10a() {
  var x = document.getElementById("donedropdown10a");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function donemyFunction10b() {
  var x = document.getElementById("donedropdown10b");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function donemyFunction10c() {
  var x = document.getElementById("donedropdown10c");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction11() {
  var x = document.getElementById("dropdown11");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction12() {
  var x = document.getElementById("dropdown12");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction13() {
  var x = document.getElementById("dropdown13");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1ezQOqIpvcA-l_408XSj5nPldRf1TY4TEmA7aWEcqo7s/edit?usp=sharing';



function init() {
  Tabletop.init({
    key: publicSpreadsheetUrl,
    callback: showInfo,
    simpleSheet: true
  })
}


function showInfo(data, tabletop) {
  data.forEach(function(data) {
    ctlawhelplink.innerHTML = data.ctlawhelplink;
    test02.innerHTML = data.test02;
    test03.innerHTML = data.test03;
    test04.innerHTML = data.test04;
    test05.innerHTML = data.test05;
    test06.innerHTML = data.test06;
    test07.innerHTML = data.test07;
    test08.innerHTML = data.test08;
    test09.innerHTML = data.test09;
    test10.innerHTML = data.test10;

  });
}
window.addEventListener('DOMContentLoaded', init)
