// Here to display the Gritting message we call this function
Showmessage();

function Showmessage() {
  // Here we are declering the new variables
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();

  //call display(Grittings)
  Display();

  // Dispaly greeting
  function Display() {
    if (hour >= 22 || hour <= 5) document.write("Goodnight, Interns! <br />");
    else document.write("Good Morning Interns <br />");

    document.write(
      "Today's Date is:" + " " + " " + day + "/" + month + "/" + year + "<br />"
    );
    document.write("Time:" + " " + hour + ":" + "" + min);
  }
}