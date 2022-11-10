import styles from "../styles/userForm.module.css";

export default function UserForm({ handleChange, finalDestination }) {
  // const [choice, setChoice] = useState([]);

  // const handleChange = (e) => {
  //   // Push element into array if checked
  //   if (e.target.checked) {
  //     setChoice((prevState) => [...prevState, e.target.value]);
  //   }

  //   // Remove unchecked item from array
  //   if (!e.target.checked) {
  //     let removedChoice = e.target.value;

  //     if (choice.includes(removedChoice)) {
  //       let indexToRemove = choice.indexOf(removedChoice);

  //       choice.splice(indexToRemove, 1);
  //       setChoice([...choice]);
  //     }
  //   }
  // };

  // // Testing purposes
  // console.log(choice);

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

        <button className={styles.btn} onClick={finalDestination}>
          Get location
        </button>

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
