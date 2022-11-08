import { useState } from "react";

import styles from "../styles/userForm.module.css";

export default function UserForm() {
  const [tempChoice, setTempChoice] = useState([]);
  const tempBoxes = document.querySelectorAll(".temp");

  const handleChange = (e) => {
    let item = e.target.value;

    // Push element into array if checked
    if (e.target.checked) {
      setTempChoice((oldArray) => [...oldArray, e.target.value]);
    }

    if (!e.target.checked) {
      setTempChoice((oldArray) =>
        oldArray.filter((element) => element !== item)
      );
    }
  };

  // Testing purposes
  // console.log(tempChoice);

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.form__heading}>Heading</h1>

        <div className={styles.formgroup__options}>
          <div className={styles.formgroup__temp}>
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

          <div className={styles.formgroup__distance}>
            <div className={styles.formgroup__item}>
              <input
                type='checkbox'
                value='Short'
                id='Short'
                onChange={handleChange}
                className='distance'
              />
              <label htmlFor='Short'>Short</label>
            </div>

            <div className={styles.formgroup__item}>
              <input
                type='checkbox'
                value='Medium'
                id='Medium'
                onChange={handleChange}
                className='distance'
              />
              <label htmlFor='Medium'>Medium</label>
            </div>

            <div className={styles.formgroup__item}>
              <input
                type='checkbox'
                value='Far'
                id='Far'
                onChange={handleChange}
                className='distance'
              />
              <label htmlFor='Far'>Far</label>
            </div>
          </div>

          <div className={styles.formgroup__cost}>
            <div className={styles.formgroup__item}>
              <input
                type='checkbox'
                value='Cheap'
                id='Cheap'
                onChange={handleChange}
                className='cost'
              />
              <label htmlFor='Cheap'>$</label>
            </div>

            <div className={styles.formgroup__item}>
              <input
                type='checkbox'
                value='Reasonable'
                id='Reasonable'
                onChange={handleChange}
                className='cost'
              />
              <label htmlFor='Reasonable'>$$</label>
            </div>

            <div className={styles.formgroup__item}>
              <input
                type='checkbox'
                value='Expensive'
                id='Expensive'
                onChange={handleChange}
                className='cost'
              />
              <label htmlFor='Expensive'>$$$</label>
            </div>
          </div>
        </div>

        <button>Get location</button>

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
