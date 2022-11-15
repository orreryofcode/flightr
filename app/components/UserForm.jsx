import styles from "../styles/userForm.module.css";

export default function UserForm({ handleChange, finalDestination }) {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.form__heading}>I want to go somewhere...</h1>

        <div className={styles.formgroup__options}>
          <div className={styles.formgroup__temp}>
            <h3 className={styles.option__heading}>Temperature</h3>
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
            <h3 className={styles.option__heading}>Distance</h3>
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
            <h3 className={styles.option__heading}>Cost</h3>
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
      </div>
    </>
  );
}
