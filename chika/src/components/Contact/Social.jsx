import React, { Component } from "react";
import "./Contact.css";


class Social extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="social-container">
          <div className="contactTitle">
          <h2 className="cont">Contact Us</h2>
          <div className="cont-line"></div>
          </div>
          <section className="social">
            <h4 className="heading-location">Contact</h4>
            <p className="info-location">info@chikalicious.com</p>
            <p className="info-location">Phone 212.995.9511</p>
            <div className="social-icons">
              <a
                className="social-li"
                href="https://www.facebook.com/DessertClubChikalicious/"
                target="_blank"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="22" height="22" rx="11" fill="#F3C26C" />
                  <path
                    d="M11.7348 18.3326V11.6424H13.9805L14.3167 9.03517H11.7348V7.3705C11.7348 6.61565 11.9445 6.10118 13.027 6.10118L14.4077 6.10054V3.76864C14.1688 3.73698 13.3493 3.66602 12.3959 3.66602C10.4053 3.66602 9.04245 4.88101 9.04245 7.11242V9.03524H6.79102V11.6425H9.04238V18.3327L11.7348 18.3326Z"
                    fill="white"
                  />
                </svg>
              </a>

              <a
                className="social-li"
                href="https://www.youtube.com/watch?v=IbqskAKFgzw"
                target="_blank"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="32" height="32" rx="16" fill="white" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.5675 16.1139C24.3615 15.3485 23.758 14.745 22.9926 14.5389C21.5943 14.1562 16.001 14.1562 16.001 14.1562C16.001 14.1562 10.4077 14.1562 9.00934 14.5242C8.25866 14.7303 7.64046 15.3485 7.43439 16.1139C7.06641 17.5122 7.06641 20.4119 7.06641 20.4119C7.06641 20.4119 7.06641 23.3263 7.43439 24.7099C7.64046 25.4753 8.24394 26.0788 9.00934 26.2849C10.4224 26.6676 16.001 26.6676 16.001 26.6676C16.001 26.6676 21.5943 26.6676 22.9926 26.2996C23.758 26.0935 24.3615 25.49 24.5675 24.7246C24.9355 23.3263 24.9355 20.4266 24.9355 20.4266C24.9355 20.4266 24.9502 17.5122 24.5675 16.1139ZM20.9184 21.8282V22.0882C20.9184 22.4158 20.9281 22.6662 20.9473 22.83C20.9666 22.9938 21.0051 23.119 21.0726 23.1864C21.1304 23.2635 21.2267 23.302 21.3616 23.302C21.535 23.302 21.6506 23.2346 21.718 23.0997C21.7854 22.9649 21.8143 22.7433 21.8239 22.4254L22.8162 22.4832C22.8258 22.5314 22.8258 22.5892 22.8258 22.6662C22.8258 23.1383 22.7006 23.4947 22.4405 23.7259C22.1804 23.9571 21.8143 24.0727 21.3423 24.0727C20.7739 24.0727 20.379 23.8897 20.1478 23.5332C19.9166 23.1768 19.801 22.6277 19.801 21.8763V20.9804C19.801 20.2098 19.9166 19.651 20.1574 19.2946C20.3982 18.9382 20.8028 18.7648 21.3712 18.7648C21.7662 18.7648 22.0744 18.8419 22.2863 18.9864C22.4983 19.1309 22.6428 19.362 22.7295 19.6607C22.8162 19.9689 22.8547 20.3928 22.8547 20.9323V21.8089H20.9184V21.8282ZM21.0629 19.6703C21.0051 19.7474 20.9666 19.863 20.9473 20.0267C20.9281 20.1905 20.9184 20.441 20.9184 20.7781V21.1442H21.7662V20.7781C21.7662 20.4506 21.7565 20.2001 21.7373 20.0267C21.718 19.8533 21.6698 19.7377 21.612 19.6703C21.5542 19.6029 21.4579 19.5643 21.3423 19.5643C21.2074 19.5547 21.1207 19.5932 21.0629 19.6703ZM15.3507 24.0148V18.8803H14.1947V22.9551C14.1562 23.0514 14.0888 23.1285 13.9924 23.1863C13.8961 23.2537 13.7998 23.2826 13.7035 23.2826C13.5879 23.2826 13.5012 23.2345 13.453 23.1381C13.4048 23.0418 13.3759 22.878 13.3759 22.6468V18.8803H12.2199V22.7143C12.2199 23.1959 12.297 23.5427 12.4608 23.7643C12.6245 23.9859 12.875 24.1015 13.2122 24.1015C13.7035 24.1015 14.0791 23.8606 14.32 23.3886H14.3489L14.4452 24.0148H15.3507ZM12.5667 17.9167H11.4203V24.0049H10.2932V17.9167H9.14689V16.9822H12.5667V17.9167ZM18.8381 18.9957C18.9922 19.1402 19.1078 19.3714 19.1752 19.6989C19.2427 20.0168 19.2716 20.4696 19.2812 21.0572V21.8664C19.2812 22.6274 19.1849 23.1958 19.0018 23.5522C18.8188 23.9087 18.5394 24.0917 18.1445 24.0917C17.9229 24.0917 17.7302 24.0339 17.5472 23.9376C17.3642 23.8316 17.2293 23.6967 17.1426 23.5233H17.1137L16.9981 24.005H16.0444V16.7223H17.1619V19.4292H17.1715C17.2678 19.2365 17.4123 19.0728 17.5954 18.9572C17.7784 18.832 17.9807 18.7742 18.1926 18.7742C18.4624 18.7742 18.6839 18.8512 18.8381 18.9957ZM18.0674 22.666C18.0963 22.454 18.1156 22.165 18.1156 21.7893H18.1252V21.115C18.1252 20.7201 18.1156 20.4118 18.0867 20.1902C18.0578 19.9783 18.0192 19.8242 17.9518 19.7278C17.894 19.6411 17.7977 19.593 17.6821 19.593C17.5761 19.593 17.4701 19.6411 17.3738 19.7278C17.2775 19.8242 17.21 19.9398 17.1715 20.0746V22.9839C17.2197 23.0706 17.2871 23.138 17.3642 23.1862C17.4412 23.2343 17.5279 23.2536 17.6243 23.2536C17.7399 23.2536 17.8362 23.2054 17.9133 23.1187C17.9807 23.032 18.0385 22.8779 18.0674 22.666Z"
                    fill="#F3C26C"
                  />
                  <path
                    d="M14.919 12.2115C14.6878 12.0573 14.524 11.8165 14.4277 11.4793C14.3314 11.1518 14.2832 10.7087 14.2832 10.1692V9.42747C14.2832 8.87838 14.341 8.43525 14.447 8.09809C14.5626 7.76092 14.736 7.52009 14.9672 7.36596C15.208 7.21183 15.5163 7.13477 15.9016 7.13477C16.2773 7.13477 16.5855 7.21183 16.8167 7.36596C17.0479 7.52009 17.2117 7.77056 17.3177 8.09809C17.4236 8.42562 17.4814 8.86874 17.4814 9.42747V10.1692C17.4814 10.7183 17.4333 11.1518 17.3273 11.489C17.2213 11.8165 17.0576 12.067 16.8264 12.2211C16.5952 12.3752 16.2773 12.4523 15.8823 12.4523C15.4777 12.4427 15.1502 12.3656 14.919 12.2115ZM16.2195 11.4023C16.2869 11.2385 16.3158 10.9591 16.3158 10.5835V8.98434C16.3158 8.61828 16.2869 8.34855 16.2195 8.17515C16.152 8.00175 16.0461 7.92469 15.8823 7.92469C15.7282 7.92469 15.6126 8.01139 15.5548 8.17515C15.4874 8.34855 15.4585 8.61828 15.4585 8.98434V10.5835C15.4585 10.9591 15.4874 11.2385 15.5548 11.4023C15.6126 11.566 15.7282 11.6527 15.8919 11.6527C16.0461 11.6527 16.152 11.5757 16.2195 11.4023Z"
                    fill="#F3C26C"
                  />
                  <path
                    d="M12.105 10.0832L10.7949 5.33398H11.9413L12.4037 7.48219C12.5193 8.01202 12.606 8.46478 12.6638 8.84047H12.6927C12.7312 8.57074 12.8179 8.12762 12.9528 7.49182L13.4344 5.33398H14.5808L13.2514 10.0832V12.3566H12.1147V10.0832H12.105Z"
                    fill="#F3C26C"
                  />
                  <path
                    d="M21.2089 7.23242V12.3669H20.3034L20.2071 11.7408H20.1782C19.9373 12.2128 19.5616 12.4536 19.0703 12.4536C18.7332 12.4536 18.4827 12.338 18.319 12.1165C18.1552 11.8949 18.0781 11.5481 18.0781 11.0664V7.23242H19.2341V10.999C19.2341 11.2302 19.263 11.394 19.3112 11.4903C19.3593 11.5866 19.446 11.6348 19.5616 11.6348C19.658 11.6348 19.7543 11.6059 19.8506 11.5385C19.947 11.4807 20.0144 11.4036 20.0529 11.3073V7.23242H21.2089Z"
                    fill="#F3C26C"
                  />
                </svg>
              </a>

              <a
                className="social-li"
                href="https://www.instagram.com/chikaliciousdessertbarnyc/"
                target="_blank"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="32" height="32" rx="16" fill="white" />
                  <path
                    d="M12.6672 16C12.6672 14.1591 14.1591 12.6664 16 12.6664C17.8409 12.6664 19.3336 14.1591 19.3336 16C19.3336 17.8409 17.8409 19.3336 16 19.3336C14.1591 19.3336 12.6672 17.8409 12.6672 16ZM10.8651 16C10.8651 18.836 13.164 21.1349 16 21.1349C18.836 21.1349 21.1349 18.836 21.1349 16C21.1349 13.164 18.836 10.8651 16 10.8651C13.164 10.8651 10.8651 13.164 10.8651 16ZM20.1382 10.6615C20.1381 10.8989 20.2084 11.1309 20.3401 11.3283C20.4719 11.5257 20.6593 11.6796 20.8785 11.7705C21.0977 11.8614 21.339 11.8852 21.5718 11.839C21.8046 11.7928 22.0185 11.6786 22.1863 11.5109C22.3542 11.3431 22.4686 11.1293 22.515 10.8966C22.5614 10.6638 22.5377 10.4225 22.447 10.2032C22.3563 9.98392 22.2025 9.79644 22.0052 9.6645C21.808 9.53257 21.576 9.4621 21.3386 9.462H21.3382C21.02 9.46215 20.715 9.58856 20.49 9.81347C20.265 10.0384 20.1384 10.3434 20.1382 10.6615ZM11.96 24.1398C10.985 24.0954 10.4551 23.933 10.103 23.7958C9.63608 23.614 9.30296 23.3975 8.95272 23.0478C8.60248 22.698 8.38568 22.3652 8.20472 21.8983C8.06744 21.5463 7.90504 21.0162 7.86072 20.0413C7.81224 18.9872 7.80256 18.6706 7.80256 16.0001C7.80256 13.3296 7.81304 13.0138 7.86072 11.9589C7.90512 10.9839 8.06872 10.4549 8.20472 10.1018C8.38648 9.63496 8.60296 9.30184 8.95272 8.9516C9.30248 8.60136 9.63528 8.38456 10.103 8.2036C10.455 8.06632 10.985 7.90392 11.96 7.8596C13.0141 7.81112 13.3307 7.80144 16 7.80144C18.6693 7.80144 18.9862 7.81192 20.0412 7.8596C21.0162 7.904 21.5452 8.0676 21.8982 8.2036C22.3651 8.38456 22.6982 8.60184 23.0485 8.9516C23.3987 9.30136 23.6147 9.63496 23.7965 10.1018C23.9338 10.4538 24.0962 10.9839 24.1405 11.9589C24.189 13.0138 24.1986 13.3296 24.1986 16.0001C24.1986 18.6706 24.189 18.9863 24.1405 20.0413C24.0961 21.0162 23.9329 21.5462 23.7965 21.8983C23.6147 22.3652 23.3982 22.6983 23.0485 23.0478C22.6987 23.3972 22.3651 23.614 21.8982 23.7958C21.5462 23.933 21.0162 24.0954 20.0412 24.1398C18.9871 24.1882 18.6705 24.1979 16 24.1979C13.3295 24.1979 13.0138 24.1882 11.96 24.1398ZM11.8772 6.06056C10.8126 6.10904 10.0852 6.27784 9.44992 6.52504C8.792 6.78032 8.23504 7.1228 7.67848 7.67848C7.12192 8.23416 6.78032 8.792 6.52504 9.44992C6.27784 10.0856 6.10904 10.8126 6.06056 11.8772C6.01128 12.9434 6 13.2843 6 16C6 18.7157 6.01128 19.0566 6.06056 20.1228C6.10904 21.1874 6.27784 21.9144 6.52504 22.5501C6.78032 23.2076 7.122 23.7661 7.67848 24.3215C8.23496 24.877 8.792 25.219 9.44992 25.475C10.0864 25.7222 10.8126 25.891 11.8772 25.9394C12.944 25.9879 13.2843 26 16 26C18.7157 26 19.0566 25.9887 20.1228 25.9394C21.1874 25.891 21.9144 25.7222 22.5501 25.475C23.2076 25.219 23.765 24.8772 24.3215 24.3215C24.8781 23.7658 25.219 23.2076 25.475 22.5501C25.7222 21.9144 25.8918 21.1874 25.9394 20.1228C25.9879 19.0558 25.9992 18.7157 25.9992 16C25.9992 13.2843 25.9879 12.9434 25.9394 11.8772C25.891 10.8126 25.7222 10.0852 25.475 9.44992C25.219 8.7924 24.8772 8.23504 24.3215 7.67848C23.7658 7.12192 23.2076 6.78032 22.5509 6.52504C21.9144 6.27784 21.1874 6.10824 20.1236 6.06056C19.0574 6.01208 18.7165 6 16.0008 6C13.2851 6 12.944 6.01128 11.8772 6.06056Z"
                    fill="#F3C26C"
                  />
                </svg>
              </a>
            </div>
          </section>
          <section className="reservation">
            <h4 className="heading-location">Reservations</h4>
            <p className="info-location">cdbreservations@gmail.com</p>
            <p className="info-location">Thursday - Sunday</p>
            <p className="info-location">3 PM, 5PM, 7PM</p>
            <p className="info-location">First come, first serve</p>
            <p className="info-location">thereafter until 10:45 PM.</p>
          </section>
        </div>
      </>
    );
  }
}

export default Social;
