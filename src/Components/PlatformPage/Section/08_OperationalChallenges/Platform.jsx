import React from "react";
import v1 from "../../../../Assets/Components/PlatformPage/03_OperationalChallenges/v1.png";
import v2 from "../../../../Assets/Components/PlatformPage/03_OperationalChallenges/v2.png";
import v3 from "../../../../Assets/Components/PlatformPage/03_OperationalChallenges/v3.png";
import v4 from "../../../../Assets/Components/PlatformPage/03_OperationalChallenges/v4.png";
import v5 from "../../../../Assets/Components/PlatformPage/03_OperationalChallenges/v5.png";
import v6 from "../../../../Assets/Components/PlatformPage/03_OperationalChallenges/v6.png";

export const Platform = () => {
  return (
    <div className="bg-purple-50 p-8 rounded-2xl">
      <div className="grid gap-8">
        <div className="p-8 rounded-xl">
          <h2
            className="text-purple-800 mb-4 font-bold"
            style={{
              fontSize: "37px",
              fontWeight: "600px",
              justifyContent: "center",
            }}
          >
            <p>
              A suite of turnkey products to quickly unlock the value of data
              for
            </p>
            <p> solving everyday business & operational challenges</p>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {renderFeature(
              "Scalable Architecture",
              "Built on a scalable architecture to handle diverse datasets.",
              v3
            )}
            {renderFeature(
              "Predictive Analytics",
              "Harness the power of predictive analytics for informed decision-making.",
              v6
            )}
          </div>
        </div>
        <div className="p-8 rounded-xl">
          <div className="grid md:grid-cols-2 gap-8">
            {renderFeature(
              "Real-Time Insights",
              "Get real-time insights into your data for immediate actions.",
              v2
            )}
            {renderFeature(
              "User Interface",
              "User-friendly interface for seamless navigation and analysis.",
              v5
            )}
          </div>
        </div>
        <div className="p-8 rounded-xl">
          <div className="grid md:grid-cols-2 gap-8">
            {renderFeature(
              "Data Security",
              "Data is handled with the utmost care, and our AI solutions comply with the highest standards of security.",
              v1
            )}
            {renderFeature(
              "User-Centric Design",
              "Highly usable and accessible addressing organization's unique needs and abilities.",
              v4
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const renderFeature = (title, description, image) => (
  <div className="flex items-center">
    <div
      className="w-24 h-24 bg-contain bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
    <div className="ml-4">
      <h6 className="text-purple-800 font-bold">{title}</h6>
      <span className="text-gray-700">{description}</span>
    </div>
  </div>
);
