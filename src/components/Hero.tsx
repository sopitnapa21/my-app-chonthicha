import React from "react";

export default function Hero() {
  return (
    <div>
      <div className="hero  min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold">
              การวิเคราะห์ข้อมูลขนาดใหญ่สำหรับรัฐประศาสนศาสตร์
            </h1>
            <p className="py-6">
              หลักสูตรรัฐประสนศาสตร์ คณะศิลปะศาสตร์และวิทยาการจัดการ
              มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขยเฉลิมพระเกียรติ จังหวัดสกลนคร
            </p>
            <button className="btn btn-primary">
              <a href="/getapp">Get Started</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
