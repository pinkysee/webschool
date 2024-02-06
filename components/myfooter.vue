<template>
    <footer>
        <div class="footerp"><p><span>Шк</span>ола 102</p></div>
        <div class="phone">
            <div class="phonesvg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_55_24)">
                        <path
                            d="M23.892 19.1292L23.7726 18.7692C23.4896 17.9283 22.5623 17.0513 21.7104 16.8202L18.5573 15.9588C17.7022 15.7262 16.4825 16.039 15.8569 16.6646L14.7157 17.8057C10.5685 16.6851 7.31642 13.4329 6.19729 9.28651L7.3385 8.1453C7.9641 7.51969 8.27686 6.30157 8.04423 5.44651L7.18444 2.29187C6.95181 1.43836 6.07315 0.511016 5.23383 0.231208L4.8739 0.110191C4.03296 -0.169617 2.83366 0.11336 2.2081 0.738916L0.501087 2.44749C0.19613 2.75084 0.00122486 3.61848 0.00122486 3.62165C-0.0584789 9.04126 2.06661 14.2628 5.90023 18.0965C9.72443 21.9207 14.9264 24.0426 20.3303 23.9971C20.3585 23.9971 21.2513 23.8053 21.5563 23.5019L23.2633 21.7949C23.8889 21.1694 24.1718 19.9701 23.892 19.1292Z"
                            fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_55_24">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div class="aobert"><a href="tel: +7 (8442) 53-94-19">8 (8442) 53-94-19</a></div>
        </div>
    </footer>
</template>
<script>
export default {

}
</script>

<style scoped>
footer p {

    font-size: 36px;
}
footer p span {
    color: aqua;
}
footer{
    position: relative;
    width: 100%;
    height: 176px;
    background-color: #F3F5FD;
}
.phone {
    display: flex;
    position: absolute;
    right: 30px;
    top: 30%;
}
.phonesvg {
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: #735FF1;
}
.phonesvg svg {
    position: absolute;
    top:12px;
    left: 12px;
}
.aobert {
    position: relative;
    height: 100%;
    width:200px;
}
.phone a {
    color: black;
    position: absolute;
    top: 5px;
}
</style>