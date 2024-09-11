import React from 'react';

const Ourteam = () => {
  return (
    <div className="p-10 mx-auto" id='aboutus'>
      <h1 className="font-nohemi text-6xl mb-8 mt-12">Our Team</h1>
      <div className="flex flex-col justify-center items-center h-auto space-y-6 tracking-wide">
        <div className="md:h-auto flex flex-row w-full">
          <div className="flex flex-col lg:flex-row justify-center items-center w-full space-y-4 lg:space-x-4">
            <div className="w-full md:w-1/3 h-auto bg-[#FAE9DA] flex flex-col items-center rounded-xl shadow-md mt-4">
              <img src="/profiles/avai.png" alt="Team Member" className="rounded-full w-40 h-40 mb-4 mt-4" />
              <p className="font-bold font-nohemi">Saiprasad Pandilwar </p>
              <p className="italic font-nohemi">Founder</p>
              <a href="https://www.linkedin.com/in/saiprasadpandilwar/" target="_blank" rel="noopener noreferrer">
                <img src="/socials/linkedin.svg" alt="LinkedIn" className="w-6 h-6 mt-4 mb-4" />
              </a>
            </div>
            <div className="w-full md:w-1/3 h-auto bg-[#FAE9DA] flex flex-col items-center rounded-xl shadow-md">
              <img src="/profiles/manan.png" alt="Team Member" className="rounded-full w-40 h-40 mb-4 mt-4" />
              <p className="font-bold font-nohemi">Manan Vyas</p>
              <p className="italic font-nohemi">Co-founder</p>
              <a href="https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav" target="_blank" rel="noopener noreferrer">
                <img src="/socials/linkedin.svg" alt="LinkedIn" className="w-6 h-6 mt-4 mb-4" />
              </a>
            </div>
            <div className="w-full md:w-1/3 h-auto bg-[#FAE9DA] flex flex-col items-center rounded-xl shadow-md">
              <img src="/profiles/Kunal.jpg" alt="Team Member" className="rounded-full w-40 h-40 mb-4 mt-4" />
              <p className="font-bold font-nohemi">Kunal Sinha</p>
              <p className="italic font-nohemi">IOT Developer</p>
              <a href="https://www.linkedin.com/in/kunal-sinha-244044278/" target="_blank" rel="noopener noreferrer">
                <img src="/socials/linkedin.svg" alt="LinkedIn" className="w-6 h-6 mt-4 mb-4" />
              </a>
            </div>
            <div className="w-full md:w-1/3 h-auto bg-[#FAE9DA] flex flex-col items-center rounded-xl shadow-md">
              <img src="/profiles/ishti.png" alt="Team Member" className="rounded-full w-40 h-40 mb-4 mt-4" />
              <p className="font-bold font-nohemi">Ishti Chaudhary</p>
              <p className="italic font-nohemi">Frontend Developer</p>
              <a href="https://www.linkedin.com/in/ishti-chaudhary-672858208/" target="_blank" rel="noopener noreferrer">
                <img src="/socials/linkedin.svg" alt="LinkedIn" className="w-6 h-6 mt-4 mb-4" />
              </a>
            </div>
            <div className="w-full md:w-1/3 h-auto bg-[#FAE9DA] flex flex-col items-center rounded-xl shadow-md">
              <img src="/profiles/Dhanesh.jpeg" alt="Team Member" className="rounded-full w-40 h-40 mb-4 mt-4" />
              <p className="font-bold font-nohemi">Dhanesh Baheti</p>
              <p className="italic mb-2 font-nohemi">IOT Developer</p>
              <a href="https://www.linkedin.com/in/dhaneshbaheti/" target="_blank" rel="noopener noreferrer">
                <img src="/socials/linkedin.svg" alt="LinkedIn" className="w-6 h-6 mt-2 mb-4" />
              </a>
            </div>
            <div className="w-full md:w-1/3 h-auto bg-[#FAE9DA] flex flex-col items-center rounded-xl shadow-md">
              <img src="/profiles/Arunima.jpg" alt="Team Member" className="rounded-full w-40 h-40 mb-4 mt-4" />
              <p className="font-bold font-nohemi">Arunima Srivastava</p>
              <p className="italic font-nohemi">IOT Lead</p>
              <a href="https://www.linkedin.com/in/arunima-srivastava05/" target="_blank" rel="noopener noreferrer">
                <img src="/socials/linkedin.svg" alt="LinkedIn" className="w-6 h-6 mt-4 mb-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourteam;
