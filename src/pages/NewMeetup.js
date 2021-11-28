import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";

function NewMeetupPage() {
  const navigate = useNavigate();
  function addMeetupHandler(meetupData) {
    // ici send http request
    // // https://meetup-eddaa-default-rtdb.firebaseio.com/
    fetch("https://meetup-eddaa-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "content-type": "applocation/json",
      },
    }).then(() => {
      navigate("/");
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
