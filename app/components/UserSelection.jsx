import { useState } from "react";
import UserForm from "./UserForm";
import UserResult from "./UserResult";
import locations from "../src/data";
import styles from "../styles/userSelection.module.css";

export default function UserDashboard() {
  const [choice, setChoice] = useState([]);
  const [destination, setDestination] = useState("");

  const handleChange = (e) => {
    // Push element into array if checked
    if (e.target.checked) {
      setChoice((prevState) => [...prevState, e.target.value]);
    }

    // Remove unchecked item from array
    if (!e.target.checked) {
      let removedChoice = e.target.value;

      if (choice.includes(removedChoice)) {
        let indexToRemove = choice.indexOf(removedChoice);

        choice.splice(indexToRemove, 1);
        setChoice([...choice]);
      }
    }
  };

  // Testing purposes
  // console.log("From parent component: " + choice);

  // Array of possible destinations based on user choices.
  const possibleSelections = [];

  //Find matching locations based on user choices.
  const findMatches = () => {
    locations.forEach((location) => {
      for (let i = 0; i <= choice.length; i++) {
        if (choice.length === 0) {
          console.log("Please make a selection");
        }

        if (location.tags.includes(choice[i])) {
          possibleSelections.push(location.name);
          console.log(possibleSelections);
        }
      }
    });
  };

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * possibleSelections.length);
  };

  let finalDestination = () => {
    findMatches();
    setDestination(possibleSelections[generateRandomNumber()]);
  };

  console.log(destination);

  return (
    <div className={styles.container}>
      <UserForm
        handleChange={handleChange}
        finalDestination={finalDestination}
      />
      <UserResult destination={destination} />
    </div>
  );
}
