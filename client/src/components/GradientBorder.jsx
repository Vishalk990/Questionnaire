const GradientBorder = ({ children, title }) => {
  return (
    <div className="gradient-border-container">
      <div className="gradient-top">
        <h2 className="text-center font-semibold">{title}</h2>
      </div>
      <div className="content-area">{children}</div>
      <div className="gradient-bottom"></div>
      <style jsx>{`
        .gradient-border-container {
          border: 1px solid transparent;
          border-radius: 8px;
          background-image: linear-gradient(white, white),
            linear-gradient(to right, #a0c4e4, #4f8bc9, #a0c4e4);
          background-origin: border-box;
          background-clip: content-box, border-box;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
        }
        .gradient-top,
        .gradient-bottom {
          background: linear-gradient(to right, #a0c4e4, #4f8bc9, #a0c4e4);
          padding: 10px 20px;
          color: white;
        }
        .gradient-top h2 {
          margin: 0;
          font-size: 1.2em;
        }
        .content-area {
          padding: 20px;
          background: white;
          flex-grow: 1;
        }
        .gradient-bottom {
          height: 40px;
          padding: 0;
        }
      `}</style>
    </div>
  );
};

export default GradientBorder;
