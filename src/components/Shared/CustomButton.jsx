import PropTypes from "prop-types";

const CustomButton = ({ bgColor, btnName, children }) => {
    const btnStyle = {
        backgroundColor: bgColor || "blue",
        padding: "18px 20px", // Fixed syntax and removed duplicate "(property) padding: string"
        border: "none",
        borderRadius: "5px"
    };

    return (
        <button style={btnStyle}>{children || btnName}</button>
    );
};

CustomButton.propTypes = {
    bgColor: PropTypes.string,
    btnName: PropTypes.string, // Added propType for btnName
    children: PropTypes.node // Changed to PropTypes.node for any valid React node
};

export default CustomButton;
