import React from 'react';

const Feature = ({ imgSrc, category, title, description, list }) => (
  <div className="flex w-1/2 m-auto gap-8">
    <div className="w-1/2 h-auto">
      <img src={imgSrc} alt="" />
    </div>
    <div className="w-1/2">
      <p className="mb-2 text-sm text-pink-800 font-semibold rounded-2xl inline-block p-2 bg-pink-100">{category}</p>
      <p className="my-2 text-4xl text-bold">{title}</p>
      <p className="my-2 text-xl text-white">{description}</p>
      <ul className="my-4 text-xl text-white grid gap-2">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

const FeatureList = () => {
  const features = [
    {
      imgSrc: "/feature-standard-img.svg",
      category: "Sales & Marketing",
      title: "Perfect for Sales & Marketing",
      description: "Understanding your users and customers will help you increase your conversion. Our system allows you to track everything. Whether it is the amount of clicks, the country or the referrer, the data is there for you to analyze it.",
      list: ["Redirection Tools", "Powerful Statistics", "Beautiful Profiles"]
    },
    {
      imgSrc: "/feature-sales-marketing.svg",
      category: "Sales & Marketing",
      title: "Powerful Tools that Work",
      description: "Our product lets your target your users to better understand their behavior and provide them a better overall experience through smart re-targeting. We provide you many powerful tools to reach them better.",
      list: ["Redirection Tools", "Powerful Statistics", "Beautiful Profiles"]
    },
    {
      imgSrc: "/feature-sales-marketing-2.svg",
      category: "QR Codes",
      title: "QR Codes",
      description: "Easy to use, dynamic and customizable QR codes for your marketing campaigns. Analyze statistics and optimize your marketing strategy and increase engagement.",
      list: []
    }
  ];

  return (
    <>
      {features.map((feature, index) => (
        <Feature
          key={index}
          imgSrc={feature.imgSrc}
          category={feature.category}
          title={feature.title}
          description={feature.description}
          list={feature.list}
        />
      ))}
    </>
  );
};

export default FeatureList;
