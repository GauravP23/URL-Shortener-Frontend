
const Service = ({ iconSrc, title, description }) => (
    <div className="w-80 shadow-xl bg-indigo-500 h-auto border-2 border-white-400 rounded-2xl p-2">
      <img src={iconSrc} alt="" />
      <p className="text-2xl pl-4 pt-4">{title}</p>
      <p className="text-md p-4">{description}</p>
    </div>
  );
  
  const ServiceList = () => {
    const services = [
      {
        iconSrc: "/services-icon1.svg",
        title: "Smart Targeting",
        description: "Target your customers to increase your reach and redirect them to a relevant page. Add a pixel to retarget them in your social media ad campaign to capture them."
      },
      {
        iconSrc: "/services-icon2.svg",
        title: "In-Depth Analytics",
        description: "Share your links to your network and measure data to optimize your marketing campaign's performance. Reach an audience that fits your needs."
      },
      {
        iconSrc: "/services-icon3.svg",
        title: "Digital Experience",
        description: "Use various powerful tools increase conversion and provide a non-intrusive experience to your customers without disengaging them."
      }
    ];
  
    return (
      <div className="p-8 flex justify-center gap-8">
        {services.map((service, index) => (
          <Service
            key={index}
            iconSrc={service.iconSrc}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    );
  };
  
  export default ServiceList;