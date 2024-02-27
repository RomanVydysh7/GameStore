import search from "../resources/svg/Search.svg"
import arrow from "../resources/svg/arrow.svg"
import arrowDropLng from "../resources/svg/arrowDropLng.svg"
import menu from "../resources/svg/menu.svg"
import logoSvg from "../resources/svg/Logo.svg"
import LogoMobileSvg from "../resources/svg/LogoMobile.svg"
import arrowUpLng from "../resources/svg/arrowUpLng.svg"

const giveSvg = (name) => {
    switch(name){
        case "arrow":
            return <img src={arrow} alt={name} className={name} />
        case "logoSvg":
            return <img src={logoSvg} alt={name} className="logo" />
        case "LogoMobileSvg":
            return <img src={LogoMobileSvg} alt={name} className="logo_mobile" />
        case "search":
            return <img src={search} alt={name} className={name} />
        case "arrowDropLng":
            return <img src={arrowDropLng} alt={name} className={name} />
        case "arrowUpLng":
            return <img src={arrowUpLng} alt={name} className={name} />
        case "profile":
            return <svg className={name} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#F2F4F7">
                        <path d="M4 22C4 19.8783 4.84285 17.8434 6.34315 16.3431C7.84344 14.8429 9.87827 14 12 14C14.1217 14 16.1566 14.8429 17.6569 16.3431C19.1571 17.8434 20 19.8783 20 22H18C18 20.4087 17.3679 18.8826 16.2426 17.7574C15.1174 16.6321 13.5913 16 12 16C10.4087 16 8.88258 16.6321 7.75736 17.7574C6.63214 18.8826 6 20.4087 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"/>
                    </svg>
        case "heart":
            return <svg className={name} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#F2F4F7">
                        <path d="M12.001 4.52898C14.35 2.41998 17.98 2.48998 20.243 4.75698C22.505 7.02498 22.583 10.637 20.479 12.993L11.999 21.485L3.52101 12.993C1.41701 10.637 1.49601 7.01898 3.75701 4.75698C6.02201 2.49298 9.64501 2.41698 12.001 4.52898ZM18.827 6.16998C17.327 4.66798 14.907 4.60698 13.337 6.01698L12.002 7.21498L10.666 6.01798C9.09101 4.60598 6.67601 4.66798 5.17201 6.17198C3.68201 7.66198 3.60701 10.047 4.98001 11.623L12 18.654L19.02 11.624C20.394 10.047 20.319 7.66498 18.827 6.16998Z" />
                    </svg>
        case "balance":
            return <svg className={name} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#F2F4F7">
                        <path d="M13 7.83C13.85 7.53 14.53 6.85 14.83 6H18L15 13C15 14.66 16.57 16 18.5 16C20.43 16 22 14.66 22 13L19 6H21V4H14.83C14.42 2.83 13.31 2 12 2C10.69 2 9.58 2.83 9.17 4H3V6H5L2 13C2 14.66 3.57 16 5.5 16C7.43 16 9 14.66 9 13L6 6H9.17C9.47 6.85 10.15 7.53 11 7.83V19H2V21H22V19H13V7.83ZM20.37 13H16.63L18.5 8.64L20.37 13ZM7.37 13H3.63L5.5 8.64L7.37 13ZM12 6C11.45 6 11 5.55 11 5C11 4.45 11.45 4 12 4C12.55 4 13 4.45 13 5C13 5.55 12.55 6 12 6Z" />
                    </svg>
        case "shoppingCart":
            return <svg className={name} xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="#F2F4F7" className={name}>
                        <path d="M2 14V2H0V0H3C3.26522 0 3.51957 0.105357 3.70711 0.292893C3.89464 0.48043 4 0.734784 4 1V13H16.438L18.438 5H6V3H19.72C19.872 3 20.022 3.03466 20.1586 3.10134C20.2952 3.16801 20.4148 3.26495 20.5083 3.38479C20.6019 3.50462 20.6668 3.6442 20.6983 3.79291C20.7298 3.94162 20.7269 4.09555 20.69 4.243L18.19 14.243C18.1358 14.4592 18.011 14.6512 17.8352 14.7883C17.6595 14.9255 17.4429 15 17.22 15H3C2.73478 15 2.48043 14.8946 2.29289 14.7071C2.10536 14.5196 2 14.2652 2 14ZM4 21C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19C2 18.4696 2.21071 17.9609 2.58579 17.5858C2.96086 17.2107 3.46957 17 4 17C4.53043 17 5.03914 17.2107 5.41421 17.5858C5.78929 17.9609 6 18.4696 6 19C6 19.5304 5.78929 20.0391 5.41421 20.4142C5.03914 20.7893 4.53043 21 4 21ZM16 21C15.4696 21 14.9609 20.7893 14.5858 20.4142C14.2107 20.0391 14 19.5304 14 19C14 18.4696 14.2107 17.9609 14.5858 17.5858C14.9609 17.2107 15.4696 17 16 17C16.5304 17 17.0391 17.2107 17.4142 17.5858C17.7893 17.9609 18 18.4696 18 19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21Z"/>
                    </svg>
        case "menu":
            return <img src={menu} alt={name} className={name} />
        case "phone":
            return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#F2F4F7" className={name}>
                    <path d="M20.8472 14.8557L16.4306 12.8766L16.4184 12.871C16.1892 12.7729 15.939 12.7336 15.6907 12.7565C15.4424 12.7794 15.2037 12.8639 14.9963 13.0022C14.9718 13.0184 14.9484 13.0359 14.9259 13.0547L12.6441 15.0001C11.1984 14.2979 9.70595 12.8166 9.00376 11.3897L10.9519 9.07318C10.9706 9.04974 10.9884 9.0263 11.0053 9.00099C11.1407 8.79409 11.2229 8.55692 11.2445 8.31059C11.2661 8.06427 11.2264 7.81642 11.1291 7.58912V7.57787L9.14438 3.1538C9.0157 2.85687 8.79444 2.60951 8.51362 2.44865C8.2328 2.2878 7.9075 2.22208 7.58626 2.2613C6.31592 2.42847 5.14986 3.05234 4.30588 4.01639C3.4619 4.98045 2.99771 6.21876 3.00001 7.50005C3.00001 14.9438 9.05626 21.0001 16.5 21.0001C17.7813 21.0023 19.0196 20.5382 19.9837 19.6942C20.9477 18.8502 21.5716 17.6841 21.7388 16.4138C21.7781 16.0927 21.7125 15.7674 21.5518 15.4866C21.3911 15.2058 21.144 14.9845 20.8472 14.8557ZM16.5 19.5001C13.3185 19.4966 10.2682 18.2312 8.01856 15.9815C5.76888 13.7318 4.50348 10.6816 4.50001 7.50005C4.49648 6.58458 4.82631 5.69911 5.42789 5.00903C6.02947 4.31895 6.86167 3.87143 7.76907 3.75005C7.7687 3.7538 7.7687 3.75756 7.76907 3.7613L9.73782 8.16755L7.80001 10.4869C7.78034 10.5096 7.76247 10.5337 7.74657 10.5591C7.60549 10.7756 7.52273 11.0249 7.5063 11.2827C7.48988 11.5406 7.54035 11.7984 7.65282 12.031C8.5022 13.7682 10.2525 15.5054 12.0084 16.3538C12.2428 16.4652 12.502 16.5139 12.7608 16.4952C13.0196 16.4765 13.2692 16.3909 13.485 16.2469C13.5091 16.2307 13.5322 16.2132 13.5544 16.1944L15.8334 14.2501L20.2397 16.2235H20.25C20.1301 17.1322 19.6833 17.9661 18.9931 18.5691C18.3028 19.1722 17.4166 19.5031 16.5 19.5001Z" />
                    </svg>
        case "viber":
            return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="#F2F4F7">
                        <path d="M5.71485 4.35166C5.529 4.32461 5.33948 4.36202 5.17785 4.45766H5.16385C4.78885 4.67766 4.45085 4.95466 4.16285 5.28066C3.92285 5.55766 3.79285 5.83766 3.75885 6.10766C3.73885 6.26766 3.75285 6.42966 3.79985 6.58266L3.81785 6.59266C4.08785 7.38566 4.43985 8.14866 4.86985 8.86666C5.4243 9.87515 6.1066 10.8079 6.89985 11.6417L6.92385 11.6757L6.96185 11.7037L6.98485 11.7307L7.01285 11.7547C7.84958 12.5503 8.78447 13.2358 9.79485 13.7947C10.9498 14.4237 11.6508 14.7207 12.0718 14.8447V14.8507C12.1948 14.8887 12.3068 14.9057 12.4198 14.9057C12.7784 14.8792 13.1178 14.7334 13.3838 14.4917C13.7088 14.2037 13.9838 13.8647 14.1978 13.4877V13.4807C14.3988 13.1007 14.3308 12.7427 14.0408 12.4997C13.4583 11.9907 12.8285 11.5386 12.1598 11.1497C11.7118 10.9067 11.2568 11.0537 11.0728 11.2997L10.6798 11.7957C10.4778 12.0417 10.1118 12.0077 10.1118 12.0077L10.1018 12.0137C7.37085 11.3167 6.64185 8.55166 6.64185 8.55166C6.64185 8.55166 6.60785 8.17566 6.86085 7.98366L7.35285 7.58766C7.58885 7.39566 7.75285 6.94166 7.49985 6.49366C7.11345 5.82442 6.66229 5.19473 6.15285 4.61366C6.04174 4.4769 5.88591 4.38376 5.71285 4.35066L5.71485 4.35166ZM10.3298 3.14966C10.1972 3.14966 10.0701 3.20234 9.9763 3.2961C9.88253 3.38987 9.82985 3.51705 9.82985 3.64966C9.82985 3.78227 9.88253 3.90944 9.9763 4.00321C10.0701 4.09698 10.1972 4.14966 10.3298 4.14966C11.5938 4.14966 12.6438 4.56266 13.4748 5.35466C13.9018 5.78766 14.2348 6.30066 14.4528 6.86266C14.6718 7.42566 14.7718 8.02666 14.7458 8.62866C14.7403 8.76127 14.7876 8.89066 14.8774 8.98836C14.9673 9.08607 15.0922 9.14409 15.2248 9.14966C15.3575 9.15523 15.4868 9.10789 15.5846 9.01806C15.6823 8.92823 15.7403 8.80327 15.7458 8.67066C15.7769 7.93014 15.6539 7.19125 15.3848 6.50066C15.1146 5.80679 14.7048 5.17578 14.1808 4.64666L14.1708 4.63666C13.1398 3.65166 11.8358 3.14966 10.3298 3.14966Z" />
                        <path d="M10.2949 4.79348C10.1623 4.79348 10.0351 4.84616 9.94137 4.93993C9.8476 5.0337 9.79492 5.16087 9.79492 5.29348C9.79492 5.42609 9.8476 5.55327 9.94137 5.64703C10.0351 5.7408 10.1623 5.79348 10.2949 5.79348H10.3119C11.2239 5.85848 11.8879 6.16248 12.3529 6.66148C12.8299 7.17548 13.0769 7.81448 13.0579 8.60448C13.0549 8.73709 13.1046 8.86548 13.1962 8.9614C13.2878 9.05733 13.4138 9.11293 13.5464 9.11598C13.679 9.11903 13.8074 9.06928 13.9033 8.97767C13.9993 8.88605 14.0549 8.76009 14.0579 8.62748C14.0819 7.59048 13.7479 6.69548 13.0859 5.98148V5.97948C12.4089 5.25348 11.4799 4.86948 10.3619 4.79448L10.3449 4.79248L10.2949 4.79348Z" />
                        <path d="M10.2754 6.46849C10.2085 6.46258 10.1411 6.47022 10.0772 6.49095C10.0133 6.51168 9.95421 6.54507 9.9035 6.58913C9.85279 6.63318 9.81148 6.68701 9.78204 6.74739C9.75259 6.80776 9.73562 6.87345 9.73212 6.94054C9.72863 7.00762 9.73868 7.07472 9.7617 7.13783C9.78471 7.20094 9.8202 7.25876 9.86605 7.30785C9.9119 7.35694 9.96718 7.39629 10.0286 7.42355C10.09 7.4508 10.1562 7.46541 10.2234 7.46649C10.6414 7.48849 10.9084 7.61449 11.0764 7.78349C11.2454 7.95349 11.3714 8.22649 11.3944 8.65349C11.3956 8.72059 11.4104 8.78675 11.4377 8.84803C11.4651 8.90931 11.5045 8.96446 11.5536 9.01018C11.6028 9.05591 11.6606 9.09127 11.7237 9.11417C11.7868 9.13708 11.8538 9.14705 11.9208 9.14349C11.9878 9.13993 12.0535 9.12291 12.1138 9.09346C12.1741 9.064 12.2278 9.02271 12.2718 8.97204C12.3158 8.92137 12.3492 8.86236 12.3699 8.79853C12.3906 8.73469 12.3983 8.66734 12.3924 8.60049C12.3604 8.00049 12.1724 7.47049 11.7874 7.08049C11.4004 6.69049 10.8734 6.50049 10.2754 6.46849Z" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.81681 0.533472C7.99888 -0.177824 11.2987 -0.177824 14.4808 0.533472L14.8198 0.608472C15.75 0.816423 16.6043 1.2782 17.2879 1.94249C17.9714 2.60679 18.4574 3.44759 18.6918 4.37147C19.4995 7.55436 19.4995 10.8886 18.6918 14.0715C18.4574 14.9954 17.9714 15.8362 17.2879 16.5004C16.6043 17.1647 15.75 17.6265 14.8198 17.8345L14.4798 17.9095C12.4868 18.3552 10.4418 18.5231 8.40281 18.4085L5.74981 20.7825C5.64979 20.872 5.52757 20.9331 5.3959 20.9593C5.26423 20.9855 5.12794 20.9759 5.00126 20.9314C4.87457 20.887 4.76214 20.8094 4.6757 20.7066C4.58925 20.6039 4.53196 20.4799 4.50981 20.3475L4.07081 17.7255C3.22899 17.4635 2.46842 16.9901 1.86178 16.3504C1.25514 15.7106 0.822707 14.926 0.60581 14.0715C-0.201937 10.8886 -0.201937 7.55436 0.60581 4.37147C0.84023 3.44759 1.32621 2.60679 2.00974 1.94249C2.69328 1.2782 3.54761 0.816423 4.47781 0.608472L4.81681 0.533472ZM14.1538 1.99647C11.1871 1.33328 8.11053 1.33328 5.14381 1.99647L4.80381 2.07247C4.14453 2.22013 3.53908 2.54763 3.05468 3.0186C2.57029 3.48958 2.22592 4.0856 2.05981 4.74047C1.31352 7.6812 1.31352 10.7617 2.05981 13.7025C2.226 14.3575 2.57052 14.9536 3.0551 15.4246C3.53968 15.8956 4.14535 16.223 4.80481 16.3705L4.89481 16.3905C5.0404 16.423 5.17298 16.4983 5.27558 16.6066C5.37819 16.7149 5.44616 16.8513 5.47081 16.9985L5.76481 18.7565L7.63681 17.0815C7.71157 17.0144 7.79904 16.963 7.89403 16.9304C7.98903 16.8977 8.08961 16.8845 8.18981 16.8915C10.1889 17.0333 12.1979 16.8834 14.1538 16.4465L14.4928 16.3705C15.1523 16.223 15.7579 15.8956 16.2425 15.4246C16.7271 14.9536 17.0716 14.3575 17.2378 13.7025C17.9838 10.7625 17.9838 7.68147 17.2378 4.74047C17.0716 4.08547 16.7271 3.48936 16.2425 3.01838C15.7579 2.54739 15.1523 2.21996 14.4928 2.07247L14.1538 1.99647Z" />
                    </svg>
        case "telegram":
            return <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" stroke="#F2F4F7" fill="none">
                    <path d="M22 2L3 12L10 13.3333M22 2L19.5 22L10 13.3333M22 2L10 13.3333M10 13.3333V20.6667L13.249 16.2973" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
        default:
            return null
    }

}


export default giveSvg