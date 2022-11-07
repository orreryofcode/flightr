import { useState, useRef, useEffect } from "react";

import styles from "../styles/userForm.module.css";

export default function UserForm() {
  const [tempChoice, setTempChoice] = useState([]);
  const tempBoxes = document.querySelectorAll(".temp");

  const handleChange = (e) => {
    // Todo:
    // 1. When a new item choice is checked, that item should be moved into the tempChoice array and the previous value from the same group should be removed.

    let item = e.target.value;

    // Push element into array if checked
    if (e.target.checked) {
      setTempChoice((oldArray) => [...oldArray, e.target.value]);
    }

    // Remove element from array when unchecked
    if (!e.target.checked) {
      setTempChoice((oldArray) =>
        oldArray.filter((element) => element !== item)
      );
    }

    tempBoxes.forEach((box) => {
      if (box.value !== item) {
        box.checked = false;
      }
    });
  };

  // Testing purposes
  console.log("State array for this:" + tempChoice);

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.form__heading}>Heading</h1>

        <div className={styles.formgroup__options}>
          <div className={styles.formgroup__item}>
            <input
              type='checkbox'
              value='Cold'
              id='Cold'
              onChange={handleChange}
              className='temp'
            />
            <label htmlFor='Cold'>Cold</label>
          </div>

          <div className={styles.formgroup__item}>
            <input
              type='checkbox'
              value='Warm'
              id='Warm'
              onChange={handleChange}
              className='temp'
            />
            <label htmlFor='Warm'>Warm</label>
          </div>

          <div className={styles.formgroup__item}>
            <input
              type='checkbox'
              value='Hot'
              id='Hot'
              onChange={handleChange}
              className='temp'
            />
            <label htmlFor='Hot'>Hot</label>
          </div>
        </div>
        {/* <form action='#' className={styles.formgroup}>
          <div className={styles.formgroup__options}>
            <div className={styles.formgroup__temp}>
              <div className={styles.formgroup__item}>
                <input type='checkbox' className='temp' value='Cold' />
                <label htmlFor=''>Cold</label>
              </div>
              <div className={styles.formgroup__item}>
                <input
                  type='checkbox'
                  className='temp'
                  value='Warm'
                  onChange={handleChange}
                />
                <label htmlFor=''>Warm</label>
              </div>
              <div className={styles.formgroup__item}>
                <input type='checkbox' className='temp' value='Hot' />
                <label htmlFor=''>Hot</label>
              </div>
            </div>
            <div className={styles.formgroup__temp}>
              <div className={styles.formgroup__item}>
                <input type='checkbox' />
                <label htmlFor=''>Short</label>
              </div>

              <div className={styles.formgroup__item}>
                <input type='checkbox' />
                <label htmlFor=''>Medium</label>
              </div>
              <div className={styles.formgroup__item}>
                <input type='checkbox' />
                <label htmlFor=''>Far</label>
              </div>
            </div>
          </div>

          <button type='submit' className={styles.btn}>
            Get Location!
          </button>
        </form> */}
      </div>
    </>
  );
}
