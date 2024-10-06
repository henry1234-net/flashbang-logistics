

export default function Home() {
  return (
    <div className="w-screen md:w-full h-screen overflow-x-hidden overflow-y-scroll flex flex-col place-items-center md:p-4 ">
      <span className="font-semibold text-2xl"> Logistics Delivery Management </span>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col w-1/2">
          <ul className="process-container">
            <li>
              <i className="icon"></i>
              <div className="process one active">
              1 
              </div>
              Order confirmed 
            </li>
            <li>
              <i className="icon"></i>
              <div className="process two">
              2  
              </div>
              On the way
            </li>
            <li>
              <i className="icon"></i>
              <div className="process three">
              3 
              </div>
              Delivered
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-1/2">
          <ul className="process-container">
            <li>
              <i className="icon"></i>
              <div className="process one active">
              1 
              </div>
              Order confirmed 
            </li>
            <li>
              <i className="icon"></i>
              <div className="process two">
              2  
              </div>
              On the way
            </li>
            <li>
              <i className="icon"></i>
              <div className="process three">
              3 
              </div>
              Delivered
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
