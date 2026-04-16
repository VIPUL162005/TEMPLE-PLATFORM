import React from 'react';

function OtherServices() {
  const serviceRowClass = "flex flex-col min-[1100px]:flex-row items-center justify-between gap-[40px] min-[1100px]:gap-[100px] mb-[80px] min-[1100px]:mb-[150px] max-w-[1358px] mx-auto text-center min-[1100px]:text-left last:mb-0";
  const serviceRowReverseClass = "flex flex-col min-[1100px]:flex-row-reverse items-center justify-between gap-[40px] min-[1100px]:gap-[100px] mb-[80px] min-[1100px]:mb-[150px] max-w-[1358px] mx-auto text-center min-[1100px]:text-left last:mb-0";
  const textAreaClass = "flex-[1]";
  const titleClass = "font-heading text-[36px] text-[#C23632] mb-[24px] mx-auto min-[1100px]:mx-0";
  const textClass = "font-times text-[24px] leading-[1.4] text-[#333333] max-w-[600px] mx-auto min-[1100px]:mx-0";
  const imageAreaClass = "flex-[1] flex justify-center w-full";
  const imgBoxClass = "w-[90%] min-[1100px]:w-full max-w-[580px] h-[280px] min-[1100px]:h-[340px] rounded-[40px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)]";

  return (
    <section className="py-[100px] bg-[#F7F4EA]">
      <div className="w-full px-[20px]">
        
        <div className={serviceRowClass}>
          <div className={textAreaClass}>
            <h3 className={titleClass}>Our Sponsor</h3>
            <p className={textClass}>Looking to support the temple? One of the best ways to do so is by sponsoring events, festivals
              or Poojas at the temple. Every dollar that you choose to spend for supporting your temple is TAX
              DEDCUTIBLE!</p>
          </div>
          <div className={imageAreaClass}>
            <div className={imgBoxClass}>
              <img src="/assets/Image1.svg" alt="Conch Shell" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className={serviceRowReverseClass}>
          <div className={textAreaClass}>
            <h3 className={titleClass}>Membership</h3>
            <p className={textClass}>Anyone who's willing to accept the objectives laid out by the society is eligible to become a
              member. It is important for a member to be in good standing, as he/she is eligible to be on the
              board, as well as having voting rights.</p>
          </div>
          <div className={imageAreaClass}>
            <div className={imgBoxClass}>
              <img src="/assets/Image 2.svg" alt="Membership Group" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className={serviceRowClass}>
          <div className={textAreaClass}>
            <h3 className={titleClass}>Temple Schedule Calender</h3>
            <p className={textClass}>The temple is also available for Birthdays, Weddings, Havan, Anniversaries, Mundan, Pooja and
              much more.</p>
          </div>
          <div className={imageAreaClass}>
            <div className={imgBoxClass}>
              <img src="/assets/Image3.svg" alt="Temple Schedule" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className={serviceRowReverseClass}>
          <div className={textAreaClass}>
            <h3 className={titleClass}>Festival Donation</h3>
            <p className={textClass}>Looking to support our upcoming festivals? You can contribute through donations that help us
              celebrate our traditions with the entire community. Every contribution matters!</p>
          </div>
          <div className={imageAreaClass}>
            <div className={imgBoxClass}>
              <img src="/assets/Image 4.svg" alt="Festival Donations" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default OtherServices;
