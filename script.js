const photo       = $("#photo"),
      title       = $("#photo-title"),
      description = $("#photo-description"),
      back        = $("#back"),
      forward     = $("#forward");

let data = [
  {
   photo: "https://images.unsplash.com/photo-1551009175-15bdf9dcb580?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80", 
   title: "Canada flag",
   description: "Nice Picture with Canadian flag and some city in the background with the flag of USA. This photo is probably shoot sunset."
  }, {
    photo: "https://images.unsplash.com/photo-1507409613952-518459ac866e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    title: "Canada Nature",
    description: "Magnificient picture with pure Canada nature. There is a forest at front, clean blue lake and mountains and forest at front.",
  }, {
    photo: "https://images.unsplash.com/photo-1508693926297-1d61ee3df82a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    title: "Maple Leaf",
    description: "This photo is shoot during fall in Canada. There is a Maple leaf - typical Canadian symbol and a holding hand. In the background there is a forest.",
  }, {
    photo: "https://images.unsplash.com/photo-1533417457911-4ec911485388?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
    title: "Toronto",
    description: "City landscape of biggest Canadian city - Toronto. Photo is shoot from the Ontario lake and you can see some famous monuments of the city - (from left) baseball stadium of Toronto Blue Jays, CN Tower and landscape buildings.",
  }, {
    photo: "https://images.unsplash.com/photo-1445296608114-4b8fabe48256?ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80",
    title: "Montreal",
    description: "Landscape of second biggest city in Canada - Montréal. This is a French speaking city and it is located in Quebéc province. It is shoot from above and you can see most of the tallest buildings in the city (mostly banks). ",
  }, {
    photo: "https://images.unsplash.com/photo-1517949908114-71669a64d885?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    title: "Canada bike",
    description: "Red roadbike with a locker on standing in front of a wooden wall with classic painted Canadian symbol - Maple leaf.",
  }, {
    photo: "https://images.unsplash.com/photo-1468465226960-8899e992537c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80",
    title: "Hockey",
    description: "In this photo you can see a popular Canadian pastime - Ice Hockey. In it's most natural form - couple of players skating and playing ice hockey on a frozen pond during winter. In the background there is a forest and magnificient mountain.",
  }, {
    photo: "https://images.unsplash.com/photo-1515614292736-221f855a4258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2004&q=80",
    title: "Canada police",
    description: "In this photo you can see typical Canadian police also called as Mounties dressed in red, with brown hat. There are people walking in line and looking very focused.",
  },
];

let currentPhoto = 0;

data.forEach((picture) => {
  dataNum = data.indexOf(picture);
  let thumbnail = `<div class="thumbnail" data-number="${dataNum}">
                    <div class="thumbnail-title">
                      <h6>${picture.title}</h6>
                    </div>
                    <img class="thumbnail-img" src="${picture.photo}" data-number="${dataNum}" alt="">
                  </div>`;
  $(".thumbnails").append(thumbnail);
});

$(".thumbnail").on("click", (event) => {
  currentPhoto = $(event.target).data("number");
  loadPhoto(currentPhoto);
});

$(".thumbnail-img").on("click", (event) => {
  currentPhoto = $(event.target).data("number");
  loadPhoto(currentPhoto);
});

let highlight = (photoNumber) => {
  var divs = document.querySelectorAll('div'), i;
  for (i = 0; i < divs.length; ++i) {
    console.log($(divs[i]).data("number") == photoNumber);
    if($(divs[i]).data("number") == photoNumber){
      $(divs[i]).addClass("selected");
    } else {$(divs[i]).removeClass("selected")}
  };
};

let loadPhoto = (photoNumber) => {
  photo.attr("src", data[photoNumber].photo);
  title.text(data[photoNumber].title);
  description.text(data[photoNumber].description);
  highlight(photoNumber);
};

loadPhoto(currentPhoto);

forward.on("click", () => {
  currentPhoto++;
  if(currentPhoto === data.length){
    currentPhoto = 0;
    loadPhoto(currentPhoto);
  } else {
    loadPhoto(currentPhoto);
  }
});

back.on("click", () => {
  currentPhoto--;
  if(currentPhoto === -1){
    currentPhoto = data.length-1;
    loadPhoto(currentPhoto);
  } else {
    loadPhoto(currentPhoto);
  }
});