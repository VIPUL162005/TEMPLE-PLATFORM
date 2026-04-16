import React from 'react';

function EventsDetail() {
  return (
    <section className="py-[60px] pb-[100px] relative bg-[#F7F4EA] z-10">
      <div className="w-full max-w-[1400px] mx-auto px-[5%]">
        <div className="grid grid-cols-1 min-[1100px]:grid-cols-[minmax(auto,480px)_minmax(auto,805px)] justify-between gap-[40px] min-[1100px]:gap-[60px] items-stretch">
          
          <div className="flex flex-col bg-[linear-gradient(to_bottom,transparent_88.77px,rgba(245,226,152,0.3)_88.77px)] rounded-none">
            <div className="text-center rounded-none mb-[32px] bg-[linear-gradient(180deg,#F5E298_0%,#F3A40C_100%)] h-[88.77px] flex justify-center items-center p-0 border-none">
              <h3 className="font-times text-[32px] m-0 text-[#C23632]">Regular Events</h3>
            </div>

            <div className="bg-[#ffffff] pt-[25px] px-[20px] pb-[15px] mx-auto mb-[20px] max-w-[480px] border-[2px] border-[#C23632] rounded-none mt-0 mb-[69px]">
              <h4 className="text-[#C23632] text-[28px] mb-[13px] font-semibold">Daily Schedule</h4>
              <p className="mb-[13px] text-[#000000] text-[24px] font-medium leading-normal">Morning Aarti at 8 am</p>
              <p className="mb-0 text-[#000000] text-[24px] font-medium leading-normal">Evening Aarti at 7 Pm</p>
            </div>

            <div className="bg-[#ffffff] pt-[25px] px-[8px] pb-[15px] mx-auto mb-0 max-w-[480px] border-[2px] border-[#C23632] rounded-none">
              <h4 className="text-[#C23632] text-[28px] mb-[32px] ml-[12px] font-semibold">Weekly Schedule</h4>

              <div className="border-[3px] border-dotted border-[#F3A40C] pt-[24px] px-[10px] pb-[63px]">
                <div className="mb-[20px]">
                  <h5 className="text-[#000000] text-[26px] mb-[14px] font-body font-semibold">Every Monday</h5>
                  <p className="mb-[21px] text-[rgba(0,0,0,0.5)] text-[24px] font-medium leading-normal last:mb-0">Shiva Abhishek at 7:30 pm</p>
                </div>
                <hr className="border-none border-t-[3px] border-dotted border-[#F3A40C] my-[25px]" />

                <div className="mb-[20px]">
                  <h5 className="text-[#000000] text-[26px] mb-[14px] font-body font-semibold">Every Tuesday</h5>
                  <p className="mb-[21px] text-[rgba(0,0,0,0.5)] text-[24px] font-medium leading-normal last:mb-0">Hanuman Chalisa and Kirtan at 7 pm</p>
                  <p className="mb-[21px] text-[rgba(0,0,0,0.5)] text-[24px] font-medium leading-normal last:mb-0">Preeti Bhajan after 7 pm</p>
                </div>
                <hr className="border-none border-t-[3px] border-dotted border-[#F3A40C] my-[25px]" />

                <div className="mb-[20px]">
                  <h5 className="text-[#000000] text-[26px] mb-[14px] font-body font-semibold">Every Sunday</h5>
                  <p className="mb-[21px] text-[rgba(0,0,0,0.5)] text-[24px] font-medium leading-normal last:mb-0">Bhajan Kirtan Katha and Parvachan at 10:30 am</p>
                  <p className="mb-[21px] text-[rgba(0,0,0,0.5)] text-[24px] font-medium leading-normal last:mb-0">Preeti Bhajan after 12 pm</p>
                </div>
              </div>
            </div>
          </div>

          <div id="upcoming-events" className="flex flex-col">
            <div className="text-left p-0 mb-[32px] bg-none min-h-[88.77px] flex items-center">
              <h3 className="font-times text-[32px] m-0 text-[#C23632]">Upcoming Events</h3>
            </div>

            <div className="grid grid-cols-1 min-[768px]:grid-cols-2 gap-[40px] min-[1100px]:gap-y-[40px] min-[1100px]:gap-x-[75px] justify-items-center min-[1100px]:justify-between mb-[20px]">
              {[ 
                { src: '/assets/Hanuman Image.svg', alt: 'Hanuman Jayanti', title: 'Hanuman Jayanti', date: 'Saturday 16,April', url: 'https://en.wikipedia.org/wiki/Hanuman_Jayanti' },
                { src: '/assets/Ganajesh ji image.svg', alt: 'Vikata Sankashti', title: 'Vikata Sankashti', date: 'Tuesday 19,April', url: 'https://en.wikipedia.org/wiki/Sankashti_Chaturthi' },
                { src: '/assets/Mata Image.svg', alt: 'Mata Ki Chowki', title: 'Mata Ki Chowki', date: 'Tuesday 3,May', url: 'https://en.wikipedia.org/wiki/Navaratri' },
                { src: '/assets/Staynaran image.svg', alt: 'Poornima Satsang', title: 'Poornima Satsang', date: 'Sunday 24,April', url: 'https://en.wikipedia.org/wiki/Purnima' }
              ].map((event, index) => (
                <div key={index} className="bg-[#ffffff] rounded-[20px] overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col w-full min-[1100px]:w-[365px] h-auto min-[1100px]:h-[440px] hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:-translate-y-[4px]">
                  <img src={event.src} alt={event.alt} className="w-full h-[265.25px] object-cover scale-[1.26] origin-[center_30%] border-b-none" />
                  <div className="p-[30px] flex flex-col items-start flex-[1]">
                    <h4 className="text-[24px] font-body font-medium text-[#33343E] mb-[5px]">{event.title}</h4>
                    <p className="font-poppins text-[18px] font-normal leading-[1.6] text-[#666666] mb-[20px]">{event.date}</p>
                    <a href={event.url} target="_blank" rel="noopener noreferrer" className="bg-[#FFA701] text-[#33343E] w-[88px] h-[37px] flex justify-center items-center rounded-[6px] text-[14px] font-semibold transition-all duration-300 mt-auto no-underline hover:bg-[#F3A40C]">More info</a>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end mt-auto pt-[20px]">
              <a href="#" className="flex justify-center items-center w-full min-[480px]:w-[230px] h-[75px] p-0 bg-[#F3A40C] border-[4px] border-[#800000] rounded-[10px] text-[#000000] font-rosario font-bold text-[18px] min-[480px]:text-[24px] tracking-[-0.01em] uppercase transition-all duration-300 no-underline hover:bg-[#e69600] hover:-translate-y-[2px]">MORE EVENTS</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default EventsDetail;
