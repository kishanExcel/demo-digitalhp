const Chat = () => {
  return (
    <div className="w-full lg:h-screen h-full overflow-y-auto flex flex-col justify-between pl-[15px] pr-[60px] md:pr-[10px] pb-[20px]">
      <div className="bg-cultured lg:bg-white h-[55px] mt-[26px] 2xl:mt-[51px] px-[17px] rounded-3xl flex items-center text-darkSilverColor ">
        <span className="text-[19px] 2xl:text-[24px] font-bold  ">To:</span>
        <input
          className="flex-1 bg-cultured outline-none h-full text-[24px] mx-2"
          type="text"
        />
        <span>
          <svg
            width="8"
            height="19"
            viewBox="0 0 8 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.71896 6.96131C5.76011 6.96131 7.41498 5.40253 7.41498 3.47968C7.41498 1.55683 5.76011 -0.00195312 3.71896 -0.00195312C1.67782 -0.00195312 0.0234375 1.55683 0.0234375 3.47968C0.0234375 5.40253 1.67782 6.96131 3.71896 6.96131Z"
              fill="#6D6D6D"
            />
            <path
              d="M3.71896 17.5057C5.76011 17.5057 7.41498 15.947 7.41498 14.0241C7.41498 12.1013 5.76011 10.5425 3.71896 10.5425C1.67782 10.5425 0.0234375 12.1013 0.0234375 14.0241C0.0234375 15.947 1.67782 17.5057 3.71896 17.5057Z"
              fill="#6D6D6D"
            />
            <path
              d="M3.71896 28.0502C5.76011 28.0502 7.41498 26.4914 7.41498 24.5685C7.41498 22.6457 5.76011 21.0869 3.71896 21.0869C1.67782 21.0869 0.0234375 22.6457 0.0234375 24.5685C0.0234375 26.4914 1.67782 28.0502 3.71896 28.0502Z"
              fill="#6D6D6D"
            />
          </svg>
        </span>
      </div>

      <div className="w-full ">
        <div className="text-[18px] 2xl:text-[26px] font-bold text-darkSilverColor flex">
          <h5>SMS</h5>
          <h5 className="ml-[27px]">Email</h5>
          <h5 className="ml-[27px]">Webchat</h5>
          <h5 className="ml-[27px]">Call</h5>
          <h5 className="ml-[27px] ">Internal Note</h5>
        </div>

        <div className="flex rounded-3xl border border-grayX11 h-[48px] 2xl:h-[78px]  items-center p-2 ">
          <input
            className="flex-1 text-[18px] 2xl:text-[24px] text-darkSilverColor outline-none  ml-[40px]"
            type="text"
            placeholder="Type a message"
          />
          <span>
            <svg
              width="38"
              height="30"
              viewBox="0 0 38 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M26.3697 20.9413C23.9724 24.9203 19.6775 27.8051 14.6832 27.8051C7.29153 27.8051 1.3981 21.6377 1.59788 14.575C1.59788 7.51222 7.49131 1.84209 14.6832 1.84209C17.2802 1.84209 19.8772 2.53845 22.0747 3.93111C22.2745 4.13006 22.7741 3.93109 22.7741 3.73214C22.9739 3.53319 22.7739 3.0358 22.5742 3.0358C20.1769 1.34473 17.58 0.648438 14.7832 0.648438C6.69231 0.648438 0.499023 7.01485 0.499023 15.0723C0.499023 22.8314 6.89208 28.9989 14.7832 28.9989C20.2769 28.9989 24.7718 25.9151 27.1691 21.6377C27.3688 21.4387 27.1689 20.9413 26.9691 20.9413C26.8692 20.444 26.5694 20.444 26.3697 20.9413Z"
                fill="#6D6D6D"
                stroke="#6D6D6D"
                stroke-width="0.4642"
                stroke-miterlimit="9.284"
              />
              <path
                d="M20.6759 15.271C19.2775 15.271 17.7793 14.0773 17.7793 12.3863C17.7793 10.6952 18.9778 9.50146 20.6759 9.50146C22.0743 9.50146 23.5725 10.6952 23.5725 12.3863C23.2729 14.0773 22.0743 15.271 20.6759 15.271ZM20.6759 10.7946C19.6771 10.7946 18.9776 11.491 18.9776 12.4857C18.9776 13.4805 19.6771 14.1768 20.6759 14.1768C21.6748 14.1768 22.3737 13.4805 22.3737 12.4857C22.2738 11.6899 21.5749 10.7946 20.6759 10.7946Z"
                fill="#6D6D6D"
                stroke="#6D6D6D"
                stroke-width="0.4642"
                stroke-miterlimit="9.284"
              />
              <path
                d="M8.9894 15.271C7.59098 15.271 6.09277 14.0773 6.09277 12.3863C6.09277 10.6952 7.29132 9.50146 8.9894 9.50146C10.3878 9.50146 11.886 10.6952 11.886 12.3863C11.886 14.0773 10.6875 15.271 8.9894 15.271ZM8.9894 10.7946C7.99053 10.7946 7.29161 11.491 7.29161 12.4857C7.29161 13.4805 7.99053 14.1768 8.9894 14.1768C9.98827 14.1768 10.6877 13.4805 10.6877 12.4857C10.6877 11.6899 10.188 10.7946 8.9894 10.7946Z"
                fill="#6D6D6D"
                stroke="#6D6D6D"
                stroke-width="0.4642"
                stroke-miterlimit="9.284"
              />
              <path
                d="M14.9821 24.2241C11.8856 24.2241 9.28848 22.8315 7.39062 20.4441C7.39062 20.2451 7.39062 19.9467 7.39062 19.7477C7.39062 19.5488 7.5904 19.5488 7.89006 19.5488H22.1742C22.374 19.5488 22.6736 19.5488 22.6736 19.7477C22.6736 19.9467 22.6736 20.2451 22.6736 20.4441C20.6759 22.8315 17.779 24.2241 14.9821 24.2241ZM8.98891 20.9414C10.687 22.6325 12.7845 23.3289 14.8822 23.3289C17.2794 23.3289 19.1777 22.3341 20.7759 20.9414H8.98891Z"
                fill="#6D6D6D"
                stroke="#6D6D6D"
                stroke-width="0.4642"
                stroke-miterlimit="9.284"
              />
              <path
                d="M37.0572 7.71115C37.0572 7.9101 37.057 8.20854 36.8572 8.40749C36.6575 8.60644 36.3581 8.60645 36.1583 8.60645H30.964V13.7791C30.964 14.2765 30.4646 14.7739 29.9651 14.7739C29.7653 14.7739 29.466 14.7739 29.2662 14.575C29.0664 14.376 29.0662 14.0776 29.0662 13.8786V8.7059H23.8719C23.3725 8.7059 22.873 8.20852 22.873 7.71115C22.873 7.5122 22.8732 7.21376 23.073 7.01481C23.2728 6.81586 23.5726 6.81585 23.7724 6.81585H28.9663V1.64319C28.9663 1.14581 29.4657 0.648438 29.9651 0.648438C30.1649 0.648438 30.4648 0.648389 30.6645 0.847339C30.8643 1.04629 30.864 1.34473 30.864 1.54368V6.7164H36.0583C36.5578 7.01482 37.0572 7.21377 37.0572 7.71115Z"
                fill="#6D6D6D"
                stroke="#6D6D6D"
                stroke-width="0.4642"
                stroke-miterlimit="9.284"
              />
            </svg>
          </span>
          <span className="ml-[10px]">
            <svg
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.33767 28.7001C6.94038 28.7001 4.54319 27.7054 2.945 26.1138C-0.650936 22.5327 -0.650936 16.6637 2.945 13.381L14.1325 2.23977C16.5298 -0.147632 20.825 -0.147632 23.1224 2.23977C25.4198 4.62717 25.5197 8.90461 23.1224 11.1925L11.9348 22.3338C10.5364 23.7264 8.13941 23.7264 6.741 22.3338C5.34258 20.9411 5.34258 18.5537 6.741 17.161L15.0314 8.90462C15.5309 8.40724 16.0305 8.40724 16.2303 8.90462C16.7297 9.40199 16.7297 9.89938 16.2303 10.0983L7.93935 18.3548C7.24014 19.0511 7.24014 20.2448 7.93935 20.9411C8.63856 21.6374 9.8373 21.6374 10.5365 20.9411L21.724 9.79986C23.6219 7.90983 23.6219 5.02509 21.724 3.43349C19.8262 1.84188 16.9291 1.54346 15.3309 3.43349L4.14384 14.5747C1.24711 17.4595 1.24711 21.9359 4.14384 25.0196C7.04056 27.9044 11.5355 27.9044 14.632 25.0196L25.819 13.8784C26.3185 13.381 26.8181 13.381 27.0179 13.8784C27.5173 14.3758 27.5173 14.8731 27.0179 15.0721L15.8303 26.2133C13.9325 27.8049 11.5352 28.7001 9.33767 28.7001Z"
                fill="#6D6D6D"
              />
            </svg>
          </span>
          <span className="ml-[10px]">
            <svg
              width="34"
              height="28"
              viewBox="0 0 34 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M33.2702 1.03977C33.2702 0.840821 33.2702 0.840821 33.2702 0.542395V0.343433C33.2702 0.343433 33.2705 0.343482 33.0707 0.144531H32.8708H32.6713H32.4713H32.2713L1.60633 17.4532C0.907119 17.9505 0.607458 18.6469 1.10689 19.3432C1.30667 19.8406 1.80581 20.0396 2.30525 20.0396L12.4939 19.5422L12.6939 26.4059C12.6939 26.6049 12.6939 26.6049 12.6939 26.9033C12.6939 26.9033 12.8934 27.1023 12.8934 27.4007C12.8934 27.4007 13.0931 27.5996 13.3928 27.5996C13.5926 27.5996 13.5926 27.5996 13.8922 27.5996H14.0922H14.2917L14.4917 27.4007L19.9854 21.5317L28.2759 23.9191C28.2759 23.9191 28.4756 23.9191 28.7753 23.9191C29.4745 23.9191 29.9743 23.4217 30.1741 22.7253L33.9696 1.63666V1.23873C33.4702 1.23873 33.2702 1.23872 33.2702 1.03977ZM21.3838 8.79882L12.3939 16.8563L6.90015 17.0553L21.3838 8.79882ZM29.9741 4.81981L27.0775 20.6364L15.3905 17.5527L29.9741 4.81981Z"
                fill="#40F440"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chat;
