const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["Home", "About", "Work", "Skills", "Testimonials", "Contact"].map(
        (item, index) => [
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation"
            style={active === item ? { backGroundColor: "#313bac" } : {}}
          />,
        ]
      )}
    </div>
  );
};

export default NavigationDots;
