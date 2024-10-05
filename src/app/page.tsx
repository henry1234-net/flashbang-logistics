import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <span> Flashbang Logistics Delivery Tracker </span>
        <ul className="flex flex-col md:flex-row items-center justify-center process-container">
          <li className="process-one">Order confirmed</li>
          <li className="process-two">On the way</li>
          <li className="process-three">Delivered</li>
        </ul>
      </div>
    </div>
  );
}
