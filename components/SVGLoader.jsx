function SVGLoader() {
    return (<>
    <br/>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          margin: 'auto',
          background: '0 0',
        }}
        width={60}
        height={60}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        display="block"
      >
        <circle
          cx={50}
          cy={50}
          fill="none"
          stroke="currentColor"
          strokeWidth={10}
          r={35}
          strokeDasharray="164.93361431346415 56.97787143782138"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="0.3s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          />
        </circle>
      </svg>
      <div className='text-center text-sm mb-2'> Please Wait...</div>
      </>
    );
  }
  
  export default SVGLoader;
  