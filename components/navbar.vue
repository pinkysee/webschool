<template lang="">
            <!-- <nav class="navbar"> -->
            <!-- <h1 class="navbarlogo"><span>Шк</span>ола 102</h1>
            <div class="navbarlist">
                <ul class="navbarul">
                    <li>
                        <span class="navbarinfo">Сведения об организации</span>
                        <div class="sveddrop">
                            <a :href="`${basePath}/info-about-school/aboutschool`" class="dropa" exact>Основные
                                сведения<span></span></a>
                            <a :href="`${basePath}/info-about-school/managment`" class="dropa" exact>Структура
                                и органы
                                управления
                                образовательной организацией<span></span></a>
                            <a :href="`${basePath}/info-about-school/documents`" class="dropa">Документы<span></span></a>
                            <a :href="`${basePath}${basePath}/info-about-school/education`"
                                class="dropa">Образование<span></span></a>
                            <a :href="`${basePath}/info-about-school/stuff-list`" class="dropa">Руководство.
                                Педагогический
                                состав<span></span></a>
                            <a :href="`${basePath}/info-about-school/equipment`" class="dropa">Материально-техническое
                                обеспечение
                                и оснащенность образовательного процесса<span></span></a>
                            <a :href="`${basePath}/info-about-school/paid-services`" class="dropa">Платные
                                образовательные
                                услуги<span></span></a>
                            <a :href="`${basePath}/info-about-school/economic-activites`"
                                class="dropa">Финансово-хозяйственная
                                деятельность<span></span></a>
                            <a :href="`${basePath}/info-about-school/transfer`" class="dropa">Вакантные места
                                для приема
                                (перевода)
                                обучающихся<span></span></a>
                            <a :href="`${basePath}/info-about-school/enviroment`" class="dropa">Доступная
                                среда<span></span></a>
                            <a :href="`${basePath}/info-about-school/international`" class="dropa">Международное
                                сотрудничество<span></span></a>
                        </div>
                    </li>
                    <li><a>Мы во вконтакте</a></li>
                    <li><a>Фото</a></li>
                    <li><a>Другое</a></li>
                    <li><a>Войти</a></li>
                </ul>
            </div>
        </nav> -->
        <div class="navbar">
            <a class="home" :href="`/${basePath}`"><span>Шк</span>ола 102</a>
            <nav class="nav">
                <ul id="glul" class="glul glulhidden">
                    <li><a @click="sved()" class="sveda">Сведения об организации <svg id="svgarr" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M31.6803 8.59293L30.0772 6.98994C29.8636 6.77588 29.6175 6.66919 29.3393 6.66919C29.0618 6.66919 28.8158 6.77588 28.6022 6.98994L16.0002 19.5913L3.39869 6.99028C3.18496 6.77622 2.93901 6.66953 2.66115 6.66953C2.38319 6.66953 2.13723 6.77622 1.92362 6.99028L0.320754 8.59337C0.106693 8.80699 0 9.05294 0 9.33091C0 9.60864 0.10703 9.8546 0.320754 10.0682L15.2626 25.0104C15.4762 25.2242 15.7223 25.331 16.0002 25.331C16.278 25.331 16.5236 25.2242 16.7371 25.0104L31.6803 10.0682C31.8939 9.85449 32 9.60853 32 9.33091C32 9.05294 31.8939 8.80699 31.6803 8.59293Z" fill="white"></path>
</svg>
</a>
                        <ul id="sved" class="sved">
                            <li><a :href="`${basePath}/info-about-school/aboutschool`" class="dropa" exact>Основные
                                сведения<span></span></a></li>
                            <li>
                                <a :href="`${basePath}/info-about-school/managment`" class="dropa" exact>Структура
                                и органы
                                управления
                                образовательной организацией<span></span></a>
                            </li>
                            <li><a :href="`${basePath}/info-about-school/documents`" class="dropa">Документы<span></span></a></li>
                            <li> <a :href="`${basePath}${basePath}/info-about-school/education`"
                                class="dropa">Образование<span></span></a></li>
                            <li><a :href="`${basePath}/info-about-school/stuff-list`" class="dropa">Руководство.
                                Педагогический
                                состав<span></span></a></li>
                            <li><a :href="`${basePath}/info-about-school/equipment`" class="dropa">Материально-техническое
                                обеспечение
                                и оснащенность образовательного процесса<span></span></a></li>
                            <li><a :href="`${basePath}/info-about-school/paid-services`" class="dropa">Платные
                                образовательные
                                услуги<span></span></a></li>
                            <li><a :href="`${basePath}/info-about-school/economic-activites`"
                                class="dropa">Финансово-хозяйственная
                                деятельность<span></span></a></li>
                            <li><a :href="`${basePath}/info-about-school/transfer`" class="dropa">Вакантные места
                                для приема
                                (перевода)
                                обучающихся<span></span></a></li>
                            <li><a :href="`${basePath}/info-about-school/enviroment`" class="dropa">Доступная
                                среда<span></span></a></li>
                            <li><a :href="`${basePath}/info-about-school/international`" class="dropa">Международное
                                сотрудничество<span></span></a></li>
                        </ul>
                    </li>
                    <li><a class="osna">Мы во Вконтакте</a></li>
                    <li><a class="sveda" @click="svedot()">Другое <svg id="svgarrot" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M31.6803 8.59293L30.0772 6.98994C29.8636 6.77588 29.6175 6.66919 29.3393 6.66919C29.0618 6.66919 28.8158 6.77588 28.6022 6.98994L16.0002 19.5913L3.39869 6.99028C3.18496 6.77622 2.93901 6.66953 2.66115 6.66953C2.38319 6.66953 2.13723 6.77622 1.92362 6.99028L0.320754 8.59337C0.106693 8.80699 0 9.05294 0 9.33091C0 9.60864 0.10703 9.8546 0.320754 10.0682L15.2626 25.0104C15.4762 25.2242 15.7223 25.331 16.0002 25.331C16.278 25.331 16.5236 25.2242 16.7371 25.0104L31.6803 10.0682C31.8939 9.85449 32 9.60853 32 9.33091C32 9.05294 31.8939 8.80699 31.6803 8.59293Z" fill="white"></path>
</svg> </a>
                    <ul id="svedoth"  class="sved">
                        <li v-for="item in Other"><a :href="`/other/` + item.Path">{{item.Text}}</a></li>
                    </ul>
                    </li>
                    <li v-if="OkCheck == false"><a class="osna" :href="`${basePath}/login`">Войти</a></li>
                    <li @click="svedprof()" class="profile" v-else><a class="sveda">{{ User.Name}}</a>
                        <ul id="svedprof" class="sved">
                            <li><a :href="`${basePath}/profile`">Профиль</a></li>
                            <li><a :href="`${basePath}/`" @click="UnAuth()">Выйти</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div id="menuicon" @click="changeicon()" class="menuicon"><span></span></div>
        </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            Other: [],
            User: [],
            OkCheck: false,
        }
    },
    methods: {
        async UnAuth() {
            localStorage.removeItem('Bearer')
        },
        async GetOther() {
            const a = await axios.get(this.$config.public.API_URL + "/getother").then(function (response) {
                return response.data
            })
            this.Other = a
        },
        changeicon() {
            document.getElementById("menuicon").classList.toggle('mactive')
            document.getElementById("glul").classList.toggle('glulhidden')
            document.body.classList.toggle('close')
        },
        sved() {
            document.getElementById("sved").classList.toggle('svedactive')
            document.getElementById("svgarr").classList.toggle('svgarr')
            document.body.classList.toggle('nofullclose')
        },
        svedot() {
            document.getElementById("svedoth").classList.toggle('svedactive')
            document.getElementById("svgarrot").classList.toggle('svgarr')
        },
        svedprof() {
            document.getElementById("svedprof").classList.toggle('svedactive')
        },
        async checkuser() {
            if (!localStorage.getItem("Bearer")) { return false }
            let a = await axios.get(this.$config.public.API_URL + "/checkuser", {
                headers: {
                    'Authorization': `${localStorage.getItem("Bearer")}`
                }
            })
                .then(response => {
                    if (response.status != 202) { return false }
                    this.User = response.data
                    this.User.Name = response.data.Name.split(" ")[0] + " " + response.data.Name.split(" ")[1]
                    return true
                })
                .catch(error => {
                    localStorage.removeItem("Bearer");
                });
            return a
        },
    },
    computed: {
        basePath() {
            // Получите базовый путь из конфигурации Nuxt.js
            return this.$config.basePath || '';
        }
    },
    async mounted() {
        this.OkCheck = await this.checkuser()
        await this.GetOther()
    }
}
</script>
<style scoped>

#svgarrot {
    display: none;
}

.menuicon {
    position: absolute;
    width: 25px;
    right: 10px;
    top: 15px;
    visibility: hidden;
    height: 25px;

}

.home {
    font-size: 30px;
    margin: 0;
}

.home span {
    color: aqua;
}

.menuicon::after {
    bottom: 0;
}

.menuicon::before {
    top: 0;
}

.menuicon::after,
.menuicon::before {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: white;
    position: absolute;
    transition: all 0.3s ease;
}

.menuicon span {
    top: 10.5px;
    display: block;
    width: 100%;
    height: 2px;
    background-color: white;
    position: absolute;
    transition: all 0.3s ease;
}

.mactive span {
    visibility: hidden;
}

.mactive::after {
    transform: rotate(-45deg);
    bottom: 10px
}

.mactive::before {
    transform: rotate(45deg);
    top: 13px;
}

.sved {
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 12px;
    margin: 0 0 0 0;
    position: absolute;
    padding: 10px;
    transform: translateY(10%);
    z-index: 10;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    visibility: hidden;
}



.glul {
    position: absolute;
    right: 30px;
    top: 10px;
    display: flex;
}

.sved a {
    width: 100%;
    display: inline-block;
    position: relative;
}

.sved li {
    margin: 0px 0px 0px 0px;
    height: 30px;
}

#svgarr {
    display: none;
}

a {
    padding: 10px;
    text-decoration: none;
    color: gray;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    border-radius: 12px;
}

.navbar .osna:hover {
    background-color: aliceblue;
}

ul {
    list-style-type: none;
}

.dropa span {
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0px;
    left: -100%;
    background-color: gray;
    transition: all 0.5s ease;
    border-radius: 12px;
}

.dropa:hover span {
    left: 0%;
}

.sved li {
    position: relative;
    height: auto;
}
@media (min-width: 761px) {
    .glul li:nth-child(1):hover .sved {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
}

.glul li:nth-child(3):hover .sved {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
}

.glul li:nth-child(5):hover .sved {

}
}
.profile:hover .sved {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
}
@media (max-width: 761px) {
    #svgarr {
        display: block;
    }

    #svgarrot {
        display: block;
    }

    .navbar {
        flex-direction: column;
    }

    .menuicon {
        visibility: visible;
        z-index: 12;
    }

    .glulhidden {
        display: none;
    }
    .glul {
        position: relative;
        flex-direction: column;
        gap: 30px;
        font-size: 20px;
        width: 100%;
        right: 0;
        top: 0px;
        z-index: 11;
        color: white;
        background-color: #735FF1;
        height: 100vh;
        padding: 0;
    }

    a {
        color: white;
        font-weight: 600;
    }

    .svgarr {
        transition: all 0.3s ease;
        transform: rotate(180deg);
    }
    .sved {

    }
    .svedactive {
        position: relative;
        visibility: visible;
        transform: translateY(0);
        opacity: 1;
        gap: 20px;
        border-radius: 0;
        background-color: #735FF1;
    }

    .glul li {
        position: relative;
        width: 100%;
    }

    .sveda svg {
        position: absolute;
        right: 5px;
        top: 3px;
    }

    .sveda {
        display: block;
    }

    .svedactive li {
        position: relative;
        height: auto;
        margin-left: 5px;
    }

}</style>