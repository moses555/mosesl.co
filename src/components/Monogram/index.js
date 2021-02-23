import classNames from 'classnames';
import { useId } from 'hooks';
import './index.css';

function Monogram({ highlight, className, ...props }) {
  const id = useId();
  const linearId = `linear-${id}`;
  const clipId = `monogram-clip-${id}`;

  return (
<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M20.2104 31.4094L17.9428 24.679V21.5637L12.0793 14.5612L6.91053 12.7953C4.07049 11.8235 1.67506 10.9961 1.5917 10.9572C1.32492 10.8184 1.04703 10.5352 0.913644 10.2742C0.785814 10.0243 -0.0478594 6.78682 0.00216099 6.74239C0.0132766 6.72573 3.06452 7.73085 6.77714 8.96365L13.5243 11.2127L18.0317 15.7163L19.5824 15.6829L20.2382 12.1456L19.2489 11.1571H20.8106C21.6665 11.1571 23.1672 11.1738 24.1398 11.196L25.9072 11.2293L26.4518 12.3455L26.9909 13.4617L25.8071 13.4783L24.6233 13.4895L24.9901 14.6001L25.3625 15.7107H26.9743L31.4761 11.2127L38.2233 8.96365C41.9359 7.73085 44.9872 6.72573 44.9983 6.74239C45.0427 6.78126 44.2202 10.0076 44.1146 10.2187C43.9645 10.5185 43.7478 10.7518 43.4865 10.9017C43.3643 10.9739 40.9355 11.8291 38.0899 12.8009L32.9211 14.5612L29.9922 18.0652L27.0576 21.5637V24.679L24.8012 31.3706C23.5562 35.0523 22.5224 38.0787 22.5058 38.101C22.4891 38.1232 21.4553 35.1078 20.2104 31.4094Z" fill="url(#paint0_linear)"/>
<path d="M20.2104 31.4094L17.9428 24.679V21.5637L12.0793 14.5612L6.91053 12.7953C4.07049 11.8235 1.67506 10.9961 1.5917 10.9572C1.32492 10.8184 1.04703 10.5352 0.913644 10.2742C0.785814 10.0243 -0.0478594 6.78682 0.00216099 6.74239C0.0132766 6.72573 3.06452 7.73085 6.77714 8.96365L13.5243 11.2127L18.0317 15.7163L19.5824 15.6829L20.2382 12.1456L19.2489 11.1571H20.8106C21.6665 11.1571 23.1672 11.1738 24.1398 11.196L25.9072 11.2293L26.4518 12.3455L26.9909 13.4617L25.8071 13.4783L24.6233 13.4895L24.9901 14.6001L25.3625 15.7107H26.9743L31.4761 11.2127L38.2233 8.96365C41.9359 7.73085 44.9872 6.72573 44.9983 6.74239C45.0427 6.78126 44.2202 10.0076 44.1146 10.2187C43.9645 10.5185 43.7478 10.7518 43.4865 10.9017C43.3643 10.9739 40.9355 11.8291 38.0899 12.8009L32.9211 14.5612L29.9922 18.0652L27.0576 21.5637V24.679L24.8012 31.3706C23.5562 35.0523 22.5224 38.0787 22.5058 38.101C22.4891 38.1232 21.4553 35.1078 20.2104 31.4094Z" fill="url(#paint1_linear)"/>
<path d="M17.4529 35.676C15.3559 34.6039 13.6411 33.7105 13.6411 33.6938C13.6411 33.61 17.5348 25.6643 17.5512 25.7146C17.5675 25.7648 21.21 37.1948 21.3083 37.5131C21.3301 37.5801 21.3301 37.6359 21.3028 37.6303C21.281 37.6303 19.5444 36.7537 17.4529 35.676Z" fill="url(#paint2_linear)"/>
<path d="M17.4529 35.676C15.3559 34.6039 13.6411 33.7105 13.6411 33.6938C13.6411 33.61 17.5348 25.6643 17.5512 25.7146C17.5675 25.7648 21.21 37.1948 21.3083 37.5131C21.3301 37.5801 21.3301 37.6359 21.3028 37.6303C21.281 37.6303 19.5444 36.7537 17.4529 35.676Z" fill="url(#paint3_linear)"/>
<path d="M23.5192 37.6083C23.5192 37.5971 24.4033 34.9343 25.4877 31.6953C26.5665 28.4507 27.4618 25.7599 27.4785 25.7151C27.4952 25.6704 28.4072 27.4437 29.5138 29.6646L31.5157 33.698L27.5619 35.6671C25.3821 36.7468 23.5859 37.6307 23.5637 37.6307C23.5359 37.6307 23.5192 37.6195 23.5192 37.6083Z" fill="url(#paint4_linear)"/>
<path d="M23.5192 37.6083C23.5192 37.5971 24.4033 34.9343 25.4877 31.6953C26.5665 28.4507 27.4618 25.7599 27.4785 25.7151C27.4952 25.6704 28.4072 27.4437 29.5138 29.6646L31.5157 33.698L27.5619 35.6671C25.3821 36.7468 23.5859 37.6307 23.5637 37.6307C23.5359 37.6307 23.5192 37.6195 23.5192 37.6083Z" fill="url(#paint5_linear)"/>
<path d="M8.84465 22.627C5.75446 21.222 4.0699 20.4303 3.93317 20.3133C3.55578 19.9899 3.47374 19.7948 3.12918 18.4121C2.95416 17.6984 2.81195 17.1019 2.82289 17.0907C2.83383 17.0796 6.12091 18.1556 10.1245 19.4825L17.4042 21.8967V24.7736L15.479 24.768H13.5483L8.84465 22.627Z" fill="url(#paint6_linear)"/>
<path d="M8.84465 22.627C5.75446 21.222 4.0699 20.4303 3.93317 20.3133C3.55578 19.9899 3.47374 19.7948 3.12918 18.4121C2.95416 17.6984 2.81195 17.1019 2.82289 17.0907C2.83383 17.0796 6.12091 18.1556 10.1245 19.4825L17.4042 21.8967V24.7736L15.479 24.768H13.5483L8.84465 22.627Z" fill="url(#paint7_linear)"/>
<path d="M27.7526 21.8967L35.0323 19.4825C39.0359 18.1556 42.323 17.0796 42.3339 17.0907C42.3448 17.1019 42.2026 17.6984 42.0276 18.4121C41.6831 19.7948 41.601 19.9899 41.2236 20.3133C41.0869 20.4303 39.4078 21.222 36.2903 22.6326L31.5702 24.7736H27.7526V21.8967Z" fill="url(#paint8_linear)"/>
<path d="M27.7526 21.8967L35.0323 19.4825C39.0359 18.1556 42.323 17.0796 42.3339 17.0907C42.3448 17.1019 42.2026 17.6984 42.0276 18.4121C41.6831 19.7948 41.601 19.9899 41.2236 20.3133C41.0869 20.4303 39.4078 21.222 36.2903 22.6326L31.5702 24.7736H27.7526V21.8967Z" fill="url(#paint9_linear)"/>
<path d="M11.337 19.2693C8.35615 18.3171 5.2702 17.3269 4.47383 17.0712C2.85343 16.5543 2.65433 16.4401 2.38334 15.8851C2.25615 15.624 1.22196 11.6903 1.25515 11.6033C1.26621 11.5815 3.6498 12.365 6.55325 13.3389L11.8348 15.118L14.2018 17.9145C16.3807 20.4934 16.8232 21.0212 16.7734 21.0103C16.7623 21.0103 14.3179 20.2269 11.337 19.2693Z" fill="url(#paint10_linear)"/>
<path d="M11.337 19.2693C8.35615 18.3171 5.2702 17.3269 4.47383 17.0712C2.85343 16.5543 2.65433 16.4401 2.38334 15.8851C2.25615 15.624 1.22196 11.6903 1.25515 11.6033C1.26621 11.5815 3.6498 12.365 6.55325 13.3389L11.8348 15.118L14.2018 17.9145C16.3807 20.4934 16.8232 21.0212 16.7734 21.0103C16.7623 21.0103 14.3179 20.2269 11.337 19.2693Z" fill="url(#paint11_linear)"/>
<path d="M28.4838 20.8639C28.544 20.7879 29.6438 19.4634 30.9352 17.9271L33.2772 15.1368L38.5028 13.3617C41.3756 12.3846 43.734 11.5974 43.7449 11.6028C43.7777 11.63 42.7107 15.772 42.6286 15.924C42.4918 16.19 42.2183 16.4614 41.9556 16.5917C41.7477 16.6948 38.5138 17.7479 29.0255 20.8042L28.3798 21.0105L28.4838 20.8639Z" fill="url(#paint12_linear)"/>
<path d="M28.4838 20.8639C28.544 20.7879 29.6438 19.4634 30.9352 17.9271L33.2772 15.1368L38.5028 13.3617C41.3756 12.3846 43.734 11.5974 43.7449 11.6028C43.7777 11.63 42.7107 15.772 42.6286 15.924C42.4918 16.19 42.2183 16.4614 41.9556 16.5917C41.7477 16.6948 38.5138 17.7479 29.0255 20.8042L28.3798 21.0105L28.4838 20.8639Z" fill="url(#paint13_linear)"/>
</g>
<defs>
<linearGradient id="paint0_linear" x1="22.5" y1="6.74219" x2="22.5" y2="38.1011" gradientUnits="userSpaceOnUse">
<stop stop-color="#F6D264"/>
<stop offset="0.854167" stop-color="#BF7B2C"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="22.5" y1="6.74219" x2="22.5" y2="38.1011" gradientUnits="userSpaceOnUse">
<stop stop-color="#BF7B2C"/>
<stop offset="1" stop-color="#F6D264" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="22.5" y1="6.74218" x2="22.5" y2="38.1011" gradientUnits="userSpaceOnUse">
<stop stop-color="#F6D264"/>
<stop offset="0.854167" stop-color="#BF7B2C"/>
</linearGradient>
<linearGradient id="paint3_linear" x1="22.5" y1="6.74218" x2="22.5" y2="38.1011" gradientUnits="userSpaceOnUse">
<stop stop-color="#BF7B2C"/>
<stop offset="1" stop-color="#F6D264" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint4_linear" x1="22.5" y1="6.74218" x2="22.5" y2="38.1011" gradientUnits="userSpaceOnUse">
<stop stop-color="#F6D264"/>
<stop offset="0.854167" stop-color="#BF7B2C"/>
</linearGradient>
<linearGradient id="paint5_linear" x1="22.5" y1="6.74218" x2="22.5" y2="38.1011" gradientUnits="userSpaceOnUse">
<stop stop-color="#BF7B2C"/>
<stop offset="1" stop-color="#F6D264" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint6_linear" x1="22.5" y1="6.74218" x2="22.5" y2="38.1011" gradientUnits="userSpaceOnUse">
<stop stop-color="#F6D264"/>
<stop offset="0.854167" stop-color="#BF7B2C"/>
</linearGradient>
<linearGradient id="paint7_linear" x1="22.5" y1="6.74218" x2="22.5" y2="38.1011" gradientUnits="userSpaceOnUse">
<stop stop-color="#BF7B2C"/>
<stop offset="1" stop-color="#F6D264" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint8_linear" x1="22.5" y1="6.74218" x2="22.5" y2="38.1011" gradientUnits="userSpaceOnUse">
<stop stop-color="#F6D264"/>
<stop offset="0.854167" stop-color="#BF7B2C"/>
</linearGradient>
<linearGradient id="paint9_linear" x1="22.5" y1="6.74218" x2="22.5" y2="38.1011" gradientUnits="userSpaceOnUse">
<stop stop-color="#BF7B2C"/>
<stop offset="1" stop-color="#F6D264" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint10_linear" x1="22.5" y1="6.74218" x2="22.5" y2="38.1011" gradientUnits="userSpaceOnUse">
<stop stop-color="#F6D264"/>
<stop offset="0.854167" stop-color="#BF7B2C"/>
</linearGradient>
<linearGradient id="paint11_linear" x1="22.5" y1="6.74218" x2="22.5" y2="38.1011" gradientUnits="userSpaceOnUse">
<stop stop-color="#BF7B2C"/>
<stop offset="1" stop-color="#F6D264" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint12_linear" x1="22.5" y1="6.7422" x2="22.5" y2="38.1011" gradientUnits="userSpaceOnUse">
<stop stop-color="#F6D264"/>
<stop offset="0.854167" stop-color="#BF7B2C"/>
</linearGradient>
<linearGradient id="paint13_linear" x1="22.5" y1="6.7422" x2="22.5" y2="38.1011" gradientUnits="userSpaceOnUse">
<stop stop-color="#BF7B2C"/>
<stop offset="1" stop-color="#F6D264" stop-opacity="0"/>
</linearGradient>
<clipPath id="clip0">
<rect width="45" height="45" fill="white"/>
</clipPath>
</defs>
</svg>
  );
}

export default Monogram;
