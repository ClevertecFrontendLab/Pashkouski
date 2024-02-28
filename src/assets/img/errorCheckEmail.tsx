import { SVGProps, Ref, forwardRef, memo } from "react"
const SvgComponent = (
    props: SVGProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>
) => (
    <svg  xmlns="http://www.w3.org/2000/svg"
          width={371}
          height={371}
          fill="none"
          ref={ref}
          {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M0.755005 127.8V125.69C0.755005 56.274 57.028 0 126.445 0H128.555C197.971 0 254.245 56.274 254.245 125.69V127.8C254.245 197.217 197.971 253.49 128.555 253.49H126.445C57.028 253.49 0.755005 197.217 0.755005 127.8Z" fill="#E4EBF7"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M40.744 131.707C40.6342 132.796 40.3112 133.853 39.7932 134.816C39.2752 135.78 38.5724 136.633 37.7249 137.325C36.8775 138.017 35.902 138.536 34.8542 138.851C33.8064 139.166 32.7067 139.272 31.618 139.162C30.5292 139.053 29.4728 138.73 28.5089 138.212C27.5451 137.694 26.6927 136.991 26.0004 136.143C25.3081 135.296 24.7896 134.321 24.4743 133.273C24.159 132.225 24.0532 131.125 24.163 130.036C24.3865 127.839 25.4732 125.821 27.1841 124.425C28.8951 123.028 31.0904 122.368 33.2877 122.59C35.4849 122.811 37.5044 123.896 38.9023 125.606C40.3003 127.315 40.9623 129.51 40.743 131.707" fill="white"/>
        <path d="M49.42 147.483L36.686 158.344M37.945 135.189L48.498 141.172L37.945 135.189Z" stroke="white" strokeWidth="2"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M40.865 160.415C40.7958 161.165 40.5787 161.895 40.2262 162.56C39.8738 163.226 39.3929 163.816 38.8115 164.295C38.23 164.774 37.5594 165.133 36.8384 165.352C36.1174 165.57 35.3603 165.644 34.6107 165.568C33.8611 165.493 33.1338 165.269 32.471 164.911C31.8081 164.553 31.2228 164.067 30.7487 163.482C30.2745 162.896 29.9211 162.223 29.7087 161.5C29.4962 160.777 29.4291 160.019 29.511 159.27C29.6748 157.774 30.4228 156.403 31.5924 155.456C32.762 154.509 34.2584 154.063 35.7557 154.214C37.253 154.365 38.6301 155.101 39.587 156.263C40.544 157.424 41.0033 158.917 40.865 160.415ZM58.698 144.199C58.6257 144.953 58.4051 145.684 58.0492 146.352C57.6932 147.02 57.2087 147.612 56.6237 148.092C56.0386 148.572 55.3644 148.932 54.6398 149.151C53.9152 149.37 53.1545 149.444 52.4014 149.368C51.6482 149.292 50.9175 149.068 50.2511 148.709C49.5848 148.35 48.9959 147.863 48.5184 147.275C48.0408 146.688 47.684 146.012 47.4684 145.287C47.2528 144.561 47.1827 143.8 47.262 143.047C47.4178 141.533 48.1679 140.142 49.3477 139.181C50.5276 138.219 52.0409 137.764 53.5554 137.917C55.0699 138.07 56.462 138.817 57.4261 139.995C58.3903 141.173 58.8477 142.685 58.698 144.2V144.199ZM100.411 27.0332L130.435 27.0202C131.042 27.02 131.642 26.9002 132.202 26.6679C132.763 26.4355 133.272 26.095 133.701 25.6659C134.129 25.2368 134.469 24.7275 134.701 24.167C134.933 23.6065 135.052 23.0058 135.052 22.3992C135.052 21.7927 134.932 21.1921 134.7 20.6318C134.467 20.0715 134.127 19.5624 133.698 19.1337C133.269 18.705 132.759 18.3649 132.199 18.1331C131.638 17.9012 131.038 17.782 130.431 17.7822L100.407 17.7952C99.1987 17.8209 98.0484 18.3191 97.2031 19.1829C96.3578 20.0468 95.8846 21.2075 95.8851 22.4162C95.8857 23.6248 96.3598 24.7852 97.2059 25.6483C98.052 26.5114 99.2026 27.0086 100.411 27.0332ZM111.895 45.4952L141.918 45.4822C142.533 45.4947 143.144 45.3845 143.715 45.1578C144.287 44.9312 144.807 44.5928 145.246 44.1624C145.685 43.732 146.034 43.2184 146.272 42.6515C146.51 42.0846 146.632 41.476 146.632 40.8612C146.632 40.2464 146.509 39.6378 146.27 39.0712C146.032 38.5045 145.683 37.9911 145.243 37.5612C144.804 37.1312 144.283 36.7932 143.711 36.5671C143.14 36.3409 142.529 36.2312 141.914 36.2442L111.89 36.2572C110.665 36.2578 109.49 36.7449 108.624 37.6115C107.759 38.4781 107.272 39.6532 107.273 40.8782C107.274 42.1033 107.761 43.2779 108.627 44.1438C109.494 45.0096 110.669 45.4958 111.894 45.4952" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M114.285 27.0197V27.0177L130.175 27.0107C128.95 27.0114 127.775 27.4987 126.91 28.3654C126.044 29.2321 125.558 30.4072 125.559 31.6322C125.559 32.8573 126.047 34.0319 126.913 34.8976C127.78 35.7634 128.955 36.2494 130.18 36.2487L114.288 36.2557V36.2537C115.496 36.2281 116.646 35.7301 117.491 34.8666C118.336 34.0031 118.809 32.8429 118.808 31.6348C118.807 30.4267 118.334 29.2668 117.488 28.4041C116.642 27.5413 115.492 27.0444 114.284 27.0197H114.285ZM150.922 69.6897H146.943C145.678 69.6858 144.466 69.1814 143.571 68.2867C142.677 67.3921 142.173 66.1798 142.169 64.9147C142.173 63.6497 142.677 62.4376 143.571 61.5431C144.466 60.6486 145.678 60.1444 146.943 60.1407H150.922C152.187 60.1444 153.399 60.6486 154.294 61.543C155.189 62.4375 155.693 63.6496 155.697 64.9147C155.693 66.18 155.189 67.3924 154.294 68.2871C153.4 69.1818 152.187 69.6861 150.922 69.6897Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M172.442 29.8333C172.442 13.4413 185.731 0.15332 202.123 0.15332C218.515 0.15332 231.803 13.4413 231.803 29.8333C231.803 46.2263 218.515 59.5143 202.123 59.5143C185.731 59.5143 172.443 46.2263 172.443 29.8343" fill="#FF603B"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M204.312 19.0337L203.636 34.0687C203.622 34.4605 203.456 34.8314 203.174 35.1036C202.892 35.3757 202.515 35.5277 202.123 35.5277C201.731 35.5277 201.354 35.3757 201.072 35.1036C200.79 34.8314 200.624 34.4605 200.61 34.0687L199.935 19.0337C199.924 18.7395 199.973 18.4461 200.078 18.1711C200.183 17.8961 200.342 17.6451 200.547 17.4331C200.751 17.2211 200.996 17.0524 201.267 16.9372C201.538 16.8221 201.829 16.7627 202.123 16.7627C202.418 16.7627 202.709 16.8221 202.98 16.9372C203.251 17.0524 203.496 17.2211 203.7 17.4331C203.905 17.6451 204.064 17.8961 204.169 18.1711C204.274 18.4461 204.323 18.7395 204.312 19.0337ZM204.048 38.4117C204.561 38.8887 204.818 39.5117 204.818 40.2817C204.818 41.0517 204.561 41.6747 204.048 42.1887C203.498 42.6647 202.838 42.9217 202.105 42.9217C201.757 42.928 201.412 42.8629 201.09 42.7305C200.769 42.598 200.477 42.4011 200.235 42.1517C199.685 41.6377 199.429 41.0157 199.429 40.2817C199.429 39.5117 199.685 38.8887 200.235 38.4117C200.748 37.8987 201.372 37.6787 202.105 37.6787C202.875 37.6787 203.535 37.8987 204.048 38.4117Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M120.055 132.874C124.481 132.276 123.667 131.67 124.134 128.096C124.809 122.916 121.026 111.161 115.872 102.978C114.784 92.2583 103.274 91.7383 103.274 91.7383C103.274 91.7383 107.586 96.6333 107.47 107.937C108.868 113.18 108.274 122.387 108.274 122.387C108.274 122.387 113.529 133.756 120.054 132.874" fill="#FFB594"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M101.699 91.2094C101.699 91.2094 103.162 90.6264 104.91 91.7914C112.99 93.1894 115.278 98.4973 116.21 103.159C118.074 104.441 118.074 105.489 118.074 106.655C118.439 107.432 119.589 109.685 119.589 109.685C119.589 109.685 112.364 111.433 108.635 116.443C107.236 110.033 101.699 91.2084 101.699 91.2084" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M94.763 90.0992L95.782 84.2842L86.5519 72.4102L81.319 77.9912L78.726 87.8542C78.726 87.8542 87.116 92.9822 94.763 90.1002" fill="#FFB594"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M83.6859 77.8148C83.6859 77.8148 79.1289 74.9468 81.2409 70.9228C82.8729 67.8158 85.7779 72.0618 85.7779 72.0618C85.7779 72.0618 86.3019 68.3998 88.9169 68.3998C89.4399 67.3538 90.4859 64.2158 90.4859 64.2158C90.4859 64.2158 101.993 66.8308 104.086 67.3538C104.085 72.5838 101.769 86.8828 96.2019 87.3228C87.2619 88.0288 83.6859 77.8148 83.6859 77.8148Z" fill="#FFC6A0"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M103.726 71.8425C106.342 69.7495 107.215 62.0675 107.215 62.0675C107.215 62.0675 104.723 61.5755 100.539 60.0055C95.8309 57.9135 87.672 55.2345 82.964 60.9875C73.424 65.3975 80.902 80.9175 80.902 80.9175L83.6309 77.8805C83.6309 77.8805 79.6749 74.5765 81.5389 71.6035C83.7219 68.1235 85.4819 72.6835 85.4819 72.6835C85.4819 72.6835 86.122 70.2835 89.082 69.3235C89.438 68.6095 90.1219 66.6335 90.5219 65.4515C90.6077 65.1967 90.7854 64.9831 91.0202 64.8523C91.2551 64.7216 91.5302 64.6831 91.792 64.7445C94.202 65.3045 100.515 66.7745 103.209 67.4205C103.733 67.5465 104.085 68.0395 104.034 68.5765L103.726 71.8425Z" fill="#520038"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M101.975 76.1128C101.871 76.7258 101.39 77.1568 100.899 77.0728C100.409 76.9908 100.094 76.4268 100.197 75.8128C100.301 75.1998 100.782 74.7688 101.273 74.8518C101.764 74.9348 102.078 75.4988 101.975 76.1118V76.1128ZM95.015 74.6728C94.911 75.2858 94.43 75.7168 93.939 75.6328C93.449 75.5508 93.134 74.9868 93.237 74.3728C93.341 73.7598 93.822 73.3288 94.313 73.4128C94.804 73.4948 95.118 74.0588 95.015 74.6728Z" fill="#552950"/>
        <path d="M99.9611 73.2432L99.0611 74.8632L98.7611 79.2432H96.5211" stroke="#DB836E" strokeWidth="1.063" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M100.681 72.8825C100.681 72.8825 102.481 72.1625 103.201 73.4225" stroke="#5C2552" strokeWidth="1.117" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M82.1219 72.6833C82.1219 72.6833 82.602 71.5633 83.242 71.9633C83.882 72.3633 84.5219 73.4033 83.8019 73.9633C83.0819 74.5233 83.962 75.6433 83.962 75.6433" stroke="#DB836E" strokeWidth="1.117" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M93.0811 71.3232C93.0811 71.3232 94.9211 72.4432 97.2411 72.2832" stroke="#5C2552" strokeWidth="1.117" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M84.442 79.6426C84.442 79.6426 86.228 86.1896 93.704 87.5966M93.481 80.2026C93.481 80.2026 95.721 81.4026 97.881 81.4026L93.481 80.2026ZM94.441 82.7626C94.441 82.7626 95.401 83.1626 95.961 83.0826L94.441 82.7626Z" stroke="#DB836E" strokeWidth="1.063" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M96.303 91.2622C96.303 91.2622 95.235 94.0832 88.005 93.3672C80.775 92.6502 77.715 88.3232 77.715 88.3232" stroke="#E4EBF7" strokeWidth="1.136" strokeLinecap="round" strokeLinejoin="round"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M78.881 87.0769C78.881 87.0769 85.407 92.0489 95.351 89.5629C95.351 89.5629 104.928 90.5829 106.887 94.8849C112.247 106.655 107.43 131.72 106.887 134.847C110.383 138.902 106.421 143.33 106.421 143.33C90.797 139.782 70.611 142.73 70.611 142.73C65.762 139.184 69.388 133.686 69.388 133.686L63.135 109.919C60.65 94.6919 63.968 90.1159 66.684 89.1759C69.714 88.1269 74.724 87.8939 74.724 87.8939C75.22 87.8359 75.804 87.8179 76.094 87.6609C78.454 86.3789 78.881 87.0779 78.881 87.0779" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M66.583 89.4092C66.583 89.4092 59.708 89.8742 58.993 97.5652C58.527 106.422 62.023 108.519 62.023 108.519C62.023 108.519 68.098 130.621 78.819 131.476C87.209 129.3 83.577 124.774 83.48 120.056C83.247 108.752 76.372 103.159 76.372 103.159C76.372 103.159 72.16 89.4092 66.583 89.4092Z" fill="#FFC6A0"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M72.4709 123.824C72.4709 123.824 73.3259 135.088 82.2989 130.31C87.0639 127.774 89.8799 116.482 92.0879 107.742C93.5439 101.974 94.6679 95.5449 94.6679 95.5449L89.6949 93.8359C89.6949 93.8359 87.2869 99.3519 81.9259 106.111C77.5909 111.578 72.7819 117.221 72.4709 123.824Z" fill="#FFC6A0"/>
        <path d="M109.218 104.79C109.218 104.79 110.965 107.514 106.887 135.325C109.263 137.541 107.94 141.337 106.654 142.835" stroke="#E4EBF7" strokeWidth="1.085" strokeLinecap="round" strokeLinejoin="round"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M124.017 131.126C124.017 131.126 123.59 133.858 112.247 133.107C97.06 132.101 86.921 129.857 86.921 129.857L87.854 124.057C87.854 124.057 88.577 124.272 97.564 123.989C109.451 123.616 116.278 117.919 122.528 122.967C126.567 126.23 124.017 131.127 124.017 131.127" fill="#FFC6A0"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M70.995 90.5731C70.995 90.5731 65.402 85.8341 59.941 93.2531C56.623 100.476 60.458 108.537 62.605 112.831C62.295 116.56 64.935 117.142 64.935 117.142C64.935 117.142 65.043 118.037 66.451 119.822C70.529 112.792 73.171 110.656 80.162 107.276C79.834 106.62 78.285 104.011 78.337 103.509C78.512 101.819 77.055 100.886 77.055 100.886C77.055 100.886 76.769 100.73 75.89 98.1481C75.102 95.8351 73.854 92.9711 70.995 90.5731Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M90.9871 287.626C90.9871 287.626 95.8421 289.934 99.3001 288.781C102.488 287.718 104.42 289.536 107.302 290.112C110.183 290.689 115.071 291.355 120.509 288.688C120.392 282.46 112.723 284.189 106.991 281.1C104.096 279.54 102.715 275.764 102.925 271.156H92.2991C92.2991 271.156 90.7261 283.046 90.9871 287.626Z" fill="#CBD1D1"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M90.962 287.432C90.962 287.432 93.707 288.869 98.601 288.17C102.057 287.676 101.824 288.83 106.019 289.452C110.214 290.073 119.111 289.258 120.353 288.326C120.819 289.568 119.965 290.656 119.965 290.656C119.965 290.656 118.256 291.338 114.527 291.588C112.232 291.742 106.429 291.864 104.387 290.967C102.367 289.413 99.493 289.452 98.327 290.733C93.9 291.808 91.143 290.423 91.143 290.423L90.962 287.432Z" fill="#2B0849"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M99.184 271.856H102.68C102.68 271.856 102.563 279.43 107.807 281.527C102.563 282.227 98.135 278.925 99.184 271.856Z" fill="#A4AABA"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M45.18 271.645C45.18 271.645 42.972 279.419 40.478 284.544C38.594 288.418 36.05 292.398 46.207 292.398C53.177 292.398 55.592 291.895 53.989 285.481C52.385 279.066 54.268 271.645 54.268 271.645H45.18Z" fill="#CBD1D1"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M38.821 289.876C38.821 289.876 41.019 291.101 45.775 291.101C52.151 291.101 54.421 289.371 54.421 289.371C54.421 289.371 55.051 290.539 53.772 291.641C52.732 292.538 50.002 293.309 46.027 293.262C41.68 293.212 39.912 292.669 38.965 292.038C38.101 291.461 38.245 290.381 38.821 289.876Z" fill="#2B0849"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M46.0989 273.64C46.0989 273.64 46.1339 275.232 45.7699 276.71C45.4049 278.2 44.6399 279.965 44.5859 281.05C44.5249 282.256 49.3409 282.707 49.9889 281.086C50.6389 279.464 51.3459 274.349 51.9949 273.484C52.6429 272.619 46.8549 271.262 46.0989 273.64Z" fill="#A4AABA"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M90.2309 277.169L104.13 277.264C104.13 277.264 105.479 220.621 106.055 210.355C106.631 200.088 109.978 165.303 107.097 144.77L94.0599 144.101L70.3229 144.911C70.3229 144.911 69.8709 149.031 69.0799 155.276C69.0149 155.791 68.3719 156.15 68.3029 156.693C68.2249 157.301 68.7419 158.1 68.6349 158.737C66.1799 173.364 62.8379 191.473 60.3789 205.574C60.2579 206.267 59.0969 206.622 58.8639 208.37C58.8219 208.684 59.0839 209.954 58.9799 210.235C51.8399 229.708 46.7779 262.836 43.3199 277.425L58.4959 277.41C58.4959 277.41 60.7779 267.265 62.6809 258.539C65.6029 245.15 86.693 170.219 86.693 170.219L89.8259 169.265L89.6679 217.833C89.6679 217.833 89.4349 219.115 90.0179 219.931C90.6009 220.746 89.437 221.098 89.61 222.262L90.0179 224.126C90.0179 224.126 89.5519 231.584 89.0859 236.478C88.6189 241.373 90.2309 277.168 90.2309 277.168" fill="#7BB2F9"/>
        <path d="M96.779 222.133C96.779 222.133 99.6599 220.981 103.119 218.099M65.325 218.48C66.522 218.579 69.5199 216.383 72.5499 213.353L65.325 218.48Z" stroke="#648BD8" strokeWidth="1.085" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M97.728 218.972C97.728 218.972 100.61 217.819 104.068 214.938" stroke="#648BD8" strokeWidth="1.032" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M44.9969 273.326H58.8249M63.9269 221.743C63.9269 221.743 66.6509 221.129 70.6859 218.247L63.9269 221.743ZM75.6579 145.765C75.3769 148.991 75.968 154.621 71.152 155.243L75.6579 145.765ZM93.9369 143.943C93.9369 143.943 94.0519 158.5 92.5929 159.593C90.2879 161.323 89.486 161.613 89.486 161.613L93.9369 143.943ZM89.9519 144.522C89.9519 144.522 90.2209 157.666 88.9419 169.61L89.9519 144.522ZM84.2799 170.309C84.2799 170.309 91.0899 169.258 93.3959 169.258L84.2799 170.309ZM46.7809 269.644L45.8889 274.182L46.7809 269.644ZM47.6919 262.888L46.8769 267.045L47.6919 262.888ZM63.4799 202.102C63.1499 203.72 63.3779 204.006 63.0309 205.54C63.0309 205.54 60.2749 207.443 60.7409 209.463C61.2069 211.483 60.4309 212.887 56.2359 226.715C54.4739 232.522 52.0029 245.637 50.0709 254.993C50.0409 255.137 49.5499 257.639 48.9309 260.793L63.4799 202.102ZM64.9129 193.735C64.6179 195.393 64.3129 197.045 63.9959 198.673L64.9129 193.735ZM72.0849 146.386L70.8409 157.263C70.8409 157.263 69.7009 157.418 70.3219 159.593C70.4389 160.992 67.5439 175.983 64.9399 191.208L72.0849 146.386Z" stroke="#648BD8" strokeWidth="1.085" strokeLinecap="round" strokeLinejoin="round"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M106.935 141.716C103.907 141.227 88.11 138.972 70.716 141.916C70.5661 141.942 70.4307 142.021 70.3354 142.14C70.24 142.259 70.1912 142.408 70.198 142.56C70.261 143.867 70.242 144.903 70.213 145.555C70.209 145.646 70.2255 145.738 70.2612 145.822C70.2969 145.907 70.3511 145.982 70.4197 146.043C70.4883 146.104 70.5696 146.149 70.6577 146.175C70.7458 146.2 70.8385 146.206 70.929 146.191C74.232 145.657 87.966 143.779 106.593 145.925C106.94 145.965 107.253 145.711 107.285 145.365C107.409 144.018 107.445 142.94 107.455 142.336C107.458 142.187 107.407 142.042 107.311 141.928C107.216 141.814 107.082 141.739 106.935 141.716Z" fill="#192064"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M97.1531 144.863L97.1561 139.761C97.1573 139.542 97.0736 139.332 96.9227 139.174C96.7718 139.016 96.5654 138.923 96.3471 138.914C93.6344 138.812 90.919 138.808 88.2061 138.9C87.9864 138.908 87.7783 139 87.6254 139.158C87.4725 139.316 87.3867 139.527 87.3861 139.747L87.3831 144.844C87.3831 145.32 87.7711 145.701 88.2471 145.689C90.7251 145.625 93.4131 145.622 96.2771 145.706C96.3903 145.71 96.5032 145.691 96.609 145.65C96.7148 145.609 96.8114 145.548 96.8931 145.469C96.9747 145.391 97.0398 145.297 97.0845 145.192C97.1291 145.088 97.1525 144.976 97.1531 144.863Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M95.994 143.895L95.996 140.7C95.9974 140.527 95.9311 140.359 95.811 140.234C95.6909 140.108 95.5266 140.035 95.353 140.028C93.453 139.967 91.412 139.955 89.259 140.018C89.0842 140.024 88.9183 140.097 88.7963 140.222C88.6743 140.348 88.6057 140.516 88.605 140.69L88.603 143.882C88.603 144.258 88.908 144.559 89.283 144.551C91.142 144.509 93.157 144.508 95.303 144.563C95.679 144.573 95.993 144.272 95.994 143.895Z" fill="#192064"/>
        <path d="M91.1951 170.003L92.1271 216.383C92.1271 216.383 92.8271 218.014 91.8941 219.179C90.9621 220.345 94.4581 219.879 92.8261 221.509C91.1961 223.142 93.7591 222.675 92.8261 225.006C92.2081 226.552 91.7951 246.927 91.6881 261.519M90.8571 273.121H103.676H90.8571ZM91.9711 269.36C91.9771 272.879 91.8991 274.91 91.9711 275.652V269.36ZM91.6781 263.073C91.6691 264.672 91.6621 265.631 91.6621 267.578L91.6781 263.073Z" stroke="#648BD8" strokeWidth="1.085" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M78.3529 89.6406C78.3529 89.6406 86.0439 95.7776 94.8999 92.3606M74.4909 98.2636L76.7049 102.576C76.7049 102.576 78.8029 103.392 78.5699 105.256L79.3859 107.47L74.4909 98.2636ZM65.0519 116.21C65.2849 115.278 67.2279 109.063 77.6369 105.722L65.0519 116.21Z" stroke="#E4EBF7" strokeWidth="1.085" strokeLinecap="round" strokeLinejoin="round"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M92.7289 86.5532C92.7289 86.5532 98.2049 85.7372 100.303 82.0082C101.6 81.6632 101.023 84.2202 99.9729 85.6792C99.2729 86.6502 98.9629 87.2332 98.9629 87.2332C98.9629 87.2332 99.1569 87.5432 99.1179 88.0492C99.0649 88.7462 98.9429 88.7022 98.8459 89.0972C98.7649 89.4322 98.9539 89.7542 98.8459 90.1462C98.7999 90.3162 98.6479 90.6462 98.4639 91.0242C98.3439 91.2732 98.3919 91.7112 98.2639 91.9722C98.0329 92.4412 96.7019 93.8422 95.6419 94.8272C91.8159 98.3812 90.6239 96.4712 89.6409 94.4192C88.7469 92.5542 88.9799 89.2922 88.7669 87.5442C88.4169 84.6302 86.1449 84.5142 86.8439 83.1152C87.1869 82.4302 89.7139 83.8052 90.1069 84.8632C90.8639 86.9032 93.0589 86.6702 92.7289 86.5532Z" fill="#FFC6A0"/>
        <path d="M100.555 82.0283C100.09 82.1053 100.205 82.3003 99.585 83.2713C98.963 84.2423 94.768 86.2033 93.195 86.4953C90.606 86.9753 90.917 84.9353 88.941 83.6403C87.251 82.5333 85.379 83.0023 87.543 85.0383C88.533 85.9703 88.475 86.1453 88.941 88.2433C89.276 89.7493 88.301 91.9133 89.641 93.8363" stroke="#DB836E" strokeWidth="0.774" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M80.298 108.272C78.198 111.198 76.032 114.447 74.741 117.034" stroke="#E59788" strokeWidth="0.774" strokeLinecap="round" strokeLinejoin="round"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M88.4751 124.367C88.4751 124.367 86.3771 122.425 83.3481 121.648C80.3181 120.871 79.7741 121.493 77.8321 121.726C75.8901 121.959 73.9471 120.794 74.1801 122.426C74.4131 124.056 79.2301 123.436 79.3861 124.523C79.5411 125.61 73.0161 127.319 71.0731 126.698C70.2961 127.475 71.5391 128.562 73.0931 128.873C73.3261 130.427 75.3461 130.427 75.3461 130.427C75.3461 130.427 76.0451 131.437 77.9871 131.515C80.4731 132.835 86.9211 130.815 88.9411 129.961C90.9611 129.106 88.4751 124.367 88.4751 124.367Z" fill="#FFC6A0"/>
        <path d="M79.619 107.703C79.619 107.703 71.229 110.461 66.451 119.823M74.1801 122.425C74.1801 122.425 74.8401 123.552 77.3471 123.843C79.6621 124.113 79.91 124.426 79.91 124.426C79.91 124.426 77.365 127.32 70.84 126.698L74.1801 122.425ZM73.1711 128.873C73.1711 128.873 76.997 128.97 78.104 128.155L73.1711 128.873ZM75.7351 130.349C75.7351 130.349 77.696 130.485 79.095 129.844L75.7351 130.349ZM77.9871 131.515C77.9871 131.515 79.7351 131.534 80.9011 131.01L77.9871 131.515ZM74.0831 121.92C74.0831 121.92 73.488 120.888 75.345 121.493C77.016 122.037 78.1781 121.548 80.4731 121.648C81.8621 121.709 83.54 121.351 84.455 121.798C86.061 122.582 88.0871 123.979 88.0871 123.979C88.0871 123.979 98.613 125.183 107.12 122.852L74.0831 121.92Z" stroke="#E59788" strokeWidth="0.774" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M110.033 112.132C110.033 112.132 113.413 108.519 117.608 107.47" stroke="#E4EBF7" strokeWidth="1.085" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M108.13 122.605C108.13 122.605 117.827 119.86 119.575 121.725" stroke="#E59788" strokeWidth="0.774" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M133.73 169.638L129.775 165.683M195.36 83.2551L199.331 79.3691L195.36 83.2551ZM187.921 90.5321L191.657 86.8771L187.921 90.5321ZM192.507 83.8061L188.045 79.2461L192.507 83.8061ZM199.208 90.6561L195.075 86.4311L199.208 90.6561ZM130.011 162.673L133.729 158.955L130.011 162.673ZM123.046 169.638L126.544 166.14L123.046 169.638ZM127.316 163.225L123.046 158.955L127.316 163.225Z" stroke="#BFCDDD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M190.911 211.378H189.307C188.244 211.374 187.226 210.951 186.474 210.199C185.723 209.448 185.299 208.429 185.296 207.367V175.279C185.299 174.216 185.723 173.198 186.474 172.447C187.226 171.696 188.244 171.272 189.306 171.269H190.911C191.974 171.272 192.992 171.695 193.743 172.446C194.495 173.198 194.919 174.216 194.922 175.279V207.367C194.919 208.429 194.495 209.447 193.744 210.198C192.992 210.95 191.974 211.373 190.912 211.377" fill="#A3B4C6"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M238.579 212.576C238.579 213.852 238.072 215.076 237.169 215.979C236.267 216.882 235.043 217.389 233.766 217.389H147.13C145.854 217.389 144.629 216.882 143.727 215.979C142.824 215.076 142.317 213.852 142.317 212.576C142.317 211.299 142.824 210.075 143.727 209.172C144.629 208.27 145.854 207.763 147.13 207.763H233.766C235.043 207.763 236.267 208.27 237.169 209.172C238.072 210.075 238.579 211.299 238.579 212.576Z" fill="#A3B4C6"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M154.853 189.695H225.366V105.078H154.853V189.695Z" fill="#A3B4C6"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M225.683 189.695H154.535C153.685 189.692 152.87 189.353 152.269 188.752C151.668 188.151 151.33 187.336 151.327 186.486V167.519C151.329 166.669 151.668 165.854 152.269 165.252C152.87 164.651 153.685 164.312 154.535 164.309H225.683C226.533 164.312 227.348 164.651 227.95 165.252C228.551 165.854 228.89 166.668 228.892 167.519V186.486C228.889 187.336 228.55 188.151 227.949 188.752C227.347 189.354 226.532 189.693 225.682 189.695H225.683ZM225.683 130.431H154.535C153.685 130.428 152.871 130.089 152.27 129.488C151.668 128.887 151.33 128.073 151.327 127.223V108.255C151.33 107.405 151.668 106.59 152.269 105.989C152.87 105.388 153.685 105.049 154.535 105.046H225.683C226.533 105.049 227.348 105.388 227.95 105.989C228.551 106.591 228.89 107.405 228.892 108.256V127.223C228.889 128.073 228.55 128.888 227.949 129.489C227.347 130.09 226.532 130.429 225.682 130.431" fill="#BFCDDD"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M160.318 120.145C159.998 120.151 159.68 120.094 159.382 119.976C159.084 119.858 158.813 119.681 158.584 119.457C158.356 119.233 158.174 118.966 158.05 118.67C157.926 118.375 157.862 118.058 157.862 117.738C157.862 117.418 157.926 117.101 158.05 116.806C158.174 116.51 158.356 116.243 158.584 116.019C158.813 115.795 159.084 115.618 159.382 115.5C159.68 115.382 159.998 115.325 160.318 115.332C160.948 115.344 161.547 115.604 161.988 116.053C162.429 116.503 162.676 117.108 162.676 117.738C162.676 118.368 162.429 118.973 161.988 119.423C161.547 119.873 160.948 120.132 160.318 120.145ZM167.735 120.145C167.415 120.151 167.097 120.094 166.799 119.976C166.501 119.858 166.23 119.681 166.001 119.457C165.773 119.233 165.591 118.966 165.467 118.67C165.343 118.375 165.279 118.058 165.279 117.738C165.279 117.418 165.343 117.101 165.467 116.806C165.591 116.51 165.773 116.243 166.001 116.019C166.23 115.795 166.501 115.618 166.799 115.5C167.097 115.382 167.415 115.325 167.735 115.332C168.365 115.344 168.964 115.604 169.405 116.053C169.846 116.503 170.093 117.108 170.093 117.738C170.093 118.368 169.846 118.973 169.405 119.423C168.964 119.873 168.365 120.132 167.735 120.145ZM175.152 120.145C174.832 120.151 174.514 120.094 174.216 119.976C173.918 119.858 173.647 119.681 173.418 119.457C173.19 119.233 173.008 118.966 172.884 118.67C172.76 118.375 172.696 118.058 172.696 117.738C172.696 117.418 172.76 117.101 172.884 116.806C173.008 116.51 173.19 116.243 173.418 116.019C173.647 115.795 173.918 115.618 174.216 115.5C174.514 115.382 174.832 115.325 175.152 115.332C175.782 115.344 176.381 115.604 176.822 116.053C177.263 116.503 177.51 117.108 177.51 117.738C177.51 118.368 177.263 118.973 176.822 119.423C176.381 119.873 175.782 120.132 175.152 120.145ZM223.294 120.145H200.833C200.62 120.145 200.416 120.06 200.266 119.91C200.115 119.759 200.031 119.555 200.031 119.343V116.135C200.031 115.692 200.39 115.332 200.833 115.332H223.293C223.737 115.332 224.096 115.692 224.096 116.135V119.343C224.096 119.786 223.736 120.145 223.294 120.145Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M225.683 160.063H154.535C153.685 160.06 152.87 159.721 152.269 159.12C151.668 158.519 151.329 157.704 151.327 156.854V137.887C151.33 137.037 151.668 136.222 152.269 135.621C152.87 135.02 153.685 134.681 154.535 134.678H225.683C226.533 134.68 227.348 135.019 227.949 135.621C228.55 136.222 228.889 137.036 228.892 137.887V156.854C228.89 157.704 228.551 158.519 227.949 159.121C227.348 159.722 226.533 160.061 225.682 160.063" fill="#BFCDDD"/>
        <path d="M156.325 160.212H163.076M174.21 130.431H223.511H174.21ZM165.739 130.431H171.828H165.739ZM156.707 130.431H163.457H156.707ZM174.592 160.212H223.892H174.592ZM166.12 160.212H172.209H166.12Z" stroke="#7C90A5" strokeWidth="1.124" strokeLinecap="round" strokeLinejoin="round"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M160.318 150.637C159.68 150.637 159.067 150.384 158.616 149.932C158.165 149.481 157.911 148.869 157.911 148.23C157.911 147.592 158.165 146.98 158.616 146.528C159.067 146.077 159.68 145.823 160.318 145.823C160.956 145.823 161.569 146.077 162.02 146.528C162.471 146.98 162.725 147.592 162.725 148.23C162.725 148.869 162.471 149.481 162.02 149.932C161.569 150.384 160.956 150.637 160.318 150.637ZM167.735 150.637C167.097 150.637 166.484 150.384 166.033 149.932C165.582 149.481 165.328 148.869 165.328 148.23C165.328 147.592 165.582 146.98 166.033 146.528C166.484 146.077 167.097 145.823 167.735 145.823C168.373 145.823 168.986 146.077 169.437 146.528C169.888 146.98 170.142 147.592 170.142 148.23C170.142 148.869 169.888 149.481 169.437 149.932C168.986 150.384 168.373 150.637 167.735 150.637ZM175.152 150.637C174.836 150.637 174.523 150.575 174.231 150.454C173.939 150.333 173.674 150.155 173.45 149.932C173.227 149.708 173.049 149.443 172.929 149.151C172.808 148.859 172.745 148.546 172.745 148.23C172.746 147.914 172.808 147.601 172.929 147.309C173.05 147.017 173.227 146.751 173.451 146.528C173.674 146.304 173.94 146.127 174.232 146.006C174.524 145.885 174.837 145.823 175.153 145.823C175.791 145.823 176.404 146.077 176.855 146.528C177.306 146.98 177.56 147.592 177.56 148.23C177.56 148.869 177.306 149.481 176.855 149.932C176.404 150.384 175.791 150.637 175.153 150.637H175.152ZM223.294 150.637H200.833C200.62 150.637 200.416 150.553 200.266 150.402C200.115 150.252 200.031 150.048 200.031 149.835V146.626C200.031 146.183 200.39 145.824 200.833 145.824H223.293C223.737 145.824 224.096 146.184 224.096 146.626V149.835C224.096 150.278 223.736 150.637 223.294 150.637ZM160.318 179.586C159.998 179.593 159.68 179.535 159.382 179.417C159.084 179.299 158.813 179.123 158.584 178.899C158.356 178.675 158.174 178.407 158.05 178.112C157.926 177.817 157.862 177.5 157.862 177.18C157.862 176.86 157.926 176.543 158.05 176.247C158.174 175.952 158.356 175.685 158.584 175.46C158.813 175.236 159.084 175.06 159.382 174.942C159.68 174.824 159.998 174.767 160.318 174.773C160.948 174.786 161.547 175.045 161.988 175.495C162.429 175.945 162.676 176.55 162.676 177.18C162.676 177.81 162.429 178.414 161.988 178.864C161.547 179.314 160.948 179.573 160.318 179.586ZM167.735 179.586C167.415 179.593 167.097 179.535 166.799 179.417C166.501 179.299 166.23 179.123 166.001 178.899C165.773 178.675 165.591 178.407 165.467 178.112C165.343 177.817 165.279 177.5 165.279 177.18C165.279 176.86 165.343 176.543 165.467 176.247C165.591 175.952 165.773 175.685 166.001 175.46C166.23 175.236 166.501 175.06 166.799 174.942C167.097 174.824 167.415 174.767 167.735 174.773C168.365 174.786 168.964 175.045 169.405 175.495C169.846 175.945 170.093 176.55 170.093 177.18C170.093 177.81 169.846 178.414 169.405 178.864C168.964 179.314 168.365 179.573 167.735 179.586ZM175.152 179.586C174.832 179.593 174.514 179.535 174.216 179.417C173.918 179.299 173.647 179.123 173.418 178.899C173.19 178.675 173.008 178.407 172.884 178.112C172.76 177.817 172.696 177.5 172.696 177.18C172.696 176.86 172.76 176.543 172.884 176.247C173.008 175.952 173.19 175.685 173.418 175.46C173.647 175.236 173.918 175.06 174.216 174.942C174.514 174.824 174.832 174.767 175.152 174.773C175.782 174.786 176.381 175.045 176.822 175.495C177.263 175.945 177.51 176.55 177.51 177.18C177.51 177.81 177.263 178.414 176.822 178.864C176.381 179.314 175.782 179.573 175.152 179.586ZM223.294 179.586H200.833C200.62 179.586 200.416 179.502 200.266 179.351C200.115 179.201 200.031 178.997 200.031 178.784V175.575C200.031 175.132 200.39 174.773 200.833 174.773H223.293C223.737 174.773 224.096 175.133 224.096 175.575V178.784C224.096 179.227 223.736 179.586 223.294 179.586Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M203.795 220.707H176.423C175.785 220.705 175.174 220.451 174.723 220C174.273 219.549 174.019 218.938 174.017 218.3V206.852C174.019 206.215 174.273 205.604 174.724 205.153C175.174 204.702 175.785 204.447 176.423 204.445H203.795C204.433 204.447 205.044 204.701 205.495 205.152C205.946 205.603 206.2 206.215 206.202 206.852V218.299C206.2 218.937 205.946 219.549 205.495 220C205.044 220.451 204.433 220.705 203.795 220.706" fill="#BFCDDD"/>
        <path d="M201.805 206.816V218.336M178.014 206.816V218.336V206.816Z" stroke="#A3B4C6" strokeWidth="1.124" strokeLinecap="round" strokeLinejoin="round"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M163.628 267.493C161.129 267.493 158.733 266.5 156.966 264.733C155.199 262.966 154.206 260.57 154.206 258.071V243.251C154.232 240.769 155.236 238.397 157 236.651C158.764 234.904 161.146 233.925 163.629 233.925C166.111 233.925 168.493 234.904 170.257 236.651C172.021 238.397 173.025 240.769 173.051 243.251V258.071C173.051 260.57 172.058 262.966 170.291 264.733C168.524 266.5 166.127 267.493 163.628 267.493Z" fill="#5BA02E"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M171.975 267.429C170.738 267.429 169.512 267.185 168.369 266.712C167.226 266.238 166.187 265.544 165.312 264.669C164.437 263.794 163.743 262.755 163.27 261.612C162.797 260.469 162.553 259.244 162.553 258.006V254.568C162.579 252.086 163.583 249.714 165.347 247.968C167.111 246.222 169.493 245.242 171.976 245.242C174.458 245.242 176.84 246.222 178.604 247.968C180.369 249.714 181.373 252.086 181.398 254.568V258.006C181.398 260.505 180.405 262.902 178.639 264.669C176.872 266.436 174.475 267.429 171.976 267.429" fill="#92C110"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M182.065 293.265H154.353C153.932 293.265 153.514 293.182 153.125 293.02C152.735 292.859 152.382 292.623 152.084 292.324C151.786 292.026 151.549 291.673 151.388 291.283C151.227 290.894 151.144 290.476 151.144 290.055V269.389C151.144 268.967 151.227 268.55 151.388 268.16C151.549 267.771 151.786 267.417 152.084 267.119C152.382 266.821 152.735 266.584 153.125 266.423C153.514 266.262 153.932 266.179 154.353 266.179H182.064C182.486 266.179 182.903 266.262 183.292 266.423C183.682 266.584 184.035 266.821 184.333 267.119C184.631 267.417 184.868 267.771 185.029 268.16C185.19 268.55 185.273 268.967 185.273 269.389V290.057C185.273 290.908 184.935 291.724 184.333 292.326C183.731 292.928 182.915 293.266 182.064 293.266" fill="#F2D7AD"/>
    </svg>

)
const ForwardRef = forwardRef(SvgComponent)
export const ErrorCheckEmailIcon = memo(ForwardRef)
