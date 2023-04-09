import React from 'react'
import styles, { layout } from "../../../utility/style";

const Contact = () => {

  return (
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Contact Us
      </h2>
      <p className={`${styles.paragraph} max-w-[470px]`}>
      Do you have something to say?
      </p>



      <div className="flex flex-row flex-wrap w-full mt-10 ">
      <form method='post' class="w-full">
        <div className="flex flex-wrap w-full">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-3" htmlFor="name">
            Name
          </label>
          <input className="appearance-none block w-full text-gray-700 border-white border border-b-gray-400  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-orange-500" type="text" id="name" required/>
          </div>

          <div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-3" htmlFor="email">
            Email
          </label>
          <input  className="appearance-none block w-full text-gray-700 border-white border border-b-gray-400  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-b-orange-500" type="email" id="email" required />
          </div>
          <div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-3" htmlFor="message">
            Message
          </label>
          <textarea className=" no-resize appearance-none block w-full  text-gray-700 border border-white border-b-gray-400  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 h-48 resize-none" id="message" required />
          </div>
          <button  className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] btn_main text-primary outline-none mt-10`}>
          Contact Us
         </button>
      </form>
      </div>
    </div>
  )
}
export default Contact
