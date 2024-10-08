import { SvgIcon } from "@mui/material";

const JsonSVG = () => {
  return (
    <SvgIcon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 511.91 511.91"
      >
        <defs>
          <style>
            {
              ".aJson,.bJson{fill-rule:evenodd;}.aJson{fill:url(#aJson);}.bJson{fill:url(#bJson);}"
            }
          </style>
          <linearGradient
            id="aJson"
            x1="-618.48"
            y1="44.12"
            x2="-257.43"
            y2="-316.98"
            gradientTransform="matrix(1, 0, 0, -1, 689.01, 124.49)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" />
            <stop offset="1" stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="bJson"
            x1="-241.08"
            y1="-300.63"
            x2="-602.13"
            y2="60.47"
            xlinkHref="#aJson"
          />
        </defs>
        <title>json</title>
        <path
          className="aJson"
          d="M255.66,381.14c113.26,154.39,224.09-43.09,223.93-161.85C479.4,78.88,337.08.41,255.57.41,124.74.41.14,108.54.14,256.48.14,420.92,143,512,255.57,512c-25.48-3.67-110.4-21.86-111.54-217.46-.77-132.28,43.15-185.13,111.36-161.88,1.52.56,75.23,29.64,75.23,124.62C330.62,351.85,255.66,381.14,255.66,381.14Z"
          transform="translate(-0.14 -0.09)"
        />
        <path
          className="bJson"
          d="M255.53,132.55C180.7,106.76,89,168.43,89,292c0,201.72,149.48,220,167.6,220,130.84,0,255.43-108.13,255.43-256.07C512.05,91.49,369.23.41,256.62.41c31.19-4.32,168.1,33.75,168.1,220.88,0,122-102.23,188.46-168.72,160.08-1.53-.57-75.23-29.65-75.23-124.62C180.77,162.17,255.53,132.55,255.53,132.55Z"
          transform="translate(-0.14 -0.09)"
        />
      </svg>
    </SvgIcon>
  );
};
export default JsonSVG;
