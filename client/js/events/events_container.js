Template.container.events = {
  'click .alert .close' : closeAlert
};


function closeAlert(e) {
  if(e.preventDefault) {
    e.preventDefault();
  }
  
  target = $(e.target);
  toClose = target.attr("data-dismiss");
  console.log("removing ."+toClose);
  target.closest('.'+toClose).remove();
}

