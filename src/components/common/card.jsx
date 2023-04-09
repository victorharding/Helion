
const Card = ({title, content,link }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 card">
    <h4 className="font-poppins font-semibold text-[30px] leading-[32px] text-black">
        {title}
    </h4>
    <div className="flex flex-row">
      <div className="flex flex-col ml-4">
        <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-black my-10">
            {content}
        </p>
      </div>
    </div>
    <div className="flex flex-row al ">
      <div className="flex flex-col ml-4">
        <a href = {link}>
          <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-black hover:text-secondary cursor-pointer ">
            Learn More
        </p>
        </a>
    
        
      </div>
      <div className="flex flex-col ml-2 mt-2.5">
      <img src="/assets/arrow-left.svg" alt="arrow" className="sm:w-[7px] w-[7px] object-contain" />
      </div>
    </div>
  </div>
);


export default Card;