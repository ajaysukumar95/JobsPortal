export default function Jobscard({ data }) {
  return (
    <div className="grid grid-cols-4 gap-[3rem]">
      {data.map((value, index) => (
        <div
          key={index}
          className="max-w-sm rounded shadow-sm relative bg-white"
        >
          <img
            className="absolute object-cover h-14 w-14 left-6 -top-4 rounded-lg"
            src={value.image}
            alt="Card Image"
          />
          <div className="px-6 pt-[4rem]">
            <div className="pb-2">
              <span className="text-sm text-slate-400 mr-3">
                {value.postedTime}
              </span>
              <span className="text-sm text-slate-400">
                {" "}
                &middot; {value.jobType}
              </span>
            </div>
            <h5 className="font-bold pb-1">{value.jobTitle}r</h5>
            <span className="text-sm text-slate-400 mr-3">
              {value.jobDescription}
            </span>
          </div>
          <div className="px-6 pt-4 pb-5">
            <span className="text-sm mr-3 font-semibold text-blue-600">
              {value.jobLocation}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
